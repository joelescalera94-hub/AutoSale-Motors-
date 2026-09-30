/* =========================================================
   CATÁLOGO
   Responsabilidad: filtros, búsqueda, ordenamiento y tarjetas.
   Las clases visuales siguen BEM; los selectores js-* son solo hooks.
   ========================================================= */
window.AutosaleModules = window.AutosaleModules || {};
window.AutosaleModules.catalog = (() => {
  let vehicles = window.AUTOSALE_VEHICLES || [];
  let filter = 'todos';
  let search = '';
  let sort = 'default';

  const $ = (selector) => document.querySelector(selector);

  // Placeholder que se muestra si la imagen del vehículo no carga (ruta rota, archivo faltante).
  // Es un SVG en línea con los mismos colores del tema, así que no requiere archivos ni CSS extra.
  const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2310151d'/%3E%3Crect x='130' y='95' width='140' height='110' rx='8' fill='none' stroke='%23252d38' stroke-width='6'/%3E%3Ccircle cx='165' cy='130' r='12' fill='%23252d38'/%3E%3Cpath d='M130 190l40-35 30 25 45-40 25 50v10a8 8 0 01-8 8H138a8 8 0 01-8-8z' fill='%23252d38'/%3E%3C/svg%3E";

  function motor(vehicle) {
    return Number((vehicle.motor || '').replace(/[^0-9.]/g, '')) || 0;
  }

  function classLabel(vehicle) {
    if (vehicle.clase === 'minibus') return 'Minibús';
    if (vehicle.clase === 'vagoneta') return 'Vagoneta';
    return 'Camión';
  }

  function whatsappIcon() {
    return `<svg class="icon-whatsapp" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.56 0 .25 5.3.25 11.82c0 2.08.54 4.1 1.57 5.88L.16 24l6.43-1.68a11.78 11.78 0 0 0 5.49 1.36h.01c6.51 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.13-3.39-8.38Zm-8.44 18.17h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.82 1 1.02-3.72-.24-.38a9.82 9.82 0 1 1 8.4 4.67Zm5.39-7.37c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.42-.85-.76-1.42-1.69-1.59-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.66-1.58-.9-2.16-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.49.07-.75.37-.26.29-.98.96-.98 2.35s1 2.72 1.14 2.91c.14.19 1.97 3.01 4.77 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z"/></svg>`;
  }

  function render() {
    const grid = $('.js-grid');
    if (!grid) return;

    let list = vehicles
      .filter((vehicle) => filter === 'todos' || vehicle.clase === filter)
      .filter((vehicle) => [vehicle.marca, vehicle.modelo, vehicle.version].filter(Boolean).join(' ').toLowerCase().includes(search.toLowerCase()));

    if (sort === 'az') list.sort((a,b) => a.marca.localeCompare(b.marca));
    if (sort === 'za') list.sort((a,b) => b.marca.localeCompare(a.marca));
    if (sort === 'motor-asc') list.sort((a,b) => motor(a) - motor(b));
    if (sort === 'motor-desc') list.sort((a,b) => motor(b) - motor(a));
    if (sort === 'default') list.sort((a,b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0));

    grid.innerHTML = list.map((vehicle, index) => {
      const name = [vehicle.marca, vehicle.modelo, vehicle.version].filter(Boolean).join(' ');
      const message = window.AutosaleModules.whatsapp.vehicleMessage(vehicle);
      return `
        <article class="vehicle-card reveal" style="--reveal-delay:${Math.min(index * 45, 240)}ms">
          <a class="vehicle-card__image" href="vehiculo.html?id=${encodeURIComponent(vehicle.id)}" aria-label="Ver ficha de ${name}">
            <img src="${vehicle.imagen}" alt="${name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
            ${vehicle.novedad ? '<span class="vehicle-card__badge">Novedad</span>' : ''}
          </a>
          <div class="vehicle-card__body">
            <div class="vehicle-card__tags">
              <span class="vehicle-card__tag">${classLabel(vehicle)}</span>
              <span class="vehicle-card__tag">${vehicle.estado === 'seminuevo' ? 'Seminuevo' : 'Nuevo'}</span>
              ${vehicle.variante === 'furgonado' ? '<span class="vehicle-card__tag">Furgonado</span>' : ''}
            </div>
            <h3 class="vehicle-card__title">${[vehicle.marca, vehicle.modelo].filter(Boolean).join(' ')}</h3>
            <p class="vehicle-card__version">${vehicle.version || '—'}</p>
            <p class="vehicle-card__motor">Motor: <strong>${vehicle.motor}</strong></p>
            <div class="vehicle-card__actions">
              <a class="button button--secondary" href="vehiculo.html?id=${encodeURIComponent(vehicle.id)}">Ver ficha</a>
              <a class="vehicle-card__consult" target="_blank" rel="noopener" href="${window.AutosaleModules.whatsapp.link(message)}"><span>Consultar</span>${whatsappIcon()}</a>
            </div>
          </div>
        </article>`;
    }).join('');

    $('.js-empty').hidden = list.length > 0;
    window.AutosaleModules.reveal.observe(grid);
  }

  function init() {
    document.querySelectorAll('.js-filter').forEach((button) => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.js-filter').forEach((item) => {
          item.classList.remove('filter-tab--active');
          item.setAttribute('aria-selected', 'false');
        });
        button.classList.add('filter-tab--active');
        button.setAttribute('aria-selected', 'true');
        filter = button.dataset.filter;
        render();
      });
    });

    $('.js-search')?.addEventListener('input', (event) => { search = event.target.value; render(); });
    $('.js-sort')?.addEventListener('change', (event) => { sort = event.target.value; render(); });
    render();
  }

  function setVehicles(nextVehicles) {
    vehicles = Array.isArray(nextVehicles) && nextVehicles.length ? nextVehicles : (window.AUTOSALE_VEHICLES || []);
    render();
  }

  return { init, render, setVehicles };
})();
