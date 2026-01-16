/* ================================
   Main JavaScript
   Core initialization
   ================================ */

import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initI18n } from './i18n.js';
import { initTheme } from './theme.js';
import { initParallax } from './parallax.js';
import { initProjects } from './projects.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();       // Initialize first (apply theme before rendering)
    initI18n();        // Initialize second (sets language before other modules)
    initNavigation();
    initAnimations();
    initParallax();    // Initialize parallax effect
    initProjects();    // Initialize expandable project cards

    console.log('Portfolio initialized successfully! 🚀');
});
