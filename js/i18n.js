/* ================================
   Internationalization (i18n)
   Language switching: PL ↔ EN
   ================================ */

// Translation dictionary
const translations = {
    pl: {
        nav: {
            about: 'O mnie',
            skills: 'Umiejętności',
            projects: 'Projekty',
            blog: 'Blog',
            contact: 'Kontakt'
        },
        hero: {
            subtitle: 'Entuzjasta Linuksa | Tester ISTQB | Inżynier Sieci | Budowniczy Homelab',
            location: 'Warsaw, PL'
        },
        buttons: {
            viewProjects: 'Zobacz projekty',
            contact: 'Kontakt'
        },
        aria: {
            home: 'Sebastian Gorski Portfolio - Strona główna',
            toggleMenu: 'Toggle navigation menu'
        }
    },
    en: {
        nav: {
            about: 'About Me',
            skills: 'Skills',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact'
        },
        hero: {
            subtitle: 'Linux Enthusiast | ISTQB Tester | Network Engineer | Homelab Builder',
            location: 'Warsaw, PL'
        },
        buttons: {
            viewProjects: 'View Projects',
            contact: 'Contact'
        },
        aria: {
            home: 'Sebastian Gorski Portfolio - Home',
            toggleMenu: 'Toggle navigation menu'
        }
    }
};

let currentLang = 'pl'; // default

export function initI18n() {
    // Get saved language or detect browser
    const savedLang = localStorage.getItem('portfolio-lang');
    const browserLang = navigator.language.startsWith('pl') ? 'pl' : 'en';
    currentLang = savedLang || browserLang;

    // Apply initial language
    applyLanguage(currentLang);

    // Setup toggle button
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        updateToggleButton(langToggle);
        langToggle.addEventListener('click', toggleLanguage);
    }

    console.log(`i18n initialized (${currentLang}) ✓`);
}

export function toggleLanguage() {
    const newLang = currentLang === 'pl' ? 'en' : 'pl';
    setLanguage(newLang);
}

export function setLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    applyLanguage(lang);

    // Update toggle button
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        updateToggleButton(langToggle);
    }

    // Trigger custom event for other modules (e.g., animations)
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function applyLanguage(lang) {
    const dict = translations[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedValue(dict, key);

        if (translation) {
            element.textContent = translation;
        }
    });

    // Update aria-labels separately
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        const translation = getNestedValue(dict, key);

        if (translation) {
            element.setAttribute('aria-label', translation);
        }
    });

    // Update data-text for terminal animation
    const heroSubtitle = document.querySelector('.typing-line[data-i18n="hero.subtitle"]');
    if (heroSubtitle && dict.hero.subtitle) {
        heroSubtitle.setAttribute('data-text', dict.hero.subtitle);
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
}

function updateToggleButton(button) {
    // Show opposite language (if PL, show EN button)
    button.textContent = currentLang === 'pl' ? 'EN' : 'PL';
    button.setAttribute('aria-label', `Switch to ${currentLang === 'pl' ? 'English' : 'Polish'}`);
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

export function getCurrentLanguage() {
    return currentLang;
}

export function t(key) {
    return getNestedValue(translations[currentLang], key) || key;
}
