/* =========================================================
   REVEAL / ANIMACIONES DE ENTRADA
   Responsabilidad: mostrar bloques cuando entran en pantalla.
   ========================================================= */
window.AutosaleModules = window.AutosaleModules || {};
window.AutosaleModules.reveal = (() => {
  function observe(root = document) {
    const elements = [...root.querySelectorAll('.reveal')].filter((element) => !element.classList.contains('is-visible'));
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = entry.target.style.getPropertyValue('--reveal-delay');
        if (delay) entry.target.style.transitionDelay = delay;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px' });

    elements.forEach((element) => observer.observe(element));
  }

  return { observe };
})();
