console.log("🧪 Testing revokeStatusBlobUrl...");

async function runRevokeStatusBlobUrlTests() {
    const revoked = [];
    const originalRevoke = URL.revokeObjectURL;
    URL.revokeObjectURL = (url) => revoked.push(url);

    try {
        // Missing status container → no-op
        revoked.length = 0;
        revokeStatusBlobUrl('missing-id');
        assert(revoked.length === 0, "Missing status element should not revoke");

        // Non-blob href → no-op
        const statusHttp = document.getElementById('status-http');
        const anchorHttp = document.createElement('a');
        anchorHttp.tagName = 'A';
        anchorHttp.href = 'https://example.com/x.png';
        anchorHttp.download = 'x.png';
        anchorHttp.setAttribute('download', 'x.png');
        statusHttp.appendChild(anchorHttp);
        revoked.length = 0;
        revokeStatusBlobUrl('http');
        assert(revoked.length === 0, "Non-blob download href should not be revoked");

        // blob: href → revoke once
        const statusBlob = document.getElementById('status-blob');
        const anchorBlob = document.createElement('a');
        anchorBlob.tagName = 'A';
        anchorBlob.href = 'blob:http://localhost/abc';
        anchorBlob.download = 'y.png';
        anchorBlob.setAttribute('download', 'y.png');
        statusBlob.appendChild(anchorBlob);
        revoked.length = 0;
        revokeStatusBlobUrl('blob');
        assert(revoked.length === 1, "blob: download href should be revoked once");
        assert(revoked[0] === 'blob:http://localhost/abc', "Should revoke the exact blob URL");
    } finally {
        URL.revokeObjectURL = originalRevoke;
    }

    console.log("✅ All revokeStatusBlobUrl tests passed!");
}

await runRevokeStatusBlobUrlTests();
