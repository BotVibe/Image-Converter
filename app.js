// i18n dictionaries
const i18n = {
    en: {
        title: "Image Converter",
        settingsTitle: "Settings",
        targetFormat: "Target Format:",
        width: "Exact Width (px):",
        height: "Exact Height (px):",
        maxWidth: "Max Width (px):",
        maxHeight: "Max Height (px):",
        keepAspectRatio: "Keep Aspect Ratio",
        dropText: "Drag & Drop images here or click to select",
        resultsTitle: "Converted Images",
        downloadZip: "Download All as ZIP",
        clearAll: "Clear All",
        processing: "Processing...",
        success: "Done",
        error: "Error",
        remove: "Remove",
        download: "Download",
        quality: "Quality",
        original: "Original",
        compressed: "Compressed",
        howItWorksTitle: "How it works & Privacy",
        howItWorksText: "This tool converts your images directly within your browser. By utilizing your device's processing power and modern browser capabilities, no images are ever uploaded to an external server. This guarantees 100% privacy and lightning-fast processing, as your data never leaves your device.",
        githubRepo: "View Source on GitHub",
        invalidFileType: "Invalid image file type"
            },
    de: {
        title: "Bild Konverter",
        settingsTitle: "Einstellungen",
        targetFormat: "Zielformat:",
        width: "Exakte Breite (px):",
        height: "Exakte Höhe (px):",
        maxWidth: "Maximale Breite (px):",
        maxHeight: "Maximale Höhe (px):",
        keepAspectRatio: "Seitenverhältnis beibehalten",
        dropText: "Bilder hier ablegen (Drag & Drop) oder klicken zur Auswahl",
        resultsTitle: "Konvertierte Bilder",
        downloadZip: "Alle als ZIP herunterladen",
        clearAll: "Alle löschen",
        processing: "Verarbeite...",
        success: "Fertig",
        error: "Fehler",
        remove: "Entfernen",
        download: "Herunterladen",
        quality: "Qualität",
        original: "Original",
        compressed: "Komprimiert",
        howItWorksTitle: "Funktionsweise & Datenschutz",
        howItWorksText: "Dieses Tool konvertiert Ihre Bilder direkt in Ihrem Browser. Durch die Nutzung der Rechenleistung Ihres Geräts und moderner Browserfunktionen werden niemals Bilder auf einen externen Server hochgeladen. Dies garantiert 100% Datenschutz und eine blitzschnelle Verarbeitung, da Ihre Daten Ihr Gerät nie verlassen.",
        githubRepo: "Quellcode auf GitHub ansehen",
        invalidFileType: "Ungültiger Bilddateityp"
            },
    fr: {
        title: "Convertisseur d'Images",
        settingsTitle: "Paramètres",
        targetFormat: "Format cible:",
        width: "Largeur exacte (px):",
        height: "Hauteur exacte (px):",
        maxWidth: "Largeur max (px):",
        maxHeight: "Hauteur max (px):",
        keepAspectRatio: "Conserver les proportions",
        dropText: "Glissez et déposez des images ici ou cliquez pour sélectionner",
        resultsTitle: "Images Converties",
        downloadZip: "Tout télécharger en ZIP",
        clearAll: "Tout effacer",
        processing: "Traitement...",
        success: "Terminé",
        error: "Erreur",
        remove: "Supprimer",
        download: "Télécharger",
        quality: "Qualité",
        original: "Original",
        compressed: "Compressé",
        howItWorksTitle: "Comment ça marche et Confidentialité",
        howItWorksText: "Cet outil convertit vos images directement dans votre navigateur. En utilisant la puissance de traitement de votre appareil et les capacités des navigateurs modernes, aucune image n'est jamais téléchargée sur un serveur externe. Cela garantit une confidentialité à 100 % et un traitement ultra-rapide, car vos données ne quittent jamais votre appareil.",
        githubRepo: "Voir le code source sur GitHub",
        invalidFileType: "Type de fichier image invalide"
            },
    it: {
        title: "Convertitore di Immagini",
        settingsTitle: "Impostazioni",
        targetFormat: "Formato di destinazione:",
        width: "Larghezza esatta (px):",
        height: "Altezza esatta (px):",
        maxWidth: "Larghezza max (px):",
        maxHeight: "Altezza max (px):",
        keepAspectRatio: "Mantieni proporzioni",
        dropText: "Trascina le immagini qui o clicca per selezionare",
        resultsTitle: "Immagini Convertite",
        downloadZip: "Scarica tutto come ZIP",
        clearAll: "Cancella tutto",
        processing: "Elaborazione...",
        success: "Completato",
        error: "Errore",
        remove: "Rimuovi",
        download: "Scarica",
        quality: "Qualità",
        original: "Originale",
        compressed: "Compresso",
        howItWorksTitle: "Come funziona e Privacy",
        howItWorksText: "Questo strumento converte le tue immagini direttamente nel tuo browser. Utilizzando la potenza di elaborazione del tuo dispositivo e le moderne capacità del browser, nessuna immagine viene mai caricata su un server esterno. Questo garantisce il 100% di privacy e un'elaborazione fulminea, poiché i tuoi dati non lasciano mai il tuo dispositivo.",
        githubRepo: "Visualizza il codice sorgente su GitHub",
        invalidFileType: "Tipo di file immagine non valido"
            }
};

let currentLang = 'en';

function initI18n() {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'de', 'fr', 'it'].includes(browserLang)) {
        currentLang = browserLang;
    }
    document.getElementById('langSelect').value = currentLang;
    applyLanguage();

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        applyLanguage();
    });
}

function applyLanguage() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            if (el.tagName === 'INPUT' && el.type === 'placeholder') {
                el.placeholder = i18n[currentLang][key];
            } else {
                el.textContent = i18n[currentLang][key];
            }
        }
    });

    // Explicitly update document title if it exists in i18n
    if (i18n[currentLang] && i18n[currentLang]['title']) {
        document.title = i18n[currentLang]['title'];
    }
}

import encodeAvif, { init as initAvif } from '@jsquash/avif/encode';
import encodeWebp, { init as initWebp } from '@jsquash/webp/encode';

const convertedFiles = []; // To store blobs for ZIP
const originalFiles = new Map(); // To store original files mapping (id -> file)
const imageCache = new Map(); // To store decoded images (id -> ImageBitmap/HTMLImageElement)

let wasmInitialized = false;

// Check if browser natively supports the formats
const nativeSupport = {
    'image/webp': true,
    'image/avif': true
};

function checkNativeSupport() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    if (canvas.toDataURL('image/webp').indexOf('data:image/webp') !== 0) {
        nativeSupport['image/webp'] = false;
    }
    if (canvas.toDataURL('image/avif').indexOf('data:image/avif') !== 0) {
        nativeSupport['image/avif'] = false;
    }
}

async function initWasmIfNeeded() {
    if (wasmInitialized) return;
    try {
        // Only load WASM if the browser lacks native support for either
        if (!nativeSupport['image/webp'] || !nativeSupport['image/avif']) {
            await Promise.all([initAvif(), initWebp()]);
        }
        wasmInitialized = true;
    } catch (err) {
        console.error("Failed to initialize WASM encoders:", err);
    }
}

// Auto-recompress trigger
function triggerRecompress() {
    if (originalFiles.size > 0) {
        for (const [id, file] of originalFiles.entries()) {
            processImage(file, id);
        }
    }
}

function setupFormLimits() {
    const formatSelect = document.getElementById('formatSelect');
    const inputWidth = document.getElementById('inputWidth');
    const inputHeight = document.getElementById('inputHeight');

    const enforceLimits = () => {
        inputWidth.max = "4096";
        inputHeight.max = "4096";

        if (!inputWidth.value || parseInt(inputWidth.value) > 4096) {
            inputWidth.value = 4096;
        }
        if (!inputHeight.value || parseInt(inputHeight.value) > 4096) {
            inputHeight.value = 4096;
        }
    };

    const clampLimits = () => {
        if (inputWidth.value && parseInt(inputWidth.value) > 4096) inputWidth.value = 4096;
        if (inputHeight.value && parseInt(inputHeight.value) > 4096) inputHeight.value = 4096;
    };

    formatSelect.addEventListener('change', enforceLimits);
    inputWidth.addEventListener('change', enforceLimits);
    inputHeight.addEventListener('change', enforceLimits);
    inputWidth.addEventListener('input', clampLimits);
    inputHeight.addEventListener('input', clampLimits);

    enforceLimits();
}

function setupQualityAndFormat() {
    const formatSelect = document.getElementById('formatSelect');
    const inputWidth = document.getElementById('inputWidth');
    const inputHeight = document.getElementById('inputHeight');
    const qualitySlider = document.getElementById('qualitySlider');
    const qualityValue = document.getElementById('qualityValue');

    // Quality slider text update
    qualitySlider.addEventListener('input', (e) => {
        qualityValue.textContent = e.target.value;
    });

    qualitySlider.addEventListener('change', triggerRecompress);
    formatSelect.addEventListener('change', triggerRecompress);
    inputWidth.addEventListener('change', triggerRecompress);
    inputHeight.addEventListener('change', triggerRecompress);
}

function setupDragAndDrop() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');

    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFiles(e.target.files);
        }
        // Reset so the same file can be selected again
        fileInput.value = '';
    });
}

function setupActionButtons() {
    document.getElementById('clearBtn').addEventListener('click', clearAll);
    document.getElementById('downloadZipBtn').addEventListener('click', downloadZip);
}

function setupAspectRatioToggle() {
    const keepAspectRatio = document.getElementById('keepAspectRatio');
    const labelWidth = document.getElementById('labelWidth');
    const labelHeight = document.getElementById('labelHeight');

    function updateDimensionLabels() {
        if (keepAspectRatio.checked) {
            labelWidth.setAttribute('data-i18n', 'maxWidth');
            labelHeight.setAttribute('data-i18n', 'maxHeight');
        } else {
            labelWidth.setAttribute('data-i18n', 'width');
            labelHeight.setAttribute('data-i18n', 'height');
        }
        applyLanguage();
        triggerRecompress();
    }

    keepAspectRatio.addEventListener('change', updateDimensionLabels);
    // Init state
    updateDimensionLabels();
}

function initUI() {
    checkNativeSupport();
    initI18n();

    setupFormLimits();
    setupQualityAndFormat();
    setupDragAndDrop();
    setupActionButtons();
    setupAspectRatioToggle();
}

async function downloadZip() {
    if (convertedFiles.length === 0) return;

    const zipBtn = document.getElementById('downloadZipBtn');
    const originalText = zipBtn.textContent;
    zipBtn.textContent = 'Zipping...';
    zipBtn.disabled = true;

    try {
        const zip = new JSZip();
        const usedNames = new Set();

        convertedFiles.forEach(file => {
            let safeName = sanitizeFilename(file.name);

            // Handle filename collisions
            let finalName = safeName;
            let counter = 1;
            while (usedNames.has(finalName)) {
                const nameParts = safeName.split('.');
                if (nameParts.length > 1) {
                    const ext = nameParts.pop();
                    const base = nameParts.join('.');
                    finalName = `${base} (${counter}).${ext}`;
                } else {
                    finalName = `${safeName} (${counter})`;
                }
                counter++;
            }
            usedNames.add(finalName);

            zip.file(finalName, file.blob);
        });

        const content = await zip.generateAsync({ type: 'blob' });

        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'converted_images.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (e) {
        console.error("Error generating ZIP:", e);
        alert("Failed to generate ZIP");
    } finally {
        zipBtn.textContent = originalText;
        zipBtn.disabled = false;
    }
}


async function validateImageFile(file) {
    if (!file || !(file instanceof File)) return false;

    const extensionMatch = file.name.match(/\.([^.]+)$/);
    if (!extensionMatch) return false;
    const extension = extensionMatch[1].toLowerCase();

    const validExtensions = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif', 'bmp', 'svg'];
    if (!validExtensions.includes(extension)) return false;

    // SVG validation: read first 512 bytes as text and check for <svg or <?xml
    if (extension === 'svg') {
        const text = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = () => reject(new Error("Failed to read SVG file"));
            reader.readAsText(file.slice(0, 512));
        }).catch(() => null);

        if (!text) return false;

        // Simple heuristic: SVG must contain an xml declaration or an svg tag
        return (text.includes('<svg') || text.includes('<?xml'));
    }

    // Binary file validation using magic bytes
    const buffer = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(new Uint8Array(e.target.result));
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsArrayBuffer(file.slice(0, 16));
    }).catch(() => null);

    if (!buffer || buffer.length < 4) return false;

    const hexBytes = Array.from(buffer).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();

    // JPEG: FF D8 FF
    if ((extension === 'jpg' || extension === 'jpeg') && hexBytes.startsWith('FFD8FF')) return true;

    // PNG: 89 50 4E 47 0D 0A 1A 0A
    if (extension === 'png' && hexBytes.startsWith('89504E470D0A1A0A')) return true;

    // WebP: RIFF .... WEBP  (Bytes 0-3 are RIFF, Bytes 8-11 are WEBP)
    if (extension === 'webp' && buffer.length >= 12) {
        const riff = String.fromCharCode(buffer[0], buffer[1], buffer[2], buffer[3]);
        const webp = String.fromCharCode(buffer[8], buffer[9], buffer[10], buffer[11]);
        if (riff === 'RIFF' && webp === 'WEBP') return true;
    }

    // GIF: GIF87a or GIF89a
    if (extension === 'gif' && (hexBytes.startsWith('474946383761') || hexBytes.startsWith('474946383961'))) return true;

    // BMP: BM (42 4D)
    if (extension === 'bmp' && hexBytes.startsWith('424D')) return true;

    // AVIF: ftypavif (starting at byte 4) or ftypavis or similar
    if (extension === 'avif' && buffer.length >= 12) {
        const ftyp = String.fromCharCode(buffer[4], buffer[5], buffer[6], buffer[7]);
        const subtype = String.fromCharCode(buffer[8], buffer[9], buffer[10], buffer[11]);
        if (ftyp === 'ftyp' && (subtype === 'avif' || subtype === 'avis')) return true;
    }

    return false;
}

async function handleFiles(files) {
    const resultsPanel = document.getElementById('resultsPanel');
    resultsPanel.classList.remove('hidden');

    for (const file of files) {
        const isValid = await validateImageFile(file);
        if (isValid) {
            processImage(file);
        } else {
            handleInvalidFile(file);
        }
    }
}


function handleInvalidFile(file) {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    originalFiles.set(id, file); // Store so we can track and remove it

    // Use the existing createResultItem to build the UI element
    const li = createResultItem(id, file);

    // Update the UI to show the error state
    const statusContainer = document.getElementById(`status-${id}`);
    statusContainer.innerHTML = `
        <div class="action-buttons-row">
            <button class="btn delete-btn" title="${i18n[currentLang].remove}" onclick="removeResult('${id}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
        </div>
    `;

    // Set the meta text to the error message (red text)
    const metaContainer = document.getElementById(`meta-${id}`);
    metaContainer.innerHTML = `<span class="status-error" data-i18n="invalidFileType" style="color: #ff4b4b;">${i18n[currentLang].invalidFileType}</span>`;

    // Clear the preview image source or set a placeholder
    const preview = document.getElementById(`preview-${id}`);
    preview.style.display = 'none'; // Hide broken image icon
}

function calculateDimensions(origWidth, origHeight) {
    const keepAspect = document.getElementById('keepAspectRatio').checked;
    const targetWidth = parseInt(document.getElementById('inputWidth').value, 10);
    const targetHeight = parseInt(document.getElementById('inputHeight').value, 10);

    let newWidth = origWidth;
    let newHeight = origHeight;

    if (keepAspect) {
        // If keepAspect is true, inputs act as a bounding box (Max Width / Max Height)
        // We only scale DOWN if the image exceeds these limits.
        const widthRatio = targetWidth && (origWidth > targetWidth) ? targetWidth / origWidth : 1;
        const heightRatio = targetHeight && (origHeight > targetHeight) ? targetHeight / origHeight : 1;

        const ratio = Math.min(widthRatio, heightRatio);

        newWidth = origWidth * ratio;
        newHeight = origHeight * ratio;
    } else {
        // If keepAspect is false, inputs act as exact dimensions (stretch to fill)
        if (targetWidth) newWidth = targetWidth;
        if (targetHeight) newHeight = targetHeight;
    }

    return { width: Math.round(newWidth), height: Math.round(newHeight) };
}

function escapeHTML(str) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(str));
    // Also escape quotes to prevent attribute injection
    return p.innerHTML.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function sanitizeFilename(filename) {
    if (!filename || typeof filename !== 'string') return 'image';
    // 1. Replace backslashes with forward slashes for consistent processing
    let sanitized = filename.replace(/\\/g, '/');
    // 2. Extract only the base filename (last component of the path)
    // This effectively prevents Zip Slip by removing any directory context
    sanitized = sanitized.split('/').pop();
    // 3. Remove characters that are problematic across different filesystems
    // or could still be used for path traversal.
    sanitized = sanitized.replace(/[\\\/\x00-\x1f\x7f<>:"|?*]/g, '');
    // 4. Prevent "hidden" files or traversal dots at the start
    sanitized = sanitized.replace(/^[\s.]+/, '');
    // 5. Fallback for empty filenames
    return sanitized || 'image';
}

function createResultItem(id, originalFile) {
    const li = document.createElement('li');
    li.className = 'result-item';
    li.id = `item-${id}`;

    const safeName = escapeHTML(originalFile.name);
    // Determine preview text based on language, fallback to English
    const previewTextMap = {
        en: 'Preview of',
        de: 'Vorschau von',
        fr: 'Aperçu de',
        it: 'Anteprima di'
    };
    const previewPrefix = previewTextMap[currentLang] || previewTextMap.en;

    li.innerHTML = `
        <div class="result-info">
            <img src="" class="result-preview" id="preview-${id}" alt="${previewPrefix} ${safeName}">
            <div class="result-details">
                <span class="result-name">${safeName}</span>
                <span class="result-meta" id="meta-${id}">...</span>
            </div>
        </div>
        <div class="result-status" id="status-${id}">
            <span class="status-processing" data-i18n="processing">${i18n[currentLang].processing}</span>
        </div>
    `;

    document.getElementById('resultsList').appendChild(li);
    return li;
}

async function processImage(file, existingId = null) {
    const id = existingId || (Date.now() + Math.random().toString(36).substr(2, 9));

    if (!existingId) {
        originalFiles.set(id, file);
        createResultItem(id, file);
    } else {
        const statusContainer = document.getElementById(`status-${id}`);
        statusContainer.innerHTML = `<span class="status-processing" data-i18n="processing">${i18n[currentLang].processing}</span>`;
    }

    const format = document.getElementById('formatSelect').value;
    const extension = format.split('/')[1];

    // Get quality from slider
    const quality = parseInt(document.getElementById('qualitySlider').value, 10) / 100;

    try {
        // Initialize WASM tools lazily
        await initWasmIfNeeded();

        let img;
        if (imageCache.has(id)) {
            img = imageCache.get(id);
        } else {
            const rawImg = await loadImage(file);
            // Use ImageBitmap for better performance if supported
            if (window.createImageBitmap) {
                img = await createImageBitmap(rawImg);
                imageCache.set(id, img);
            } else {
                img = rawImg;
                imageCache.set(id, img);
            }
        }

        const { width, height } = calculateDimensions(img.width, img.height);

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Draw image directly to preserve transparency
        ctx.drawImage(img, 0, 0, width, height);

        // Generate a low-res preview to prevent UI freezing on huge images
        const previewCanvas = document.createElement('canvas');
        const prevCtx = previewCanvas.getContext('2d');
        const MAX_PREV_SIZE = 100;
        const prevRatio = Math.min(MAX_PREV_SIZE / width, MAX_PREV_SIZE / height);
        previewCanvas.width = width * prevRatio;
        previewCanvas.height = height * prevRatio;
        prevCtx.drawImage(img, 0, 0, previewCanvas.width, previewCanvas.height);

        const previewUrl = previewCanvas.toDataURL('image/png', 0.5);
        document.getElementById(`preview-${id}`).src = previewUrl;

        let blob;
        let actualFormat = format;
        let actualExtension = extension;

        // If format is WebP or AVIF AND browser lacks native support, use WASM Encoder!
        if (format === 'image/avif' && !nativeSupport['image/avif']) {

            const imageData = ctx.getImageData(0, 0, width, height);
            const qualityValue = Math.round(quality * 100); // 1 to 100
            const buffer = await encodeAvif(imageData, { quality: qualityValue });
            blob = new Blob([buffer], { type: 'image/avif' });
            actualFormat = 'image/avif';
            actualExtension = 'avif';
        } else if (format === 'image/webp' && !nativeSupport['image/webp']) {

            const imageData = ctx.getImageData(0, 0, width, height);
            const qualityValue = quality * 100;
            const buffer = await encodeWebp(imageData, { quality: qualityValue });
            blob = new Blob([buffer], { type: 'image/webp' });
            actualFormat = 'image/webp';
            actualExtension = 'webp';
        } else {
            // Use Native Browser Encoding
            blob = await new Promise((resolve) => {
                canvas.toBlob(resolve, format, quality);
            });

            // Safety check against silent fail -> fallback to PNG (shouldnt happen anymore but just in case)
            if (blob && format !== blob.type) {
                actualFormat = blob.type;
                actualExtension = actualFormat.split('/')[1];
            }
        }

        if (!blob) {
            showError(id);
            return;
        }

        const safeBaseName = sanitizeFilename(file.name).replace(/\.[^/.]+$/, "");
        const newName = safeBaseName + `.${actualExtension}`;

        // Store for ZIP
        const existingIndex = convertedFiles.findIndex(f => f.id === id);
        if (existingIndex > -1) {
            convertedFiles.splice(existingIndex, 1);
        }
        convertedFiles.push({ id: id, name: newName, blob: blob });

        const blobUrl = URL.createObjectURL(blob);

        // Format sizes nicely
        const origSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        let compSizeStr = '';
        if (blob.size > 1024 * 1024) {
            compSizeStr = (blob.size / (1024 * 1024)).toFixed(2) + ' MB';
        } else {
            compSizeStr = (blob.size / 1024).toFixed(1) + ' KB';
        }

        document.getElementById(`meta-${id}`).innerHTML = `
            ${width}x${height}px •
            <span data-i18n="original">${i18n[currentLang].original}</span>: ${origSizeMB} MB
            &rarr;
            <span data-i18n="compressed">${i18n[currentLang].compressed}</span>: ${compSizeStr}
        `;

        const statusContainer = document.getElementById(`status-${id}`);

        // Display normal success state regardless of whether WASM polyfill was used
        statusContainer.innerHTML = `
            <div class="action-buttons-row">
                <a href="${blobUrl}" download="${escapeHTML(newName)}" class="btn primary" style="text-decoration:none; display:inline-block;">
                    <span data-i18n="download">${i18n[currentLang].download}</span>
                </a>
                <button class="btn delete-btn" title="${i18n[currentLang].remove}" onclick="removeResult('${id}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
        `;

    } catch (e) {
        showError(id);
        console.error("Error processing image:", e);
    }
}

function loadImage(file) {
    return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
            URL.revokeObjectURL(url);
            resolve(img);
        };
        img.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error("Failed to load image"));
        };
        img.src = url;
    });
}

function showError(id) {
    const statusContainer = document.getElementById(`status-${id}`);
    statusContainer.innerHTML = `<span class="status-error" data-i18n="error">${i18n[currentLang].error}</span>`;
}


window.removeResult = function(id) {
    const li = document.getElementById(`item-${id}`);
    if (!li) return;

    // Revoke object URLs to prevent memory leaks
    const preview = li.querySelector('.result-preview');
    if (preview && preview.src.startsWith('blob:')) {
        URL.revokeObjectURL(preview.src);
    }
    const download = li.querySelector('a[download]');
    if (download && download.href.startsWith('blob:')) {
        URL.revokeObjectURL(download.href);
    }

    li.remove();
    originalFiles.delete(id);

    // Release cached image
    if (imageCache.has(id)) {
        const cachedImg = imageCache.get(id);
        if (cachedImg.close) cachedImg.close(); // Close ImageBitmap
        imageCache.delete(id);
    }

    const index = convertedFiles.findIndex(f => f.id === id);
    if (index > -1) convertedFiles.splice(index, 1);

    if (convertedFiles.length === 0) {
        document.getElementById('resultsPanel').classList.add('hidden');
    }
};

function clearAll() {
    // Revoke object URLs to prevent memory leaks
    const links = document.querySelectorAll('#resultsList a[download]');
    links.forEach(link => {
        if (link.href.startsWith('blob:')) {
            URL.revokeObjectURL(link.href);
        }
    });

    const previews = document.querySelectorAll('#resultsList img.result-preview');
    previews.forEach(img => {
        if (img.src.startsWith('blob:')) {
            URL.revokeObjectURL(img.src);
        }
    });

    document.getElementById('resultsList').innerHTML = '';
    document.getElementById('resultsPanel').classList.add('hidden');
    convertedFiles.length = 0;
    originalFiles.clear();

    // Release all cached images
    for (const cachedImg of imageCache.values()) {
        if (cachedImg.close) cachedImg.close();
    }
    imageCache.clear();
}

document.addEventListener('DOMContentLoaded', () => {
    initUI();
});

export { calculateDimensions };
