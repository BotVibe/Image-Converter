# Privacy-First Local Image Converter

A simple, fast, and 100% privacy-compliant image converter built entirely with Vanilla JavaScript, HTML, CSS and powered by Vite & WebAssembly. The tool runs completely in the browser without sending any data to external servers.

## Features

- **Format Conversion:** Convert common image formats (JPEG, PNG, etc.) to **WebP**, **AVIF**, and **PNG** directly in the browser. Uses native Canvas APIs where supported, and falls back to WebAssembly polyfills (`@jsquash`) for guaranteed compatibility (e.g., AVIF on Safari).
- **Smart Resizing:**
  - **Maintain Aspect Ratio (Bounding Box):** Set a *Max Width* and *Max Height*. The image will scale down proportionally to fit inside these bounds without distortion.
  - **Exact Dimensions (Stretch):** Uncheck the aspect ratio box to force the image to exact *Width* and *Height* dimensions.
- **Batch Processing:** Upload multiple images via Drag & Drop or file selection.
- **Bulk Download:** Download converted images individually or bundled as a ZIP file.
- **100% Privacy:** All processing happens client-side. The required `JSZip` library is hosted locally, ensuring absolutely zero external network requests or tracking.
- **Multilingual UI:** Supports English, German, French, and Italian with auto-detection based on browser language.

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

### Webflow & Transparency
This tool was built with Webflow compatibility in mind. Conversions to PNG, WebP, and AVIF will preserve image transparency automatically.

## Browser Support
- **Chrome / Edge / Opera:** Full support.
- **Firefox:** Full support.
- **Safari:** Full support (Using WebAssembly Polyfill for AVIF).