# Privacy-First Local Image Converter

A simple, fast, and 100% privacy-compliant image converter built entirely with Vanilla JavaScript, HTML, CSS and powered by Vite & WebAssembly. The tool runs completely in the browser without sending any data to external servers.

## Features

- **Format Conversion:** Convert common image formats (JPEG, PNG, WebP, AVIF, GIF, BMP, SVG) to **WebP**, **AVIF**, **PNG**, **JPEG**, **ICO**, or a **Favicon Pack** directly in the browser. Uses native Canvas APIs where supported, and falls back to WebAssembly polyfills (`@jsquash`) for guaranteed compatibility (e.g., AVIF on Safari).
- **Favicon Pack:** Pick a square crop, then download a ZIP with a multi-size `favicon.ico` (16/32/48/256), standard PNGs (`favicon-16x16`, `favicon-32x32`, `apple-touch-icon` 180, Android 192/512), and a minimal `site.webmanifest`. Bulk “Download All” nests each pack’s files in a folder (not nested ZIPs).
- **Smart Resizing:**
  - **Maintain Aspect Ratio (Bounding Box):** Set a *Max Width* and *Max Height*. The image will scale down proportionally to fit inside these bounds without distortion.
  - **Exact Dimensions (Stretch):** Uncheck the aspect ratio box to force the image to exact *Width* and *Height* dimensions.
  - **Safe Limits:** To ensure optimal performance and compatibility, output dimensions are automatically clamped to a maximum of 4096px across all formats. ICO outputs are additionally scaled to fit within 256×256. Favicon Pack ignores width/height/quality settings and uses fixed icon sizes after the square crop.
- **Batch Processing:** Upload multiple images via Drag & Drop or file selection. Invalid or failed items appear in the results list with a remove action. While work runs, a progress overlay shows batch completion (e.g. `3 / 12`) and the pipeline yields to the UI between heavy steps to reduce freezes.
- **Item Management:** Individually remove processed, invalid, or failed images from the list if you decide not to keep them.
- **Bulk Download:** Download converted images individually or bundled as a ZIP file.
- **Light & Dark Themes:** Toggle between light and dark Neobrutalist themes. The choice is stored in `localStorage` (and falls back to `prefers-color-scheme` on first visit).
- **Refined Neobrutalism Design:** Features a refined Neobrutalist dark theme (using a softer slate `#1e293b` background, dark `#0f172a` hard shadows, and `#b6f228` accents) with fully styled native elements and physical click effects. Inter and Plus Jakarta Sans are referenced via relative `@font-face` paths (`./fonts/*.woff2`) so they work on GitHub Pages; system fonts are used if the files are not present.
- **100% Privacy:** All processing happens client-side. The required `JSZip` library is hosted locally, ensuring absolutely zero external network requests or tracking. Theme/language preferences stay in local storage only. An explanation of how this works is explicitly shown in the UI.
- **Multilingual UI:** Supports English, German, French, and Italian with auto-detection based on browser language (remembered via `localStorage`).
- **Input Validation:** Files are checked by extension and magic bytes (or SVG heuristics) before processing.
- **Footer Easter Egg:** Optional Cookie-Clicker-style “Hard Way” path to the GitHub repository in the footer.

> **Note on Documentation Maintenance:** The documentation for this project, including this `README.md` and the `AGENTS.md` guidelines, is automatically maintained and updated by AI agents as the project evolves to ensure it remains accurate and up-to-date with any significant architectural or feature changes.

## Usage / Setup

This project uses Vite to bundle the WebAssembly encoders efficiently.

### Local Development
1. Clone or download this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

### Building for Production
1. Run the build command:
   ```bash
   npm run build
   ```
2. The static files will be placed into the `dist/` folder. You can deploy this entire folder to any static hosting provider.

### Tests
```bash
npm test          # Unit tests (Node.js)
npm run test:e2e  # End-to-end tests (Playwright)
npm run test:all  # Both test suites
```
Unit tests also run in the Deploy workflow before the production build. E2E tests run via the dedicated Test workflow (`.github/workflows/test.yml`) on push/PR.

### Automated Deployment (GitHub Pages)
This repository includes a GitHub Action (`.github/workflows/deploy.yml`) that runs unit tests (`npm test`), builds with Vite, and deploys to GitHub Pages whenever changes are pushed to the `main` branch.
To enable it:
1. Go to your repository settings on GitHub.
2. Navigate to **Pages** in the left sidebar.
3. Under **Build and deployment -> Source**, select **GitHub Actions**.

### Optional Assets
- Fonts: place `Inter-*.woff2` and `PlusJakartaSans-*.woff2` under `fonts/` (referenced as `./fonts/...` from `style.css`). Without them, the UI falls back to system fonts.
- Social preview: `og-image.jpg` is referenced in meta tags but is optional; add it under the site root / `public/` if you want rich link previews.

### Transparency & Format Notes
- Conversions to **PNG**, **WebP**, and **AVIF** preserve image transparency.
- **JPEG** does not support transparency; transparent pixels are filled with white before encoding.
- **GIF** animations are flattened to a single frame (first frame / browser decode result).
- **ICO** outputs are capped at 256×256 while preserving aspect ratio. Favicon Pack builds a multi-size ICO (16/32/48/256) from the square crop.
- **Favicon Pack** requires a square crop (largest centered square by default); crop can be edited per result before regenerating the ZIP.

## Browser Support
- **Chrome / Edge / Opera:** Full support.
- **Firefox:** Full support.
- **Safari:** Full support (Using WebAssembly Polyfill for AVIF when native encoding is unavailable).
