console.log("🧪 Testing removeResult panel visibility...");

async function runRemoveResultPanelTests() {
    const resultsList = document.getElementById('resultsList');
    const resultsPanel = document.getElementById('resultsPanel');

    // Reset state
    resultsList._children = [];
    resultsList.innerHTML = '';
    convertedFiles.clear();
    originalFiles.clear();
    invalidFileIds.clear();

    let hiddenAdded = false;
    const originalAdd = resultsPanel.classList.add;
    resultsPanel.classList.add = (className) => {
        if (className === 'hidden') hiddenAdded = true;
        if (originalAdd) originalAdd.call(resultsPanel.classList, className);
    };

    try {
        // Create one successful + one invalid item in the list
        const successId = 'success-1';
        const invalidId = 'invalid-keep';

        const successLi = document.createElement('li');
        successLi.id = `item-${successId}`;
        resultsList.appendChild(successLi);
        // Register nested status so removeResult querySelector paths are safe
        const status = document.createElement('div');
        status.id = `status-${successId}`;
        successLi.appendChild(status);

        const invalidLi = document.createElement('li');
        invalidLi.id = `item-${invalidId}`;
        resultsList.appendChild(invalidLi);

        convertedFiles.set(successId, { id: successId, name: 'a.webp', blob: {} });
        originalFiles.set(successId, { name: 'a.png' });
        originalFiles.set(invalidId, { name: 'bad.txt' });
        invalidFileIds.add(invalidId);

        // Removing the only converted item must NOT hide the panel while invalid remains
        window.removeResult(successId);

        assert(convertedFiles.size === 0, 'convertedFiles should be empty after removing success item');
        assert(resultsList.children.length === 1, 'Invalid list item should remain');
        assert(hiddenAdded === false, 'resultsPanel must stay visible when invalid items remain');

        // Removing the last remaining item should hide the panel
        window.removeResult(invalidId);
        assert(resultsList.children.length === 0, 'resultsList should be empty');
        assert(hiddenAdded === true, 'resultsPanel should hide when list is empty');

        console.log("✅ All removeResult panel visibility tests passed!");
    } finally {
        resultsPanel.classList.add = originalAdd;
        convertedFiles.clear();
        originalFiles.clear();
        invalidFileIds.clear();
        resultsList._children = [];
    }
}

await runRemoveResultPanelTests();
