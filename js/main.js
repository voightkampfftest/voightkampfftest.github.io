/* ================================
   Main JavaScript
   Core initialization
   ================================ */

import { initNavigation } from './navigation.js';
import { initI18n } from './i18n.js';
import { initTheme } from './theme.js';
import { initProjects } from './projects.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initI18n();
    initNavigation();
    initProjects();
});
