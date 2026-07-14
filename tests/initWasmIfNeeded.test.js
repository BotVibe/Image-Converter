console.log("🧪 Testing initWasmIfNeeded shared promise...");

async function runInitWasmTests() {
    // Reset WASM state
    wasmInitialized = false;
    wasmInitFailed = false;
    wasmInitPromise = null;
    nativeSupport['image/webp'] = true;
    nativeSupport['image/avif'] = true;

    const first = initWasmIfNeeded();
    const second = initWasmIfNeeded();

    assert(first === second, 'Concurrent initWasmIfNeeded calls must share one promise');

    const ok1 = await first;
    const ok2 = await second;
    assert(ok1 === true, 'initWasmIfNeeded should succeed when native support is present');
    assert(ok2 === true, 'Shared promise should resolve to true');
    assert(wasmInitialized === true, 'wasmInitialized should be true after success');

    // Calling again should short-circuit without creating a new promise race
    const again = await initWasmIfNeeded();
    assert(again === true, 'Subsequent calls should return true when already initialized');

    console.log("✅ All initWasmIfNeeded tests passed!");
}

await runInitWasmTests();
