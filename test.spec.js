import { test, expect } from '@playwright/test';

test('App initializes and format selector works', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Verify UI initialized
  const title = await page.title();
  expect(title).toBe('Image Converter');

  // Test format dropdown changes limit enforcing
  const formatSelect = page.locator('#formatSelect');
  await formatSelect.selectOption({ value: 'image/png' }, { force: true });

  const inputWidth = page.locator('#inputWidth');
  await inputWidth.fill('5000');

  // Depending on how clamping triggers (change/input), it should clamp to 4096.
  // We trigger blur to simulate the change event.
  await inputWidth.blur();
  expect(await inputWidth.inputValue()).toBe('4096');
});

test('Aspect ratio toggle works', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const toggle = page.locator('#keepAspectRatio');
  const labelWidth = page.locator('#labelWidth');

  // By default, keepAspectRatio is checked, label is "Max Width (px):" or localized equivalent
  expect(await labelWidth.innerText()).toContain('Max');

  // Uncheck it
  await toggle.uncheck();

  // Label should change
  expect(await labelWidth.innerText()).toContain('Exact');
});

test('Uploads an image, processes it, and clears', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Create a dummy image file buffer
  const buffer = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
    'base64'
  );

  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator('#dropZone').click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles({
    name: 'test.png',
    mimeType: 'image/png',
    buffer: buffer
  });

  // Wait for the result to appear
  const resultsPanel = page.locator('#resultsPanel');
  await expect(resultsPanel).not.toHaveClass(/hidden/);

  const item = page.locator('.result-item');
  await expect(item).toBeVisible();

  // Test clear button
  await page.locator('#clearBtn').click();
  await expect(resultsPanel).toHaveClass(/hidden/);
  await expect(item).not.toBeVisible();
});
