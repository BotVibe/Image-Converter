(async function() {
    console.log("🧪 Testing validateImageFile...");

    const makeFile = (name, bytes) => {
        const arr = new Uint8Array(bytes);
        return new File([arr], name);
    };

    const makeTextFile = (name, text) => {
        const arr = new TextEncoder().encode(text);
        return new File([arr], name);
    };

    // 1. Test invalid inputs
    assert(await validateImageFile(null) === false, "null should return false");
    assert(await validateImageFile({}) === false, "Plain object should return false");
    assert(await validateImageFile(makeFile('test.txt', [0, 0, 0])) === false, "Invalid extension should return false");
    assert(await validateImageFile(makeFile('test', [0, 0, 0])) === false, "No extension should return false");

    // 2. Test valid formats with valid magic bytes
    // JPEG
    assert(await validateImageFile(makeFile('test.jpg', [0xFF, 0xD8, 0xFF, 0x00])) === true, "Valid JPEG should return true");
    assert(await validateImageFile(makeFile('test.jpeg', [0xFF, 0xD8, 0xFF, 0x00])) === true, "Valid JPEG (.jpeg) should return true");

    // PNG (89 50 4E 47 0D 0A 1A 0A)
    assert(await validateImageFile(makeFile('test.png', [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])) === true, "Valid PNG should return true");

    // WebP (RIFF .... WEBP)
    const webpBytes = [
        0x52, 0x49, 0x46, 0x46, // RIFF
        0x00, 0x00, 0x00, 0x00, // length
        0x57, 0x45, 0x42, 0x50  // WEBP
    ];
    assert(await validateImageFile(makeFile('test.webp', webpBytes)) === true, "Valid WebP should return true");

    // GIF (GIF87a)
    assert(await validateImageFile(makeFile('test.gif', [0x47, 0x49, 0x46, 0x38, 0x37, 0x61])) === true, "Valid GIF87a should return true");
    // GIF (GIF89a)
    assert(await validateImageFile(makeFile('test.gif', [0x47, 0x49, 0x46, 0x38, 0x39, 0x61])) === true, "Valid GIF89a should return true");

    // BMP (BM)
    assert(await validateImageFile(makeFile('test.bmp', [0x42, 0x4D, 0x00, 0x00])) === true, "Valid BMP should return true");

    // AVIF (.... ftyp avif)
    const avifBytes = [
        0x00, 0x00, 0x00, 0x1C, // size
        0x66, 0x74, 0x79, 0x70, // ftyp
        0x61, 0x76, 0x69, 0x66  // avif
    ];
    assert(await validateImageFile(makeFile('test.avif', avifBytes)) === true, "Valid AVIF should return true");

    // SVG
    assert(await validateImageFile(makeTextFile('test.svg', '<?xml version="1.0"?><svg></svg>')) === true, "Valid SVG with <?xml should return true");
    assert(await validateImageFile(makeTextFile('test.svg', '<svg xmlns="http://www.w3.org/2000/svg"></svg>')) === true, "Valid SVG with <svg should return true");

    // 3. Test negative cases (valid extension, invalid magic bytes)
    assert(await validateImageFile(makeFile('test.jpg', [0x00, 0x00, 0x00, 0x00])) === false, "Invalid JPEG bytes should return false");
    assert(await validateImageFile(makeFile('test.png', [0x89, 0x50, 0x4E])) === false, "Too short PNG should return false");

    const invalidWebpBytes = [
        0x52, 0x49, 0x46, 0x46, // RIFF
        0x00, 0x00, 0x00, 0x00, // length
        0x41, 0x42, 0x43, 0x44  // ABCD (not WEBP)
    ];
    assert(await validateImageFile(makeFile('test.webp', invalidWebpBytes)) === false, "Invalid WebP signature should return false");

    assert(await validateImageFile(makeTextFile('test.svg', '<html></html>')) === false, "Invalid SVG content should return false");

    console.log("✅ All validateImageFile tests passed!");
})();
