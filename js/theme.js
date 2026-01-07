/* ================================
   Theme Management
   Dark/Light mode toggle with persistence
   ================================ */

const THEME_KEY = 'portfolio-theme';
const THEME_ICONS = {
    light: '☀',
    dark: '☾'
};

export function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');

    if (!themeToggle || !themeIcon) {
        console.warn('Theme toggle not found');
        return;
    }

    // Get initial theme
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    // Set initial theme
    setTheme(initialTheme, themeIcon);

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme, themeIcon);
        localStorage.setItem(THEME_KEY, newTheme);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only apply if user hasn't manually set a preference
        if (!localStorage.getItem(THEME_KEY)) {
            const newTheme = e.matches ? 'dark' : 'light';
            setTheme(newTheme, themeIcon);
        }
    });

    console.log('Theme initialized ✓');
}

function setTheme(theme, iconElement) {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        iconElement.textContent = THEME_ICONS.light;
    } else {
        document.documentElement.removeAttribute('data-theme');
        iconElement.textContent = THEME_ICONS.dark;
    }

    // Dispatch event for other modules if needed
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
}
