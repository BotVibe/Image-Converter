console.log("🧪 Testing preference persistence helpers...");

async function runPrefsPersistenceTests() {
    const store = {};
    const originalLocalStorage = globalThis.localStorage;

    globalThis.localStorage = {
        getItem(key) { return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null; },
        setItem(key, value) { store[key] = String(value); },
        removeItem(key) { delete store[key]; }
    };

    try {
        safeLocalStorageSet(STORAGE_THEME_KEY, 'dark');
        safeLocalStorageSet(STORAGE_LANG_KEY, 'de');
        assert(safeLocalStorageGet(STORAGE_THEME_KEY) === 'dark', 'Theme should persist to localStorage');
        assert(safeLocalStorageGet(STORAGE_LANG_KEY) === 'de', 'Language should persist to localStorage');

        // Broken storage should not throw
        globalThis.localStorage = {
            getItem() { throw new Error('blocked'); },
            setItem() { throw new Error('blocked'); }
        };
        assert(safeLocalStorageGet(STORAGE_THEME_KEY) === null, 'safeLocalStorageGet should return null on failure');
        safeLocalStorageSet(STORAGE_LANG_KEY, 'fr'); // must not throw

        console.log("✅ All preference persistence tests passed!");
    } finally {
        if (originalLocalStorage === undefined) {
            delete globalThis.localStorage;
        } else {
            globalThis.localStorage = originalLocalStorage;
        }
    }
}

await runPrefsPersistenceTests();
