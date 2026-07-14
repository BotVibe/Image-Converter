console.log("🧪 Testing showError...");

async function runShowErrorTests() {
    currentLang = 'en';

    const id = 'err-1';
    const statusEl = document.getElementById(`status-${id}`);
    statusEl.innerHTML = '<span>Processing...</span>';
    const metaEl = document.getElementById(`meta-${id}`);
    metaEl.innerHTML = '...';

    showError(id);

    assert(statusEl.innerHTML.includes('delete-btn'), 'Error row must include a remove button');
    assert(statusEl.innerHTML.includes(i18n.en.error), 'Error row should show generic error text');
    assert(statusEl.innerHTML.includes('aria-label'), 'Remove button should have aria-label');
    assert(metaEl.innerHTML.includes(i18n.en.error), 'Meta should mirror the error message');

    showError(id, 'wasmEncoderUnavailable');
    assert(
        statusEl.innerHTML.includes(i18n.en.wasmEncoderUnavailable),
        'WASM error key should render the dedicated message'
    );
    assert(statusEl.innerHTML.includes('delete-btn'), 'WASM error row must still include remove');

    console.log("✅ All showError tests passed!");
}

await runShowErrorTests();
