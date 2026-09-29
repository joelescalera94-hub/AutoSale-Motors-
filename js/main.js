/* =========================================================
   AUTOSALE MOTORS · INICIALIZADOR PRINCIPAL
   Este archivo NO contiene toda la lógica del sitio.
   Solo coordina los módulos de js/modules/.

   Orden:
   1. WhatsApp/contacto
   2. Navegación
   3. Header
   4. Carrusel de marcas
   5. Animaciones reveal
   6. Catálogo
   ========================================================= */
(() => {
  const config = window.AUTOSALE_CONFIG;
  const $ = (selector) => document.querySelector(selector);

  window.AutosaleModules.whatsapp.applyGeneralLinks();
  $('.js-contact-whatsapp') && ($('.js-contact-whatsapp').textContent = config.contacto.whatsappTexto);
  $('.js-contact-phone') && ($('.js-contact-phone').textContent = config.contacto.telefono);
  $('.js-address') && ($('.js-address').textContent = config.contacto.direccion);
  $('.js-map') && ($('.js-map').href = config.contacto.mapaUrl);
  $('#year') && ($('#year').textContent = new Date().getFullYear());
  window.AutosaleModules.seo.business(config);

  window.AutosaleModules.navigation.init();
  window.AutosaleModules.header.init();
  window.AutosaleModules.brandsCarousel.init(window.AUTOSALE_BRANDS || []);
  window.AutosaleModules.reveal.observe();
  window.AutosaleModules.catalog.init();
})();
