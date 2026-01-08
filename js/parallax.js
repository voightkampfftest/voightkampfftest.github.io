/**
 * Parallax Effect for Hero Background
 * Subtle mouse-driven movement for depth perception
 */

export function initParallax() {
    const parallaxLayer = document.getElementById('parallax-layer');

    if (!parallaxLayer) return;

    // Check if device supports hover (desktop only)
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isDesktop || prefersReducedMotion) {
        // Disable parallax on mobile or for users who prefer reduced motion
        parallaxLayer.style.transform = 'none';
        parallaxLayer.style.transition = 'none';
        return;
    }

    // Parallax state
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Mouse movement tracking
    document.addEventListener('mousemove', (e) => {
        // Normalize mouse position to -1 to 1 range
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    });

    // Smooth animation loop using lerp (linear interpolation)
    function animate() {
        // Lerp for smooth, organic movement
        const ease = 0.1;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        // Apply transform with limited range (30px max movement)
        const moveX = currentX * 30;
        const moveY = currentY * 30;

        parallaxLayer.style.transform = `translate(${moveX}px, ${moveY}px)`;

        requestAnimationFrame(animate);
    }

    // Start animation loop
    animate();
}
