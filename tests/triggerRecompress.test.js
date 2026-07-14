console.log("🧪 Testing triggerRecompress...");

async function runTriggerRecompressTests() {
    const originalProcessImage = processImage;
    const originalSetTimeout = setTimeout;
    const originalClearTimeout = clearTimeout;

    let processedIds = [];
    processImage = function(file, id) {
        processedIds.push(id);
    };

    // Immediate debounce for tests
    globalThis.setTimeout = (fn) => {
        fn();
        return 1;
    };
    globalThis.clearTimeout = () => {};

    try {
        originalFiles.clear();
        invalidFileIds.clear();
        processedIds = [];

        const validId = 'valid-1';
        const invalidId = 'invalid-1';
        originalFiles.set(validId, { name: 'a.png' });
        originalFiles.set(invalidId, { name: 'bad.txt' });
        invalidFileIds.add(invalidId);

        triggerRecompress();

        assert(processedIds.length === 1, `Expected 1 recompress call, got ${processedIds.length}`);
        assert(processedIds[0] === validId, 'Only valid files should be recompressed');
        assert(!processedIds.includes(invalidId), 'Invalid files must be skipped on recompress');

        console.log("✅ All triggerRecompress tests passed!");
    } finally {
        processImage = originalProcessImage;
        globalThis.setTimeout = originalSetTimeout;
        globalThis.clearTimeout = originalClearTimeout;
        originalFiles.clear();
        invalidFileIds.clear();
    }
}

await runTriggerRecompressTests();
