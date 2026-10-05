# Lock-In Fitness

Sitio web para gestionar el estilo de vida saludable de sus usuarios: planes de entrenamiento, dietas con macros, calculadora de calorías y mapa de gimnasios cercanos en Córdoba.

## Estructura
/
├── inicio.html
├── inicio.css
├── nutricion.html          # listado de las 6 dietas
├── nutricion.css
├── calculadora1.html       # pasos previos de la calculadora
├── calculadora1.css
├── calculadora1.js
├── calculadora2.html
├── calculadora2.css
├── calculadora3.js
├── calculadora3.html       # resultados (+ calculadora3.js y .css)
├── calculadora3.css
├── calculadora3.js
├── mapa.html               # sedes en Córdoba
├── mapa.css
├── mapaScript.js
├── registrarse.html        # registro en 2 pasos (+ registrarse.js y .css)
├── registrarse.css
├── registrarse.js
├── dietas/
├── planes/
└── imagenes/

### `dietas/`
Una página HTML por dieta (`cetogenica`, `mediterranea`, `paleo`, `ayunoIntermitente`, `veganaFitness` y `volumen`) y su hoja de estilos `dietas.css`, compartida por todas. Todas tienen la misma estructura: portada, sobre la dieta, macros, beneficios, alimentos permitidos y a evitar, plan semanal desplegable y banner final.

### `planes/`
Una página HTML por plan de entrenamiento (`Definición Total`, `Movimiento Libre`, etc.) y su hoja de estilos `planes.css`. Misma idea que las dietas: portada, sobre el plan, distribución del volumen, beneficios, programa semanal desplegable por día y banner final.

### `imagenes/`
Logo y portadas. Las imágenes de dietas se llaman `Dieta - <Nombre>.png` y las de planes `Plan - <Nombre>.png`.

## Tecnologías

- HTML, CSS y JavaScript, sin frameworks
- [Bootstrap Icons](https://icons.getbootstrap.com) 1.11.3 (CDN)
- Fuente Montserrat (Google Fonts)
- [Leaflet](https://leafletjs.com) 1.9.4 con mapas de OpenStreetMap
- `localStorage` para pasar los datos entre los pasos de la calculadora

## Colores

### Principales
Fondo: #000
Rojo intenso: #ec0d1c

### Titulos
Titulos - blanco: #fff
Texto secundario (subtitulos) - gris claro: #a9a3b8
Texto terciario (contenido) - blanco: #d8d6e0

### Efectos
Rojo oscuro hover: #73050A
Boxes shadows: rgba(255, 45, 58, .15)

### Contenido
Fondo tarjetas - gris oscuro: #17171b
Bordes nav - gris: #1f1f1f
Bordes tarjetas - gris: #34343a

Semaforo categorias: #2ecc71 #1A2D25, #f1c40f #312C1A, #ff3b4b #331F24|

## Pendientes
- Responsiveness