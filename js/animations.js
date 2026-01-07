/* ================================
   Animations
   Typing effects, scroll reveals
   ================================ */

export function initAnimations() {
    initTypingEffect();

    console.log('Animations initialized ✓');
}

// ===== Typing Effect with Loop =====
function initTypingEffect() {
    const typingLines = document.querySelectorAll('.typing-line');
    const cursorLine = document.querySelector('.cursor-line');

    if (typingLines.length === 0) return;

    // Start typing after initial fade-in
    setTimeout(() => {
        startTypingLoop(typingLines, cursorLine);
    }, 1000); // Wait for hero fade-in animation
}

function startTypingLoop(lines, cursorLine) {
    // Type all lines
    typeLines(lines, 0, () => {
        // All lines typed, show cursor below
        if (cursorLine) {
            cursorLine.classList.add('active');
        }

        // Wait 3 seconds, then reset and restart
        setTimeout(() => {
            resetTerminal(lines, cursorLine);
            startTypingLoop(lines, cursorLine);
        }, 3000);
    });
}

function typeLines(lines, index, onComplete) {
    if (index >= lines.length) {
        // All lines done
        if (onComplete) onComplete();
        return;
    }

    const line = lines[index];
    const text = line.getAttribute('data-text');

    if (!text) {
        // Skip to next line if no text
        typeLines(lines, index + 1, onComplete);
        return;
    }

    // Show the line and start typing
    line.classList.add('typing');
    typeLine(line, text, 0, () => {
        // Typing complete for this line
        line.classList.add('done');
        line.classList.remove('typing');

        // Delay before next line
        setTimeout(() => {
            typeLines(lines, index + 1, onComplete);
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

function resetTerminal(lines, cursorLine) {
    // Hide cursor line
    if (cursorLine) {
        cursorLine.classList.remove('active');
    }

    // Clear all lines
    lines.forEach(line => {
        line.textContent = '';
        line.classList.remove('typing', 'done');
    });
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
