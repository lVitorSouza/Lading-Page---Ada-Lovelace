// ============================================
//  Ada Lovelace — Landing Page | script.js
//  Funcionalidade: Cards de curiosidades com
//  efeito flip ao clicar (mostrar/esconder)
// ============================================

/**
 * flipCard — Vira um card ao ser clicado.
 * Adiciona ou remove a classe "flipped",
 * que aciona a animação CSS de rotação 3D.
 *
 * @param {HTMLElement} card - O elemento clicado
 */
function flipCard(card) {
    card.classList.toggle('flipped');
}

/**
 * resetCards — Remove a classe "flipped" de todos
 * os cards, voltando todos ao estado inicial.
 */
function resetCards() {
    const cards = document.querySelectorAll('.curio-card');
    cards.forEach(function(card) {
        card.classList.remove('flipped');
    });
}

// ---- Animação de entrada por scroll (Intersection Observer) ----
// Elementos com a classe "timeline__item" e "achievements__card"
// surgem com animação quando entram na viewport.

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.15 });

// Aplica estado inicial oculto e observa os elementos
document.querySelectorAll('.timeline__item, .achievements__card, .challenges__item').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});