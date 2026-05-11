# Privacy-First Local Image Converter

A simple, fast, and 100% privacy-compliant image converter built entirely with Vanilla JavaScript, HTML, and CSS. The tool runs completely in the browser without sending any data to external servers.

## Features

- **Format Conversion:** Convert common image formats (JPEG, PNG, etc.) to **WebP**, **AVIF**, and **PNG** directly in the browser using the native HTML5 Canvas API.
- **Smart Resizing:**
  - **Maintain Aspect Ratio (Bounding Box):** Set a *Max Width* and *Max Height*. The image will scale down proportionally to fit inside these bounds without distortion.
  - **Exact Dimensions (Stretch):** Uncheck the aspect ratio box to force the image to exact *Width* and *Height* dimensions.
- **Batch Processing:** Upload multiple images via Drag & Drop or file selection.
- **Bulk Download:** Download converted images individually or bundled as a ZIP file.
- **100% Privacy:** All processing happens client-side. The required `JSZip` library is hosted locally, ensuring absolutely zero external network requests or tracking.
- **Multilingual UI:** Supports English, German, French, and Italian with auto-detection based on browser language.

## Usage / Setup

Because the application relies purely on static files, no complex build steps or package managers (like npm/yarn) are required.

### Local Development / Usage
1. Clone or download this repository.
2. Simply open `index.html` in any modern web browser.
3. *Note: If you run into Cross-Origin (CORS) issues when loading local files in some strict browsers, you can start a simple local server:*
   ```bash
   python -m http.server 8000
   # or
   npx serve
   ```

### Webflow & Transparency
This tool was built with Webflow compatibility in mind. Conversions to PNG, WebP, and AVIF will preserve image transparency automatically.

## Browser Support
- **Chrome / Edge / Opera:** Full support (including AVIF).
- **Firefox:** Full support.
- **Safari:** Full support (AVIF supported in modern versions).

*If AVIF conversion fails or produces a broken file, it is likely due to the specific browser engine lacking native support for the `canvas.toBlob('image/avif')` encoder or the image exceeding strict AVIF dimension limits.*
