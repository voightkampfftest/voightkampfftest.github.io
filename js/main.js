/* ================================
   Main JavaScript
   Core initialization
   ================================ */

import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();

    console.log('Portfolio initialized successfully! 🚀');
});
