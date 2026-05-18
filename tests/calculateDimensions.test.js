function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

function test() {
    console.log("🧪 Testing calculateDimensions...");

    const keepAspect = document.getElementById('keepAspectRatio');
    const inputWidth = document.getElementById('inputWidth');
    const inputHeight = document.getElementById('inputHeight');

    // Case 1: Keep Aspect Ratio ON, scale down width
    keepAspect.checked = true;
    inputWidth.value = "500";
    inputHeight.value = "1000";
    let res = calculateDimensions(1000, 1000);
    assert(res.width === 500 && res.height === 500, "Should scale down to width 500, preserving aspect ratio (500x500)");

    // Case 2: Keep Aspect Ratio ON, scale down height
    keepAspect.checked = true;
    inputWidth.value = "1000";
    inputHeight.value = "500";
    res = calculateDimensions(1000, 1000);
    assert(res.width === 500 && res.height === 500, "Should scale down to height 500, preserving aspect ratio (500x500)");

    // Case 3: Keep Aspect Ratio ON, both larger than target
    keepAspect.checked = true;
    inputWidth.value = "400";
    inputHeight.value = "300";
    res = calculateDimensions(1000, 1000);
    assert(res.width === 300 && res.height === 300, "Should scale down to fit both (min ratio), resulting in 300x300");

    // Case 4: Keep Aspect Ratio ON, no downscaling if original is smaller
    keepAspect.checked = true;
    inputWidth.value = "2000";
    inputHeight.value = "2000";
    res = calculateDimensions(1000, 1000);
    assert(res.width === 1000 && res.height === 1000, "Should not scale up if keepAspect is true");

    // Case 5: Keep Aspect Ratio OFF, exact dimensions
    keepAspect.checked = false;
    inputWidth.value = "500";
    inputHeight.value = "300";
    res = calculateDimensions(1000, 1000);
    assert(res.width === 500 && res.height === 300, "Should stretch to exact dimensions when keepAspect is false");

    // Case 6: Keep Aspect Ratio OFF, only width provided
    keepAspect.checked = false;
    inputWidth.value = "500";
    inputHeight.value = "";
    res = calculateDimensions(1000, 1000);
    assert(res.width === 500 && res.height === 1000, "Should only change width if height is empty");

    // Case 7: Invalid inputs (NaN/Empty) with keepAspect ON
    keepAspect.checked = true;
    inputWidth.value = "";
    inputHeight.value = "";
    res = calculateDimensions(800, 600);
    assert(res.width === 800 && res.height === 600, "Should return original if no targets provided (keepAspect ON)");

    // Case 8: Original dimension is 0
    keepAspect.checked = true;
    inputWidth.value = "500";
    inputHeight.value = "500";
    res = calculateDimensions(0, 0);
    assert(res.width === 0 && res.height === 0, "Should handle 0x0 input");

    console.log("✅ All calculateDimensions tests passed!");
}

test();
