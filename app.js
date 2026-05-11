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
        download: "Download"
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
        download: "Herunterladen"
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
        download: "Télécharger"
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
        download: "Scarica"
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

function initUI() {
    initI18n();

    const formatSelect = document.getElementById('formatSelect');
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
    return p.innerHTML;
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

async function processImage(file) {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    createResultItem(id, file);

    const format = document.getElementById('formatSelect').value;
    const extension = format.split('/')[1];

    try {
        const img = await loadImage(file);
        const { width, height } = calculateDimensions(img.width, img.height);

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Draw image directly to preserve transparency
        ctx.drawImage(img, 0, 0, width, height);

        const previewUrl = canvas.toDataURL('image/png', 0.5);
        document.getElementById(`preview-${id}`).src = previewUrl;

        canvas.toBlob((blob) => {
            if (!blob) {
                showError(id);
                return;
            }

            const newName = file.name.replace(/\.[^/.]+$/, "") + `.${extension}`;

            // Store for ZIP
            convertedFiles.push({ name: newName, blob: blob });

            const blobUrl = URL.createObjectURL(blob);
            const sizeKB = (blob.size / 1024).toFixed(1);

            document.getElementById(`meta-${id}`).textContent = `${width}x${height}px • ${sizeKB} KB`;

            const statusContainer = document.getElementById(`status-${id}`);
            statusContainer.innerHTML = `
                <a href="${blobUrl}" download="${escapeHTML(newName)}" class="btn primary" style="text-decoration:none; display:inline-block;">
                    <span data-i18n="download">${i18n[currentLang].download}</span>
                </a>
            `;

        }, format, 0.9); // 0.9 quality
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
    document.getElementById('resultsList').innerHTML = '';
    document.getElementById('resultsPanel').classList.add('hidden');
    convertedFiles.length = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    initUI();
});
