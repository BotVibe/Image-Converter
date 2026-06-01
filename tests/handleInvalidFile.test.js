async function testHandleInvalidFile() {
    console.log("🧪 Testing handleInvalidFile...");

    // Setup initial DOM state
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = ''; // clear
    originalFiles.clear();
    currentLang = 'en'; // Ensure a known language for testing i18n text

    // Test Case 1: Standard invalid file
    const mockFile1 = { name: 'invalid1.txt', type: 'text/plain', size: 100 };
    handleInvalidFile(mockFile1);

    // Verify it was added to originalFiles map
    assert(originalFiles.size === 1, "originalFiles map should contain 1 item");
    const id1 = Array.from(originalFiles.keys())[0];
    assert(originalFiles.get(id1) === mockFile1, "The correct file should be stored in originalFiles");

    // Verify DOM element was created
    const listItem1 = document.getElementById(`item-${id1}`);
    assert(listItem1 !== null, "A list item should be created in the DOM");
    assert(listItem1.id === `item-${id1}`, "List item should have the correct id");

    // Verify error status and i18n
    const statusContainer1 = document.getElementById(`status-${id1}`);
    assert(statusContainer1.innerHTML.includes('delete-btn'), "Status container should include a delete button");

    const metaContainer1 = document.getElementById(`meta-${id1}`);
    assert(metaContainer1.innerHTML.includes(i18n['en'].invalidFileType), "Meta container should display the correct i18n error message");

    // Test Case 2: Edge Case with empty name or missing properties
    const mockFile2 = { name: '', type: '', size: 0 };
    handleInvalidFile(mockFile2);

    assert(originalFiles.size === 2, "originalFiles map should contain 2 items now");
    const id2 = Array.from(originalFiles.keys())[1];

    const metaContainer2 = document.getElementById(`meta-${id2}`);
    assert(metaContainer2.innerHTML.includes(i18n['en'].invalidFileType), "Meta container should display the error message even for empty files");

    // Test Case 3: Test removeResult logic
    // We call removeResult with the first id
    window.removeResult(id1);

    assert(originalFiles.size === 1, "originalFiles map should reduce to 1 item after removing");
    assert(!originalFiles.has(id1), "The removed file should no longer be in the map");

    // Test Case 4: Non-existent id for removeResult
    window.removeResult('non-existent-id');
    assert(originalFiles.size === 1, "originalFiles map should not change when removing a non-existent id");

    console.log("✅ All handleInvalidFile tests passed!");
}

await testHandleInvalidFile();
