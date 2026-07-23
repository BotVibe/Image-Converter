const fs = require('fs');
const path = require('path');
const subprocess = require('child_process');

const appJsPath = path.join(__dirname, 'app.js');
const testsDir = path.join(__dirname, 'tests');

let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Strip imports and exports to allow running in pure Node without dependencies
appJsContent = appJsContent.replace(/^import .*$/gm, '// $&');
appJsContent = appJsContent.replace(/^export .*$/gm, '// $&');

const utilsJsPath = path.join(testsDir, 'utils.js');
let utilsJsContent = '';
if (fs.existsSync(utilsJsPath)) {
    utilsJsContent = fs.readFileSync(utilsJsPath, 'utf8') + '\n';
}

const testFiles = fs.readdirSync(testsDir).filter(f => f.endsWith('.test.js'));
let testJsContent = '';
for (const file of testFiles) {
    testJsContent += fs.readFileSync(path.join(testsDir, file), 'utf8') + '\n';
}

const runnerTemplate = `
class MockElement {
    constructor(id) {
        this.id = id;
        this.value = "";
        this.checked = false;
        this.innerHTML = "";
        this.style = {};
        this._children = [];
        this.parentElement = null;
        this.className = '';
        this._attrs = {};
    }
    appendChild(child) {
        if (child && typeof child === 'object') {
            child.parentElement = this;
            this._children.push(child);
            if (child.id) {
                elements[child.id] = child;
            }
        }
        if (typeof child === 'string') {
            this.innerHTML += child
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        }
    }
    addEventListener() {}
    setAttribute(name, value) { this._attrs[name] = value; }
    getAttribute(name) { return this._attrs[name]; }
    hasAttribute(name) { return Object.prototype.hasOwnProperty.call(this._attrs, name); }
    removeAttribute(name) { delete this._attrs[name]; }
    querySelector(selector) {
        if (!selector) return null;
        if (selector.startsWith('.')) {
            const cls = selector.slice(1);
            return this._children.find(c => (c.className || '').split(/\\s+/).includes(cls)) || null;
        }
        if (selector.startsWith('#')) {
            const id = selector.slice(1);
            return this._children.find(c => c.id === id) || null;
        }
        if (selector.includes('[')) {
            // Only match explicit tag+attribute pairs like a[download]
            const tagMatch = selector.match(/^([a-zA-Z0-9]+)?\\[/);
            const tag = tagMatch && tagMatch[1] ? tagMatch[1].toUpperCase() : null;
            return this._children.find(c => {
                if (tag && c.tagName !== tag) return false;
                if (selector.includes('[download]')) {
                    return !!c.download || (c.getAttribute && c.getAttribute('download') != null);
                }
                return false;
            }) || null;
        }
        return this._children.find(c => c.tagName === (selector || '').toUpperCase()) || null;
    }
    querySelectorAll(selector) {
        const one = this.querySelector(selector);
        return one ? [one] : [];
    }
    classList = {
        add: () => {},
        remove: () => {},
        contains: () => false
    };
    get children() { return this._children; }
    remove() {
        if (this.parentElement && this.parentElement._children) {
            const idx = this.parentElement._children.indexOf(this);
            if (idx >= 0) this.parentElement._children.splice(idx, 1);
        }
        if (this.id && elements[this.id] === this) {
            delete elements[this.id];
        }
    }
    removeChild(child) {
        if (!child) return child;
        const idx = this._children.indexOf(child);
        if (idx >= 0) this._children.splice(idx, 1);
        child.parentElement = null;
        return child;
    }
    click() {}
    insertAdjacentHTML() {}
    get textContent() { return this._textContent; }
    set textContent(v) { this._textContent = v; }
}

const elements = {};

const mockDocument = {
    getElementById: (id) => {
        if (!elements[id]) {
            elements[id] = new MockElement(id);
        }
        return elements[id];
    },
    createElement: (tag) => {
        const el = new MockElement(tag);
        el.tagName = (tag || '').toUpperCase();
        if (el.tagName === 'CANVAS') {
            el.width = 0;
            el.height = 0;
            el._drawCalls = [];
            el.getContext = () => ({
                drawImage(...args) { el._drawCalls.push(args); },
                fillRect() {},
                clearRect() {},
                putImageData() {},
                getImageData(x, y, w, h) {
                    const width = w || el.width || 1;
                    const height = h || el.height || 1;
                    // Semi-opaque mid-gray so safari silhouette tests have pixels to decide on
                    const data = new Uint8ClampedArray(width * height * 4);
                    for (let i = 0; i < data.length; i += 4) {
                        data[i] = 40;
                        data[i + 1] = 40;
                        data[i + 2] = 40;
                        data[i + 3] = 255;
                    }
                    return { data, width, height };
                }
            });
            el.toBlob = (cb, type) => {
                const size = Math.max(1, (el.width || 1) * (el.height || 1));
                cb(new Blob([new ArrayBuffer(size)], { type: type || 'image/png' }));
            };
            el.toDataURL = () => 'data:image/png;base64,AA==';
        }
        return el;
    },
    createTextNode: (text) => {
        return text;
    },
    querySelectorAll: (selector) => {
        if (selector === '[data-i18n]') return [];
        if (selector === '[data-i18n-placeholder]') return [];
        return [];
    },
    querySelector: () => null,
    addEventListener: () => {},
    documentElement: { lang: 'en', setAttribute() {}, getAttribute() { return null; }, removeAttribute() {} },
    body: new MockElement('body'),
    title: ''
};

const mockNavigator = {
    language: 'en-US'
};

const mockWindow = {
    removeResult: null
};

const mockURL = {
    revokeObjectURL: () => {},
    createObjectURL: () => 'blob:mock'
};

// Inject mocks into the scope
const runner = async (document, navigator, window, URL) => {
    class File {
        constructor(parts, name, options) {
            this.name = name;
            this.type = options ? options.type : '';
            this.size = parts[0] ? parts[0].byteLength : 0;
            this._buffer = parts[0];
        }
        slice(start, end) {
            // slice the array buffer
            return new Blob([this._buffer.slice(start, end)]);
        }
    }
    class Blob {
        constructor(parts, options) {
            const part = parts && parts.length ? parts[0] : null;
            if (typeof part === 'string') {
                const text = parts.join('');
                this._text = text;
                this._buffer = typeof TextEncoder !== 'undefined'
                    ? new TextEncoder().encode(text).buffer
                    : Buffer.from(text).buffer;
                this.size = this._buffer.byteLength;
            } else if (part && part.byteLength != null) {
                this._buffer = part;
                this.size = part.byteLength;
            } else {
                this._buffer = new ArrayBuffer(0);
                this.size = 0;
            }
            this.type = options ? options.type : '';
        }
    }
    class FileReader {
        readAsDataURL(blob) {
            setTimeout(() => {
                this.result = 'data:' + (blob.type || 'application/octet-stream') + ';base64,AAAA';
                if (this.onload) {
                    this.onload({ target: this });
                }
            }, 0);
        }
        readAsArrayBuffer(blob) {
            setTimeout(() => {
                this.result = blob._buffer;
                if (this.onload) this.onload({ target: this });
            }, 0);
        }
        readAsText(blob) {
            setTimeout(() => {
                // very simple mock for text since we just test PDF/TXT/SVG
                this.result = new TextDecoder().decode(blob._buffer);
                if (this.onload) this.onload({ target: this });
            }, 0);
        }
    }
    class JSZip {
        constructor() {
            this.files = {};
            JSZip.instances.push(this);
            JSZip.last = this;
        }
        file(name, data) {
            this.files[name] = data;
            return this;
        }
        async generateAsync() {
            return new Blob([new ArrayBuffer(8)], { type: 'application/zip' });
        }
    }
    JSZip.instances = [];
    JSZip.last = null;
    const matchMedia = () => ({ matches: false });
    window.matchMedia = matchMedia;
    const alert = () => {};

    ${utilsJsContent}

    ${appJsContent}

    ${testJsContent}
};

runner(mockDocument, mockNavigator, mockWindow, mockURL).catch(e => {
    console.error("Test failed:");
    console.error(e.stack || e.message);
    process.exit(1);
});
`;

const tempFile = 'temp_runner.js';
fs.writeFileSync(tempFile, runnerTemplate);

try {
    const result = subprocess.spawnSync('node', [tempFile], { stdio: 'inherit' });
    if (result.status !== 0) {
        process.exit(1);
    }
} finally {
    if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
    }
}
