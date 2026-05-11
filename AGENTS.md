# Guidelines for AI Agents

When interacting with this repository, AI agents must strictly adhere to the following architectural principles and rules.

## Core Architectural Principles

1. **No External Dependencies (100% Privacy):**
   - The primary goal of this tool is absolute privacy. No user data, telemetry, or requests should ever leave the browser.
   - **DO NOT** add external CDNs (e.g., `<script src="https://unpkg.com/...">`).
   - If a third-party library is required (e.g., `jszip.min.js`), it **must** be downloaded and stored locally in the repository.

2. **Vanilla Stack Only:**
   - The project uses pure HTML, CSS, and Vanilla JavaScript.
   - **DO NOT** introduce build tools, bundlers, or frameworks like Webpack, Vite, React, Vue, or TailwindCSS unless explicitly requested by the user.
   - Keep the codebase lightweight and directly executable in the browser via `index.html`.

3. **Client-Side Image Processing:**
   - Image conversion relies on the browser's native HTML5 Canvas API (`canvas.toBlob()`, `ctx.drawImage()`).
   - Do not introduce WebAssembly (WASM) encoders (like FFmpeg.wasm or Squoosh) for image processing. The tool intentionally delegates format support (like AVIF) to the user's browser engine.
   - Always ensure that transparency is preserved during canvas operations. Do not manually fill the canvas background with solid colors before drawing the image.

## Security

1. **DOM Injection (XSS Prevention):**
   - Since users upload arbitrary files, the filename (`file.name`) can be an attack vector for Self-XSS.
   - Always use the provided `escapeHTML()` utility function in `app.js` before interpolating dynamic text into `innerHTML` templates.

## File Structure & Responsibilities

- `index.html`: The semantic structure of the UI. Contains the `data-i18n` tags used for localization.
- `style.css`: All styling using standard CSS variables (`:root`) for easy theming.
- `app.js`:
  - Handles the UI logic, drag & drop, and the localization (i18n) dictionary.
  - Contains the core logic for calculating image dimensions (bounding box vs. exact stretch based on the aspect ratio toggle).
  - Handles the Canvas generation, blob extraction, and the bundling into JSZip.
- `jszip.min.js`: Locally hosted dependency for generating ZIP archives.

## Modifying UI & i18n
If adding new text to the UI:
1. Add a `data-i18n="yourKey"` attribute to the HTML element.
2. Update the `i18n` dictionary object in `app.js` for **all** supported languages (English, German, French, Italian).
3. If labels need to change dynamically based on state (like the Max Width / Exact Width toggle), modify the `updateDimensionLabels()` function in `app.js`.
