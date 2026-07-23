console.log("🧪 Testing handleFiles routing...");

async function runHandleFilesRoutingTests() {
    let processImageCalls = [];
    let invalidCalls = [];

    const originalProcessImage = processImage;
    const originalHandleInvalidFile = handleInvalidFile;
    const originalValidateImageFile = validateImageFile;

    processImage = function (file) {
        processImageCalls.push(file.name);
    };
    handleInvalidFile = function (file) {
        invalidCalls.push(file.name);
    };
    validateImageFile = async function (file) {
        return /\.(png|jpe?g)$/i.test(file.name);
    };

    try {
        await handleFiles([
            { name: 'ok.png', type: 'image/png' },
            { name: 'bad.pdf', type: 'application/pdf' },
            { name: 'also.jpg', type: 'image/jpeg' },
            { name: 'nope.txt', type: 'text/plain' }
        ]);

        assert(processImageCalls.length === 2, "Only valid images should call processImage");
        assert(processImageCalls.includes('ok.png') && processImageCalls.includes('also.jpg'), "Valid names should be processed");
        assert(invalidCalls.length === 2, "Invalid files should call handleInvalidFile");
        assert(invalidCalls.includes('bad.pdf') && invalidCalls.includes('nope.txt'), "Invalid names should be routed to handleInvalidFile");
        assert(!processImageCalls.includes('bad.pdf'), "Invalid files must never call processImage");
    } finally {
        processImage = originalProcessImage;
        handleInvalidFile = originalHandleInvalidFile;
        validateImageFile = originalValidateImageFile;
    }

    console.log("✅ All handleFiles routing tests passed!");
}

await runHandleFilesRoutingTests();
