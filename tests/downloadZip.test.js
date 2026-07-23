console.log("🧪 Testing downloadZip...");

async function runDownloadZipTests() {
    const zipBtn = document.getElementById('downloadZipBtn');
    zipBtn.textContent = 'Download All as ZIP';
    zipBtn.disabled = false;

    convertedFiles.clear();
    JSZip.instances.length = 0;
    JSZip.last = null;

    // Empty map → early return, no JSZip created
    await downloadZip();
    assert(JSZip.instances.length === 0, "downloadZip should no-op when convertedFiles is empty");
    assert(zipBtn.disabled === false, "ZIP button should remain enabled on empty early-return");
    assert(zipBtn.textContent === 'Download All as ZIP', "ZIP button label should be unchanged on empty early-return");

    // Collision + favicon pack folder entries
    convertedFiles.set('a', {
        id: 'a',
        name: 'foo.png',
        blob: new Blob([new ArrayBuffer(4)], { type: 'image/png' })
    });
    convertedFiles.set('b', {
        id: 'b',
        name: 'foo.png',
        blob: new Blob([new ArrayBuffer(4)], { type: 'image/png' })
    });
    convertedFiles.set('c', {
        id: 'c',
        name: 'logo-favicon.zip',
        blob: new Blob([new ArrayBuffer(8)], { type: 'application/zip' }),
        isFaviconPack: true,
        folderName: 'logo-favicon',
        packFiles: [
            { name: 'favicon.ico', blob: new Blob([new ArrayBuffer(2)], { type: 'image/x-icon' }) },
            { name: 'icons.html', blob: new Blob(['<!-- icons -->'], { type: 'text/html' }) }
        ]
    });

    const revoked = [];
    const originalRevoke = URL.revokeObjectURL;
    URL.revokeObjectURL = (url) => revoked.push(url);

    try {
        await downloadZip();

        assert(JSZip.last, "downloadZip should create a JSZip instance");
        const files = Object.keys(JSZip.last.files).sort();
        assert(files.includes('foo.png'), "Should include first foo.png");
        assert(files.includes('foo (1).png'), "Should rename colliding second file to foo (1).png");
        assert(files.includes('logo-favicon/favicon.ico'), "Favicon pack entries should be nested under folder");
        assert(files.includes('logo-favicon/icons.html'), "Favicon pack should include icons.html in folder");
        assert(!files.includes('logo-favicon.zip'), "Should not embed the pack as a nested zip file");

        assert(zipBtn.disabled === false, "ZIP button should be re-enabled in finally");
        assert(zipBtn.textContent === 'Download All as ZIP', "ZIP button label should be restored in finally");
        assert(revoked.length >= 1, "Temporary object URL should be revoked");
    } finally {
        URL.revokeObjectURL = originalRevoke;
        convertedFiles.clear();
        JSZip.instances.length = 0;
        JSZip.last = null;
    }

    console.log("✅ All downloadZip tests passed!");
}

await runDownloadZipTests();
