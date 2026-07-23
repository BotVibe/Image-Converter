console.log("🧪 Testing encodeImage extra paths...");

async function runEncodeImageExtraPathsTests() {
    const originalNativeSupport = { ...nativeSupport };
    const originalWasmFailed = wasmInitFailed;
    const originalWasmInitialized = wasmInitialized;

    try {
        const canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;
        const ctx = canvas.getContext('2d');

        // ICO path
        const ico = await encodeImage(canvas, ctx, 16, 16, 'image/x-icon', 'x-icon', 0.9);
        assert(ico.actualFormat === 'image/x-icon', "ICO format should be image/x-icon");
        assert(ico.actualExtension === 'ico', "ICO extension should be ico");
        assert(ico.blob && ico.blob.type === 'image/x-icon', "ICO blob type should be image/x-icon");

        // Favicon pack must not go through encodeImage
        let threwPack = false;
        try {
            await encodeImage(canvas, ctx, 16, 16, 'favicon-pack', 'pack', 0.9);
        } catch (e) {
            threwPack = /buildFaviconPackZip/i.test(e.message);
        }
        assert(threwPack, "favicon-pack format should throw and point to buildFaviconPackZip");

        // WASM unavailable path for AVIF
        nativeSupport['image/avif'] = false;
        wasmInitFailed = true;
        wasmInitialized = false;
        let threwAvif = false;
        try {
            await encodeImage(canvas, ctx, 16, 16, 'image/avif', 'avif', 0.8);
        } catch (e) {
            threwAvif = /AVIF WASM encoder is unavailable/i.test(e.message);
        }
        assert(threwAvif, "AVIF without WASM should throw unavailable error");

        // WASM unavailable path for WebP
        nativeSupport['image/webp'] = false;
        let threwWebp = false;
        try {
            await encodeImage(canvas, ctx, 16, 16, 'image/webp', 'webp', 0.8);
        } catch (e) {
            threwWebp = /WebP WASM encoder is unavailable/i.test(e.message);
        }
        assert(threwWebp, "WebP without WASM should throw unavailable error");
    } finally {
        Object.assign(nativeSupport, originalNativeSupport);
        wasmInitFailed = originalWasmFailed;
        wasmInitialized = originalWasmInitialized;
    }

    console.log("✅ All encodeImage extra path tests passed!");
}

await runEncodeImageExtraPathsTests();
