console.log("🧪 Testing createCroppedSquareCanvas...");

async function runCreateCroppedSquareCanvasTests() {
    const img = { width: 200, height: 100 };
    const crop = { sx: 40, sy: 0, size: 100 };
    const canvas = createCroppedSquareCanvas(img, crop, 64);

    assert(canvas.width === 64 && canvas.height === 64, "Cropped canvas should be 64x64");
    assert(canvas._drawCalls && canvas._drawCalls.length >= 1, "Should draw the cropped region");

    const call = canvas._drawCalls[canvas._drawCalls.length - 1];
    assert(call[0] === img, "drawImage source should be the image");
    assert(call[1] === 40 && call[2] === 0 && call[3] === 100 && call[4] === 100, "Source rect should match crop");
    assert(call[5] === 0 && call[6] === 0 && call[7] === 64 && call[8] === 64, "Destination should fill 64x64");

    // Out-of-bounds crop should be clamped before draw
    const clampedCanvas = createCroppedSquareCanvas(img, { sx: -20, sy: 90, size: 80 }, 32);
    const clampedCall = clampedCanvas._drawCalls[clampedCanvas._drawCalls.length - 1];
    assert(clampedCall[1] === 0, "Clamped crop sx should be >= 0");
    assert(clampedCall[3] === 80 || clampedCall[3] === 100, "Clamped crop size should fit image");

    console.log("✅ All createCroppedSquareCanvas tests passed!");
}

await runCreateCroppedSquareCanvasTests();
