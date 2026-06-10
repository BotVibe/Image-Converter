const fs = require('fs');
const path = require('path');
const subprocess = require('child_process');

const appJsPath = path.join(__dirname, 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Strip imports and exports
appJsContent = appJsContent.replace(/^import .*$/gm, '// $&');
appJsContent = appJsContent.replace(/^export .*$/gm, '// $&');

const runnerTemplate = `
class MockElement {
    constructor(id) {
        this.id = id;
        this.value = "";
        this.checked = false;
        this.innerHTML = "";
        this.style = {};
        this.classList = {
            add: () => {},
            remove: () => {},
            contains: () => false
        };
    }
    appendChild(child) {}
    addEventListener() {}
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
        if (tag === 'canvas') {
            el.getContext = () => ({
                drawImage: () => {},
                getImageData: () => ({ data: new Uint8Array(4) }),
                putImageData: () => {},
                fillStyle: '',
                fillRect: () => {}
            });
            el.toBlob = (cb) => cb(new Blob([new Uint8Array(10)], { type: 'image/jpeg' }));
            el.toDataURL = () => 'data:image/png;base64,';
        }
        return el;
    },
    createTextNode: (text) => text,
    querySelectorAll: () => [],
    addEventListener: () => {}
};

const mockNavigator = { language: 'en-US' };
const mockWindow = {
    removeResult: null,
    createImageBitmap: async (blob) => ({ width: 100, height: 100, close: () => {} }),
    URL: {
        createObjectURL: () => 'blob:mock',
        revokeObjectURL: () => {}
    }
};

const runner = async (document, navigator, window, URL) => {
    class File {
        constructor(parts, name, options) {
            this.name = name;
            this.type = options ? options.type : '';
            this.size = parts[0] ? parts[0].byteLength : 0;
            this._buffer = parts[0];
        }
        slice(start, end) {
            return new Blob([this._buffer.slice(start, end)]);
        }
    }
    class Blob {
        constructor(parts, options) {
            this._buffer = parts[0];
            this.size = parts[0] ? parts[0].byteLength : 0;
            this.type = options ? options.type : '';
        }
    }
    const createImageBitmap = window.createImageBitmap;

    ${appJsContent}

    // Benchmark setup
    const itemCount = 20000;

    // Setup initial state
    console.time("process " + itemCount + " elements");
    const start = performance.now();

    for (let i = 0; i < itemCount; i++) {
        const id = 'test_' + i;
        const newName = 'test_' + i + '.jpg';
        const blob = new Blob([new Uint8Array(10)], { type: 'image/jpeg' });

        // Simulating the O(1) operations we care about
        convertedFiles.delete(id);
        convertedFiles.set(id, { id: id, name: newName, blob: blob });
    }

    const end = performance.now();
    console.timeEnd("process " + itemCount + " elements");
    console.log("Time taken:", end - start, "ms");
};

runner(mockDocument, mockNavigator, mockWindow, mockWindow.URL).catch(e => {
    console.error("Test failed:", e);
});
`;

fs.writeFileSync('temp_perf_runner2.js', runnerTemplate);
subprocess.spawnSync('node', ['temp_perf_runner2.js'], { stdio: 'inherit' });
fs.unlinkSync('temp_perf_runner2.js');
