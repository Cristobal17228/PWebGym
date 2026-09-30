// MAPASCRIPT.JS - LOCK-IN FITNESS (Gimnasios Cercanos en Córdoba)
// =========== A REVISAR!!

// 1. Datos de gimnasios reales de Córdoba Capital (Best Club, QIVOX, BRISKBOX)
const sedes = [
    {
        id: 1,
        cadena: "QIVOX",
        nombre: "QIVOX — SMART GYM [Ambrosio Olmos]",
        direccion: "Ambrosio Olmos 1090",
        zona: "Nueva Córdoba · Córdoba Capital",
        coords: [-31.4334, -64.1925],
        calificacion: "4.9",
        horarios: "Lun-Vie 6:00–23:00 · Sáb 10:00–15:00",
        tags: ["Musculación", "Cardio", "Funcional"]
    },
    {
        id: 2,
        cadena: "Best Club",
        nombre: "Best Club — Nueva Córdoba / Centro",
        direccion: "Obispo Trejo 640",
        zona: "Nueva Córdoba · Córdoba Capital",
        coords: [-31.4218, -64.1884],
        calificacion: "4.8",
        horarios: "Lun-Vie 6:00–23:00 · Sáb 8:00–20:00",
        tags: ["Musculación", "Spinning", "Clases grupales"]
    },
    {
        id: 3,
        cadena: "Best Club",
        nombre: "Best Club — Barrio Jardín",
        direccion: "Dr. Luis Podestá Costa 3236",
        zona: "Barrio Jardín · Córdoba Capital",
        coords: [-31.4518, -64.1818],
        calificacion: "4.8",
        horarios: "Lun-Vie 6:30–22:30 · Sáb 9:00–18:00",
        tags: ["Musculación", "CrossFit", "Funcional"]
    },
    {
        id: 4,
        cadena: "BRISKBOX",
        nombre: "BRISKBOX — Cerro de las Rosas",
        direccion: "Av. Rafael Núñez 4344",
        zona: "Cerro de las Rosas · Córdoba Capital",
        coords: [-31.3688, -64.2345],
        calificacion: "4.9",
        horarios: "Lun-Vie 6:30–22:00 · Sáb 9:00–13:00",
        tags: ["CrossFit", "HIIT", "Levantamiento"]
    },
    {
        id: 5,
        cadena: "QIVOX",
        nombre: "QIVOX — Smart Gym [Colón]",
        direccion: "Av. Colón 5034",
        zona: "Alto Alberdi · Córdoba Capital",
        coords: [-31.3980, -64.2410],
        calificacion: "4.8",
        horarios: "Lun-Vie 6:00–23:00 · Sáb 9:00–15:00",
        tags: ["Smart Gym", "Musculación", "Cardio"]
    },
    {
        id: 6,
        cadena: "QIVOX",
        nombre: "QIVOX — Smart Gym [Oncativo]",
        direccion: "Oncativo 815",
        zona: "Barrio General Paz · Córdoba Capital",
        coords: [-31.4115, -64.1725],
        calificacion: "4.7",
        horarios: "Lun-Vie 6:00–23:00 · Sáb 9:00–15:00",
        tags: ["Musculación", "Cardio", "Zona Guiada"]
    },
    {
        id: 7,
        cadena: "BRISKBOX",
        nombre: "BRISKBOX — Valle Escondido",
        direccion: "Av. República de China 1920",
        zona: "Valle Escondido · Córdoba Capital",
        coords: [-31.3855, -64.2762],
        calificacion: "4.9",
        horarios: "Lun-Vie 6:30–22:00 · Sáb 9:00–13:00",
        tags: ["CrossFit", "Funcional", "Cardio"]
    },
    {
        id: 8,
        cadena: "BRISKBOX",
        nombre: "BRISKBOX — Camino a San Carlos",
        direccion: "Av. Bernardo O'Higgins 5857",
        zona: "Camino a San Carlos · Córdoba Capital",
        coords: [-31.4725, -64.1685],
        calificacion: "4.8",
        horarios: "Lun-Vie 6:30–21:30 · Sáb 9:00–13:00",
        tags: ["CrossFit", "Resistencia", "Fuerza"]
    }
];

// 2. Inicializar el mapa centrado en Córdoba Capital (Nivel de zoom 13)
const map = L.map('mapa').setView([-31.4170, -64.1950], 13);

// 3. Cargar la capa de mapa libre de OpenStreetMap (No requiere API Key ni registros)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Elementos del panel "Sede seleccionada"
const elemNombre = document.getElementById('sede-nombre');
const elemZona = document.getElementById('sede-zona');
const elemBtnComoLlegar = document.getElementById('btn-como-llegar');

// Función para actualizar los datos de la sede seleccionada en la pantalla
function seleccionarSede(sede, moverMapa = true) {
    if (elemNombre) elemNombre.textContent = sede.direccion;
    if (elemZona) elemZona.textContent = sede.zona;
    if (elemBtnComoLlegar) {
        elemBtnComoLlegar.href = `https://www.google.com/maps/dir/?api=1&destination=${sede.coords[0]},${sede.coords[1]}`;
    }

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
    const marker = L.marker(sede.coords).addTo(map);
    
    // Contenido del popup informativo
    marker.bindPopup(`
        <div style="font-family: sans-serif; text-align: left;">
            <strong style="color: #d32f2f;">${sede.nombre}</strong><br>
            <span>📍 ${sede.direccion}</span><br>
            <small>⭐ ${sede.calificacion} | ${sede.horarios}</small>
        </div>
    `);

    // Al hacer clic en el marcador en el mapa
    marker.on('click', () => {
        seleccionarSede(sede, false);
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

// Dejar seleccionada la primera sede por defecto (Nueva Córdoba)
seleccionarSede(sedes[0], false);
