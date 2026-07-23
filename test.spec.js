import { test, expect } from '@playwright/test';

async function chooseCustomSelectOption(page, selectId, value) {
    const wrapper = page.locator(`.custom-select-wrapper[data-select-id="${selectId}"]`);
    await wrapper.locator('.custom-select-trigger').click();
    await wrapper.locator(`.custom-option[data-value="${value}"]`).click();
}

test('App initializes and format selector works', async ({ page }) => {
    await page.goto('/');

    expect(await page.title()).toBe('Image Converter');

    await chooseCustomSelectOption(page, 'formatSelect', 'image/png');

    const inputWidth = page.locator('#inputWidth');
    await inputWidth.fill('5000');
    await inputWidth.blur();
    expect(await inputWidth.inputValue()).toBe('4096');
});

test('Aspect ratio toggle works', async ({ page }) => {
    await page.goto('/');

    const toggle = page.locator('#keepAspectRatio');
    const labelWidth = page.locator('#labelWidth');

    expect(await labelWidth.innerText()).toContain('Max');

    await toggle.uncheck();

    expect(await labelWidth.innerText()).toContain('Exact');
});

test('Uploads an image, processes it, and clears', async ({ page }) => {
    await page.goto('/');

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

    const resultsPanel = page.locator('#resultsPanel');
    await expect(resultsPanel).not.toHaveClass(/hidden/);

    const item = page.locator('.result-item');
    await expect(item).toBeVisible();

    await page.locator('#clearBtn').click();
    await expect(resultsPanel).toHaveClass(/hidden/);
    await expect(item).not.toBeVisible();
});

test('Format selector supports keyboard navigation', async ({ page }) => {
    await page.goto('/');

    const trigger = page.locator('.custom-select-wrapper[data-select-id="formatSelect"] .custom-select-trigger');
    await trigger.focus();
    await page.keyboard.press('Enter');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await expect(page.locator('#qualitySlider')).toBeDisabled();
    await expect(page.locator('#formatWarning')).not.toHaveClass(/hidden/);
});

test('Favicon Pack option opens square crop modal', async ({ page }) => {
    await page.goto('/');

    await chooseCustomSelectOption(page, 'formatSelect', 'favicon-pack');
    await expect(page.locator('#qualitySlider')).toBeDisabled();
    await expect(page.locator('#inputWidth')).toBeDisabled();
    await expect(page.locator('#formatWarning')).not.toHaveClass(/hidden/);

    // Known-good 1x1 PNG (same fixture as the upload test)
    const buffer = Buffer.from(
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
        'base64'
    );

    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('#dropZone').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles({
        name: 'icon.png',
        mimeType: 'image/png',
        buffer
    });

    const cropModal = page.locator('#cropModal');
    await expect(cropModal).toBeVisible();
    await expect(page.locator('#cropSelection')).toBeVisible();

    await page.locator('#cropConfirmBtn').click();
    await expect(cropModal).toBeHidden();

    const item = page.locator('.result-item');
    await expect(item).toBeVisible();
    await expect(page.locator('[data-i18n="cropEdit"]').first()).toBeVisible({ timeout: 15000 });
});
