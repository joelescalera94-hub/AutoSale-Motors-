/* =========================================================
   HEADER
   Responsabilidad: efecto visual del encabezado al hacer scroll.
   ========================================================= */
window.AutosaleModules = window.AutosaleModules || {};
window.AutosaleModules.header = (() => {
  function init() {
    const header = document.querySelector('.js-header');
    if (!header) return;

    const sync = () => header.classList.toggle('is-scrolled', window.scrollY > 14);
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  }

  return { init };
})();
