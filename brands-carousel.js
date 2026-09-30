window.AutosaleModules = window.AutosaleModules || {};

window.AutosaleModules.brandsCarousel = (() => {

  const SPEED = 40;

  function init(brands = []) {

    const track = document.querySelector('.js-brands-track');
    const viewport = document.querySelector('.js-brand-carousel');

    if (!track || !viewport || !brands.length) return;

    track.innerHTML = '';

    // Crear dos grupos iguales
    const group1 = document.createElement('div');
    const group2 = document.createElement('div');

    group1.className = 'brands-track__group';
    group2.className = 'brands-track__group';

    brands.forEach(brand => {

      const createLogo = () => {
        const item = document.createElement('div');
        item.className = 'brand-item';

        const img = document.createElement('img');

        img.src = `assets/images/marcas/${brand.logo}`;
        img.alt = brand.nombre;

        item.appendChild(img);

        return item;
      };

      group1.appendChild(createLogo());
      group2.appendChild(createLogo());

    });

    track.appendChild(group1);
    track.appendChild(group2);

    let position = 0;
    let width = 0;
    let lastTime = performance.now();

    function measure() {
      width = group1.offsetWidth;
    }

    function animate(time) {

      const delta = (time - lastTime) / 1000;
      lastTime = time;

      position += SPEED * delta;

      if (position >= width) {
        position = 0;
      }

      track.style.transform =
        `translate3d(-${position}px, 0, 0)`;

      requestAnimationFrame(animate);
    }

    // Esperar a que las imágenes carguen
    window.addEventListener('load', measure);

    measure();

    requestAnimationFrame(animate);
  }

  return { init };

})();