const sedes = [
    {
        id: 1,
        cadena: "QIVOX",
        nombre: "QIVOX — SMART GYM [Ambrosio Olmos]",
        direccion: "Ambrosio Olmos 1090",
        zona: "Nueva Córdoba · Córdoba Capital",
        coords: [-31.4319, -64.1926], /*-31.431905928239164, -64.1926867*/
        calificacion: "4.5",
        horarios: "Lun-Vie 6:00-23:00 · Sáb 10:00-15:00",
        tags: ["Musculación", "Cardio", "Funcional"]
    },
    {
        id: 2,
        cadena: "Best Club",
        nombre: "Best Club — Nueva Córdoba / Centro",
        direccion: "Blvr. Chacabuco 472",
        zona: "Nueva Córdoba · Córdoba Capital",
        coords: [-31.4229, -64.1827], /*-31.422900178521143, -64.18270611349246*/
        calificacion: "4.5",
        horarios: "Lun-Vie 7:00-23:00 · Sáb 11:00-20:00 · Dom 16:00-22:00",
        tags: ["Musculación", "Spinning", "Clases grupales"]
    },
    {
        id: 3,
        cadena: "Best Club",
        nombre: "Best Club — Barrio Jardín",
        direccion: "Dr. Luis Podestá Costa 3236",
        zona: "Barrio Jardín · Córdoba Capital",
        coords: [-31.4497, -64.1856], /*-31.449792056191583, -64.1856595*/
        calificacion: "4.9",
        horarios: "Lun-Vie 7:00-22:30 · Sáb 10:00-14:00",
        tags: ["Musculación", "CrossFit", "Funcional"]
    },
    {
        id: 4,
        cadena: "BRISKBOX",
        nombre: "BRISKBOX — Cerro de las Rosas",
        direccion: "Av. Rafael Núñez 4344",
        zona: "Cerro de las Rosas · Córdoba Capital",
        coords: [-31.3673, -64.2336], /*-31.367382223667175, -64.23336349444719*/
        calificacion: "4.8",
        horarios: "Lun-Vie 7:00-22:00 · Sáb 10:00-13:00",
        tags: ["CrossFit", "HIIT", "Levantamiento"]
    },
    {
        id: 5,
        cadena: "QIVOX",
        nombre: "QIVOX — Smart Gym [Colón]",
        direccion: "Av. Colón 5034",
        zona: "Alto Alberdi · Córdoba Capital",
        coords: [-31.3954, -64.2458], /*-31.395477991065988, -64.2458164116415*/
        calificacion: "4.3",
        horarios: "Lun-Vie 6:00-22:00 · Sáb 9:00-14:00",
        tags: ["Smart Gym", "Musculación", "Cardio"]
    },
    {
        id: 6,
        cadena: "QIVOX",
        nombre: "QIVOX — Smart Gym [Oncativo]",
        direccion: "Oncativo 815",
        zona: "Barrio General Paz · Córdoba Capital",
        coords: [-31.4108, -64.1730], /*-31.410808938750186, -64.17307561534338*/
        calificacion: "4.5",
        horarios: "Lun-Vie 6:00- 23:00 · Sáb 9:00-15:00",
        tags: ["Musculación", "Cardio", "Zona Guiada"]
    },
    {
        id: 7,
        cadena: "BRISKBOX",
        nombre: "BRISKBOX — Valle Escondido",
        direccion: "Av. República de China 1920",
        zona: "Valle Escondido · Córdoba Capital",
        coords: [-31.3655, -64.2788], /*-31.365546563706225, -64.27880866931321*/
        calificacion: "4.3",
        horarios: "Lun-Vie 6:00-22:00 · Sáb 9:00-13:00 16:00-20:00",
        tags: ["CrossFit", "Funcional", "Cardio"]
    },
    {
        id: 8,
        cadena: "BRISKBOX",
        nombre: "BRISKBOX — Camino a San Carlos",
        direccion: "Av. Bernardo O'Higgins 5857",
        zona: "Camino a San Carlos · Córdoba Capital",
        coords: [-31.4789, -64.1695], /*-31.47891707557146, -64.16953210344494*/
        calificacion: "4.6",
        horarios: "Lun-Vie 6:00-10:00 · Sáb 9:00-13:00",
        tags: ["CrossFit", "Resistencia", "Fuerza"]
    }
];

//Tarjetas

// Genera las tarjetas de la lista a partir del arreglo "sedes"
function crearTarjeta(sede) {
    return `
        <article class="tarjeta-sede" id="sede-item-${sede.id}">
            <div class="sede-cabecera">
                <h4>${sede.nombre}</h4>
                <span class="sede-rating"><i class="bi bi-star-fill"></i> ${sede.calificacion}</span>
            </div>
            <p class="sede-dato"><i class="bi bi-geo-alt"></i> ${sede.direccion}</p>
            <p class="sede-zona-texto">${sede.zona}</p>
            <p class="sede-dato"><i class="bi bi-clock"></i> ${sede.horarios}</p>
            <div class="sede-tags">
                ${sede.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        </article>
    `;
}

const contenedorSedes = document.querySelector('.sedes-scroll');

if (!contenedorSedes) {
    console.error('No se encontró .sedes-scroll en el HTML');
} else {
    contenedorSedes.innerHTML = sedes.map(crearTarjeta).join('');
}
 
// 2. Inicializar el mapa centrado en Córdoba Capital (Nivel de zoom 13)
const map = L.map('mapa').setView([-31.4170, -64.1950], 13);
 
// 3. Cargar la capa de mapa libre de OpenStreetMap (No requiere API Key ni registros)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
 
// Marcador rojo propio (ícono de Bootstrap Icons en lugar del pin azul de Leaflet)
const iconoSede = L.divIcon({
    className: 'marcador-sede',
    html: '<i class="bi bi-geo-alt-fill"></i>',
    iconSize: [36, 36],
    iconAnchor: [18, 34],      // la punta del pin queda sobre la coordenada
    popupAnchor: [0, -32]
});
 
// Elementos del panel "Sede seleccionada" y de la lista
const elemNombre = document.getElementById('sede-nombre');
const elemZona = document.getElementById('sede-zona');
const elemBtnComoLlegar = document.getElementById('btn-como-llegar');
const elemListaScroll = document.querySelector('.sedes-scroll');
const elemTituloLista = document.getElementById('sedes-titulo');
 
// Título de la lista con la cantidad real de sedes
if (elemTituloLista) {
    elemTituloLista.textContent = `${sedes.length} sedes disponibles`;
}
 
// Resalta en la lista la tarjeta de la sede elegida
function marcarTarjetaActiva(id) {
    document.querySelectorAll('.tarjeta-sede').forEach(t => t.classList.remove('activa'));
 
    const tarjeta = document.getElementById(`sede-item-${id}`);
    if (tarjeta) tarjeta.classList.add('activa');
}
 
// Función para actualizar los datos de la sede seleccionada en la pantalla
function seleccionarSede(sede, moverMapa = true) {
    if (elemNombre) elemNombre.textContent = sede.direccion;
    if (elemZona) elemZona.textContent = sede.zona;
    if (elemBtnComoLlegar) {
        elemBtnComoLlegar.href = `https://www.google.com/maps/dir/?api=1&destination=${sede.coords[0]},${sede.coords[1]}`;
    }
 
    marcarTarjetaActiva(sede.id);
 
    if (moverMapa) {
        map.flyTo(sede.coords, 15, {
            duration: 1.2
        });
    }
}
 
// 4. Agregar los marcadores al mapa y vincularlos con la lista
const marcadores = {};
 
sedes.forEach(sede => {
    // Crear marcador para cada sede
    const marker = L.marker(sede.coords, { icon: iconoSede }).addTo(map);
 
    // Contenido del popup informativo (los estilos están en mapa.css)
    marker.bindPopup(`
        <div class="popup-sede">
            <strong>${sede.nombre}</strong>
            <span><i class="bi bi-geo-alt"></i> ${sede.direccion}</span>
            <small><i class="bi bi-star-fill"></i> ${sede.calificacion} · ${sede.horarios}</small>
        </div>
    `);
 
    // Al hacer clic en el marcador en el mapa
    marker.on('click', () => {
        seleccionarSede(sede, false);
 
        // Desplaza solo la lista (no la página) hasta la tarjeta elegida
        const tarjeta = document.getElementById(`sede-item-${sede.id}`);
        if (tarjeta && elemListaScroll) {
            elemListaScroll.scrollTo({ top: tarjeta.offsetTop - 8, behavior: 'smooth' });
        }
    });
 
    marcadores[sede.id] = marker;
 
    // Al hacer clic en la tarjeta de la lista en HTML
    const tarjeta = document.getElementById(`sede-item-${sede.id}`);
    if (tarjeta) {
        tarjeta.addEventListener('click', () => {
            seleccionarSede(sede, true);
            marker.openPopup();
        });
    }
});