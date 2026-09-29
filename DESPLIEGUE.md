# Checklist antes de publicar — Autosale Motors

El código está listo para producción. Lo que falta es **contenido real del
negocio**, que nadie puede completar salvo Autosale. Esta lista es justo eso:
qué reemplazar y dónde, antes de subir el sitio.

## 1. Datos de contacto (`js/config.js`)
Cada línea marcada `// EDITAR` en ese archivo:
- [ ] `contacto.whatsapp` — número real, solo dígitos con código de país (ej. `59170000000`)
- [ ] `contacto.whatsappTexto` y `contacto.telefono` — cómo se muestran en pantalla
- [ ] `contacto.direccion` — hoy dice literalmente "EDITAR ANTES DE PUBLICAR"
- [ ] `contacto.mapaUrl` — enlace de Google Maps
- [ ] `redes.instagram`, `redes.facebook`, `redes.tiktok` — hoy son `#`

## 2. Imágenes reales
- [ ] `assets/images/marcas/` — está vacía. Sin logos PNG, el carrusel de marcas
      muestra el nombre en texto como respaldo (funciona, pero no es lo ideal
      para publicar). Ver el `README.md` de esa carpeta para el formato esperado.
- [ ] `data/vehicles.js` — el campo `imagen` de cada vehículo apunta hoy a
      ilustraciones de ejemplo (SVG), no fotos reales. Ver el `README.md` de
      `assets/images/vehiculos/` para dónde colocarlas.
- [ ] `assets/images/logo.png` y `og-image.png` — confirmar que son el logo y
      la imagen de vista previa definitivos.

## 3. Solo si vas a usar un dominio propio
- [ ] `robots.txt` — reemplazar `EDITAR-TU-DOMINIO.com` por el dominio real
- [ ] `sitemap.xml` — mismo reemplazo, en las dos URLs del archivo

Si el sitio se publica sin dominio propio (por ejemplo en un subdominio
gratuito), estos dos archivos son opcionales: el sitio funciona igual sin
ellos, solo ayudan a que Google lo indexe mejor.

## 4. Ya verificado en esta revisión (no requiere acción)
- JavaScript sin errores de sintaxis (verificado con Node en los 12 archivos)
- HTML validado (sin errores; solo advertencias esperadas de campos que JS
  completa después de cargar la página)
- Las 27 imágenes de `data/vehicles.js` existen y cargan correctamente
- Si alguna imagen llegara a faltar o romperse, ahora se muestra un
  reemplazo visual en vez de un ícono de imagen rota
- Datos estructurados (JSON-LD) agregados para negocio y vehículos: ayudan
  a que Google entienda el contenido, aunque tomarán los valores de
  `config.js` tal como estén (incluidos los que digan "EDITAR")

## Recomendado antes de publicar
- [ ] Enviar un mensaje de prueba por el botón de WhatsApp con el número real
- [ ] Revisar el sitio en un celular real, no solo en la vista de escritorio
