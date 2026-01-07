/* ================================
   Animations
   Typing effects, scroll reveals
   ================================ */

export function initAnimations() {
    initTypingEffect();

    console.log('Animations initialized ✓');
}

// ===== Typing Effect =====
function initTypingEffect() {
    const typingLines = document.querySelectorAll('.typing-line');

    if (typingLines.length === 0) return;

    // Start typing after initial fade-in
    setTimeout(() => {
        typeLines(typingLines, 0);
    }, 1000); // Wait for hero fade-in animation
}

function typeLines(lines, index) {
    if (index >= lines.length) return;

    const line = lines[index];
    const text = line.getAttribute('data-text');

    if (!text) {
        // Skip to next line if no text
        typeLines(lines, index + 1);
        return;
    }

    line.classList.add('typing');
    typeLine(line, text, 0, () => {
        line.classList.add('done');
        line.classList.remove('typing');

        // Delay before next line
        setTimeout(() => {
            typeLines(lines, index + 1);
        }, 500);
    });
}

function typeLine(element, text, charIndex, callback) {
    if (charIndex < text.length) {
        element.textContent += text.charAt(charIndex);

        setTimeout(() => {
            typeLine(element, text, charIndex + 1, callback);
        }, 50); // 50ms per character
    } else {
        // Typing complete
        callback();
    }
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
