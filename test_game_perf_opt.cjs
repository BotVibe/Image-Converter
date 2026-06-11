const fs = require('fs');
const path = require('path');

const runnerTemplate = `
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

// Approximation method
function gaussianRandom(mean=0, stdev=1) {
    let u = 1 - Math.random(); // Converting [0,1) to (0,1]
    let v = Math.random();
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    return z * stdev + mean;
}

function runGameLoopOptimized(autoClickers, autoCritChance, autoCritDamage) {
    let autoClicksAdded = 0;
    let critsOccurred = false;

    if (autoClickers <= 100) {
        // For small numbers, exact calculation is fine and adds nice variance
        for (let i = 0; i < autoClickers; i++) {
            const roll = Math.random() * 100;
            if (roll < autoCritChance) {
                autoClicksAdded += (1 + autoCritDamage);
                critsOccurred = true;
            } else {
                autoClicksAdded += 1;
            }
        }
    } else {
        // For large numbers, approximate using normal distribution
        // Binomial distribution B(n, p) can be approximated by Normal N(np, np(1-p))
        const n = autoClickers;
        const p = autoCritChance / 100;

        const mean = n * p;
        const variance = n * p * (1 - p);
        const stdev = Math.sqrt(variance);

        // Approximate number of crits
        let crits = Math.round(gaussianRandom(mean, stdev));

        // Clamp to valid range [0, n]
        crits = Math.max(0, Math.min(n, crits));

        const normalClicks = n - crits;

        autoClicksAdded = normalClicks + (crits * (1 + autoCritDamage));
        critsOccurred = crits > 0;
    }

    return { autoClicksAdded, critsOccurred };
}

console.time("gameLoop_10M_autoClickers_original");
let start = performance.now();
let result = runGameLoop(10000000, 5, 5);
let end = performance.now();
console.timeEnd("gameLoop_10M_autoClickers_original");
console.log("Original time:", end - start, "ms", result);

console.time("gameLoop_10M_autoClickers_optimized");
start = performance.now();
result = runGameLoopOptimized(10000000, 5, 5);
end = performance.now();
console.timeEnd("gameLoop_10M_autoClickers_optimized");
console.log("Optimized time:", end - start, "ms", result);

console.time("gameLoop_1000_autoClickers_original");
start = performance.now();
result = runGameLoop(1000, 5, 5);
end = performance.now();
console.timeEnd("gameLoop_1000_autoClickers_original");
console.log("Original 1000 time:", end - start, "ms", result);

console.time("gameLoop_1000_autoClickers_optimized");
start = performance.now();
result = runGameLoopOptimized(1000, 5, 5);
end = performance.now();
console.timeEnd("gameLoop_1000_autoClickers_optimized");
console.log("Optimized 1000 time:", end - start, "ms", result);
`;

fs.writeFileSync('temp_game_perf_opt_runner.js', runnerTemplate);
require('child_process').spawnSync('node', ['temp_game_perf_opt_runner.js'], { stdio: 'inherit' });
fs.unlinkSync('temp_game_perf_opt_runner.js');
