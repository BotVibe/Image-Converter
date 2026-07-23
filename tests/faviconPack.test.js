async function testFaviconPackHelpers() {
    console.log("🧪 Testing favicon pack helpers...");

    // defaultSquareCrop: largest centered square
    let crop = defaultSquareCrop(200, 100);
    assert(crop.size === 100 && crop.sx === 50 && crop.sy === 0, "Landscape image should center a 100px square");

    crop = defaultSquareCrop(80, 200);
    assert(crop.size === 80 && crop.sx === 0 && crop.sy === 60, "Portrait image should center an 80px square");

    crop = defaultSquareCrop(64, 64);
    assert(crop.size === 64 && crop.sx === 0 && crop.sy === 0, "Square image should use full bounds");

    crop = defaultSquareCrop(0, 0);
    assert(crop.size === 1 && crop.sx === 0 && crop.sy === 0, "Zero-size image should fall back to 1x1");

    // clampSquareCrop
    const clamped = clampSquareCrop({ sx: -10, sy: 90, size: 50 }, 100, 100);
    assert(clamped.sx === 0 && clamped.sy === 50 && clamped.size === 50, "Crop should clamp inside image bounds");

    const oversized = clampSquareCrop({ sx: 0, sy: 0, size: 500 }, 120, 80);
    assert(oversized.size === 80 && oversized.sx === 0 && oversized.sy === 0, "Crop size should not exceed min dimension");

    // Manifest content
    const manifest = buildSiteWebManifest();
    assert(manifest.includes('android-chrome-192x192.png'), "Manifest should reference 192 icon");
    assert(manifest.includes('android-chrome-512x512.png'), "Manifest should reference 512 icon");
    assert(manifest.includes('"display": "standalone"'), "Manifest should set display standalone");

    assert(Array.isArray(FAVICON_ICO_SIZES) && FAVICON_ICO_SIZES.join(',') === '16,32,48,256', "ICO size list should match plan");
    assert(FAVICON_PNG_SPECS.some((s) => s.size === 180 && s.name === 'apple-touch-icon.png'), "PNG specs should include apple-touch-icon");

    // Display metrics must use real stage size (hidden/0-size stages are the crop-modal bug)
    const stageOk = {
        getBoundingClientRect: () => ({ width: 400, height: 400 }),
        clientWidth: 400,
        clientHeight: 400
    };
    const metrics = getCropDisplayMetrics(stageOk, 200, 100);
    assert(Math.abs(metrics.scale - 2) < 0.001, "Scale should fit 200x100 into 400x400 (=2)");
    assert(Math.abs(metrics.width - 400) < 0.001 && Math.abs(metrics.height - 200) < 0.001, "Displayed image size should be 400x200");
    assert(Math.abs(metrics.left - 0) < 0.001 && Math.abs(metrics.top - 100) < 0.001, "Image should be vertically centered");

    const stageTiny = {
        getBoundingClientRect: () => ({ width: 0, height: 0 }),
        clientWidth: 0,
        clientHeight: 0
    };
    const fallbackMetrics = getCropDisplayMetrics(stageTiny, 100, 100);
    assert(fallbackMetrics.stageW === 1 && fallbackMetrics.stageH === 1, "Zero-size stage should fall back to 1x1");

    // Multi-size ICO header
    const c16 = document.createElement('canvas');
    c16.width = 16;
    c16.height = 16;
    const c32 = document.createElement('canvas');
    c32.width = 32;
    c32.height = 32;

    const blob = await generateICO([c16, c32]);
    assert(blob && blob.type === 'image/x-icon', "generateICO should return image/x-icon blob");
    assert(blob.size > 22, "ICO blob should include header + image data");
    const view = new DataView(blob._buffer);
    assert(view.getUint16(0, true) === 0, "ICO reserved should be 0");
    assert(view.getUint16(2, true) === 1, "ICO type should be 1");
    assert(view.getUint16(4, true) === 2, "ICO image count should be 2");
    assert(view.getUint8(6) === 16, "First directory width should be 16");
    assert(view.getUint8(7) === 16, "First directory height should be 16");
    assert(view.getUint8(22) === 32, "Second directory width should be 32");
    assert(view.getUint8(23) === 32, "Second directory height should be 32");

    console.log("✅ All favicon pack helper tests passed!");
}

await testFaviconPackHelpers();
