const fs = require('fs');
const path = require('path');

// Simulate the baseline
function runBaseline(itemCount) {
    const convertedFiles = [];
    console.time("baseline " + itemCount + " elements");
    const start = performance.now();

    for (let i = 0; i < itemCount; i++) {
        const id = 'test_' + i;
        const newName = 'test_' + i + '.jpg';
        const blob = { size: 10, type: 'image/jpeg' };

        const existingIndex = convertedFiles.findIndex(f => f.id === id);
        if (existingIndex > -1) {
            convertedFiles.splice(existingIndex, 1);
        }
        convertedFiles.push({ id: id, name: newName, blob: blob });
    }

    const end = performance.now();
    console.timeEnd("baseline " + itemCount + " elements");
    return end - start;
}

// Simulate the optimized approach
function runOptimized(itemCount) {
    // Map is better suited for key/value lookups and insertion order
    const convertedFilesMap = new Map();
    console.time("optimized " + itemCount + " elements");
    const start = performance.now();

    for (let i = 0; i < itemCount; i++) {
        const id = 'test_' + i;
        const newName = 'test_' + i + '.jpg';
        const blob = { size: 10, type: 'image/jpeg' };

        // Use map for O(1) inserts/updates while preserving order when iterating
        // Map maintains insertion order when using keys() / values()
        // If we need array methods we can do Array.from(convertedFilesMap.values())
        // but replacing existing id:
        // By deleting and re-setting we move it to the end of insertion order,
        // which matches the splice + push behavior of the original code!
        if (convertedFilesMap.has(id)) {
            convertedFilesMap.delete(id);
        }
        convertedFilesMap.set(id, { id: id, name: newName, blob: blob });
    }

    const end = performance.now();
    console.timeEnd("optimized " + itemCount + " elements");
    return end - start;
}

const n = 20000;
runBaseline(n);
runOptimized(n);
