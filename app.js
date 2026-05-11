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
        avifWarning: "AVIF has strict size limits. Ensure your dimensions are not too large.",
        dropText: "Drag & Drop images here or click to select",
        resultsTitle: "Converted Images",
        downloadZip: "Download All as ZIP",
        clearAll: "Clear All",
        processing: "Processing...",
        success: "Done",
        error: "Error",
        download: "Download Compressed File",
        quality: "Quality",
        original: "Original",
        compressed: "Compressed",
        unsupportedFormat: "Your browser does not support converting to this format. It fell back to PNG.",
        showDetails: "Show Details"
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
        avifWarning: "AVIF hat strenge Größenlimits. Bei großen Bildern bitte die Dimensionen anpassen.",
        dropText: "Bilder hier ablegen (Drag & Drop) oder klicken zur Auswahl",
        resultsTitle: "Konvertierte Bilder",
        downloadZip: "Alle als ZIP herunterladen",
        clearAll: "Alle löschen",
        processing: "Verarbeite...",
        success: "Fertig",
        error: "Fehler",
        download: "Komprimierte Datei herunterladen",
        quality: "Qualität",
        original: "Original",
        compressed: "Komprimiert",
        unsupportedFormat: "Ihr Browser unterstützt die Konvertierung in dieses Format nicht. Es wurde auf PNG zurückgegriffen.",
        showDetails: "Details anzeigen"
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
        avifWarning: "AVIF a des limites de taille strictes. Pensez à ajuster vos dimensions.",
        dropText: "Glissez et déposez des images ici ou cliquez pour sélectionner",
        resultsTitle: "Images Converties",
        downloadZip: "Tout télécharger en ZIP",
        clearAll: "Tout effacer",
        processing: "Traitement...",
        success: "Terminé",
        error: "Erreur",
        download: "Télécharger le Fichier Compressé",
        quality: "Qualité",
        original: "Original",
        compressed: "Compressé",
        unsupportedFormat: "Votre navigateur ne prend pas en charge la conversion vers ce format. Un repli vers PNG a été effectué.",
        showDetails: "Afficher les détails"
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
        avifWarning: "AVIF ha limiti di dimensione rigidi. Considera di impostare dimensioni adeguate.",
        dropText: "Trascina le immagini qui o clicca per selezionare",
        resultsTitle: "Immagini Convertite",
        downloadZip: "Scarica tutto come ZIP",
        clearAll: "Cancella tutto",
        processing: "Elaborazione...",
        success: "Completato",
        error: "Errore",
        download: "Scarica File Compresso",
        quality: "Qualità",
        original: "Originale",
        compressed: "Compresso",
        unsupportedFormat: "Il tuo browser non supporta la conversione in questo formato. È stato utilizzato il formato PNG.",
        showDetails: "Mostra Dettagli"
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
}

const convertedFiles = []; // To store blobs for ZIP
const originalFiles = new Map(); // To store original files mapping (id -> file)

// Test browser format support
const supportedFormats = {
    'image/webp': true,
    'image/avif': true,
    'image/png': true
};

function checkFormatSupport() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;

    // Test WebP
    if (canvas.toDataURL('image/webp').indexOf('data:image/webp') !== 0) {
        supportedFormats['image/webp'] = false;
    }

    // Test AVIF
    if (canvas.toDataURL('image/avif').indexOf('data:image/avif') !== 0) {
        supportedFormats['image/avif'] = false;
    }
}

function initUI() {
    checkFormatSupport();

    const formatSelect = document.getElementById('formatSelect');
    const formatWarning = document.getElementById('formatWarning');

    // Disable unsupported options
    Array.from(formatSelect.options).forEach(option => {
        if (!supportedFormats[option.value]) {
            option.disabled = true;
            option.textContent += ' (Not Supported)';
        }
    });

    // If initially selected format is not supported, switch to PNG
    if (!supportedFormats[formatSelect.value]) {
        formatSelect.value = 'image/png';
    }

    initI18n();

    const avifWarning = document.getElementById('avifWarning');

    formatSelect.addEventListener('change', (e) => {
        if (e.target.value === 'image/avif') {
            avifWarning.classList.remove('hidden');
        } else {
            avifWarning.classList.add('hidden');
        }
    });

    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const qualitySlider = document.getElementById('qualitySlider');
    const qualityValue = document.getElementById('qualityValue');
    const inputWidth = document.getElementById('inputWidth');
    const inputHeight = document.getElementById('inputHeight');

    // Quality slider text update
    qualitySlider.addEventListener('input', (e) => {
        qualityValue.textContent = e.target.value;
    });

    // Auto-recompress trigger
    const triggerRecompress = () => {
        if (originalFiles.size > 0) {
            for (const [id, file] of originalFiles.entries()) {
                processImage(file, id);
            }
        }
    };

    qualitySlider.addEventListener('change', triggerRecompress);
    formatSelect.addEventListener('change', triggerRecompress);
    inputWidth.addEventListener('change', triggerRecompress);
    inputHeight.addEventListener('change', triggerRecompress);

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

    document.getElementById('clearBtn').addEventListener('click', clearAll);
    document.getElementById('downloadZipBtn').addEventListener('click', downloadZip);

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

async function downloadZip() {
    if (convertedFiles.length === 0) return;

    const zipBtn = document.getElementById('downloadZipBtn');
    const originalText = zipBtn.textContent;
    zipBtn.textContent = 'Zipping...';
    zipBtn.disabled = true;

    try {
        const zip = new JSZip();

        convertedFiles.forEach(file => {
            zip.file(file.name, file.blob);
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

function handleFiles(files) {
    const resultsPanel = document.getElementById('resultsPanel');
    resultsPanel.classList.remove('hidden');

    for (const file of files) {
        if (!file.type.startsWith('image/')) continue;
        processImage(file);
    }
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

function createResultItem(id, originalFile) {
    const li = document.createElement('li');
    li.className = 'result-item';
    li.id = `item-${id}`;

    li.innerHTML = `
        <div class="result-info">
            <img src="" class="result-preview" id="preview-${id}" alt="Preview">
            <div class="result-details">
                <span class="result-name">${escapeHTML(originalFile.name)}</span>
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
        const img = await loadImage(file);
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

        canvas.toBlob((blob) => {
            if (!blob) {
                showError(id);
                return;
            }

            // Check if fallback to PNG occurred
            let actualFormat = blob.type;
            let actualExtension = actualFormat.split('/')[1];
            let hasFormatError = false;

            if (format !== actualFormat) {
                hasFormatError = true;
                actualExtension = 'png'; // Browsers fallback to PNG
            }

            const newName = file.name.replace(/\.[^/.]+$/, "") + `.${actualExtension}`;

            // Store for ZIP
            // Remove old entry if exists (for re-compression)
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

            if (hasFormatError) {
                statusContainer.innerHTML = `
                    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
                        <a href="${blobUrl}" download="${escapeHTML(newName)}" class="btn primary" style="text-decoration:none; display:inline-block;">
                            <span data-i18n="download">${i18n[currentLang].download}</span>
                        </a>
                        <button class="btn secondary" style="font-size: 0.8rem; padding: 0.2rem 0.5rem;" onclick="document.getElementById('error-details-${id}').classList.toggle('hidden')">
                            <span data-i18n="showDetails">${i18n[currentLang].showDetails}</span>
                        </button>
                    </div>
                    <div id="error-details-${id}" class="error-details hidden" data-i18n="unsupportedFormat">
                        ${i18n[currentLang].unsupportedFormat}
                    </div>
                `;
            } else {
                statusContainer.innerHTML = `
                    <a href="${blobUrl}" download="${escapeHTML(newName)}" class="btn primary" style="text-decoration:none; display:inline-block;">
                        <span data-i18n="download">${i18n[currentLang].download}</span>
                    </a>
                `;
            }

        }, format, quality);
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
}

document.addEventListener('DOMContentLoaded', () => {
    initUI();
});
