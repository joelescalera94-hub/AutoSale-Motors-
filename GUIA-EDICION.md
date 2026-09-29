# Guía rápida de edición · Autosale Motors

Esta guía está separada del README para que puedas tenerla abierta mientras editas.

## A. Quiero cambiar un color

Archivo: `css/00-base.css`

Busca al principio:

```css
--color-accent: #ef3340;
```

Ese es el rojo principal.

También puedes cambiar:

- `--color-bg` → fondo general.
- `--color-panel` → paneles.
- `--color-text` → texto principal.
- `--color-muted` → texto secundario.
- `--container-max` → ancho máximo del contenido.

## B. Quiero cambiar el menú

Archivo: `index.html` o `vehiculo.html`.

Los enlaces están dentro de:

```html
<nav class="site-nav ...">
```

El diseño del menú está en `css/10-header.css`.

El menú móvil funciona desde `js/modules/navigation.js`.

## C. Quiero poner mis logos de marcas

1. Copia los PNG en `assets/images/marcas/`.
2. Abre `data/brands.js`.
3. Cambia el nombre de archivo en `logo` si hace falta.

No necesitas tocar `brands-carousel.js`.

## D. Quiero hacer el carrusel más rápido

Archivo: `js/modules/brands-carousel.js`.

Arriba encontrarás:

```js
const SPEED_DESKTOP = 48;
const SPEED_MOBILE = 34;
```

Ejemplo:

```js
const SPEED_DESKTOP = 70;
```

Lo hará más rápido.

## E. Quiero agregar una marca

En `data/brands.js` añade:

```js
{ nombre: 'MARCA', logo: 'marca.png' }
```

Y coloca `marca.png` en `assets/images/marcas/`.

## F. Quiero cambiar un vehículo

Archivo: `data/vehicles.js`.

Cambia los campos del vehículo que necesites.

La imagen principal está en:

```js
imagen: 'assets/images/vehiculos/archivo.jpg'
```

## G. Quiero agregar fotos a una ficha

Dentro del vehículo añade:

```js
galeria: [
  'assets/images/vehiculos/modelo/01-frente.jpg',
  'assets/images/vehiculos/modelo/02-trasera.jpg',
  'assets/images/vehiculos/modelo/03-interior.jpg'
]
```

## H. Quiero agregar especificaciones

Usa:

```js
especificaciones: [
  ['Combustible', 'Gasolina'],
  ['Transmisión', 'Automática'],
  ['Capacidad', '...']
]
```

Usa únicamente información confirmada.

## I. Quiero agregar un video

```js
video: 'assets/videos/modelo.mp4'
```

La plantilla lo mostrará automáticamente.

## J. Quiero cambiar WhatsApp o dirección

Archivo: `js/config.js`.

Ese es el único lugar que necesitas tocar para los datos generales de contacto.

## K. Quiero cambiar el aspecto de las tarjetas

Archivo: `css/60-catalog.css`.

Busca `.vehicle-card` y sus elementos:

- `.vehicle-card__image`
- `.vehicle-card__body`
- `.vehicle-card__title`
- `.vehicle-card__actions`
- `.vehicle-card__consult`

## L. Quiero cambiar la ficha individual

Archivo visual: `css/70-detail.css`.

Archivo funcional: `js/detail.js`.

No mezcles datos de vehículos dentro de `detail.js`; los datos deben permanecer en `data/vehicles.js`.

## M. Quiero cambiar una animación

Animaciones generales: `css/80-utilities.css`.

Animación del hero: `css/30-hero.css`.

Movimiento del carrusel: `js/modules/brands-carousel.js`.

## N. Regla para no romper el proyecto

- Cambios de contenido → `data/` o `js/config.js`.
- Cambios visuales → `css/`.
- Cambios de comportamiento → `js/modules/`.
- Estructura HTML → `index.html` / `vehiculo.html`.
- Fotos/logos → `assets/images/`.

No cambies una clase `js-*` pensando que es diseño. Es un hook de JavaScript.
