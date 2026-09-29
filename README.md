# Autosale Motors · Proyecto organizado y editable

Esta versión está organizada para que puedas modificar el sitio sin tener que buscar código mezclado. Se usa metodología **BEM** para las clases visuales y prefijos `js-*` para los hooks de JavaScript.

## 1. ¿Dónde modifico cada cosa?

```text
index.html                  → estructura de la página principal
vehiculo.html               → plantilla de las fichas individuales

css/
├── main.css                → índice de estilos; normalmente no necesitas tocarlo
├── 00-base.css             → colores, tipografía, variables, accesibilidad
├── 10-header.css           → logo, menú y navegación
├── 20-buttons.css          → botones e icono de WhatsApp
├── 30-hero.css             → portada/hero
├── 40-brands.css           → diseño visual del carrusel de marcas
├── 50-sections.css         → respaldo, financiamiento, permutas, contacto y footer
├── 60-catalog.css          → filtros y tarjetas de vehículos
├── 70-detail.css           → ficha individual, galería y especificaciones
├── 80-utilities.css        → animaciones reveal y utilidades
└── 90-responsive.css       → tablet y móvil

js/
├── config.js               → WhatsApp, teléfono, dirección, mapa y redes
├── main.js                 → inicia y conecta los módulos de la página principal
├── detail.js               → carga la ficha individual
└── modules/
    ├── whatsapp.js         → enlaces y mensajes de WhatsApp
    ├── navigation.js      → menú móvil
    ├── header.js          → efecto del header al hacer scroll
    ├── brands-carousel.js → movimiento REAL del carrusel de marcas
    ├── reveal.js          → animaciones de entrada al hacer scroll
    └── catalog.js         → búsqueda, filtros, orden y tarjetas

data/
├── vehicles.js             → inventario público y especificaciones
└── brands.js               → marcas y nombres de sus PNG

assets/images/
├── logo.png                → logo de Autosale
├── marcas/                 → aquí van los PNG de las marcas
└── vehiculos/              → fotografías de vehículos
```

## 2. Metodología BEM

La estructura visual usa:

- **Block:** `vehicle-card`
- **Element:** `vehicle-card__title`, `vehicle-card__image`, `vehicle-card__actions`
- **Modifier:** `button--primary`, `filter-tab--active`, `site-nav--open`

Los nombres `js-*` NO son estilos. Son solamente selectores para JavaScript. Por ejemplo, `js-grid` identifica el lugar donde JavaScript dibuja las tarjetas.

Esto permite cambiar el diseño en CSS sin romper la lógica.

## 3. Cómo agregar logos PNG

Coloca los PNG en:

`assets/images/marcas/`

Nombres esperados:

```text
foton.png
king-long.png
higer.png
golden-dragon.png
kama.png
changan.png
jetour.png
fortin.png
rzm.png
toyota.png
```

Luego revisa `data/brands.js`. Cada entrada tiene:

```js
{ nombre: 'FOTON', logo: 'foton.png' }
```

Si el archivo tiene otro nombre, cambia solamente el valor `logo`.

### Recomendación para los PNG

Usa fondo transparente, buena resolución y el logo centrado. El diseño oscuro del sitio funciona mejor con PNG transparentes.

## 4. Cómo agregar o cambiar vehículos

Edita `data/vehicles.js`.

Ejemplo mínimo:

```js
{
  id: 'mi-vehiculo',
  clase: 'vagoneta',
  marca: 'MARCA',
  modelo: 'MODELO',
  version: 'VERSIÓN',
  motor: '2000 cc',
  imagen: 'assets/images/vehiculos/mi-vehiculo.jpg',
  estado: 'nuevo',
  destacado: false
}
```

### Galería

Puedes añadir:

```js
galeria: [
  'assets/images/vehiculos/mi-vehiculo/01-frente.jpg',
  'assets/images/vehiculos/mi-vehiculo/02-trasera.jpg',
  'assets/images/vehiculos/mi-vehiculo/03-interior.jpg'
]
```

### Video

Opcionalmente:

```js
video: 'assets/videos/mi-vehiculo.mp4'
```

### Especificaciones adicionales

```js
especificaciones: [
  ['Combustible', 'Gasolina'],
  ['Transmisión', 'Automática']
]
```

No agregues datos que no estén confirmados por Autosale.

## 5. Precios

Los precios **no deben colocarse en `data/vehicles.js`**. El catálogo público no los muestra ni los envía al navegador.

## 6. Contacto

Edita `js/config.js`.

Debes cambiar:

- `contacto.whatsapp`
- `contacto.whatsappTexto`
- `contacto.telefono`
- `contacto.direccion`
- `contacto.mapaUrl`
- `redes.instagram`
- `redes.facebook`
- `redes.tiktok`

Para WhatsApp, `contacto.whatsapp` debe contener solo números y código de país.

## 7. Carrusel de marcas · corrección importante

El carrusel de esta versión **ya no utiliza `scrollLeft` ni `animation: translate(-50%)`**.

`js/modules/brands-carousel.js`:

1. crea dos grupos idénticos de marcas;
2. mide el ancho real del primer grupo;
3. mueve el track en píxeles mediante `requestAnimationFrame`;
4. cuando alcanza exactamente el ancho del primer grupo, vuelve a cero;
5. como el segundo grupo es idéntico, el cambio no se percibe.

La velocidad se cambia arriba del archivo:

```js
const SPEED_DESKTOP = 48;
const SPEED_MOBILE = 34;
```

Número mayor = carrusel más rápido.

El carrusel se pausa al pasar el mouse o enfocar con teclado y continúa después.

### Si sigue sin moverse

Revisa si el dispositivo tiene activada la opción del sistema **Reducir movimiento / Reduce motion**. El proyecto respeta esa preferencia de accesibilidad y detiene las animaciones cuando está activa.

## 8. Cómo probar correctamente

Recomendado:

1. Abre la carpeta del proyecto en VS Code.
2. Usa Live Server o cualquier servidor estático local.
3. Abre `index.html` mediante ese servidor.
4. Revisa la consola del navegador si algo no aparece.

El sitio también es estático y puede publicarse en cualquier hosting que sirva HTML, CSS y JavaScript.

## 9. Orden recomendado para personalizar

1. `js/config.js` → datos reales del negocio.
2. `assets/images/logo.png` → logo definitivo.
3. `assets/images/marcas/` → logos PNG.
4. `data/brands.js` → nombres/rutas de marcas.
5. `assets/images/vehiculos/` → fotos reales.
6. `data/vehicles.js` → imágenes, galerías y especificaciones.
7. `css/00-base.css` → colores generales si quieres cambiar la identidad visual.
8. `css/90-responsive.css` → ajustes específicos para móvil.

## 10. Regla práctica para editar

Si quieres cambiar **cómo se ve**, busca primero el archivo CSS correspondiente.

Si quieres cambiar **qué información aparece**, busca `data/vehicles.js`, `data/brands.js` o `js/config.js`.

Si quieres cambiar **qué hace una interacción**, busca el módulo correspondiente en `js/modules/`.

Evita editar `js/main.js` salvo que necesites cambiar el orden o la inicialización de los módulos.
