/* =========================================================
   NAVEGACIÓN
   Responsabilidad: menú móvil, cierre del menú al seleccionar un
   enlace, y estado activo del enlace según la sección visible.
   ========================================================= */
window.AutosaleModules = window.AutosaleModules || {};
window.AutosaleModules.navigation = (() => {
  const $ = (selector) => document.querySelector(selector);

  function initMenu() {
    const button = $('.js-menu');
    const nav = $('.js-nav');
    if (!button || !nav) return;

    button.addEventListener('click', () => {
      const open = nav.classList.toggle('site-nav--open');
      button.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });

    nav.querySelectorAll('.js-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('site-nav--open');
        button.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Marca como activo el enlace de la sección visible en pantalla.
  // Antes la línea roja solo se ponía una vez en el HTML (en "Inicio")
  // y nada la movía; esto la actualiza al hacer clic o al hacer scroll.
  function initScrollSpy() {
    const nav = $('.js-nav');
    if (!nav || !('IntersectionObserver' in window)) return;

    const links = [...nav.querySelectorAll('.js-nav-link')];
    const homeLink = links.find((link) => !link.getAttribute('href').includes('#'));

    const sectionLinks = links
      .map((link) => {
        const hash = link.getAttribute('href').split('#')[1];
        const section = hash ? document.getElementById(hash) : null;
        return section ? { link, section } : null;
      })
      .filter(Boolean);

    if (!sectionLinks.length) return;

    const setActive = (activeLink) => {
      links.forEach((link) => link.classList.toggle('site-nav__link--active', link === (activeLink || homeLink)));
    };

    // Se recuerda el estado de cada sección porque el observer solo
    // informa las que cambiaron en cada disparo, no todas las vigiladas.
    const visible = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visible.set(entry.target, entry.isIntersecting));
      const current = sectionLinks.find(({ section }) => visible.get(section));
      setActive(current ? current.link : homeLink);
    }, { rootMargin: '-45% 0px -50% 0px' });

    sectionLinks.forEach(({ section }) => observer.observe(section));
  }

  function init() {
    initMenu();
    initScrollSpy();
  }

  return { init };
})();