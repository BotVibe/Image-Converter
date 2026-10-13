# Guidelines for AI Agents

When interacting with this repository, AI agents must strictly adhere to the following architectural principles and rules.

## Core Architectural Principles

1. **No External Dependencies (100% Privacy):**
   - The primary goal of this tool is absolute privacy. No user data, telemetry, or requests should ever leave the browser.
   - **DO NOT** add external CDNs (e.g., `<script src="https://unpkg.com/...">`).
   - If a third-party library is required (e.g., `jszip.min.js`), it **must** be downloaded and stored locally in the repository.
   - Theme and language preferences may be stored in `localStorage` only (`imgConverter.theme`, `imgConverter.lang`). Never send prefs or image data to a server.

2. **Vanilla JS with Minimal Build Tools:**
   - The project uses pure HTML, CSS, and Vanilla JavaScript for the UI.
   - **DO NOT** introduce complex UI frameworks like React, Vue, or TailwindCSS unless explicitly requested by the user.
   - The project relies on **Vite** as a minimal build tool specifically to bundle WebAssembly (`.wasm`) payloads.

3. **Client-Side Image Processing & WASM Fallbacks:**
   - Image conversion primarily relies on the browser's native HTML5 Canvas API (`canvas.toBlob()`, `ctx.drawImage()`) for speed.
   - However, for environments that lack native encoding support (e.g., Safari/Firefox for AVIF), the tool intercepts the process and uses **`@jsquash` WebAssembly (WASM) encoders** as a robust polyfill.
   - WASM init must use a single shared promise (`initWasmIfNeeded`) so concurrent encodes do not double-load modules. On init failure, mark failure explicitly and do not attempt WASM encode paths; surface `wasmEncoderUnavailable` via `showError()`.
   - Always ensure that transparency is preserved during canvas operations. Do not manually fill the canvas background with solid colors before drawing the image.
   - **Exception — JPEG:** JPEG has no alpha channel. When the target format is `image/jpeg`, fill the canvas with white (`#ffffff`) *before* `drawImage` so transparent pixels do not become black.

## Security

1. **DOM Injection (XSS Prevention):**
   - Since users upload arbitrary files, the filename (`file.name`) can be an attack vector for Self-XSS.
   - Always use the provided `escapeHTML()` utility function in `app.js` before interpolating dynamic text into `innerHTML` templates.
   - Use `sanitizeFilename()` for ZIP entry names to prevent zip-slip path traversal.

## Memory & Concurrency

- Revoke Blob URLs when download links are replaced (recompress) or removed (`removeResult` / `clearAll`).
- Use a `processingSession` counter bumped on `clearAll` so in-flight `processImage` calls ignore stale completions.
- Invalid uploads are tracked in `invalidFileIds` and must be skipped by `triggerRecompress`.
- Debounce `triggerRecompress` (~150ms) so rapid slider/format changes do not stampede encoding.
- Cap concurrent encodes with `MAX_CONCURRENT` (2). Hard-cap output dimensions at 4096px.
- Failed conversions (`showError`) must include a remove button, same as invalid-file rows.
- Yield to the UI (`yieldToUI`) between decode / canvas / encode stages so progress overlays can paint; keep a batch progress overlay (`#batchProgress`) updated via `noteBatchItemQueued` / `noteBatchItemFinished` (epoch-guarded against `clearAll`).

## Documentation Maintenance
- The AI agent must automatically update `README.md` and `AGENTS.md` whenever significant architectural, feature, or structural changes are made to the codebase.
- Ensure that any new functionality, dependencies, or rules are reflected in these documentation files.

## File Structure & Responsibilities

- `index.html`: The semantic structure of the UI. Contains the `data-i18n` / `data-i18n-placeholder` tags used for localization. The UI is structured sequentially: Settings Panel, Results Panel (Converted Images), Upload Panel, Info Panel (Privacy Explanation), and finally the Footer (includes an optional Cookie-Clicker-style GitHub easter egg). Supported output formats in the format select: WebP, AVIF, PNG, JPEG, ICO, Favicon Pack. Includes the square crop modal markup (`#cropModal`) used by Favicon Pack.
- `style.css`: All styling using standard CSS variables (`:root`) for easy theming. The design language is a refined Neobrutalist dark theme (`#1e293b` background, `#334155` cards, dark `#0f172a` borders/shadows, and `#b6f228` primary accents) characterized by thick borders (`3px`), hard shadows (`4px 4px 0px`), physical click translate effects, and slightly rounded corners (`8px`). A light theme is available via `data-theme="light"`. Native form elements must be custom-styled. Font `@font-face` URLs must be **relative** (`./fonts/...`) *and* the font files must live in `fonts/` (repo root, next to `style.css`) — **never** in `public/`. Vite rewrites relative `url()` references it can resolve at build time and emits hashed copies into `assets/` beside the bundled CSS; assets copied verbatim from `public/` land in the dist root instead, so `./fonts/...` would resolve to `assets/fonts/...` and 404 in production. A build-time warning (`didn't resolve at build time`) is the signal this rule was broken. Font files are optional; without them the UI falls back to system fonts. Prefer `:focus-visible` rings for accessibility. Keep translated UI text overflow-safe (flexible theme-toggle width, wrapping/`ellipsis`, `min-width: 0` in flex children) so long DE/FR/IT labels do not clip. Crop modal styles live here (`.crop-modal`, `.crop-selection`, handles).
- `app.js`:
  - Handles the UI logic, drag & drop, theme toggle (persisted), custom accessible selects, and the localization (i18n) dictionary (English, German, French, Italian; language persisted).
  - Enforces a hard maximum dimension limit of 4096px across all output formats (`enforceLimits()`) to ensure stability.
  - Handles memory management gracefully (e.g., revoking Blob URLs when an individual image is removed or recompressed).
  - Contains the core logic for calculating image dimensions (bounding box vs. exact stretch based on the aspect ratio toggle).
  - Handles the Canvas generation, blob extraction, WASM fallbacks, ICO generation (single-image and multi-size), Favicon Pack ZIP building (`buildFaviconPackZip`), square crop modal (`openSquareCropModal` / `cropRegions`), and the bundling into JSZip (localized ZIP status/error strings). Bulk ZIP flattens favicon pack entries into per-image folders.
  - Favicon Pack assets: multi-size ICO; PNGs 16/32/48/96/180/192/512; maskable 192/512 (`createMaskableSquareCanvas`, ~80% safe zone); mstile set + `browserconfig.xml`; `favicon.svg` / `safari-pinned-tab.svg`; `site.webmanifest`; `icons.html` snippet.
  - Crop modal must be shown **before** measuring `#cropStage` (`layoutCropModal`); measuring while `display:none` yields 0×0 and breaks image/selection placement.
  - Yields to the event loop between heavy stages and shows a batch progress overlay (`#batchProgress`) while work is in flight.
  - Only auto-fills width/height inputs when they are empty (does not overwrite user-set limits on later uploads). Favicon Pack disables width/height/aspect/quality controls.
- `public/jszip.min.js`: Locally hosted dependency for generating ZIP archives, served statically by Vite (copied verbatim to the dist root — correct here, since `index.html` loads it via `<script src="/jszip.min.js">`, which Vite rewrites to the base-relative `./jszip.min.js` at build time).
- `fonts/`: Optional `.woff2` webfonts referenced from `style.css`. Must **not** move to `public/` (see the `style.css` note above).
- `tests/`: Node-runnable unit tests assembled by `run-tests.cjs` (`npm test`). The Test workflow (`.github/workflows/test.yml`) runs `npm test` and the Playwright E2E suite on every push/PR.
- `Dockerfile` / `nginx.conf` / `Caddyfile` / `.dockerignore`: self-hosting (Dokploy, Railpack, plain Docker). `nginx.conf` serves the Docker path, `Caddyfile` replaces Railpack's default when it serves the Vite output. **Keep the two in sync** — they must set the same headers.

## Deployment

- `app.js` is **browser** source with bare `@jsquash/*` imports that only Vite resolves. It must never be executed by Node: `node app.js` fails with `ERR_MODULE_NOT_FOUND`. Do not add a `start` script or a `main` field that points at it — that is what makes platforms auto-detect this as a Node service instead of a static site. `package.json` is marked `"private": true` and intentionally has no `main`.
- Serving configs must set `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp`. This enables `SharedArrayBuffer` and therefore the multithreaded AVIF encoder (`avif_enc_mt.wasm` + worker). It is only safe because the app loads no cross-origin subresources — adding one would break the page under COEP, which is a further reason to keep the no-external-requests rule.
- `.wasm` must be served as `application/wasm` (required by `WebAssembly.instantiateStreaming`) and compressed (~3.4 MB → ~1.1 MB).
- **Never add an SPA fallback** (`try_files ... /index.html`). There is no client-side routing, and a catch-all converts missing assets into HTTP 200s serving HTML — the failure mode that hid the webfont 404 for so long.

## Testing

- **Unit tests:** `npm test` runs Node.js tests in `tests/` via `run-tests.cjs`. Coverage includes dimensions/sanitize/escape/validation, encode paths (native + ICO + WASM-unavailable), downloadZip collisions/favicon folders, revokeStatusBlobUrl, createResultItem XSS escaping, handleFiles routing, handleInvalidFile, showError, triggerRecompress debounce/invalid-skip, clearAll teardown, removeResult panel visibility, createCroppedSquareCanvas, WASM init success/failure, batch progress, prefs, and Favicon Pack helpers (crop math, maskable/mstile geometry, SVG builders, full ZIP membership via mocked `JSZip` / `FileReader.readAsDataURL`).
- **E2E tests:** `npm run test:e2e` runs Playwright specs (`*.spec.js`) with an auto-started Vite dev server (`playwright.config.js`). Do not point Playwright at `tests/` — those are unit tests, not browser specs. E2E covers format/aspect UI, upload/clear, Favicon Pack crop + `*-favicon.zip`, bulk `converted_images.zip`, theme persistence, and format/quality recompress.
- **Custom selects:** Native `<select>` elements are hidden and replaced by `setupCustomSelects()`. Each wrapper exposes `data-select-id` matching the original select's `id`, and options expose `data-value`. The trigger supports keyboard navigation (Enter/Space, Arrow keys, Escape) and ARIA attributes (`role="combobox"`, `aria-expanded`, etc.). E2E tests must interact with the custom UI, not `#formatSelect.selectOption()`.

## Modifying UI & i18n
If adding new text to the UI:
1. Add a `data-i18n="yourKey"` attribute to the HTML element (use `data-i18n-placeholder` for input placeholders).
2. Update the `i18n` dictionary object in `app.js` for **all** supported languages (English, German, French, Italian).
3. If labels need to change dynamically based on state (like the Max Width / Exact Width toggle), modify the `updateDimensionLabels()` function in `app.js`.

## Deployment

- Production runs the root `Dockerfile` image (`ghcr.io/botvibe/image-converter:main`, published by `.github/workflows/docker-publish.yml`) via `deploy/compose.yml` behind a shared Caddy proxy on the `web` network. Production URL: https://image.rosentreter.site. GitHub Pages is shut down; do not re-add a Pages workflow.
- `nginx.conf` is the production server config. Keep `/healthz`, the `X-App-Revision` header (`__APP_REVISION__` placeholder, replaced at build) and the COOP/COEP headers; nginx drops inherited `add_header`s in any `location` that declares its own, so repeat them there.
- The container runs `read_only`; nginx may only write to the tmpfs paths in `deploy/compose.yml`.
- `Caddyfile` is only for Railpack/Dokploy and not used by the Docker image.
