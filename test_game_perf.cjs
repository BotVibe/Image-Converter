const fs = require('fs');
const path = require('path');

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
    setAttribute() {}
    removeAttribute() {}
    get textContent() { return this._textContent; }
    set textContent(v) { this._textContent = v; }
    remove() {}
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

// Mock global variables needed for the game script
const document = mockDocument;
const window = mockWindow;
const navigator = mockNavigator;

${appJsContent}

// The app.js sets up an interval. Let's extract the logic.
// We can test the game loop logic directly by simulating the autoClickers loop.
// Let's grab the loop logic into a function to measure it.

function runGameLoop(autoClickers, autoCritChance, autoCritDamage) {
    let autoClicksAdded = 0;
    let critsOccurred = false;

    // Roll for each individual auto-clicker
    for (let i = 0; i < autoClickers; i++) {
        const roll = Math.random() * 100;
        if (roll < autoCritChance) {
            autoClicksAdded += (1 + autoCritDamage);
            critsOccurred = true;
        } else {
            autoClicksAdded += 1;
        }
    }

    return { autoClicksAdded, critsOccurred };
}

console.time("gameLoop_1M_autoClickers");
const start = performance.now();
const result = runGameLoop(1000000, 5, 5);
const end = performance.now();
console.timeEnd("gameLoop_1M_autoClickers");
console.log("Time taken:", end - start, "ms", result);
`;

fs.writeFileSync('temp_game_perf_runner.js', runnerTemplate);
require('child_process').spawnSync('node', ['temp_game_perf_runner.js'], { stdio: 'inherit' });
fs.unlinkSync('temp_game_perf_runner.js');
