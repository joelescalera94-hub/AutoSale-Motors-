/* =========================================================
   AUTOSALE MOTORS · INICIALIZADOR PRINCIPAL
   La web pública usa catalogo_publico cuando existe.
   Los datos públicos NO incluyen precios.
   ========================================================= */
(async () => {
  const config = window.AUTOSALE_CONFIG;
  const $ = (selector) => document.querySelector(selector);

  window.AutosaleModules.whatsapp.applyGeneralLinks();
  $('.js-contact-whatsapp') && ($('.js-contact-whatsapp').textContent = config.contacto.whatsappTexto);
  $('.js-contact-phone') && ($('.js-contact-phone').textContent = config.contacto.telefono);
  $('.js-address') && ($('.js-address').textContent = config.contacto.direccion);
  $('.js-map') && ($('.js-map').href = config.contacto.mapaUrl);
  $('#year') && ($('#year').textContent = new Date().getFullYear());
  window.AutosaleModules.seo.business(config);

  const staticVehicles = window.AUTOSALE_VEHICLES || [];
  const remoteVehicles = await window.AutosalePublicData?.loadVehicles();
  if (Array.isArray(remoteVehicles) && remoteVehicles.length) {
    const bySlug = new Map(remoteVehicles.map(v => [String(v.slug || v.id), v]));
    const merged = staticVehicles.map(v => bySlug.has(String(v.id)) ? { ...v, ...bySlug.get(String(v.id)) } : v);
    const existing = new Set(merged.map(v => String(v.id)));
    remoteVehicles.forEach(v => { const key = String(v.slug || v.id); if (!existing.has(key)) merged.push(v); });
    window.AutosaleModules.catalog.setVehicles(merged);
  }

  window.AutosaleModules.navigation.init();
  window.AutosaleModules.header.init();
  window.AutosaleModules.brandsCarousel.init(window.AUTOSALE_BRANDS || []);
  window.AutosaleModules.reveal.observe();
  window.AutosaleModules.catalog.init();
})();
