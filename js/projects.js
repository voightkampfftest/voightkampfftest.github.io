/**
 * Projects Section
 * Expandable project cards functionality
 */

export function initProjects() {
    const projectCards = document.querySelectorAll('.project-card[data-expandable]');

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't toggle if clicking on a link
            if (e.target.closest('a')) return;

            card.classList.toggle('expanded');
        });
    });
}
