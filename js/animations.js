/* ================================
   Animations
   Scroll reveals and transitions
   ================================ */

export function initAnimations() {
    console.log('Animations initialized ✓');
}

// ===== Scroll Reveal Animation (for future sections) =====
export function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

    console.log('Scroll reveal initialized ✓');
}
