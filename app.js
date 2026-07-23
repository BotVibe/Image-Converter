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
        qualityNotSupported: "This file format inherently does not support quality settings.",
        howItWorksTitle: "How it works & Privacy",
        howItWorksText: "This tool converts your images directly within your browser. By utilizing your device's processing power and modern browser capabilities, no images are ever uploaded to an external server. This guarantees 100% privacy and lightning-fast processing, as your data never leaves your device.",
        githubRepo: "View Source on GitHub",
        invalidFileType: "Invalid image file type",
        footerGameTitle: "Want to see the source code?",
        easyWayBtn: "The Easy Way (Boring)",
        hardWayBtn: "The Hard Way (Cookie Clicker)",
        skipBtn: "I give up, take me there!",
        clicksText: "Clicks:",
        upgradeMultiplier: "Cursor Power",
        upgradeAutoClicker: "Auto-Clicker",
        costText: "Cost:",
        levelText: "Lvl",
        cpsText: "per sec",
        upgradeMultiplierHint: "+1 Click/Click",
        upgradeAutoHint: "+1 Auto/Sec",
        megaRepoBtn: "Open Git Repo",
        critChanceTitle: "Crit Chance",
        critDamageTitle: "Crit Damage",
        autoCritChanceTitle: "Auto Crit Chance",
        autoCritDamageTitle: "Auto Crit Damage",
        critChanceHint: "+1% Chance",
        critDamageHint: "+1 Dmg",
        maxLevel: "Max",
        clickHint: "*Click*",
        lightMode: "LIGHT MODE",
        darkMode: "DARK MODE",
        themeToggleLabel: "Toggle color theme",
        autoPlaceholder: "Auto",
        previewOf: "Preview of",
        zipping: "Zipping...",
        zipError: "Failed to generate ZIP",
        wasmEncoderUnavailable: "WebP/AVIF encoder unavailable in this browser",
        batchProcessing: "Processing images…",
        batchProgressOf: "{current} / {total}",
        cropTitle: "Select favicon area",
        cropHint: "Drag the square to move it. Use the corners to resize.",
        cropCancel: "Cancel",
        cropConfirm: "Use crop",
        cropEdit: "Crop",
        faviconPackHint: "Favicon packs use fixed icon sizes. Choose a square crop for each image.",
        faviconPackMeta: "Favicon Pack"
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
        qualityNotSupported: "Dieses Dateiformat unterstützt systembedingt keine Qualitätseinstellungen.",
        howItWorksTitle: "Funktionsweise & Datenschutz",
        howItWorksText: "Dieses Tool konvertiert Ihre Bilder direkt in Ihrem Browser. Durch die Nutzung der Rechenleistung Ihres Geräts und moderner Browserfunktionen werden niemals Bilder auf einen externen Server hochgeladen. Dies garantiert 100% Datenschutz und eine blitzschnelle Verarbeitung, da Ihre Daten Ihr Gerät nie verlassen.",
        githubRepo: "Quellcode auf GitHub ansehen",
        invalidFileType: "Ungültiger Bilddateityp",
        footerGameTitle: "Willst du den Quellcode sehen?",
        easyWayBtn: "Der einfache Weg (Langweilig)",
        hardWayBtn: "Der harte Weg (Cookie Clicker)",
        skipBtn: "Ich gebe auf, bring mich hin!",
        clicksText: "Klicks:",
        upgradeMultiplier: "Maus-Upgrade",
        upgradeAutoClicker: "Auto-Klicker",
        costText: "Kosten:",
        levelText: "Lvl",
        cpsText: "pro Sek",
        upgradeMultiplierHint: "+1 Klick/Klick",
        upgradeAutoHint: "+1 Auto/Sek",
        megaRepoBtn: "Git-Repo öffnen",
        critChanceTitle: "Krit-Chance",
        critDamageTitle: "Krit-Schaden",
        autoCritChanceTitle: "Auto Krit-Chance",
        autoCritDamageTitle: "Auto Krit-Schaden",
        critChanceHint: "+1% Chance",
        critDamageHint: "+1 Schaden",
        maxLevel: "Max",
        clickHint: "*Klick*",
        lightMode: "HELLMODUS",
        darkMode: "DUNKELMODUS",
        themeToggleLabel: "Farbschema umschalten",
        autoPlaceholder: "Auto",
        previewOf: "Vorschau von",
        zipping: "ZIP wird erstellt...",
        zipError: "ZIP konnte nicht erstellt werden",
        wasmEncoderUnavailable: "WebP/AVIF-Encoder in diesem Browser nicht verfügbar",
        batchProcessing: "Bilder werden verarbeitet…",
        batchProgressOf: "{current} / {total}",
        cropTitle: "Favicon-Bereich wählen",
        cropHint: "Quadrat verschieben oder an den Ecken skalieren.",
        cropCancel: "Abbrechen",
        cropConfirm: "Zuschneiden",
        cropEdit: "Zuschneiden",
        faviconPackHint: "Favicon-Pakete nutzen feste Icon-Größen. Wähle pro Bild einen quadratischen Ausschnitt.",
        faviconPackMeta: "Favicon-Paket"
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
        qualityNotSupported: "Ce format de fichier ne prend intrinsèquement pas en charge les réglages de qualité.",
        howItWorksTitle: "Comment ça marche et Confidentialité",
        howItWorksText: "Cet outil convertit vos images directement dans votre navigateur. En utilisant la puissance de traitement de votre appareil et les capacités des navigateurs modernes, aucune image n'est jamais téléchargée sur un serveur externe. Cela garantit une confidentialité à 100 % et un traitement ultra-rapide, car vos données ne quittent jamais votre appareil.",
        githubRepo: "Voir le code source sur GitHub",
        invalidFileType: "Type de fichier image invalide",
        footerGameTitle: "Voulez-vous voir le code source ?",
        easyWayBtn: "La voie facile (Ennuyeux)",
        hardWayBtn: "La voie difficile (Cookie Clicker)",
        skipBtn: "J'abandonne, emmène-moi là-bas !",
        clicksText: "Clics :",
        upgradeMultiplier: "Puissance de clic",
        upgradeAutoClicker: "Auto-cliqueur",
        costText: "Coût :",
        levelText: "Niv",
        cpsText: "par sec",
        upgradeMultiplierHint: "+1 Clic/Clic",
        upgradeAutoHint: "+1 Auto/Sec",
        megaRepoBtn: "Ouvrir le Dépôt Git",
        critChanceTitle: "Chance Crit",
        critDamageTitle: "Dégâts Crit",
        autoCritChanceTitle: "Auto Chance Crit",
        autoCritDamageTitle: "Auto Dégâts Crit",
        critChanceHint: "+1% Chance",
        critDamageHint: "+1 Dégât",
        maxLevel: "Max",
        clickHint: "*Clic*",
        lightMode: "MODE CLAIR",
        darkMode: "MODE SOMBRE",
        themeToggleLabel: "Changer le thème de couleur",
        autoPlaceholder: "Auto",
        previewOf: "Aperçu de",
        zipping: "Compression...",
        zipError: "Échec de la génération du ZIP",
        wasmEncoderUnavailable: "Encodeur WebP/AVIF indisponible dans ce navigateur",
        batchProcessing: "Traitement des images…",
        batchProgressOf: "{current} / {total}",
        cropTitle: "Sélectionner la zone du favicon",
        cropHint: "Faites glisser le carré pour le déplacer. Utilisez les coins pour redimensionner.",
        cropCancel: "Annuler",
        cropConfirm: "Utiliser",
        cropEdit: "Recadrer",
        faviconPackHint: "Les packs favicon utilisent des tailles fixes. Choisissez un recadrage carré pour chaque image.",
        faviconPackMeta: "Pack Favicon"
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
        qualityNotSupported: "Questo formato di file non supporta nativamente le impostazioni di qualità.",
        howItWorksTitle: "Come funziona e Privacy",
        howItWorksText: "Questo strumento converte le tue immagini direttamente nel tuo browser. Utilizzando la potenza di elaborazione del tuo dispositivo e le moderne capacità del browser, nessuna immagine viene mai caricata su un server esterno. Questo garantisce il 100% di privacy e un'elaborazione fulminea, poiché i tuoi dati non lasciano mai il tuo dispositivo.",
        githubRepo: "Visualizza il codice sorgente su GitHub",
        invalidFileType: "Tipo di file immagine non valido",
        footerGameTitle: "Vuoi vedere il codice sorgente?",
        easyWayBtn: "La via facile (Noioso)",
        hardWayBtn: "La via difficile (Cookie Clicker)",
        skipBtn: "Mi arrendo, portami lì!",
        clicksText: "Clic:",
        upgradeMultiplier: "Potenza clic",
        upgradeAutoClicker: "Auto-clic",
        costText: "Costo:",
        levelText: "Liv",
        cpsText: "al sec",
        upgradeMultiplierHint: "+1 Clic/Clic",
        upgradeAutoHint: "+1 Auto/Sec",
        megaRepoBtn: "Apri Repo Git",
        critChanceTitle: "Probabilità Crit",
        critDamageTitle: "Danno Crit",
        autoCritChanceTitle: "Auto Probabilità Crit",
        autoCritDamageTitle: "Auto Danno Crit",
        critChanceHint: "+1% Prob",
        critDamageHint: "+1 Danno",
        maxLevel: "Max",
        clickHint: "*Clic*",
        lightMode: "MOD. CHIARA",
        darkMode: "MOD. SCURA",
        themeToggleLabel: "Cambia tema colore",
        autoPlaceholder: "Auto",
        previewOf: "Anteprima di",
        zipping: "Creazione ZIP...",
        zipError: "Impossibile generare lo ZIP",
        wasmEncoderUnavailable: "Encoder WebP/AVIF non disponibile in questo browser",
        batchProcessing: "Elaborazione immagini…",
        batchProgressOf: "{current} / {total}",
        cropTitle: "Seleziona area favicon",
        cropHint: "Trascina il quadrato per spostarlo. Usa gli angoli per ridimensionare.",
        cropCancel: "Annulla",
        cropConfirm: "Usa ritaglio",
        cropEdit: "Ritaglia",
        faviconPackHint: "I pacchetti favicon usano dimensioni fisse. Scegli un ritaglio quadrato per ogni immagine.",
        faviconPackMeta: "Pacchetto Favicon"
    }
};

const STORAGE_THEME_KEY = 'imgConverter.theme';
const STORAGE_LANG_KEY = 'imgConverter.lang';

function safeLocalStorageGet(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}

function safeLocalStorageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        // Ignore quota / private-mode failures — prefs are best-effort
    }
}

let currentLang = 'en';

function initI18n() {
    // Prefer stored language, then browser language
    const savedLang = safeLocalStorageGet(STORAGE_LANG_KEY);
    if (savedLang && ['en', 'de', 'fr', 'it'].includes(savedLang)) {
        currentLang = savedLang;
    } else {
        const browserLang = navigator.language.split('-')[0];
        if (['en', 'de', 'fr', 'it'].includes(browserLang)) {
            currentLang = browserLang;
        }
    }
    document.getElementById('langSelect').value = currentLang;
    applyLanguage();

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        safeLocalStorageSet(STORAGE_LANG_KEY, currentLang);
        applyLanguage();
    });
}

function closeAllCustomSelects() {
    document.querySelectorAll('.custom-select-options').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.custom-select-trigger').forEach(el => {
        el.classList.remove('active');
        el.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.custom-option.highlighted').forEach(el => el.classList.remove('highlighted'));
}

function setupCustomSelects() {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        if (select.parentElement.classList.contains('custom-select-wrapper')) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'custom-select-wrapper';
        if (select.id) wrapper.dataset.selectId = select.id;
        select.parentNode.insertBefore(wrapper, select);
        wrapper.appendChild(select);
        select.setAttribute('aria-hidden', 'true');
        select.tabIndex = -1;

        const listboxId = select.id ? `${select.id}-listbox` : `custom-select-${Math.random().toString(36).slice(2)}-listbox`;
        let highlightedIndex = select.selectedIndex;

        const trigger = document.createElement('div');
        trigger.className = 'custom-select-trigger';
        trigger.setAttribute('role', 'combobox');
        trigger.setAttribute('tabindex', '0');
        trigger.setAttribute('aria-haspopup', 'listbox');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-controls', listboxId);
        if (select.id) {
            const label = document.querySelector(`label[for="${select.id}"]`);
            if (label) trigger.setAttribute('aria-label', label.textContent);
        } else if (select.closest('.lang-selector')) {
            trigger.setAttribute('aria-label', 'Language');
        }

        const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

        const updateTriggerText = () => {
            const selectedOption = select.options[select.selectedIndex];
            trigger.innerHTML = '';
            const span = document.createElement('span');
            span.textContent = selectedOption.text;
            trigger.appendChild(span);
            trigger.insertAdjacentHTML('beforeend', arrowSvg);
        };
        updateTriggerText();

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'custom-select-options';
        optionsDiv.id = listboxId;
        optionsDiv.setAttribute('role', 'listbox');

        const updateOptionStates = () => {
            Array.from(optionsDiv.children).forEach((child, index) => {
                child.classList.toggle('selected', index === select.selectedIndex);
                child.classList.toggle('highlighted', index === highlightedIndex);
                child.setAttribute('aria-selected', index === select.selectedIndex ? 'true' : 'false');
            });
        };

        const closeSelect = () => {
            optionsDiv.classList.remove('open');
            trigger.classList.remove('active');
            trigger.setAttribute('aria-expanded', 'false');
            Array.from(optionsDiv.children).forEach(child => child.classList.remove('highlighted'));
        };

        const openSelect = () => {
            closeAllCustomSelects();
            highlightedIndex = select.selectedIndex;
            optionsDiv.classList.add('open');
            trigger.classList.add('active');
            trigger.setAttribute('aria-expanded', 'true');
            updateOptionStates();
        };

        const selectOption = (index) => {
            select.selectedIndex = index;
            highlightedIndex = index;
            select.dispatchEvent(new Event('change', { bubbles: true }));
            updateOptionStates();
            updateTriggerText();
            closeSelect();
            trigger.focus();
        };

        Array.from(select.options).forEach((option, index) => {
            const optDiv = document.createElement('div');
            optDiv.className = 'custom-option';
            optDiv.setAttribute('role', 'option');
            optDiv.dataset.value = option.value;
            optDiv.textContent = option.text;

            optDiv.addEventListener('click', (e) => {
                e.stopPropagation();
                selectOption(index);
            });

            optionsDiv.appendChild(optDiv);
        });
        updateOptionStates();

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (optionsDiv.classList.contains('open')) closeSelect();
            else openSelect();
        });

        trigger.addEventListener('keydown', (e) => {
            const optionCount = select.options.length;
            const isOpen = optionsDiv.classList.contains('open');

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (!isOpen) openSelect();
                else highlightedIndex = (highlightedIndex + 1) % optionCount;
                updateOptionStates();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (!isOpen) openSelect();
                else highlightedIndex = (highlightedIndex - 1 + optionCount) % optionCount;
                updateOptionStates();
            } else if (e.key === 'Home') {
                e.preventDefault();
                if (!isOpen) openSelect();
                highlightedIndex = 0;
                updateOptionStates();
            } else if (e.key === 'End') {
                e.preventDefault();
                if (!isOpen) openSelect();
                highlightedIndex = optionCount - 1;
                updateOptionStates();
            } else if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (isOpen) selectOption(highlightedIndex);
                else openSelect();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                closeSelect();
            } else if (e.key === 'Tab') {
                closeSelect();
            }
        });

        wrapper.appendChild(trigger);
        wrapper.appendChild(optionsDiv);

        select.addEventListener('change', () => {
            highlightedIndex = select.selectedIndex;
            updateTriggerText();
            updateOptionStates();
        });
    });

    document.addEventListener('click', closeAllCustomSelects);
}

function applyLanguage() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            el.textContent = i18n[currentLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[currentLang][key]) {
            el.placeholder = i18n[currentLang][key];
        }
    });

    // Explicitly update document title if it exists in i18n
    if (i18n[currentLang] && i18n[currentLang]['title']) {
        document.title = i18n[currentLang]['title'];
    }

    // Refresh theme toggle labels if present
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle && typeof themeToggle._updateThemeUI === 'function') {
        themeToggle._updateThemeUI();
    }

    const dropZone = document.getElementById('dropZone');
    if (dropZone && typeof dropZone._syncDropZoneLabel === 'function') {
        dropZone._syncDropZoneLabel();
    }

    // Refresh batch progress labels if overlay is visible
    updateBatchProgressUI();
}

import encodeAvif, { init as initAvif } from '@jsquash/avif/encode';
import encodeWebp, { init as initWebp } from '@jsquash/webp/encode';

const convertedFiles = new Map(); // To store blobs for ZIP
const originalFiles = new Map(); // To store original files mapping (id -> file)
const imageCache = new Map(); // To store decoded images (id -> ImageBitmap/HTMLImageElement)
const invalidFileIds = new Set(); // Track invalid uploads so we skip them on recompress
const cropRegions = new Map(); // id -> { sx, sy, size } for favicon-pack square crops

const FAVICON_PACK_FORMAT = 'favicon-pack';
const FAVICON_ICO_SIZES = [16, 32, 48, 256];
const FAVICON_PNG_SPECS = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' }
];

// Serialize crop modals so concurrent favicon-pack jobs wait their turn
let cropModalChain = Promise.resolve();
let cropModalResolver = null;
let cropModalActiveId = null;
let cropDragState = null;
let cropWorking = { sx: 0, sy: 0, size: 1 };
let cropNatural = { width: 1, height: 1 };
let cropDisplay = { left: 0, top: 0, width: 1, height: 1, scale: 1 };
let cropPreviousFocus = null;

// Track global maximum dimensions of uploaded images
let globalMaxWidth = 0;
let globalMaxHeight = 0;

// Bumped on clearAll so in-flight processImage calls ignore stale completions
let processingSession = 0;

// Memory / Hardcap constants
const MAX_IMAGE_DIMENSION = 4096;

// Concurrency control for image processing (kept modest to reduce main-thread freezes)
const MAX_CONCURRENT = 2;
let activeProcessing = 0;
const processingQueue = [];

// Batch progress overlay state (completed advances per finished processImage call)
const batchProgress = {
    total: 0,
    completed: 0
};
let batchEpoch = 0;

function yieldToUI() {
    // Let the browser paint loaders/progress between heavy sync work
    return new Promise((resolve) => setTimeout(resolve, 0));
}

function formatBatchProgressCount(current, total) {
    const t = i18n[currentLang] || i18n.en;
    return (t.batchProgressOf || '{current} / {total}')
        .replace('{current}', String(current))
        .replace('{total}', String(total));
}

function updateBatchProgressUI() {
    const panel = document.getElementById('batchProgress');
    const resultsPanel = document.getElementById('resultsPanel');
    const countEl = document.getElementById('batchProgressCount');
    const barEl = document.getElementById('batchProgressBar');
    const labelEl = document.getElementById('batchProgressLabel');
    if (!panel || !countEl || !barEl) return;

    const remaining = batchProgress.total - batchProgress.completed;
    const isBusy = remaining > 0 || activeProcessing > 0;

    if (!isBusy || batchProgress.total === 0) {
        panel.classList.add('hidden');
        if (resultsPanel) resultsPanel.removeAttribute('aria-busy');
        barEl.style.width = '0%';
        barEl.setAttribute('aria-valuenow', '0');
        return;
    }

    panel.classList.remove('hidden');
    if (resultsPanel) {
        resultsPanel.classList.remove('hidden');
        resultsPanel.setAttribute('aria-busy', 'true');
    }

    const t = i18n[currentLang] || i18n.en;
    if (labelEl) labelEl.textContent = t.batchProcessing;
    countEl.textContent = formatBatchProgressCount(batchProgress.completed, batchProgress.total);
    const pct = Math.min(100, Math.round((batchProgress.completed / batchProgress.total) * 100));
    barEl.style.width = `${pct}%`;
    barEl.setAttribute('aria-valuenow', String(pct));
}

function noteBatchItemQueued() {
    batchProgress.total += 1;
    updateBatchProgressUI();
    return batchEpoch;
}

function noteBatchItemFinished(epoch) {
    // Ignore completions from a cleared/previous batch
    if (epoch !== batchEpoch) {
        updateBatchProgressUI();
        return;
    }
    batchProgress.completed += 1;
    if (batchProgress.completed > batchProgress.total) {
        batchProgress.completed = batchProgress.total;
    }
    updateBatchProgressUI();
    if (batchProgress.completed >= batchProgress.total && activeProcessing <= 0) {
        // Brief delay so 100% is visible, then hide
        const hideEpoch = batchEpoch;
        setTimeout(() => {
            if (hideEpoch !== batchEpoch) return;
            if (batchProgress.completed >= batchProgress.total && activeProcessing <= 0) {
                batchProgress.total = 0;
                batchProgress.completed = 0;
                updateBatchProgressUI();
            }
        }, 350);
    }
}

function resetBatchProgress() {
    batchEpoch += 1;
    batchProgress.total = 0;
    batchProgress.completed = 0;
    updateBatchProgressUI();
}

let wasmInitialized = false;
let wasmInitFailed = false;
let wasmInitPromise = null;

// Debounced recompress timer
let recompressTimer = null;
const RECOMPRESS_DEBOUNCE_MS = 150;

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

function initWasmIfNeeded() {
    // Always reuse one promise so concurrent callers share init (and post-init results)
    if (wasmInitPromise) return wasmInitPromise;

    wasmInitPromise = (async () => {
        try {
            // Only load WASM if the browser lacks native support for either
            if (!nativeSupport['image/webp'] || !nativeSupport['image/avif']) {
                await Promise.all([initAvif(), initWebp()]);
            }
            wasmInitialized = true;
            return true;
        } catch (err) {
            console.error("Failed to initialize WASM encoders:", err);
            wasmInitFailed = true;
            return false;
        }
    })();

    return wasmInitPromise;
}

function revokeStatusBlobUrl(id) {
    const statusContainer = document.getElementById(`status-${id}`);
    if (!statusContainer) return;
    const download = statusContainer.querySelector('a[download]');
    if (download && download.href && download.href.startsWith('blob:')) {
        URL.revokeObjectURL(download.href);
    }
}

const DELETE_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;

// Auto-recompress trigger (debounced); skips invalid uploads
function triggerRecompress() {
    clearTimeout(recompressTimer);
    recompressTimer = setTimeout(() => {
        if (originalFiles.size === 0) return;
        for (const [id, file] of originalFiles.entries()) {
            if (invalidFileIds.has(id)) continue;
            processImage(file, id);
        }
    }, RECOMPRESS_DEBOUNCE_MS);
}

function setupFormLimits() {
    const formatSelect = document.getElementById('formatSelect');
    const inputWidth = document.getElementById('inputWidth');
    const inputHeight = document.getElementById('inputHeight');

    const enforceLimits = () => {
        // Only clamp to MAX_IMAGE_DIMENSION; empty values are allowed (Auto)
        if (inputWidth.value && parseInt(inputWidth.value) > MAX_IMAGE_DIMENSION) {
            inputWidth.value = MAX_IMAGE_DIMENSION;
        }
        if (inputHeight.value && parseInt(inputHeight.value) > MAX_IMAGE_DIMENSION) {
            inputHeight.value = MAX_IMAGE_DIMENSION;
        }
    };

    formatSelect.addEventListener('change', enforceLimits);
    inputWidth.addEventListener('change', enforceLimits);
    inputHeight.addEventListener('change', enforceLimits);
    inputWidth.addEventListener('input', enforceLimits);
    inputHeight.addEventListener('input', enforceLimits);
}

function setupQualityAndFormat() {
    const formatSelect = document.getElementById('formatSelect');
    const inputWidth = document.getElementById('inputWidth');
    const inputHeight = document.getElementById('inputHeight');
    const qualitySlider = document.getElementById('qualitySlider');
    const qualityValue = document.getElementById('qualityValue');
    const sliderContainer = qualitySlider.parentElement;

    const updateSliderPercent = () => {
        const val = qualitySlider.value;
        const min = qualitySlider.min || 1;
        const max = qualitySlider.max || 100;
        const percent = ((val - min) / (max - min)) * 100;
        qualitySlider.style.setProperty('--slider-percent', `${percent}%`);
        return percent;
    };
    updateSliderPercent();

    // Quality slider text update and animations
    qualitySlider.addEventListener('input', (e) => {
        qualityValue.textContent = e.target.value;
        const percent = updateSliderPercent();

        // Spawn comic star
        const star = document.createElement('div');
        star.className = 'comic-star';

        // Calculate thumb position for star origin
        const thumbWidth = 28;
        const offset = (percent / 100) * (qualitySlider.clientWidth - thumbWidth) + (thumbWidth / 2);

        star.style.left = `${offset - 10}px`; // center star
        star.style.top = '0px';

        // Randomize spill direction
        const dir = Math.random() > 0.5 ? 1 : -1;
        const spillX = dir * (10 + Math.random() * 20) + 'px';
        const spillRot = (dir * (45 + Math.random() * 90)) + 'deg';

        star.style.setProperty('--spill-x', spillX);
        star.style.setProperty('--spill-rot', spillRot);

        sliderContainer.appendChild(star);

        // Clean up star after animation (3s)
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, 3000);
    });

    qualitySlider.addEventListener('change', triggerRecompress);
    formatSelect.addEventListener('change', triggerRecompress);
    inputWidth.addEventListener('change', triggerRecompress);
    inputHeight.addEventListener('change', triggerRecompress);

    const updateQualitySliderState = () => {
        const format = formatSelect.value;
        const formGroup = document.getElementById('qualityLabel').parentElement;
        const formatWarning = document.getElementById('formatWarning');
        const dimensionsGroup = document.getElementById('dimensionsGroup');
        const aspectRatioGroup = document.getElementById('aspectRatioGroup');
        const isFaviconPack = format === FAVICON_PACK_FORMAT;
        const noQuality = format === 'image/png' || format === 'image/x-icon' || isFaviconPack;

        if (noQuality) {
            qualitySlider.disabled = true;
            formGroup.style.opacity = '0.5';
            formGroup.style.pointerEvents = 'none';
            formatWarning.classList.remove('hidden');
            formatWarning.setAttribute(
                'data-i18n',
                isFaviconPack ? 'faviconPackHint' : 'qualityNotSupported'
            );
            formatWarning.textContent = isFaviconPack
                ? i18n[currentLang].faviconPackHint
                : i18n[currentLang].qualityNotSupported;
        } else {
            qualitySlider.disabled = false;
            formGroup.style.opacity = '1';
            formGroup.style.pointerEvents = 'auto';
            formatWarning.classList.add('hidden');
            formatWarning.setAttribute('data-i18n', 'qualityNotSupported');
        }

        if (dimensionsGroup) {
            dimensionsGroup.classList.toggle('settings-disabled', isFaviconPack);
        }
        if (aspectRatioGroup) {
            aspectRatioGroup.classList.toggle('settings-disabled', isFaviconPack);
            document.getElementById('keepAspectRatio').disabled = isFaviconPack;
        }
        if (document.getElementById('inputWidth')) {
            document.getElementById('inputWidth').disabled = isFaviconPack;
        }
        if (document.getElementById('inputHeight')) {
            document.getElementById('inputHeight').disabled = isFaviconPack;
        }
    };

    formatSelect.addEventListener('change', updateQualitySliderState);
    updateQualitySliderState(); // Initial check
}

function setupDragAndDrop() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');

    const syncDropZoneLabel = () => {
        dropZone.setAttribute('aria-label', i18n[currentLang].dropText);
    };
    syncDropZoneLabel();

    const openFilePicker = () => fileInput.click();

    dropZone.addEventListener('click', openFilePicker);

    dropZone.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openFilePicker();
        }
    });

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

    // Keep aria-label in sync when language changes
    dropZone._syncDropZoneLabel = syncDropZoneLabel;
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

function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const themeText = document.getElementById('themeText');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    // Prefer stored theme, then system preference (default light unless user prefers dark)
    const savedTheme = safeLocalStorageGet(STORAGE_THEME_KEY);
    if (savedTheme === 'light') {
        root.setAttribute('data-theme', 'light');
    } else if (savedTheme === 'dark') {
        root.removeAttribute('data-theme');
    } else if (!prefersDark) {
        root.setAttribute('data-theme', 'light');
    }

    const updateToggleUI = () => {
        const isLight = root.getAttribute('data-theme') === 'light';
        const t = i18n[currentLang] || i18n.en;
        if (isLight) {
            themeText.textContent = t.lightMode;
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            themeText.textContent = t.darkMode;
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
        themeToggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
        themeToggle.setAttribute('aria-label', t.themeToggleLabel);
    };

    // Expose so applyLanguage can refresh labels
    themeToggle._updateThemeUI = updateToggleUI;

    updateToggleUI();

    const toggleTheme = () => {
        const isLight = root.getAttribute('data-theme') === 'light';
        if (isLight) {
            root.removeAttribute('data-theme'); // default to dark
            safeLocalStorageSet(STORAGE_THEME_KEY, 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            safeLocalStorageSet(STORAGE_THEME_KEY, 'light');
        }
        updateToggleUI();
    };

    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

function initUI() {
    initTheme();
    checkNativeSupport();
    initI18n();
    setupCustomSelects();

    setupFormLimits();
    setupQualityAndFormat();
    setupDragAndDrop();
    setupActionButtons();
    setupAspectRatioToggle();
    setupCropModal();
    initFooterGame();
}

function initFooterGame() {
    const startHardWayBtn = document.getElementById('startHardWayBtn');
    const footerDefaultContent = document.getElementById('footerDefaultContent');
    const footerGameContent = document.getElementById('footerGameContent');
    const githubCookie = document.getElementById('githubCookie');
    const clickCountDisplay = document.getElementById('clickCount');

    // Upgrades
    const upgradeMultiplierBtn = document.getElementById('upgradeMultiplierBtn');
    const multiplierLevelDisplay = document.getElementById('multiplierLevel');
    const multiplierCostDisplay = document.getElementById('multiplierCostDisplay');

    const upgradeAutoClickerBtn = document.getElementById('upgradeAutoClickerBtn');
    const autoClickerLevelDisplay = document.getElementById('autoClickerLevel');
    const autoClickerCostDisplay = document.getElementById('autoClickerCostDisplay');

    const upgradeCritChanceBtn = document.getElementById('upgradeCritChanceBtn');
    const critChanceLevelDisplay = document.getElementById('critChanceLevel');
    const critChanceCostDisplay = document.getElementById('critChanceCostDisplay');

    const upgradeCritDamageBtn = document.getElementById('upgradeCritDamageBtn');
    const critDamageLevelDisplay = document.getElementById('critDamageLevel');
    const critDamageCostDisplay = document.getElementById('critDamageCostDisplay');

    const upgradeAutoCritChanceBtn = document.getElementById('upgradeAutoCritChanceBtn');
    const autoCritChanceLevelDisplay = document.getElementById('autoCritChanceLevel');
    const autoCritChanceCostDisplay = document.getElementById('autoCritChanceCostDisplay');

    const upgradeAutoCritDamageBtn = document.getElementById('upgradeAutoCritDamageBtn');
    const autoCritDamageLevelDisplay = document.getElementById('autoCritDamageLevel');
    const autoCritDamageCostDisplay = document.getElementById('autoCritDamageCostDisplay');

    const megaRepoBtn = document.getElementById('megaRepoBtn');
    const deniedCross = document.getElementById('deniedCross');

    const cpsDisplay = document.getElementById('cpsDisplay');
    const cpsValueDisplay = document.getElementById('cpsValue');
    const cookieWrapper = document.getElementById('cookieWrapper');
    const clickMeArrow = document.getElementById('clickMeArrow');

    let clicks = 0;
    let clickPower = 1;
    let autoClickers = 0;
    let multiplierCost = 50;
    let autoClickerCost = 100;

    let critChance = 5; // 5%
    let critDamage = 5;
    let critChanceCost = 100;
    let critDamageCost = 150;
    let critDamageLevel = 0;

    let autoCritChance = 5; // 5%
    let autoCritDamage = 5;
    let autoCritChanceCost = 200;
    let autoCritDamageCost = 250;
    let autoCritDamageLevel = 0;

    let totalLifetimeClicks = 0; // used to hide the arrow
    let gameLoopInterval = null;

    if (!startHardWayBtn || !footerDefaultContent || !footerGameContent || !githubCookie || !clickCountDisplay) return;

    function spawnCritText(isAuto) {
        if (!cookieWrapper) return;
        const critEl = document.createElement('div');
        critEl.className = 'floating-crit';
        critEl.textContent = 'CRIT!';
        // Slightly random position around the center
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;
        critEl.style.marginLeft = `${offsetX}px`;
        critEl.style.marginTop = `${offsetY}px`;

        // Auto crits can be slightly smaller
        if (isAuto) {
            critEl.style.fontSize = '1.2rem';
        }

        cookieWrapper.appendChild(critEl);

        // Remove element after animation finishes
        setTimeout(() => {
            critEl.remove();
        }, 1000);
    }

    function updateUI() {
        // We use Math.floor so users don't see ugly decimals
        clickCountDisplay.textContent = Math.floor(clicks);

        // Handle Multiplier Button
        multiplierCostDisplay.textContent = Math.floor(multiplierCost);
        multiplierLevelDisplay.textContent = clickPower;
        if (clicks >= multiplierCost) {
            upgradeMultiplierBtn.removeAttribute('disabled');
        } else {
            upgradeMultiplierBtn.setAttribute('disabled', 'true');
        }

        // Handle Auto-Clicker Button
        autoClickerCostDisplay.textContent = Math.floor(autoClickerCost);
        autoClickerLevelDisplay.textContent = autoClickers;
        if (clicks >= autoClickerCost) {
            upgradeAutoClickerBtn.removeAttribute('disabled');
        } else {
            upgradeAutoClickerBtn.setAttribute('disabled', 'true');
        }

        // Handle Crit Chance Button
        if (critChance >= 100) {
            critChanceCostDisplay.textContent = i18n[currentLang].maxLevel;
            critChanceLevelDisplay.textContent = 100;
            upgradeCritChanceBtn.setAttribute('disabled', 'true');
        } else {
            critChanceCostDisplay.textContent = Math.floor(critChanceCost);
            critChanceLevelDisplay.textContent = critChance;
            if (clicks >= critChanceCost) upgradeCritChanceBtn.removeAttribute('disabled');
            else upgradeCritChanceBtn.setAttribute('disabled', 'true');
        }

        // Handle Crit Damage Button
        critDamageCostDisplay.textContent = Math.floor(critDamageCost);
        critDamageLevelDisplay.textContent = critDamageLevel;
        if (clicks >= critDamageCost) upgradeCritDamageBtn.removeAttribute('disabled');
        else upgradeCritDamageBtn.setAttribute('disabled', 'true');

        // Handle Auto Crit Chance Button
        if (autoCritChance >= 100) {
            autoCritChanceCostDisplay.textContent = i18n[currentLang].maxLevel;
            autoCritChanceLevelDisplay.textContent = 100;
            upgradeAutoCritChanceBtn.setAttribute('disabled', 'true');
        } else {
            autoCritChanceCostDisplay.textContent = Math.floor(autoCritChanceCost);
            autoCritChanceLevelDisplay.textContent = autoCritChance;
            if (clicks >= autoCritChanceCost) upgradeAutoCritChanceBtn.removeAttribute('disabled');
            else upgradeAutoCritChanceBtn.setAttribute('disabled', 'true');
        }

        // Handle Auto Crit Damage Button
        autoCritDamageCostDisplay.textContent = Math.floor(autoCritDamageCost);
        autoCritDamageLevelDisplay.textContent = autoCritDamageLevel;
        if (clicks >= autoCritDamageCost) upgradeAutoCritDamageBtn.removeAttribute('disabled');
        else upgradeAutoCritDamageBtn.setAttribute('disabled', 'true');

        // Handle Mega Repo Button
        if (clicks >= 1000000) {
            megaRepoBtn.removeAttribute('disabled');
        }

        // Handle CPS display
        if (autoClickers > 0) {
            cpsDisplay.classList.remove('hidden');
            cpsValueDisplay.textContent = autoClickers;
        }
    }

    startHardWayBtn.addEventListener('click', () => {
        footerDefaultContent.classList.add('hidden');
        footerGameContent.classList.remove('hidden');
        clicks = 0;
        clickPower = 1;
        autoClickers = 0;
        multiplierCost = 50;
        autoClickerCost = 100;

        critChance = 5;
        critDamage = 5;
        critChanceCost = 100;
        critDamageCost = 150;
        critDamageLevel = 0;

        autoCritChance = 5;
        autoCritDamage = 5;
        autoCritChanceCost = 200;
        autoCritDamageCost = 250;
        autoCritDamageLevel = 0;

        totalLifetimeClicks = 0;

        if (clickMeArrow) {
            clickMeArrow.classList.remove('fade-out');
        }

        updateUI();

        if(gameLoopInterval) clearInterval(gameLoopInterval);

        // Run game loop every 1000ms (1 second) for auto clickers
        gameLoopInterval = setInterval(() => {
            if (autoClickers > 0) {
                let autoClicksAdded = 0;
                let critsOccurred = false;

                if (autoClickers <= 100) {
                    // Roll for each individual auto-clicker if count is small
                    for (let i = 0; i < autoClickers; i++) {
                        const roll = Math.random() * 100;
                        if (roll < autoCritChance) {
                            autoClicksAdded += (1 + autoCritDamage);
                            critsOccurred = true;
                        } else {
                            autoClicksAdded += 1;
                        }
                    }
                } else {
                    // Approximation for large numbers
                    function gaussianRandom(mean=0, stdev=1) {
                        let u = 1 - Math.random();
                        let v = Math.random();
                        let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
                        return z * stdev + mean;
                    }

                    const n = autoClickers;
                    const p = autoCritChance / 100;

                    const mean = n * p;
                    const variance = n * p * (1 - p);
                    const stdev = Math.sqrt(variance);

                    // Approximate number of crits
                    let crits = Math.round(gaussianRandom(mean, stdev));

                    // Clamp to valid range [0, n]
                    crits = Math.max(0, Math.min(n, crits));

                    const normalClicks = n - crits;

                    autoClicksAdded = normalClicks + (crits * (1 + autoCritDamage));
                    critsOccurred = crits > 0;
                }

                clicks += autoClicksAdded;
                if (critsOccurred) {
                    spawnCritText(true);
                }
                updateUI();
            }
        }, 1000);
    });

    const cookieContainer = githubCookie.parentElement;

    cookieContainer.addEventListener('pointerdown', (e) => {
        e.preventDefault(); // Prevent Safari from initiating a drag action

        totalLifetimeClicks++;
        if (totalLifetimeClicks === 5 && clickMeArrow) {
            clickMeArrow.classList.add('fade-out');
        }

        const roll = Math.random() * 100;
        if (roll < critChance) {
            clicks += (clickPower + critDamage);
            spawnCritText(false);
        } else {
            clicks += clickPower;
        }

        updateUI();

        // Add a wobble effect
        cookieContainer.classList.remove('wobble');
        void cookieContainer.offsetWidth; // trigger reflow to restart animation
        cookieContainer.classList.add('wobble');
    });

    megaRepoBtn.addEventListener('click', () => {
        if (clicks >= 1000000) {
            window.open('https://github.com/BotVibe/Image-Converter', '_blank', 'noopener,noreferrer');
        } else {
            // Show denied cross animation
            deniedCross.classList.remove('hidden');
            deniedCross.classList.remove('show-cross');
            void deniedCross.offsetWidth; // trigger reflow
            deniedCross.classList.add('show-cross');

            // Hide it again after animation finishes (0.8s)
            setTimeout(() => {
                deniedCross.classList.add('hidden');
                deniedCross.classList.remove('show-cross');
            }, 800);
        }
    });

    upgradeMultiplierBtn.addEventListener('click', () => {
        if (clicks >= multiplierCost) {
            clicks -= multiplierCost;
            clickPower++;
            multiplierCost = Math.floor(multiplierCost * 1.5);
            updateUI();
        }
    });

    upgradeAutoClickerBtn.addEventListener('click', () => {
        if (clicks >= autoClickerCost) {
            clicks -= autoClickerCost;
            autoClickers++;
            autoClickerCost = Math.floor(autoClickerCost * 1.5);
            updateUI();
        }
    });

    upgradeCritChanceBtn.addEventListener('click', () => {
        if (clicks >= critChanceCost && critChance < 100) {
            clicks -= critChanceCost;
            critChance++;
            critChanceCost = Math.floor(critChanceCost * 1.5);
            updateUI();
        }
    });

    upgradeCritDamageBtn.addEventListener('click', () => {
        if (clicks >= critDamageCost) {
            clicks -= critDamageCost;
            critDamage++;
            critDamageLevel++;
            critDamageCost = Math.floor(critDamageCost * 1.5);
            updateUI();
        }
    });

    upgradeAutoCritChanceBtn.addEventListener('click', () => {
        if (clicks >= autoCritChanceCost && autoCritChance < 100) {
            clicks -= autoCritChanceCost;
            autoCritChance++;
            autoCritChanceCost = Math.floor(autoCritChanceCost * 1.5);
            updateUI();
        }
    });

    upgradeAutoCritDamageBtn.addEventListener('click', () => {
        if (clicks >= autoCritDamageCost) {
            clicks -= autoCritDamageCost;
            autoCritDamage++;
            autoCritDamageLevel++;
            autoCritDamageCost = Math.floor(autoCritDamageCost * 1.5);
            updateUI();
        }
    });
}

async function downloadZip() {
    if (convertedFiles.size === 0) return;

    const zipBtn = document.getElementById('downloadZipBtn');
    const originalText = zipBtn.textContent;
    zipBtn.textContent = i18n[currentLang].zipping;
    zipBtn.disabled = true;

    try {
        const zip = new JSZip();
        const usedNames = new Set();

        convertedFiles.forEach(file => {
            if (file.isFaviconPack && Array.isArray(file.packFiles) && file.packFiles.length) {
                let folder = sanitizeFilename(file.folderName || file.name.replace(/\.zip$/i, '') || 'favicon');
                let finalFolder = folder;
                let counter = 1;
                while (usedNames.has(finalFolder + '/')) {
                    finalFolder = `${folder} (${counter})`;
                    counter++;
                }
                usedNames.add(finalFolder + '/');
                file.packFiles.forEach((entry) => {
                    const entryName = sanitizeFilename(entry.name);
                    zip.file(`${finalFolder}/${entryName}`, entry.blob);
                });
                return;
            }

            let safeName = sanitizeFilename(file.name);

            // Handle filename collisions
            let finalName = safeName;
            let counter = 1;

            const nameParts = safeName.split('.');
            let base, ext;
            if (nameParts.length > 1) {
                ext = nameParts.pop();
                base = nameParts.join('.');
            } else {
                base = safeName;
            }

            while (usedNames.has(finalName)) {
                if (ext !== undefined) {
                    finalName = `${base} (${counter}).${ext}`;
                } else {
                    finalName = `${base} (${counter})`;
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
        alert(i18n[currentLang].zipError);
    } finally {
        zipBtn.textContent = originalText;
        zipBtn.disabled = false;
    }
}


function readFileAs(blob, method) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = () => reject(new Error(`Failed to read file via ${method}`));
        reader[method](blob);
    });
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
        const text = await readFileAs(file.slice(0, 512), 'readAsText').catch(() => null);

        if (!text) return false;

        // Simple heuristic: SVG must contain an xml declaration or an svg tag
        return (text.includes('<svg') || text.includes('<?xml'));
    }

    // Binary file validation using magic bytes
    const buffer = await readFileAs(file.slice(0, 16), 'readAsArrayBuffer')
        .then(res => new Uint8Array(res))
        .catch(() => null);

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

    // Process files in batches to limit concurrency
    const BATCH_SIZE = 10;
    const filesArray = Array.from(files);

    for (let i = 0; i < filesArray.length; i += BATCH_SIZE) {
        const batch = filesArray.slice(i, i + BATCH_SIZE);

        // Validate concurrently while maintaining order
        const validationResults = await Promise.all(batch.map(file => validateImageFile(file)));

        for (let j = 0; j < batch.length; j++) {
            const file = batch[j];
            const isValid = validationResults[j];

            if (isValid) {
                processImage(file);
            } else {
                handleInvalidFile(file);
            }
        }
    }
}


function handleInvalidFile(file) {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    originalFiles.set(id, file); // Store so we can track and remove it
    invalidFileIds.add(id); // Skip on triggerRecompress

    // Use the existing createResultItem to build the UI element
    const li = createResultItem(id, file);

    // Update the UI to show the error state
    const statusContainer = document.getElementById(`status-${id}`);
    statusContainer.innerHTML = `
        <div class="action-buttons-row">
            <button class="btn delete-btn" title="${i18n[currentLang].remove}" aria-label="${i18n[currentLang].remove}" onclick="removeResult('${id}')">
                ${DELETE_ICON_SVG}
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

function defaultSquareCrop(imgWidth, imgHeight) {
    const width = Math.max(1, Math.floor(imgWidth) || 1);
    const height = Math.max(1, Math.floor(imgHeight) || 1);
    const size = Math.max(1, Math.min(width, height));
    const sx = Math.floor((width - size) / 2);
    const sy = Math.floor((height - size) / 2);
    return { sx, sy, size };
}

function clampSquareCrop(crop, imgWidth, imgHeight) {
    const width = Math.max(1, Math.floor(imgWidth) || 1);
    const height = Math.max(1, Math.floor(imgHeight) || 1);
    let size = Math.max(1, Math.round(crop.size || 1));
    size = Math.min(size, width, height);
    let sx = Math.round(crop.sx || 0);
    let sy = Math.round(crop.sy || 0);
    sx = Math.max(0, Math.min(sx, width - size));
    sy = Math.max(0, Math.min(sy, height - size));
    return { sx, sy, size };
}

function buildSiteWebManifest() {
    return JSON.stringify({
        name: 'App',
        short_name: 'App',
        icons: [
            { src: 'android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: 'android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone'
    }, null, 2);
}

function canvasToPngBlob(canvas) {
    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (blob) resolve(blob);
            else reject(new Error('PNG encode failed'));
        }, 'image/png');
    });
}

function createCroppedSquareCanvas(img, crop, targetSize) {
    const { sx, sy, size } = clampSquareCrop(crop, img.width, img.height);
    const canvas = document.createElement('canvas');
    canvas.width = targetSize;
    canvas.height = targetSize;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, sx, sy, size, size, 0, 0, targetSize, targetSize);
    return canvas;
}

function encodeIcoBmpPayload(canvas) {
    let w = canvas.width;
    let h = canvas.height;
    if (w > 256 || h > 256) {
        const ratio = Math.min(256 / w, 256 / h);
        w = Math.max(1, Math.round(w * ratio));
        h = Math.max(1, Math.round(h * ratio));
    }

    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = w;
    tmpCanvas.height = h;
    const tmpCtx = tmpCanvas.getContext('2d');
    tmpCtx.drawImage(canvas, 0, 0, w, h);
    const data = tmpCtx.getImageData(0, 0, w, h).data;

    const bytesPerPixel = 4;
    const xorMaskSize = w * h * bytesPerPixel;
    const rowBytes = Math.ceil(w / 32) * 4;
    const andMaskSize = rowBytes * h;
    const infoHeaderSize = 40;
    const imageSize = infoHeaderSize + xorMaskSize + andMaskSize;
    const buffer = new ArrayBuffer(imageSize);
    const view = new DataView(buffer);

    view.setUint32(0, infoHeaderSize, true);
    view.setInt32(4, w, true);
    view.setInt32(8, h * 2, true);
    view.setUint16(12, 1, true);
    view.setUint16(14, 32, true);
    view.setUint32(16, 0, true);
    view.setUint32(20, xorMaskSize + andMaskSize, true);
    view.setInt32(24, 0, true);
    view.setInt32(28, 0, true);
    view.setUint32(32, 0, true);
    view.setUint32(36, 0, true);

    let offset = infoHeaderSize;
    for (let y = h - 1; y >= 0; y--) {
        for (let x = 0; x < w; x++) {
            const i = (y * w + x) * 4;
            view.setUint8(offset++, data[i + 2]);
            view.setUint8(offset++, data[i + 1]);
            view.setUint8(offset++, data[i + 0]);
            view.setUint8(offset++, data[i + 3]);
        }
    }

    return { width: w, height: h, bytes: new Uint8Array(buffer) };
}

async function generateICO(canvasOrCanvases) {
    const list = Array.isArray(canvasOrCanvases) ? canvasOrCanvases : [canvasOrCanvases];
    if (!list.length) {
        throw new Error('No canvases for ICO');
    }

    const payloads = list.map((c) => encodeIcoBmpPayload(c));
    const count = payloads.length;
    const headerSize = 6 + (16 * count);
    let dataOffset = headerSize;
    let totalSize = headerSize;
    for (const p of payloads) {
        totalSize += p.bytes.byteLength;
    }

    const buffer = new ArrayBuffer(totalSize);
    const view = new DataView(buffer);
    const uint8 = new Uint8Array(buffer);

    view.setUint16(0, 0, true);
    view.setUint16(2, 1, true);
    view.setUint16(4, count, true);

    payloads.forEach((p, index) => {
        const dir = 6 + (index * 16);
        view.setUint8(dir, p.width >= 256 ? 0 : p.width);
        view.setUint8(dir + 1, p.height >= 256 ? 0 : p.height);
        view.setUint8(dir + 2, 0);
        view.setUint8(dir + 3, 0);
        view.setUint16(dir + 4, 1, true);
        view.setUint16(dir + 6, 32, true);
        view.setUint32(dir + 8, p.bytes.byteLength, true);
        view.setUint32(dir + 12, dataOffset, true);
        uint8.set(p.bytes, dataOffset);
        dataOffset += p.bytes.byteLength;
    });

    return new Blob([buffer], { type: 'image/x-icon' });
}

async function buildFaviconPackZip(img, crop, baseName) {
    const packFiles = [];
    const icoCanvases = FAVICON_ICO_SIZES.map((size) => createCroppedSquareCanvas(img, crop, size));
    await yieldToUI();
    const icoBlob = await generateICO(icoCanvases);
    packFiles.push({ name: 'favicon.ico', blob: icoBlob });

    for (const spec of FAVICON_PNG_SPECS) {
        await yieldToUI();
        const canvas = createCroppedSquareCanvas(img, crop, spec.size);
        const blob = await canvasToPngBlob(canvas);
        packFiles.push({ name: spec.name, blob });
    }

    const manifestText = buildSiteWebManifest();
    const manifestBlob = new Blob([manifestText], { type: 'application/manifest+json' });
    packFiles.push({ name: 'site.webmanifest', blob: manifestBlob });

    const zip = new JSZip();
    for (const entry of packFiles) {
        zip.file(sanitizeFilename(entry.name), entry.blob);
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const safeBase = sanitizeFilename(baseName).replace(/\.[^/.]+$/, '') || 'image';
    return {
        zipBlob,
        zipName: `${safeBase}-favicon.zip`,
        folderName: `${safeBase}-favicon`,
        packFiles
    };
}

function getCropDisplayMetrics(stageEl, naturalWidth, naturalHeight) {
    const stageW = stageEl.clientWidth || 1;
    const stageH = stageEl.clientHeight || 1;
    const scale = Math.min(stageW / naturalWidth, stageH / naturalHeight);
    const width = naturalWidth * scale;
    const height = naturalHeight * scale;
    const left = (stageW - width) / 2;
    const top = (stageH - height) / 2;
    return { left, top, width, height, scale };
}

function syncCropSelectionUI() {
    const selection = document.getElementById('cropSelection');
    const imageEl = document.getElementById('cropImage');
    if (!selection || !imageEl) return;

    imageEl.style.left = `${cropDisplay.left}px`;
    imageEl.style.top = `${cropDisplay.top}px`;
    imageEl.style.width = `${cropDisplay.width}px`;
    imageEl.style.height = `${cropDisplay.height}px`;

    const left = cropDisplay.left + (cropWorking.sx * cropDisplay.scale);
    const top = cropDisplay.top + (cropWorking.sy * cropDisplay.scale);
    const size = cropWorking.size * cropDisplay.scale;
    selection.style.left = `${left}px`;
    selection.style.top = `${top}px`;
    selection.style.width = `${size}px`;
    selection.style.height = `${size}px`;
}

function closeCropModal(result) {
    const modal = document.getElementById('cropModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.hidden = true;
    }
    cropDragState = null;
    cropModalActiveId = null;
    const resolver = cropModalResolver;
    cropModalResolver = null;
    if (cropPreviousFocus && typeof cropPreviousFocus.focus === 'function') {
        try { cropPreviousFocus.focus(); } catch (e) { /* ignore */ }
    }
    cropPreviousFocus = null;
    if (resolver) resolver(result);
}

function openSquareCropModal(id, img, existingCrop = null) {
    const run = () => new Promise((resolve) => {
        const modal = document.getElementById('cropModal');
        const stage = document.getElementById('cropStage');
        const imageEl = document.getElementById('cropImage');
        const confirmBtn = document.getElementById('cropConfirmBtn');
        if (!modal || !stage || !imageEl || !confirmBtn) {
            resolve(defaultSquareCrop(img.width, img.height));
            return;
        }

        cropModalResolver = resolve;
        cropModalActiveId = id;
        cropNatural = { width: img.width, height: img.height };
        cropWorking = clampSquareCrop(
            existingCrop || defaultSquareCrop(img.width, img.height),
            img.width,
            img.height
        );

        cropPreviousFocus = document.activeElement;

        // Prefer object URL from original file when available for <img>
        const file = originalFiles.get(id);
        let objectUrl = null;
        const cleanupUrl = () => {
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
                objectUrl = null;
            }
        };

        const finishOpen = () => {
            cropDisplay = getCropDisplayMetrics(stage, cropNatural.width, cropNatural.height);
            syncCropSelectionUI();
            modal.classList.remove('hidden');
            modal.hidden = false;
            confirmBtn.focus();
        };

        imageEl.onload = () => {
            cropNatural = {
                width: imageEl.naturalWidth || img.width,
                height: imageEl.naturalHeight || img.height
            };
            cropWorking = clampSquareCrop(cropWorking, cropNatural.width, cropNatural.height);
            finishOpen();
        };
        imageEl.onerror = () => {
            cleanupUrl();
            // Fallback: draw bitmap to canvas data URL
            try {
                const c = document.createElement('canvas');
                c.width = img.width;
                c.height = img.height;
                c.getContext('2d').drawImage(img, 0, 0);
                imageEl.src = c.toDataURL('image/png');
            } catch (e) {
                closeCropModal(null);
            }
        };

        if (file) {
            objectUrl = URL.createObjectURL(file);
            imageEl.src = objectUrl;
        } else {
            imageEl.onerror();
        }

        // Revoke object URL when modal closes
        const originalResolver = cropModalResolver;
        cropModalResolver = (result) => {
            cleanupUrl();
            originalResolver(result);
        };

        // If image already cached in element
        if (imageEl.complete && imageEl.naturalWidth) {
            imageEl.onload();
        }
    });

    const queued = cropModalChain.then(run, run);
    cropModalChain = queued.then(() => undefined, () => undefined);
    return queued;
}

function setupCropModal() {
    const modal = document.getElementById('cropModal');
    const stage = document.getElementById('cropStage');
    const selection = document.getElementById('cropSelection');
    const cancelBtn = document.getElementById('cropCancelBtn');
    const confirmBtn = document.getElementById('cropConfirmBtn');
    const backdrop = document.getElementById('cropModalBackdrop');
    if (!modal || !stage || !selection) return;

    const pointerPos = (e) => {
        const rect = stage.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onPointerMove = (e) => {
        if (!cropDragState) return;
        e.preventDefault();
        const pos = pointerPos(e);
        const dx = (pos.x - cropDragState.startX) / cropDisplay.scale;
        const dy = (pos.y - cropDragState.startY) / cropDisplay.scale;
        const start = cropDragState.startCrop;

        if (cropDragState.mode === 'move') {
            cropWorking = clampSquareCrop({
                sx: start.sx + dx,
                sy: start.sy + dy,
                size: start.size
            }, cropNatural.width, cropNatural.height);
        } else {
            const handle = cropDragState.handle;
            let sizeDelta = 0;
            if (handle === 'se') sizeDelta = Math.max(dx, dy);
            else if (handle === 'nw') sizeDelta = Math.max(-dx, -dy);
            else if (handle === 'ne') sizeDelta = Math.max(dx, -dy);
            else if (handle === 'sw') sizeDelta = Math.max(-dx, dy);

            let size = start.size + sizeDelta;
            let sx = start.sx;
            let sy = start.sy;
            if (handle === 'nw') {
                sx = start.sx + (start.size - size);
                sy = start.sy + (start.size - size);
            } else if (handle === 'ne') {
                sy = start.sy + (start.size - size);
            } else if (handle === 'sw') {
                sx = start.sx + (start.size - size);
            }
            cropWorking = clampSquareCrop({ sx, sy, size }, cropNatural.width, cropNatural.height);
        }
        syncCropSelectionUI();
    };

    const onPointerUp = () => {
        cropDragState = null;
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerUp);
    };

    selection.addEventListener('pointerdown', (e) => {
        if (modal.classList.contains('hidden')) return;
        const handle = e.target && e.target.dataset ? e.target.dataset.handle : null;
        e.preventDefault();
        e.stopPropagation();
        const pos = pointerPos(e);
        cropDragState = {
            mode: handle ? 'resize' : 'move',
            handle,
            startX: pos.x,
            startY: pos.y,
            startCrop: { ...cropWorking }
        };
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('pointercancel', onPointerUp);
    });

    window.addEventListener('resize', () => {
        if (modal.classList.contains('hidden')) return;
        cropDisplay = getCropDisplayMetrics(stage, cropNatural.width, cropNatural.height);
        syncCropSelectionUI();
    });

    const confirm = () => {
        if (!cropModalResolver) return;
        closeCropModal(clampSquareCrop(cropWorking, cropNatural.width, cropNatural.height));
    };
    const cancel = () => {
        if (!cropModalResolver) return;
        closeCropModal(null);
    };

    confirmBtn.addEventListener('click', confirm);
    cancelBtn.addEventListener('click', cancel);
    if (backdrop) backdrop.addEventListener('click', cancel);

    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('hidden') || !cropModalResolver) return;
        if (e.key === 'Escape') {
            e.preventDefault();
            cancel();
        } else if (e.key === 'Enter' && e.target !== cancelBtn) {
            e.preventDefault();
            confirm();
        }
    });
}

window.editCrop = async function(id) {
    const file = originalFiles.get(id);
    if (!file || invalidFileIds.has(id)) return;
    let img = imageCache.get(id);
    if (!img) {
        processImage(file, id);
        return;
    }
    const existing = cropRegions.get(id) || defaultSquareCrop(img.width, img.height);
    const crop = await openSquareCropModal(id, img, existing);
    if (!crop) return;
    cropRegions.set(id, crop);
    processImage(file, id);
};

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

    // Hardcap dimensions to prevent memory exhaustion (DoS)
    if (newWidth > MAX_IMAGE_DIMENSION || newHeight > MAX_IMAGE_DIMENSION) {
        const clampRatio = Math.min(MAX_IMAGE_DIMENSION / newWidth, MAX_IMAGE_DIMENSION / newHeight);
        newWidth = newWidth * clampRatio;
        newHeight = newHeight * clampRatio;
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
    const previewPrefix = (i18n[currentLang] && i18n[currentLang].previewOf) || i18n.en.previewOf;

    li.innerHTML = `
        <div class="result-info">
            <img src="" class="result-preview" id="preview-${id}" alt="${previewPrefix} ${safeName}">
            <div class="result-details">
                <span class="result-name">${safeName}</span>
                <span class="result-meta" id="meta-${id}">...</span>
            </div>
        </div>
        <div class="result-status" id="status-${id}" aria-live="polite">
            <span class="status-processing" data-i18n="processing">${i18n[currentLang].processing}</span>
        </div>
    `;

    document.getElementById('resultsList').appendChild(li);
    return li;
}

async function encodeImage(canvas, ctx, width, height, format, extension, quality) {
    let blob;
    let actualFormat = format;
    let actualExtension = extension;

    // If format is WebP or AVIF AND browser lacks native support, use WASM Encoder!
    if (format === 'image/avif' && !nativeSupport['image/avif']) {
        if (wasmInitFailed || !wasmInitialized) {
            throw new Error('AVIF WASM encoder is unavailable in this browser');
        }
        await yieldToUI();
        const imageData = ctx.getImageData(0, 0, width, height);
        await yieldToUI();
        const qualityValue = Math.round(quality * 100); // 1 to 100
        const buffer = await encodeAvif(imageData, { quality: qualityValue });
        blob = new Blob([buffer], { type: 'image/avif' });
        actualFormat = 'image/avif';
        actualExtension = 'avif';
    } else if (format === 'image/webp' && !nativeSupport['image/webp']) {
        if (wasmInitFailed || !wasmInitialized) {
            throw new Error('WebP WASM encoder is unavailable in this browser');
        }
        await yieldToUI();
        const imageData = ctx.getImageData(0, 0, width, height);
        await yieldToUI();
        const qualityValue = quality * 100;
        const buffer = await encodeWebp(imageData, { quality: qualityValue });
        blob = new Blob([buffer], { type: 'image/webp' });
        actualFormat = 'image/webp';
        actualExtension = 'webp';
    } else if (format === 'image/x-icon') {
        await yieldToUI();
        blob = await generateICO(canvas);
        actualFormat = 'image/x-icon';
        actualExtension = 'ico';
    } else if (format === FAVICON_PACK_FORMAT) {
        throw new Error('Favicon pack must use buildFaviconPackZip');
    } else {
        // Use Native Browser Encoding
        await yieldToUI();
        blob = await new Promise((resolve) => {
            canvas.toBlob(resolve, format, quality);
        });

        // Safety check against silent fail -> fallback to PNG (shouldnt happen anymore but just in case)
        if (blob && format !== blob.type) {
            actualFormat = blob.type;
            actualExtension = actualFormat.split('/')[1];
        } else if (format === 'image/jpeg') {
            // Ensure proper extension for JPEG
            actualExtension = 'jpg';
        }
    }

    return { blob, actualFormat, actualExtension };
}

async function processImage(file, existingId = null) {
    const id = existingId || (Date.now() + Math.random().toString(36).substr(2, 9));
    const session = processingSession;
    const epoch = noteBatchItemQueued();

    if (!existingId) {
        originalFiles.set(id, file);
        createResultItem(id, file);
    } else {
        // Revoke previous download URL before replacing status with "Processing..."
        revokeStatusBlobUrl(id);
        const statusContainer = document.getElementById(`status-${id}`);
        if (statusContainer) {
            statusContainer.innerHTML = `<span class="status-processing" data-i18n="processing">${i18n[currentLang].processing}</span>`;
        }
    }

    const format = document.getElementById('formatSelect').value;
    const extension = format.split('/')[1];

    // Get quality from slider
    const quality = parseInt(document.getElementById('qualitySlider').value, 10) / 100;

    let acquiredSlot = false;
    try {
        // Concurrency control: wait if we're already processing max concurrent images
        if (activeProcessing >= MAX_CONCURRENT) {
            await new Promise(resolve => processingQueue.push(resolve));
        }
        activeProcessing++;
        acquiredSlot = true;
        updateBatchProgressUI();

        // Bail if cleared while waiting in the queue
        if (session !== processingSession) return;

        // Initialize WASM tools lazily
        await initWasmIfNeeded();
        if (session !== processingSession) return;
        await yieldToUI();

        let img;
        if (imageCache.has(id)) {
            img = imageCache.get(id);
        } else {
            // SVGs cannot be decoded directly from a File object by createImageBitmap in some browsers.
            if (file.type === 'image/svg+xml' || file.name.toLowerCase().endsWith('.svg')) {
                const rawImg = await loadImage(file);
                if (session !== processingSession) return;
                if (window.createImageBitmap) {
                    img = await createImageBitmap(rawImg);
                } else {
                    img = rawImg;
                }
            } else {
                if (window.createImageBitmap) {
                    try {
                        img = await createImageBitmap(file);
                    } catch (e) {
                        // Fallback in case createImageBitmap fails directly on the file
                        const rawImg = await loadImage(file);
                        if (session !== processingSession) return;
                        try {
                            img = await createImageBitmap(rawImg);
                        } catch (e2) {
                            img = rawImg;
                        }
                    }
                } else {
                    img = await loadImage(file);
                }
            }
            if (session !== processingSession) return;
            imageCache.set(id, img);
        }

        await yieldToUI();
        if (session !== processingSession) return;

        // Auto-fill dimension inputs only when empty (do not overwrite user-set limits)
        if (!existingId && format !== FAVICON_PACK_FORMAT) {
            if (img.width > globalMaxWidth) globalMaxWidth = img.width;
            if (img.height > globalMaxHeight) globalMaxHeight = img.height;

            const wInput = document.getElementById('inputWidth');
            const hInput = document.getElementById('inputHeight');
            if (!wInput.value && globalMaxWidth) wInput.value = globalMaxWidth;
            if (!hInput.value && globalMaxHeight) hInput.value = globalMaxHeight;
        }

        let blob;
        let newName;
        let metaHtml;
        let packMeta = null;
        let previewSourceWidth;
        let previewSourceHeight;
        let previewCrop = null;

        if (format === FAVICON_PACK_FORMAT) {
            let crop = cropRegions.get(id);
            if (!crop) {
                // Release concurrency slot while waiting for crop UI
                activeProcessing--;
                acquiredSlot = false;
                if (processingQueue.length > 0) {
                    const nextResolve = processingQueue.shift();
                    nextResolve();
                }
                updateBatchProgressUI();

                const chosen = await openSquareCropModal(id, img, null);
                if (session !== processingSession) return;
                if (!chosen) {
                    // Cancelled before first crop — remove incomplete row
                    if (window.removeResult) window.removeResult(id);
                    return;
                }
                cropRegions.set(id, chosen);
                crop = chosen;

                // Re-acquire concurrency slot
                if (activeProcessing >= MAX_CONCURRENT) {
                    await new Promise(resolve => processingQueue.push(resolve));
                }
                if (session !== processingSession) return;
                activeProcessing++;
                acquiredSlot = true;
                updateBatchProgressUI();
            } else {
                crop = clampSquareCrop(crop, img.width, img.height);
                cropRegions.set(id, crop);
            }

            await yieldToUI();
            if (session !== processingSession) return;

            const pack = await buildFaviconPackZip(img, crop, file.name);
            if (session !== processingSession) return;
            blob = pack.zipBlob;
            newName = pack.zipName;
            packMeta = {
                isFaviconPack: true,
                folderName: pack.folderName,
                packFiles: pack.packFiles
            };

            previewSourceWidth = crop.size;
            previewSourceHeight = crop.size;
            previewCrop = { sx: crop.sx, sy: crop.sy, size: crop.size };

            const origSizeMB = (file.size / (1024 * 1024)).toFixed(2);
            let compSizeStr = '';
            if (blob.size > 1024 * 1024) {
                compSizeStr = (blob.size / (1024 * 1024)).toFixed(2) + ' MB';
            } else {
                compSizeStr = (blob.size / 1024).toFixed(1) + ' KB';
            }
            metaHtml = `
                <span data-i18n="faviconPackMeta">${i18n[currentLang].faviconPackMeta}</span>
                • ${crop.size}×${crop.size}px → 16–512px •
                <span data-i18n="original">${i18n[currentLang].original}</span>: ${origSizeMB} MB
                &rarr;
                <span data-i18n="compressed">${i18n[currentLang].compressed}</span>: ${compSizeStr}
            `;
        } else {
            const { width, height } = calculateDimensions(img.width, img.height);

            await yieldToUI();
            if (session !== processingSession) return;

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');

            // If target format is JPEG, fill with white background first
            // because JPEG doesn't support transparency and transparent pixels turn black.
            if (format === 'image/jpeg') {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, width, height);
            }

            // Draw image directly to preserve transparency (or over the white bg for jpeg)
            ctx.drawImage(img, 0, 0, width, height);

            await yieldToUI();
            if (session !== processingSession) return;

            previewSourceWidth = width;
            previewSourceHeight = height;
            previewCrop = null;

            const encoded = await encodeImage(canvas, ctx, width, height, format, extension, quality);
            if (session !== processingSession) return;
            blob = encoded.blob;

            if (!blob) {
                showError(id);
                return;
            }

            const safeBaseName = sanitizeFilename(file.name).replace(/\.[^/.]+$/, "");
            newName = safeBaseName + `.${encoded.actualExtension}`;

            const origSizeMB = (file.size / (1024 * 1024)).toFixed(2);
            let compSizeStr = '';
            if (blob.size > 1024 * 1024) {
                compSizeStr = (blob.size / (1024 * 1024)).toFixed(2) + ' MB';
            } else {
                compSizeStr = (blob.size / 1024).toFixed(1) + ' KB';
            }
            metaHtml = `
                ${width}x${height}px •
                <span data-i18n="original">${i18n[currentLang].original}</span>: ${origSizeMB} MB
                &rarr;
                <span data-i18n="compressed">${i18n[currentLang].compressed}</span>: ${compSizeStr}
            `;
        }

        await yieldToUI();
        if (session !== processingSession) return;

        // Generate a low-res preview to prevent UI freezing on huge images
        const previewCanvas = document.createElement('canvas');
        const prevCtx = previewCanvas.getContext('2d');
        const MAX_PREV_SIZE = 100;
        const prevRatio = Math.min(MAX_PREV_SIZE / previewSourceWidth, MAX_PREV_SIZE / previewSourceHeight, 1);
        previewCanvas.width = Math.max(1, Math.round(previewSourceWidth * prevRatio));
        previewCanvas.height = Math.max(1, Math.round(previewSourceHeight * prevRatio));
        if (previewCrop) {
            prevCtx.drawImage(
                img,
                previewCrop.sx,
                previewCrop.sy,
                previewCrop.size,
                previewCrop.size,
                0,
                0,
                previewCanvas.width,
                previewCanvas.height
            );
        } else {
            prevCtx.drawImage(img, 0, 0, previewCanvas.width, previewCanvas.height);
        }

        const previewUrl = previewCanvas.toDataURL('image/png', 0.5);
        const previewEl = document.getElementById(`preview-${id}`);
        if (previewEl) previewEl.src = previewUrl;

        await yieldToUI();
        if (session !== processingSession) return;

        // Store for ZIP
        convertedFiles.delete(id);
        convertedFiles.set(id, {
            id: id,
            name: newName,
            blob: blob,
            isFaviconPack: !!(packMeta && packMeta.isFaviconPack),
            folderName: packMeta ? packMeta.folderName : null,
            packFiles: packMeta ? packMeta.packFiles : null
        });

        const blobUrl = URL.createObjectURL(blob);

        const metaEl = document.getElementById(`meta-${id}`);
        if (metaEl) {
            metaEl.innerHTML = metaHtml;
        }

        const statusContainer = document.getElementById(`status-${id}`);
        if (!statusContainer) {
            URL.revokeObjectURL(blobUrl);
            return;
        }

        const cropBtn = format === FAVICON_PACK_FORMAT
            ? `<button type="button" class="btn secondary" data-i18n="cropEdit" onclick="editCrop('${id}')">${i18n[currentLang].cropEdit}</button>`
            : '';

        // Display normal success state regardless of whether WASM polyfill was used
        statusContainer.innerHTML = `
            <div class="action-buttons-row">
                <a href="${blobUrl}" download="${escapeHTML(newName)}" class="btn primary" style="text-decoration:none;">
                    <span data-i18n="download">${i18n[currentLang].download}</span>
                </a>
                ${cropBtn}
                <button class="btn delete-btn" title="${i18n[currentLang].remove}" aria-label="${i18n[currentLang].remove}" onclick="removeResult('${id}')">
                    ${DELETE_ICON_SVG}
                </button>
            </div>
        `;

    } catch (e) {
        if (session === processingSession) {
            const isWasmError = e && e.message && /WASM encoder/i.test(e.message);
            showError(id, isWasmError ? 'wasmEncoderUnavailable' : 'error');
        }
        console.error("Error processing image:", e);
    } finally {
        // Release concurrency slot
        if (acquiredSlot) {
            activeProcessing--;
            if (processingQueue.length > 0) {
                const nextResolve = processingQueue.shift();
                nextResolve();
            }
        }
        noteBatchItemFinished(epoch);
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

function showError(id, messageKey = 'error') {
    const statusContainer = document.getElementById(`status-${id}`);
    if (!statusContainer) return;

    const t = i18n[currentLang] || i18n.en;
    const message = t[messageKey] || t.error;

    statusContainer.innerHTML = `
        <div class="action-buttons-row">
            <span class="status-error" data-i18n="${messageKey}">${message}</span>
            <button class="btn delete-btn" title="${t.remove}" aria-label="${t.remove}" onclick="removeResult('${id}')">
                ${DELETE_ICON_SVG}
            </button>
        </div>
    `;

    const metaContainer = document.getElementById(`meta-${id}`);
    if (metaContainer) {
        metaContainer.innerHTML = `<span class="status-error" style="color: #ff4b4b;">${message}</span>`;
    }
}


window.removeResult = function(id) {
    const li = document.getElementById(`item-${id}`);
    if (!li) return;

    // Revoke object URLs to prevent memory leaks
    const preview = li.querySelector('.result-preview');
    if (preview && preview.src && preview.src.startsWith('blob:')) {
        URL.revokeObjectURL(preview.src);
    }
    const download = li.querySelector('a[download]');
    if (download && download.href && download.href.startsWith('blob:')) {
        URL.revokeObjectURL(download.href);
    }

    li.remove();
    originalFiles.delete(id);
    invalidFileIds.delete(id);
    cropRegions.delete(id);

    // Release cached image
    if (imageCache.has(id)) {
        const cachedImg = imageCache.get(id);
        if (cachedImg.close) cachedImg.close(); // Close ImageBitmap
        imageCache.delete(id);
    }

    convertedFiles.delete(id);

    // Hide panel only when the results list is empty (includes invalid-only rows)
    const resultsList = document.getElementById('resultsList');
    if (!resultsList.children.length) {
        document.getElementById('resultsPanel').classList.add('hidden');
        // Reset global dimensions when all items are removed
        globalMaxWidth = 0;
        globalMaxHeight = 0;
        document.getElementById('inputWidth').value = '';
        document.getElementById('inputHeight').value = '';
    }
};

function clearAll() {
    // Invalidate in-flight processImage completions
    processingSession++;
    clearTimeout(recompressTimer);
    recompressTimer = null;
    resetBatchProgress();

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
    convertedFiles.clear();
    originalFiles.clear();
    invalidFileIds.clear();
    cropRegions.clear();

    // Reset global max dimensions
    globalMaxWidth = 0;
    globalMaxHeight = 0;
    document.getElementById('inputWidth').value = '';
    document.getElementById('inputHeight').value = '';

    // Release all cached images
    for (const cachedImg of imageCache.values()) {
        if (cachedImg.close) cachedImg.close();
    }
    imageCache.clear();
}

document.addEventListener('DOMContentLoaded', () => {
    initUI();
});

export { calculateDimensions, encodeImage, formatBatchProgressCount, noteBatchItemQueued, noteBatchItemFinished, resetBatchProgress, batchProgress, defaultSquareCrop, clampSquareCrop, buildSiteWebManifest, generateICO, FAVICON_ICO_SIZES, FAVICON_PNG_SPECS };
