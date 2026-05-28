// Tests for encodeImage

async function testEncodeImage() {
    console.log("🧪 Testing encodeImage...");

    // Mock nativeSupport locally just for tests
    const originalNativeSupport = { ...nativeSupport };

    try {
        // Setup simple canvas context mock
        const canvasMock = {
            toBlob: (cb, format, quality) => {
                // Simulate Native Blob Creation
                cb({ type: format, size: 1234 });
            }
        };
        const ctxMock = {
            getImageData: () => ({ data: new Uint8Array(10), width: 100, height: 100 })
        };

        // Test Native Encoding Fallback (e.g. image/jpeg)
        const resultNative = await encodeImage(canvasMock, ctxMock, 100, 100, 'image/jpeg', 'jpeg', 0.8);
        assert(resultNative.actualFormat === 'image/jpeg', "Format should be image/jpeg");
        assert(resultNative.actualExtension === 'jpg', "Extension should be jpg for image/jpeg");
        assert(resultNative.blob !== undefined, "Blob should be created");

        // Test Native PNG Encoding
        const resultPng = await encodeImage(canvasMock, ctxMock, 100, 100, 'image/png', 'png', 0.8);
        assert(resultPng.actualFormat === 'image/png', "Format should be image/png");
        assert(resultPng.actualExtension === 'png', "Extension should be png");

        // Test format fallback check (simulating silent fail)
        const canvasFailMock = {
            toBlob: (cb, format, quality) => {
                // Simulate browser that failed to encode jpeg and returned png
                cb({ type: 'image/png', size: 1234 });
            }
        };
        const resultFallback = await encodeImage(canvasFailMock, ctxMock, 100, 100, 'image/jpeg', 'jpeg', 0.8);
        assert(resultFallback.actualFormat === 'image/png', "Format should fallback to image/png");
        assert(resultFallback.actualExtension === 'png', "Extension should fallback to png");

        console.log("✅ All encodeImage tests passed!");
    } finally {
        // Restore
        Object.assign(nativeSupport, originalNativeSupport);
    }
}

testEncodeImage();
