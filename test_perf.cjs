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
    createElement: (tag) => new MockElement(tag),
    createTextNode: (text) => text,
    querySelectorAll: () => [],
    addEventListener: () => {}
};

const mockNavigator = { language: 'en-US' };
const mockWindow = { removeResult: null };

const runner = async (document, navigator, window) => {
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
    class FileReader {
        readAsArrayBuffer(blob) {
            setTimeout(() => {
                this.onload({ target: { result: blob._buffer } });
            }, 10); // Simulate I/O delay
        }
        readAsText(blob) {
            setTimeout(() => {
                this.onload({ target: { result: new TextDecoder().decode(blob._buffer) } });
            }, 10); // Simulate I/O delay
        }
    }

    ${appJsContent}

    // Benchmark setup
    const fileCount = 100;
    const testFiles = [];

    // Create valid PNG mock files
    const pngMagic = new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
    for (let i = 0; i < fileCount; i++) {
        testFiles.push(new File([pngMagic.buffer], 'test_' + i + '.png', { type: 'image/png' }));
    }

    // Mock processImage and handleInvalidFile
    processImage = () => {};
    handleInvalidFile = () => {};

    console.time("handleFiles " + fileCount + " files");
    const start = performance.now();
    await handleFiles(testFiles);
    const end = performance.now();
    console.timeEnd("handleFiles " + fileCount + " files");
    console.log("Time taken:", end - start, "ms");
};

runner(mockDocument, mockNavigator, mockWindow).catch(e => {
    console.error("Test failed:", e);
});
`;

fs.writeFileSync('temp_perf_runner.js', runnerTemplate);
subprocess.spawnSync('node', ['temp_perf_runner.js'], { stdio: 'inherit' });
fs.unlinkSync('temp_perf_runner.js');
