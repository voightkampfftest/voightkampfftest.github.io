/* ================================
   Main JavaScript
   Core initialization
   ================================ */

import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initI18n } from './i18n.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initI18n();        // Initialize first (sets language before other modules)
    initNavigation();
    initAnimations();

    console.log('Portfolio initialized successfully! 🚀');
});
