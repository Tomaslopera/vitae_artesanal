# Vitae Artesanal — guía sencilla del sitio

Este sitio está hecho con HTML, CSS y JavaScript sencillo. No necesita instalar programas, compilar archivos, ni usar un servidor o base de datos para publicarse. Las ilustraciones SVG que ya vienen en la carpeta son parte del diseño y se conservan como respaldo cuando todavía no hay una fotografía.

## Agregar fotografías paso a paso

1. Busca la carpeta `assets/imagenes/` dentro del proyecto.
2. Abre la subcarpeta indicada en la tabla. Si no existe en tu copia, créala respetando exactamente el nombre y las minúsculas.
3. Copia allí tu foto y asígnale el nombre exacto de la tabla. Por ejemplo: `experiencia-01.jpg`.
4. Recarga la página en el navegador. Si abriste el sitio desde un servidor local, normalmente basta con actualizar la pestaña.
5. Para reemplazar una foto, copia la nueva con el mismo nombre y elige **Reemplazar** cuando el computador lo pregunte. Recarga el sitio; el HTML no necesita cambios.

| Archivo que debes poner | Sección donde aparece |
| --- | --- |
| `assets/imagenes/portada.jpg` | Fotografía grande de la portada |
| `assets/imagenes/detalle.jpg` | Foto pequeña superpuesta en la portada |
| `assets/imagenes/productos/producto-01.jpg` | Primera tarjeta de productos |
| `assets/imagenes/productos/producto-02.jpg` | Segunda tarjeta de productos |
| `assets/imagenes/productos/producto-03.jpg` | Tercera tarjeta de productos |
| `assets/imagenes/experiencias/experiencia-01.jpg` | Foto principal del collage de experiencias |
| `assets/imagenes/experiencias/experiencia-02.jpg` | Foto pequeña superior del collage de experiencias |
| `assets/imagenes/experiencias/experiencia-03.jpg` | Foto pequeña inferior del collage de experiencias |
| `assets/imagenes/galeria/galeria-01.jpg` a `galeria-06.jpg` dentro de `assets/imagenes/galeria/` | Las seis imágenes de la galería, en orden |

**Ejemplo realista:** si tienes una foto de un taller creativo con las manos de las personas trabajando, guárdala como `assets/imagenes/experiencias/experiencia-01.jpg`. Esa foto aparecerá en el espacio grande de la sección “Experiencias”. Puedes guardar otras tomas del mismo taller como `experiencia-02.jpg` y `experiencia-03.jpg` para los dos espacios pequeños.

### Si una foto falta o tiene otro nombre

No pasa nada: el sitio muestra la ilustración SVG correspondiente. Las ilustraciones ya incluidas en `assets/imagenes/ilustraciones/` son el respaldo visual; no las borres. El sitio solo las reemplaza cuando encuentra la foto con el nombre y la ruta esperados.

### Usar WEBP o PNG

También puedes usar `.webp` o `.png`. Para ello, cambia la extensión en el atributo `data-photo` de la imagen correspondiente en `index.html`. Por ejemplo, cambia `data-photo="assets/imagenes/experiencias/experiencia-01.jpg"` por `data-photo="assets/imagenes/experiencias/experiencia-01.webp"` y guarda el archivo con ese nombre exacto en la misma carpeta. No cambies el `src` que apunta al SVG: ese archivo sigue siendo el respaldo si la foto no está disponible.

### Recomendaciones para las fotos

Usa fotos propias, nítidas y bien iluminadas. Para portada y experiencias, procura que el archivo tenga entre 1200 y 1800 píxeles de ancho; para productos y galería, entre 900 y 1400. Comprime las fotos para que carguen rápido (idealmente menos de 400 KB cada una). El diseño recorta las fotos para encajarlas en sus marcos; conviene dejar el tema principal cerca del centro. Pide autorización antes de publicar fotos donde aparezcan personas.

## Ver el sitio en tu computador

**Opción sencilla:** abre `index.html` con doble clic en tu navegador.

**Opción recomendada para previsualizar:**

1. Abre Terminal (Mac) o la consola de tu computador.
2. Entra a la carpeta del proyecto. Una forma sencilla es escribir `cd ` (con un espacio), arrastrar la carpeta `vitae_artesanal` a la ventana de Terminal y presionar Enter.
3. Ejecuta `python3 -m http.server 8000`.
4. Abre `http://localhost:8000` en el navegador.
5. Para detener la vista previa, vuelve a Terminal y presiona `Ctrl + C`.

No hay que instalar dependencias. Puedes publicar la carpeta completa en un servicio de alojamiento estático como GitHub Pages, Netlify o Cloudflare Pages.

### Direcciones de las secciones

La navegación usa direcciones limpias, sin `#`: `/home`, `/esencia`, `/productos`, `/experiencias`, `/galeria` y `/contacto`. Los enlaces actualizan la dirección y llevan a su sección sin recargar toda la página. Las carpetas con esos nombres contienen pequeños archivos estáticos para que una dirección también pueda abrirse o recargarse directamente. Al publicar, sube esas carpetas junto con `index.html` y `assets/`.

## Otros cambios

Los textos y enlaces están en `index.html`. Los colores, tamaños, distribución y estilos están en `assets/css/estilos.css`. El menú móvil, las animaciones de entrada, la carga de fotos y la galería ampliable están en `assets/js/main.js`. Las tipografías del diseño son Cormorant Garamond, DM Sans y Caveat; se cargan desde Google Fonts y tienen alternativas locales si no hay conexión.

Las descripciones actuales son editoriales. Confirma con Vitae Artesanal cualquier dato concreto de productos o experiencias antes de añadirlo, especialmente precios, fechas, cupos o testimonios.
