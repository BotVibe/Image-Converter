function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

async function testHandleFiles() {
    console.log("🧪 Testing handleFiles...");

    let processImageCalls = 0;

    // Save originals
    const originalProcessImage = processImage;
    const originalValidateImageFile = validateImageFile;

    // Mock
    processImage = function(file) {
        processImageCalls++;
    };

    validateImageFile = async function(file) {
        // Mock validation for test based on MIME type to match rationale
        return file.type && file.type.startsWith('image/');
    };

    const mockFiles = [
        { name: 'test.png', type: 'image/png' },
        { name: 'document.pdf', type: 'application/pdf' },
        { name: 'test.jpg', type: 'image/jpeg' },
        { name: 'data.json', type: 'application/json' },
        { name: 'unknown', type: '' } // no type
    ];

    await handleFiles(mockFiles);

    assert(processImageCalls === 2, `processImage should be called exactly twice for image files, got ${processImageCalls}`);

    // Restore originals
    processImage = originalProcessImage;
    validateImageFile = originalValidateImageFile;

    console.log("✅ All handleFiles tests passed!");
}

await testHandleFiles();
