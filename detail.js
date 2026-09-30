/* =========================================================
   AUTOSALE MOTORS · FICHA INDIVIDUAL
   Carga datos públicos desde Supabase sin precios.
   ========================================================= */
(async () => {
  const config = window.AUTOSALE_CONFIG;
  const fallbackVehicles = window.AUTOSALE_VEHICLES || [];
  const id = new URLSearchParams(location.search).get('id');
  const $ = (selector) => document.querySelector(selector);

  document.querySelectorAll('.js-whatsapp').forEach((anchor) => {
    anchor.href = window.AutosaleModules.whatsapp.link('Hola, quiero consultar sobre los vehículos disponibles en Autosale Motors.');
  });
  $('#year') && ($('#year').textContent = new Date().getFullYear());

  let vehicle = await window.AutosalePublicData?.findVehicle(id);
  if (!vehicle) vehicle = fallbackVehicles.find((item) => item.id === id || item.slug === id);

  if (!vehicle) {
    $('.detail').innerHTML = '<div class="u-container"><h1>Vehículo no encontrado</h1><a class="button button--primary" href="index.html#vehiculos">Volver al catálogo</a></div>';
    return;
  }

  const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2310151d'/%3E%3Crect x='130' y='95' width='140' height='110' rx='8' fill='none' stroke='%23252d38' stroke-width='6'/%3E%3Ccircle cx='165' cy='130' r='12' fill='%23252d38'/%3E%3Cpath d='M130 190l40-35 30 25 45-40 25 50v10a8 8 0 01-8 8H138a8 8 0 01-8-8z' fill='%23252d38'/%3E%3C/svg%3E";
  const name = [vehicle.marca, vehicle.modelo, vehicle.version].filter(Boolean).join(' ');
  document.title = `${name} | Autosale Motors`;
  window.AutosaleModules.seo.vehicle(vehicle, name);

  const image = $('.js-detail-image');
  image.addEventListener('error', () => { if (image.src !== FALLBACK_IMAGE) image.src = FALLBACK_IMAGE; });
  image.src = vehicle.imagen || FALLBACK_IMAGE;
  image.alt = name;
  $('.js-detail-class').textContent = vehicle.clase === 'minibus' ? 'MINIBÚS' : vehicle.clase === 'vagoneta' ? 'VAGONETA' : 'CAMIÓN';
  $('.js-detail-title').textContent = name;
  $('.js-detail-tags').innerHTML = [vehicle.estado === 'seminuevo' ? 'Seminuevo' : 'Nuevo', vehicle.novedad ? 'Novedad' : '', vehicle.variante === 'furgonado' ? 'Furgonado' : ''].filter(Boolean).map((tag) => `<span class="detail-tag">${tag}</span>`).join('');

  const specs = [['Marca', vehicle.marca], ['Modelo', vehicle.modelo || '—'], ['Versión', vehicle.version || '—'], ['Motor', vehicle.motor || '—'], ...(Array.isArray(vehicle.especificaciones) ? vehicle.especificaciones : [])];
  $('.js-detail-specs').innerHTML = specs.map(([label, value]) => `<div class="detail-spec-chip"><span class="detail-spec-chip__label">${label}</span><strong class="detail-spec-chip__value">${value}</strong></div>`).join('');
  if (vehicle.descripcion && $('.js-detail-description')) $('.js-detail-description').textContent = vehicle.descripcion;

  const gallery = Array.isArray(vehicle.galeria) && vehicle.galeria.length ? vehicle.galeria : [vehicle.imagen].filter(Boolean);
  const thumbs = $('.js-detail-thumbs');
  thumbs.innerHTML = gallery.map((src, index) => `<button class="detail-thumb${index === 0 ? ' detail-thumb--active' : ''}" type="button" data-src="${src}" aria-label="Ver imagen ${index + 1}"><img class="detail-thumb__image" src="${src}" alt="${name} — imagen ${index + 1}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'"></button>`).join('');
  thumbs.querySelectorAll('.detail-thumb').forEach((button) => button.addEventListener('click', () => { image.src = button.dataset.src; thumbs.querySelectorAll('.detail-thumb').forEach((item) => item.classList.remove('detail-thumb--active')); button.classList.add('detail-thumb--active'); }));
  $('.js-gallery-note').textContent = gallery.length > 1 ? `${gallery.length} imágenes disponibles en la ficha.` : 'Ficha con imagen principal.';

  const video = $('.js-detail-video');
  if (vehicle.video) { video.hidden = false; video.innerHTML = `<video class="detail-video__player" controls preload="metadata" src="${vehicle.video}"></video>`; }
  $('.js-vehicle-whatsapp').href = window.AutosaleModules.whatsapp.link(window.AutosaleModules.whatsapp.vehicleMessage(vehicle));
  $('.js-contact-phone') && ($('.js-contact-phone').textContent = config.contacto.telefono);
})();
