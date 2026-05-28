# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.js >> App initializes and format selector works
- Location: test.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#formatSelect')
    - locator resolved to <select id="formatSelect">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - element is not visible
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - element is not visible
    - retrying select option action
      - waiting 100ms
    58 × waiting for element to be visible and enabled
       - element is not visible
     - retrying select option action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - heading "Image Converter" [level=1] [ref=e3]
    - generic [ref=e4]:
      - button "Toggle Theme" [ref=e5] [cursor=pointer]:
        - generic [ref=e6]:
          - generic [ref=e7]: LIGHT MODE
          - img [ref=e9]
      - generic [ref=e17] [cursor=pointer]:
        - generic [ref=e18]: English
        - img [ref=e19]
  - main [ref=e21]:
    - generic [ref=e22]:
      - heading "Settings" [level=2] [ref=e23]
      - generic [ref=e24]:
        - generic [ref=e25]: "Target Format:"
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: WebP
          - img [ref=e29]
      - generic [ref=e31]:
        - generic [ref=e32]:
          - generic [ref=e33]: "Max Width (px):"
          - spinbutton "Max Width (px):" [ref=e34]
        - generic [ref=e35]:
          - generic [ref=e36]: "Max Height (px):"
          - spinbutton "Max Height (px):" [ref=e37]
      - generic [ref=e38]:
        - checkbox "Keep Aspect Ratio" [checked] [ref=e39] [cursor=pointer]: ✓
        - generic [ref=e40] [cursor=pointer]: Keep Aspect Ratio
      - generic [ref=e41]:
        - generic [ref=e42]: "Quality: 90%"
        - 'slider "Quality: 90%" [ref=e44]': "90"
    - paragraph [ref=e47] [cursor=pointer]: Drag & Drop images here or click to select
    - generic [ref=e48]:
      - heading "How it works & Privacy" [level=2] [ref=e49]
      - paragraph [ref=e50]: This tool converts your images directly within your browser. By utilizing your device's processing power and modern browser capabilities, no images are ever uploaded to an external server. This guarantees 100% privacy and lightning-fast processing, as your data never leaves your device.
  - contentinfo [ref=e51]:
    - paragraph [ref=e52]:
      - link "View Source on GitHub" [ref=e53] [cursor=pointer]:
        - /url: https://github.com/BotVibe/Image-Converter
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  |
  3  | test('App initializes and format selector works', async ({ page }) => {
  4  |   await page.goto('http://localhost:5173');
  5  |
  6  |   // Verify UI initialized
  7  |   const title = await page.title();
  8  |   expect(title).toBe('Image Converter');
  9  |
  10 |   // Test format dropdown changes limit enforcing
  11 |   const formatSelect = page.locator('#formatSelect');
> 12 |   await formatSelect.selectOption('image/png'); // Using 'image/png' since jpeg is not an option
     |                      ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  13 |
  14 |   const inputWidth = page.locator('#inputWidth');
  15 |   await inputWidth.fill('5000');
  16 |
  17 |   // Depending on how clamping triggers (change/input), it should clamp to 4096.
  18 |   // We trigger blur to simulate the change event.
  19 |   await inputWidth.blur();
  20 |   expect(await inputWidth.inputValue()).toBe('4096');
  21 | });
  22 |
  23 | test('Aspect ratio toggle works', async ({ page }) => {
  24 |   await page.goto('http://localhost:5173');
  25 |
  26 |   const toggle = page.locator('#keepAspectRatio');
  27 |   const labelWidth = page.locator('#labelWidth');
  28 |
  29 |   // By default, keepAspectRatio is checked, label is "Max Width (px):" or localized equivalent
  30 |   expect(await labelWidth.innerText()).toContain('Max');
  31 |
  32 |   // Uncheck it
  33 |   await toggle.uncheck();
  34 |
  35 |   // Label should change
  36 |   expect(await labelWidth.innerText()).toContain('Exact');
  37 | });
  38 |
  39 | test('Uploads an image, processes it, and clears', async ({ page }) => {
  40 |   await page.goto('http://localhost:5173');
  41 |
  42 |   // Create a dummy image file buffer
  43 |   const buffer = Buffer.from(
  44 |     'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
  45 |     'base64'
  46 |   );
  47 |
  48 |   const fileChooserPromise = page.waitForEvent('filechooser');
  49 |   await page.locator('#dropZone').click();
  50 |   const fileChooser = await fileChooserPromise;
  51 |   await fileChooser.setFiles({
  52 |     name: 'test.png',
  53 |     mimeType: 'image/png',
  54 |     buffer: buffer
  55 |   });
  56 |
  57 |   // Wait for the result to appear
  58 |   const resultsPanel = page.locator('#resultsPanel');
  59 |   await expect(resultsPanel).not.toHaveClass(/hidden/);
  60 |
  61 |   const item = page.locator('.result-item');
  62 |   await expect(item).toBeVisible();
  63 |
  64 |   // Test clear button
  65 |   await page.locator('#clearBtn').click();
  66 |   await expect(resultsPanel).toHaveClass(/hidden/);
  67 |   await expect(item).not.toBeVisible();
  68 | });
  69 |
```