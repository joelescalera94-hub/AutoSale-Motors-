/* =========================================================
   SEO
   Responsabilidad: inyectar datos estructurados (JSON-LD)
   para el negocio y para cada vehículo. Es metadata invisible:
   no afecta el diseño ni el contenido visible de la página.
   ========================================================= */
window.AutosaleModules = window.AutosaleModules || {};
window.AutosaleModules.seo = (() => {
  function inject(data) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  function absoluteUrl(path) {
    return new URL(path, location.href).href;
  }

  // Convierte "08:00 – 18:00" en { opens, closes }. Si el horario dice
  // "Cerrado" o no tiene el formato esperado, se omite ese día.
  function hoursSpec(days, range) {
    if (!range || /cerrado/i.test(range)) return null;
    const parts = range.split('–').map((part) => part.trim());
    if (parts.length !== 2) return null;
    return { '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens: parts[0], closes: parts[1] };
  }

  function business(config) {
    const openingHoursSpecification = [
      hoursSpec(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], config.horarios.lunesViernes),
      hoursSpec(['Saturday'], config.horarios.sabado)
    ].filter(Boolean);

    inject({
      '@context': 'https://schema.org',
      '@type': 'AutomotiveBusiness',
      name: config.negocio.nombre,
      description: config.negocio.descripcion,
      image: absoluteUrl('assets/images/logo.png'),
      telephone: config.contacto.telefono,
      address: {
        '@type': 'PostalAddress',
        streetAddress: config.contacto.direccion,
        addressLocality: config.contacto.ciudad
      },
      url: absoluteUrl('index.html'),
      ...(openingHoursSpecification.length ? { openingHoursSpecification } : {})
    });
  }

  function vehicle(item, name) {
    inject({
      '@context': 'https://schema.org',
      '@type': 'Vehicle',
      name,
      brand: item.marca,
      model: item.modelo || undefined,
      vehicleEngine: item.motor ? { '@type': 'EngineSpecification', name: item.motor } : undefined,
      image: absoluteUrl(item.imagen),
      itemCondition: item.estado === 'seminuevo' ? 'https://schema.org/UsedCondition' : 'https://schema.org/NewCondition',
      // Sin precio a propósito: Autosale no publica precios en el sitio.
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: location.href
      }
    });
  }

  return { business, vehicle };
})();
