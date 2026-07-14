console.log("🧪 Testing clearAll...");

async function runClearAllTests() {
    // Save original implementations
    const originalQuerySelectorAll = document.querySelectorAll;
    const originalRevokeObjectURL = URL.revokeObjectURL;

    // Test state tracking
    let revokedURLs = [];

    // Mock the required functions for this test
    URL.revokeObjectURL = (url) => {
        revokedURLs.push(url);
    };

    // Set up mock DOM elements
    const resultsList = document.getElementById('resultsList');
    const resultsPanel = document.getElementById('resultsPanel');
    const inputWidth = document.getElementById('inputWidth');
    const inputHeight = document.getElementById('inputHeight');

    // Set some initial state to verify it gets cleared
    resultsList.innerHTML = "<div>Some content</div>";

    let hiddenAdded = false;
    resultsPanel.classList.add = (className) => {
        if (className === 'hidden') hiddenAdded = true;
    };

    inputWidth.value = "100";
    inputHeight.value = "200";

    // Set up global variables to verify they get reset
    convertedFiles.set('1', {}); convertedFiles.set('2', {}); // simulate 2 items
    originalFiles.set("file1", {});
    invalidFileIds.add('bad-1');
    const sessionBefore = processingSession;
    globalMaxWidth = 800;
    globalMaxHeight = 600;

    let cachedImageClosed = false;
    imageCache.set("testKey", {
        close: () => { cachedImageClosed = true; }
    });

    // Mock querySelectorAll to return our specific test elements
    document.querySelectorAll = (selector) => {
        if (selector === '#resultsList a[download]') {
            return [
                { href: 'blob:http://localhost/1234' }, // Should be revoked
                { href: 'https://example.com/file.png' } // Should NOT be revoked
            ];
        }
        if (selector === '#resultsList img.result-preview') {
            return [
                { src: 'blob:http://localhost/5678' }, // Should be revoked
                { src: 'data:image/png;base64,...' } // Should NOT be revoked
            ];
        }
        return [];
    };

    try {
        // Run the function
        clearAll();

        // Assertions

        // 1. Verify URL.revokeObjectURL calls
        assert(revokedURLs.length === 2, "revokeObjectURL should be called exactly twice");
        assert(revokedURLs.includes('blob:http://localhost/1234'), "Should revoke anchor blob URL");
        assert(revokedURLs.includes('blob:http://localhost/5678'), "Should revoke image blob URL");

        // 2. Verify DOM resets
        assert(resultsList.innerHTML === '', "resultsList.innerHTML should be cleared");
        assert(hiddenAdded === true, "resultsPanel should have 'hidden' class added");
        assert(inputWidth.value === '', "inputWidth.value should be cleared");
        assert(inputHeight.value === '', "inputHeight.value should be cleared");

        // 3. Verify global state resets
        assert(convertedFiles.size === 0, "convertedFiles should be empty");
        assert(originalFiles.size === 0, "originalFiles should be empty");
        assert(invalidFileIds.size === 0, "invalidFileIds should be empty");
        assert(processingSession === sessionBefore + 1, "processingSession should bump on clearAll");
        assert(globalMaxWidth === 0, "globalMaxWidth should be 0");
        assert(globalMaxHeight === 0, "globalMaxHeight should be 0");

        // 4. Verify imageCache release
        assert(cachedImageClosed === true, "Cached image close() method should be called");
        assert(imageCache.size === 0, "imageCache should be empty");

        console.log("✅ All clearAll tests passed!");
    } finally {
        // Restore original implementations
        document.querySelectorAll = originalQuerySelectorAll;
        URL.revokeObjectURL = originalRevokeObjectURL;
    }
}

runClearAllTests().catch(e => {
    console.error("clearAll tests failed:", e);
    process.exit(1);
});
