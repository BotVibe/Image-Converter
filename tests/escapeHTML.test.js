function testEscapeHTML() {
    console.log("🧪 Testing escapeHTML...");

    // Case 1: Empty string
    let res = escapeHTML("");
    assert(res === "", "Should return an empty string when given an empty string");

    // Case 2: Simple string with no special characters
    res = escapeHTML("Hello World 123!");
    assert(res === "Hello World 123!", "Should return the same string if no special characters are present");

    // Case 3: String with HTML tags (<, >)
    res = escapeHTML("<script>alert(1)</script>");
    assert(res === "&lt;script&gt;alert(1)&lt;/script&gt;", "Should escape < and > properly");

    // Case 4: String with ampersands (&)
    res = escapeHTML("Dogs & Cats");
    assert(res === "Dogs &amp; Cats", "Should escape ampersands (&) properly");

    // Case 5: String with quotes (", ')
    res = escapeHTML(`"Double" and 'Single' quotes`);
    assert(res === "&quot;Double&quot; and &#39;Single&#39; quotes", "Should escape single and double quotes properly");

    // Case 6: Mixed special characters
    res = escapeHTML(`<div class="test" id='1'>O&O</div>`);
    assert(res === "&lt;div class=&quot;test&quot; id=&#39;1&#39;&gt;O&amp;O&lt;/div&gt;", "Should correctly escape a mix of tags, ampersands, and quotes");

    console.log("✅ All escapeHTML tests passed!");
}

testEscapeHTML();
