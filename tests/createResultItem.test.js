console.log("🧪 Testing createResultItem...");

async function runCreateResultItemTests() {
    const resultsList = document.getElementById('resultsList');
    resultsList._children = [];
    resultsList.innerHTML = '';

    const id = 'xss-1';
    const evilName = '<img onerror=alert(1)>.png';
    const li = createResultItem(id, { name: evilName });

    assert(li.id === `item-${id}`, "Result item id should be item-${id}");
    assert(li.className === 'result-item', "Result item should use result-item class");
    assert(typeof li.innerHTML === 'string' && li.innerHTML.length > 0, "Result item should render innerHTML");

    // Filename must be escaped in the template (no raw <img tag injection)
    assert(li.innerHTML.includes('&lt;img'), "Filename < should be escaped in innerHTML");
    assert(!li.innerHTML.includes('<img onerror'), "Raw XSS payload must not appear unescaped");
    assert(li.innerHTML.includes('id="preview-' + id + '"'), "Should include preview element id");
    assert(li.innerHTML.includes('id="meta-' + id + '"'), "Should include meta element id");
    assert(li.innerHTML.includes('id="status-' + id + '"'), "Should include status element id");
    assert(li.innerHTML.includes('data-i18n="processing"'), "Should show processing state");
    assert(li.innerHTML.includes('alt="'), "Preview alt should be present");
    assert(li.innerHTML.includes('&#39;') || li.innerHTML.includes('&lt;img'), "Escape helpers should encode dangerous characters");

    assert(resultsList._children.includes(li) || resultsList._children.length >= 1, "Item should be appended to resultsList");

    console.log("✅ All createResultItem tests passed!");
}

await runCreateResultItemTests();
