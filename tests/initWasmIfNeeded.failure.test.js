console.log("🧪 Testing initWasmIfNeeded failure path...");

async function runInitWasmFailureTests() {
    // Force WASM load path, then fail because initAvif/initWebp imports are stripped in the harness
    wasmInitialized = false;
    wasmInitFailed = false;
    wasmInitPromise = null;
    nativeSupport['image/webp'] = false;
    nativeSupport['image/avif'] = false;

    const first = initWasmIfNeeded();
    const second = initWasmIfNeeded();
    assert(first === second, "Failure path must still share one init promise");

    const ok1 = await first;
    const ok2 = await second;
    assert(ok1 === false, "initWasmIfNeeded should resolve false on init failure");
    assert(ok2 === false, "Shared failure promise should resolve false");
    assert(wasmInitFailed === true, "wasmInitFailed should be set on init error");
    assert(wasmInitialized === false, "wasmInitialized should remain false after failure");

    const again = await initWasmIfNeeded();
    assert(again === false, "Subsequent calls should return the same failed promise result");
    assert(wasmInitPromise === first, "Should not create a new promise after failure");

    // Restore native support so later suites are not stuck in failed WASM mode
    nativeSupport['image/webp'] = true;
    nativeSupport['image/avif'] = true;
    wasmInitialized = false;
    wasmInitFailed = false;
    wasmInitPromise = null;

    console.log("✅ All initWasmIfNeeded failure tests passed!");
}

await runInitWasmFailureTests();
