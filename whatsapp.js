/* =========================================================
   WHATSAPP
   Responsabilidad: construir enlaces y mensajes de WhatsApp.
   No contiene lógica visual.
   ========================================================= */
window.AutosaleModules = window.AutosaleModules || {};
window.AutosaleModules.whatsapp = (() => {
  const config = window.AUTOSALE_CONFIG;
  const phone = () => config.contacto.whatsapp;
  const link = (message) => `https://wa.me/${phone()}?text=${encodeURIComponent(message)}`;

  function applyGeneralLinks(root = document) {
    root.querySelectorAll('.js-whatsapp').forEach((anchor) => {
      anchor.href = link('Hola, quiero consultar sobre los vehículos disponibles en Autosale Motors.');
    });
  }

  function vehicleMessage(vehicle) {
    const name = [vehicle.marca, vehicle.modelo, vehicle.version].filter(Boolean).join(' ');
    return `Hola, estoy interesado en el ${name}. Quisiera conocer disponibilidad y condiciones.`;
  }

  return { link, applyGeneralLinks, vehicleMessage };
})();
