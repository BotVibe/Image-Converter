const fs = require('fs');
const path = require('path');
const subprocess = require('child_process');

const appJsPath = path.join(__dirname, 'app.js');
const testJsPath = path.join(__dirname, 'tests', 'calculateDimensions.test.js');

let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Strip imports and exports to allow running in pure Node without dependencies
appJsContent = appJsContent.replace(/^import .*$/gm, '// $&');
appJsContent = appJsContent.replace(/^export .*$/gm, '// $&');

const testJsContent = fs.readFileSync(testJsPath, 'utf8');

const runnerTemplate = `
class MockElement {
    constructor(id) {
        this.id = id;
        this.value = "";
        this.checked = false;
        this.innerHTML = "";
    }
    appendChild() {}
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
const runner = (document, navigator, window) => {
    ${appJsContent}

    ${testJsContent}
};

try {
    runner(mockDocument, mockNavigator, mockWindow);
} catch (e) {
    console.error("Test failed:");
    console.error(e.stack || e.message);
    process.exit(1);
}
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
