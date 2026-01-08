/* ================================
   Internationalization (i18n)
   Language switching: PL ↔ EN
   ================================ */

// Translation dictionary
const translations = {
    pl: {
        nav: {
            about: 'O mnie',
            services: 'Usługi',
            projects: 'Projekty',
            contact: 'Kontakt'
        },
        hero: {
            subtitle: 'Entuzjasta Linuksa | Tester ISTQB | Inżynier Sieci | Budowniczy Homelab',
            location: 'Warsaw, PL'
        },
        about: {
            title: 'Od analizy technologii do budowania rozwiązań',
            hook: 'Przez 20 lat zadawałem pytania o technologie. Dziś buduję odpowiedzi.',
            paragraph1: 'Jako dziennikarz technologiczny (ONET, Gazety.pl, PAP, chip.pl) przekładałem złożone systemy na zrozumiały język. W zespole FakeHunter PAP weryfikowałem fakty, ucząc się metodycznego myślenia i dbałości o szczegóły. Ale pisanie o rozwiązaniach przestało mi wystarczać – chciałem je tworzyć.',
            paragraph2: 'Dlatego zanurzyłem się w praktykę. Zbudowałem infrastrukturę na Proxmox. Automatyzuję procesy przez N8N. Przygotowuję się do ISTQB. Codziennie używam narzędzi AI (Claude, NotebookLM, Gemini) nie jako recenzent, ale jako twórca – do rozwiązywania realnych problemów biznesowych.',
            paragraph3: 'To połączenie analitycznego myślenia dziennikarza z praktycznymi umiejętnościami developera daje mi unikalną perspektywę. Rozumiem zarówno "dlaczego" (biznesową potrzebę), jak i "jak" (techniczną realizację). Testuję aplikacje mobilne. Konfiguruję usługi na własnych serwerach. Tworzę treści dla Fundacji Nauka. To Lubię i Builder Polska.',
            paragraph4: 'Szukam projektów, gdzie ta hybryda umiejętności ma sens: od badania produktów po dokumentację techniczną, od automatyzacji testów po wdrażanie rozwiązań AI.',
            cta: 'Pracujmy razem →',
            info: {
                experience: {
                    label: 'Doświadczenie',
                    value: '20+ lat w tech media'
                },
                focus: {
                    label: 'Focus',
                    value: 'AI Automation • QA Testing • Linux Infrastructure'
                },
                certifications: {
                    label: 'Certyfikaty',
                    value: 'Google IT Support • AIDEAS AI • ISTQB (przygotowanie)'
                },
                location: {
                    label: 'Lokalizacja',
                    value: 'Warsaw, Poland • Remote'
                }
            }
        },
        services: {
            title: 'Co oferuję',
            intro: 'Łączę analityczne myślenie dziennikarza z praktycznymi umiejętnościami developera. Specjalizuję się w trzech obszarach:',
            tech: 'Tech Stack:',
            ai: {
                title: 'AI Automation & Workflow Engineering',
                description: 'Automatyzuję procesy biznesowe używając N8N i narzędzi GenAI. Buduję workflow, które oszczędzają czas i redukują manualne zadania. Od integracji API po content workflows – pomagam firmom wykorzystać AI w praktyce.',
                example: 'Use case: Automatyzacja content workflow z AI-powered research i generowaniem treści.'
            },
            qa: {
                title: 'QA & Mobile Testing',
                description: 'Testuję aplikacje mobilne (Android/iOS) z metodycznym podejściem wypracowanym w fact-checkingu PAP. Przygotowuję strategię testów według standardów ISTQB, dokumentuję błędy i buduję procesy QA dla startupów.',
                example: 'Use case: Kompleksowe testy mobilne przed launch – od test case design po final QA report.'
            },
            linux: {
                title: 'Linux & Self-Hosting Infrastructure',
                description: 'Buduję infrastrukturę na Proxmox z wirtualizacją i konteneryzacją. Konfiguruję self-hosted services bez kosztów chmury. Pomagam małym firmom i homelab enthusiasts w deploymencie własnych serwerów.',
                example: 'Use case: Setup Proxmox homelab z kontenerami (NGINX, Immich, N8N) i zarządzanie infrastrukturą.'
            }
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
            services: 'Services',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            subtitle: 'Linux Enthusiast | ISTQB Tester | Network Engineer | Homelab Builder',
            location: 'Warsaw, PL'
        },
        about: {
            title: 'From analyzing technology to building solutions',
            hook: 'For 20 years I asked questions about technology. Today I build answers.',
            paragraph1: 'As a tech journalist (ONET, Gazety.pl, PAP, chip.pl) I translated complex systems into clear language. On the FakeHunter PAP team, I fact-checked stories, learning methodical thinking and attention to detail. But writing about solutions stopped being enough – I wanted to create them.',
            paragraph2: 'So I dove into practice. Built infrastructure on Proxmox. Automate processes with N8N. Preparing for ISTQB certification. Daily I use AI tools (Claude, NotebookLM, Gemini) not as a reviewer, but as a creator – solving real business problems.',
            paragraph3: 'This combination of a journalist\'s analytical thinking with a developer\'s practical skills gives me a unique perspective. I understand both the "why" (business need) and the "how" (technical implementation). Testing mobile apps. Configuring self-hosted services. Creating content for Nauka. To Lubię Foundation and Builder Polska.',
            paragraph4: 'Looking for projects where this hybrid skillset makes sense: from product research to technical documentation, from test automation to AI solution implementation.',
            cta: 'Let\'s work together →',
            info: {
                experience: {
                    label: 'Experience',
                    value: '20+ years in tech media'
                },
                focus: {
                    label: 'Focus',
                    value: 'AI Automation • QA Testing • Linux Infrastructure'
                },
                certifications: {
                    label: 'Certifications',
                    value: 'Google IT Support • AIDEAS AI • ISTQB (in progress)'
                },
                location: {
                    label: 'Location',
                    value: 'Warsaw, Poland • Remote'
                }
            }
        },
        services: {
            title: 'What I Offer',
            intro: 'I combine a journalist\'s analytical thinking with a developer\'s practical skills. I specialize in three areas:',
            tech: 'Tech Stack:',
            ai: {
                title: 'AI Automation & Workflow Engineering',
                description: 'I automate business processes using N8N and GenAI tools. Building workflows that save time and reduce manual tasks. From API integrations to content workflows – helping companies leverage AI in practice.',
                example: 'Use case: Content workflow automation with AI-powered research and content generation.'
            },
            qa: {
                title: 'QA & Mobile Testing',
                description: 'Testing mobile apps (Android/iOS) with a methodical approach developed through fact-checking at PAP. Preparing test strategies according to ISTQB standards, documenting bugs, and building QA processes for startups.',
                example: 'Use case: Comprehensive mobile testing before launch – from test case design to final QA report.'
            },
            linux: {
                title: 'Linux & Self-Hosting Infrastructure',
                description: 'Building infrastructure on Proxmox with virtualization and containerization. Configuring self-hosted services without cloud costs. Helping small businesses and homelab enthusiasts deploy their own servers.',
                example: 'Use case: Proxmox homelab setup with containers (NGINX, Immich, N8N) and infrastructure management.'
            }
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
