// src/router.js
export function initRouter() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-route]');
    if (!link) return;
    e.preventDefault();

    const to = link.dataset.route;
    if (to === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // тут позже добавим переходы на "Библия", "ORA", и т.д.
  });
}
