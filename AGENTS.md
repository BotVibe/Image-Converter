# Guidelines for AI Agents

When interacting with this repository, AI agents must strictly adhere to the following architectural principles and rules.

## Core Architectural Principles

1. **No External Dependencies (100% Privacy):**
   - The primary goal of this tool is absolute privacy. No user data, telemetry, or requests should ever leave the browser.
   - **DO NOT** add external CDNs (e.g., `<script src="https://unpkg.com/...">`).
   - If a third-party library is required (e.g., `jszip.min.js`), it **must** be downloaded and stored locally in the repository.

2. **Vanilla JS with Minimal Build Tools:**
   - The project uses pure HTML, CSS, and Vanilla JavaScript for the UI.
   - **DO NOT** introduce complex UI frameworks like React, Vue, or TailwindCSS unless explicitly requested by the user.
   - The project relies on **Vite** as a minimal build tool specifically to bundle WebAssembly (`.wasm`) payloads.

3. **Client-Side Image Processing & WASM Fallbacks:**
   - Image conversion primarily relies on the browser's native HTML5 Canvas API (`canvas.toBlob()`, `ctx.drawImage()`) for speed.
   - However, for environments that lack native encoding support (e.g., Safari/Firefox for AVIF), the tool intercepts the process and uses **`@jsquash` WebAssembly (WASM) encoders** as a robust polyfill.
   - Always ensure that transparency is preserved during canvas operations. Do not manually fill the canvas background with solid colors before drawing the image.

## Security

1. **DOM Injection (XSS Prevention):**
   - Since users upload arbitrary files, the filename (`file.name`) can be an attack vector for Self-XSS.
   - Always use the provided `escapeHTML()` utility function in `app.js` before interpolating dynamic text into `innerHTML` templates.

## Documentation Maintenance
- The AI agent must automatically update `README.md` and `AGENTS.md` whenever significant architectural, feature, or structural changes are made to the codebase.
- Ensure that any new functionality, dependencies, or rules are reflected in these documentation files.

## File Structure & Responsibilities

- `index.html`: The semantic structure of the UI. Contains the `data-i18n` tags used for localization. The UI is structured sequentially: Settings Panel, Results Panel (Converted Images), Upload Panel, Info Panel (Privacy Explanation), and finally the Footer.
- `style.css`: All styling using standard CSS variables (`:root`) for easy theming. The design language is a refined Neobrutalist dark theme (`#1e293b` background, `#334155` cards, dark `#0f172a` borders/shadows, and `#b6f228` primary accents) characterized by thick borders (`3px`), hard shadows (`4px 4px 0px`), physical click translate effects, and slightly rounded corners (`8px`). Native form elements must be custom-styled. It uses locally hosted Inter and Plus Jakarta Sans fonts.
- `app.js`:
  - Handles the UI logic, drag & drop, and the localization (i18n) dictionary.
  - Enforces a hard maximum dimension limit of 4096px across all output formats (`enforceLimits()`) to ensure stability.
  - Handles memory management gracefully (e.g., revoking Blob URLs when an individual image is removed from the results list).
  - Contains the core logic for calculating image dimensions (bounding box vs. exact stretch based on the aspect ratio toggle).
  - Handles the Canvas generation, blob extraction, and the bundling into JSZip.
- `public/jszip.min.js`: Locally hosted dependency for generating ZIP archives, served statically by Vite.

## Testing

- **Unit tests:** `npm test` runs Node.js tests in `tests/` via `run-tests.cjs`.
- **E2E tests:** `npm run test:e2e` runs Playwright specs (`*.spec.js`) with an auto-started Vite dev server (`playwright.config.js`). Do not point Playwright at `tests/` — those are unit tests, not browser specs.
- **Custom selects:** Native `<select>` elements are hidden and replaced by `setupCustomSelects()`. Each wrapper exposes `data-select-id` matching the original select's `id`, and options expose `data-value`. The trigger supports keyboard navigation (Enter/Space, Arrow keys, Escape) and ARIA attributes (`role="combobox"`, `aria-expanded`, etc.). E2E tests must interact with the custom UI, not `#formatSelect.selectOption()`.

## Modifying UI & i18n
If adding new text to the UI:
1. Add a `data-i18n="yourKey"` attribute to the HTML element.
2. Update the `i18n` dictionary object in `app.js` for **all** supported languages (English, German, French, Italian).
3. If labels need to change dynamically based on state (like the Max Width / Exact Width toggle), modify the `updateDimensionLabels()` function in `app.js`.
