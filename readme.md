# Lock-In Fitness

Sitio web para gestionar el estilo de vida saludable de sus usuarios: planes de entrenamiento, dietas con macros, calculadora de calorías y mapa de gimnasios cercanos en Córdoba.

## Estructura
Cada página tiene su carpeta con su HTML, su CSS y su componente de React (`.jsx`). Los HTML son solo el esqueleto que carga React: el contenido lo arma el `.jsx`.

/
├── inicio.html             # página principal (entrada al sitio)
├── inicio.css
├── inicioReact.jsx
├── registroReact.jsx       # compartido: botón de usuario del header, modal de registro y botón "Seguir"
├── calculadora/
├── login/
├── perfil/
├── nutricion/
├── dietas/
├── planes/
├── mapa/
└── imagenes/

### Archivo compartido: `registroReact.jsx`
Lo cargan casi todas las páginas. Tiene el botón "Únete Ahora" / "Hola, nombre" del header (`BotonUsuario`), el modal "Crear cuenta" (`Registro`), el botón "Registrarse" del inicio (`BotonRegistroHero`) y los botones "Seguir Dieta" / "Empezar Plan" (`Seguimiento`).

### `calculadora/`
Calculadora de calorías en 3 pasos: datos físicos (`calculadora1`), objetivo (`calculadora2`) y resultados con macros y dietas recomendadas (`calculadora3`). Cada paso tiene su `.html`, `.css` y `React.jsx`; el header y el footer de los tres están en `calculadoraComponentes.jsx`.

### `login/`
Inicio de sesión (`login.html` + `loginReact.jsx`). Desde ahí también se abre el modal de registro.

### `perfil/`
Perfil del usuario (`perfil.html` + `perfilReact.jsx`): dieta y plan que sigue, objetivo de calorías y datos personales.

### `nutricion/`
Listado de las 6 dietas (`nutricion.html`, `nutricion.css` y `nutricionReact.jsx`). Las tarjetas salen de `../dietas/datosDietas.js`.

### `dietas/`
Una página por dieta (`cetogenica`, `mediterranea`, `paleo`, `ayunoIntermitente`, `veganaFitness` y `volumen`). Todas usan el mismo componente `dietaReact.jsx` y la hoja de estilos `dietas.css`; cada HTML indica qué dieta mostrar con `data-dieta`. Los datos de las 6 están en `datosDietas.js`. Cada página tiene portada, sobre la dieta, macros, beneficios, alimentos permitidos y a evitar, y plan semanal desplegable.

### `planes/`
Una página por plan de entrenamiento (`definicionTotal`, `powerliftingBase`, `resistenciaRunner`, `quemaMaxima`, `movimientoLibre` y `atletaTotal`). Misma idea que las dietas: componente `planReact.jsx`, estilos `planes.css`, datos en `datosPlanes.js` y `data-plan` en cada HTML. Cada página tiene portada, sobre el plan, distribución del volumen, beneficios y programa semanal desplegable por día. El inicio también usa `datosPlanes.js` para sus tarjetas de planes.

### `mapa/`
Sedes en Córdoba (`mapa.html`, `mapa.css` y `mapaReact.jsx`): mapa de Leaflet, lista de sedes y panel de la sede seleccionada.

### `imagenes/`
Logo y portadas. Las imágenes de dietas se llaman `Dieta - <Nombre>.png` y las de planes `Plan - <Nombre>.png`.

## Tecnologías

- HTML, CSS y JavaScript
- [React](https://react.dev) 18 (CDN), sin Node ni herramientas de compilación: los `.jsx` se cargan con `<script type="text/babel">` y [Babel standalone](https://babeljs.io/docs/babel-standalone) los convierte en el navegador. Por eso las páginas tienen que abrirse con un servidor local (por ejemplo Live Server), no con doble clic
- [Bootstrap Icons](https://icons.getbootstrap.com) 1.11.3 (CDN)
- Fuente Montserrat (Google Fonts)
- [Leaflet](https://leafletjs.com) 1.9.4 con mapas de OpenStreetMap
- `localStorage` para guardar los usuarios y la sesión, la dieta y el plan que sigue cada usuario, y para pasar los datos entre los pasos de la calculadora

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