function testSanitizeFilename() {
    console.log("🧪 Testing sanitizeFilename...");

    // Case 1: Invalid inputs
    assert(sanitizeFilename(null) === 'image', "Should return 'image' for null");
    assert(sanitizeFilename(undefined) === 'image', "Should return 'image' for undefined");
    assert(sanitizeFilename('') === 'image', "Should return 'image' for empty string");
    assert(sanitizeFilename(123) === 'image', "Should return 'image' for non-string");

    // Case 2: Valid simple filenames
    assert(sanitizeFilename('test.png') === 'test.png', "Should not modify valid simple filenames");
    assert(sanitizeFilename('my-image_final.jpg') === 'my-image_final.jpg', "Should keep underscores and hyphens");

    // Case 3: Path extraction (Zip Slip prevention)
    assert(sanitizeFilename('foo/bar/image.png') === 'image.png', "Should extract base name from forward slash paths");
    assert(sanitizeFilename('C:\\Users\\admin\\image.png') === 'image.png', "Should extract base name from backslash paths");
    assert(sanitizeFilename('../../etc/passwd') === 'passwd', "Should prevent directory traversal attacks");

    // Case 4: Problematic characters
    assert(sanitizeFilename('my<file>.png') === 'myfile.png', "Should remove < and >");
    assert(sanitizeFilename('file:name.png') === 'filename.png', "Should remove colons");
    assert(sanitizeFilename('file"name.png') === 'filename.png', "Should remove quotes");
    assert(sanitizeFilename('file|name.png') === 'filename.png', "Should remove pipes");
    assert(sanitizeFilename('file?name*.png') === 'filename.png', "Should remove ? and *");
    assert(sanitizeFilename('file\x00name.png') === 'filename.png', "Should remove control characters");

    // Case 5: Hidden files and leading characters
    assert(sanitizeFilename('.hidden.png') === 'hidden.png', "Should remove leading dots");
    assert(sanitizeFilename('...hidden.png') === 'hidden.png', "Should remove multiple leading dots");
    assert(sanitizeFilename('  spaced.png') === 'spaced.png', "Should remove leading spaces");
    assert(sanitizeFilename(' . spaced.png') === 'spaced.png', "Should remove combination of leading spaces and dots");

    // Case 6: Fallback when completely stripped
    assert(sanitizeFilename('../../../') === 'image', "Should fallback to 'image' if resulting name is empty");
    assert(sanitizeFilename('   ') === 'image', "Should fallback to 'image' if resulting name is empty spaces");
    assert(sanitizeFilename('<>:"|?*') === 'image', "Should fallback to 'image' if only invalid characters");
    assert(sanitizeFilename('.\\..\\') === 'image', "Should fallback to 'image' for pure traversal strings");

    console.log("✅ All sanitizeFilename tests passed!");
}

testSanitizeFilename();
