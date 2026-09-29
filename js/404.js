/* =========================================================
   AUTOSALE MOTORS · PÁGINA 404
   Responsabilidad: enlaces de WhatsApp y navegación genéricos
   (misma lógica que main.js, sin catálogo ni carrusel de marcas).
   ========================================================= */
(() => {
  const $ = (selector) => document.querySelector(selector);

  window.AutosaleModules.whatsapp.applyGeneralLinks();
  window.AutosaleModules.navigation.init();
  window.AutosaleModules.header.init();
  $('#year') && ($('#year').textContent = new Date().getFullYear());
})();
