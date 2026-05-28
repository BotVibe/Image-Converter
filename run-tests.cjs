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
    }
    appendChild(child) {
        if (typeof child === 'string') {
            this.innerHTML += child
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        }
    }
    addEventListener() {}
    classList = {
        add: () => {},
        remove: () => {},
        contains: () => false
    };
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
        return new MockElement(tag);
    },
    createTextNode: (text) => {
        return text;
    },
    querySelectorAll: () => [],
    addEventListener: () => {}
};

const mockNavigator = {
    language: 'en-US'
};

const mockWindow = {
    removeResult: null
};

// Inject mocks into the scope
const runner = async (document, navigator, window) => {
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
            this._buffer = parts[0];
            this.size = parts[0] ? parts[0].byteLength : 0;
            this.type = options ? options.type : '';
        }
    }
    class FileReader {
        readAsArrayBuffer(blob) {
            setTimeout(() => {
                this.onload({ target: { result: blob._buffer } });
            }, 0);
        }
        readAsText(blob) {
            setTimeout(() => {
                // very simple mock for text since we just test PDF/TXT/SVG
                this.onload({ target: { result: new TextDecoder().decode(blob._buffer) } });
            }, 0);
        }
    }

    ${utilsJsContent}

    ${appJsContent}

    ${testJsContent}
};

runner(mockDocument, mockNavigator, mockWindow).catch(e => {
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
