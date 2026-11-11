// Página de gimnasios cercanos: mapa de Leaflet + lista de sedes.
// Se carga después de Leaflet (L) y de ../registroReact.jsx (usa BotonUsuario)

// Ruta desde esta carpeta hasta la raíz del proyecto
const RAIZ = "../";

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

const enlacesMenu = [
    { texto: "Inicio", icono: "bi-house-door", href: RAIZ + "inicio.html" },
    { texto: "Planes", icono: "bi-activity", href: RAIZ + "inicio.html#planes" },
    { texto: "Nutrición", icono: "bi-basket", href: RAIZ + "nutricion/nutricion.html" },
    { texto: "Calculadora", icono: "bi-calculator", href: RAIZ + "calculadora/calculadora1.html" },
    { texto: "Gimnasios Cercanos", icono: "bi-geo-alt", href: "mapa.html", seleccionado: true }
];

const redesSociales = [
    { icono: "bi-facebook", href: "https://facebook.com" },
    { icono: "bi-instagram", href: "https://instagram.com" },
    { icono: "bi-twitter-x", href: "https://twitter.com" },
    { icono: "bi-youtube", href: "https://youtube.com" }
];

const enlacesFooter = [
    { texto: "Inicio", href: RAIZ + "inicio.html" },
    { texto: "Planes", href: RAIZ + "inicio.html#planes" },
    { texto: "Nutrición", href: RAIZ + "nutricion/nutricion.html" },
    { texto: "Calculadora", href: RAIZ + "calculadora/calculadora1.html" },
    { texto: "Gimnasios", href: "mapa.html" }
];

function Header() {
    return (
        <header className="barra-superior">
            <div className="contenedor header-contenido">
                <a href={RAIZ + "inicio.html"} className="logo">
                    <img src={RAIZ + "imagenes/logo.png"} alt="LockIn Logo" />
                </a>

                <nav className="menu">
                    {enlacesMenu.map(enlace => (
                        <a
                            key={enlace.texto}
                            href={enlace.href}
                            className={enlace.seleccionado ? "seleccionado" : undefined}
                        >
                            <i className={"bi " + enlace.icono}></i>
                            {enlace.texto}
                        </a>
                    ))}
                </nav>

                <div id="usuario-react">
                    <BotonUsuario />
                </div>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <div className="contenedor footer-contenido">
                <div className="footer-marca">
                    <img src={RAIZ + "imagenes/logo.png"} alt="LockIn" />
                    <p>
                        Tu gimnasio virtual de confianza.
                        Transforma tu cuerpo y mente desde cualquier lugar.
                    </p>

                    <div className="footer-redes">
                        {redesSociales.map(red => (
                            <a key={red.icono} href={red.href} target="_blank">
                                <i className={"bi " + red.icono}></i>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-enlaces">
                    <h4>Enlaces Rápidos</h4>
                    {enlacesFooter.map(enlace => (
                        <a key={enlace.texto} href={enlace.href}>{enlace.texto}</a>
                    ))}
                </div>

                <div className="footer-contacto">
                    <h4>Contacto</h4>
                    <p>
                        <i className="bi bi-envelope"></i>
                        info@lock-in.fit
                    </p>
                    <p>
                        <i className="bi bi-telephone"></i>
                        +54 351 000-0000
                    </p>
                    <p>
                        <i className="bi bi-geo-alt"></i>
                        Córdoba, Argentina
                    </p>
                </div>
            </div>

            <div className="footer-inferior">
                <div className="contenedor footer-inferior-contenido">
                    <p>
                        © 2026 LockIn - Todos los derechos reservados.
                    </p>
                    <div>
                        <a href="#">Términos y Condiciones</a>
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function TarjetaSede({ sede, activa, alElegir, referencia }) {
    return (
        <article
            className={activa ? "tarjeta-sede activa" : "tarjeta-sede"}
            ref={referencia}
            onClick={alElegir}
        >
            <div className="sede-cabecera">
                <h4>{sede.nombre}</h4>
                <span className="sede-rating"><i className="bi bi-star-fill"></i> {sede.calificacion}</span>
            </div>
            <p className="sede-dato"><i className="bi bi-geo-alt"></i> {sede.direccion}</p>
            <p className="sede-zona-texto">{sede.zona}</p>
            <p className="sede-dato"><i className="bi bi-clock"></i> {sede.horarios}</p>
            <div className="sede-tags">
                {sede.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
        </article>
    );
}

function MapaSedes() {
    // La primera sede se muestra en el panel al entrar, pero sin marcar ninguna tarjeta
    const [seleccionada, setSeleccionada] = React.useState(null);
    const sedePanel = seleccionada || sedes[0];

    // Leaflet no es React: el mapa y los marcadores se guardan en refs para usarlos después
    const contenedorMapa = React.useRef(null);
    const mapa = React.useRef(null);
    const marcadores = React.useRef({});
    const lista = React.useRef(null);
    const tarjetas = React.useRef({});

    React.useEffect(() => {
        mapa.current = L.map(contenedorMapa.current).setView([-31.4170, -64.1950], 13);

        // Capa de mapa libre de OpenStreetMap (no requiere API Key ni registros)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapa.current);

        // Marcador rojo propio (ícono de Bootstrap Icons en lugar del pin azul de Leaflet)
        const iconoSede = L.divIcon({
            className: "marcador-sede",
            html: '<i class="bi bi-geo-alt-fill"></i>',
            iconSize: [36, 36],
            iconAnchor: [18, 34],      // la punta del pin queda sobre la coordenada
            popupAnchor: [0, -32]
        });

        sedes.forEach(sede => {
            const marcador = L.marker(sede.coords, { icon: iconoSede }).addTo(mapa.current);

            // Contenido del popup (los estilos están en mapa.css)
            marcador.bindPopup(`
                <div class="popup-sede">
                    <strong>${sede.nombre}</strong>
                    <span><i class="bi bi-geo-alt"></i> ${sede.direccion}</span>
                    <small><i class="bi bi-star-fill"></i> ${sede.calificacion} · ${sede.horarios}</small>
                </div>
            `);

            // Al tocar el marcador se elige la sede y la lista (no la página) baja hasta su tarjeta
            marcador.on("click", () => {
                setSeleccionada(sede);

                const tarjeta = tarjetas.current[sede.id];
                lista.current.scrollTo({ top: tarjeta.offsetTop - 8, behavior: "smooth" });
            });

            marcadores.current[sede.id] = marcador;
        });

        return () => mapa.current.remove();
    }, []);

    // Al tocar una tarjeta se elige la sede, el mapa vuela hasta ella y se abre su popup
    function elegirDesdeLista(sede) {
        setSeleccionada(sede);
        mapa.current.flyTo(sede.coords, 15, { duration: 1.2 });
        marcadores.current[sede.id].openPopup();
    }

    return (
        <section className="mapa-seccion">
            <div className="contenedor mapa-grid">
                <div className="mapa-columna">
                    <div className="mapa-caja">
                        <span className="mapa-pildora"><i className="bi bi-geo-alt"></i> Córdoba Capital</span>
                        {/* Leaflet dibuja el mapa acá */}
                        <div id="mapa" ref={contenedorMapa}></div>
                    </div>

                    <div className="sede-seleccionada" id="panel-sede-seleccionada">
                        <span className="sede-icono"><i className="bi bi-cursor"></i></span>
                        <div className="sede-info">
                            <small>Sede seleccionada</small>
                            <h3>{sedePanel.direccion}</h3>
                            <p>{sedePanel.zona}</p>
                        </div>
                        <a
                            className="boton-como-llegar"
                            href={`https://www.google.com/maps/dir/?api=1&destination=${sedePanel.coords[0]},${sedePanel.coords[1]}`}
                            target="_blank"
                        >
                            <i className="bi bi-cursor"></i> Cómo llegar
                        </a>
                    </div>
                </div>

                <aside className="sedes-lista">
                    <h3 className="sedes-titulo">{sedes.length} sedes disponibles</h3>

                    <div className="sedes-scroll" ref={lista}>
                        {sedes.map(sede => (
                            <TarjetaSede
                                key={sede.id}
                                sede={sede}
                                activa={seleccionada && seleccionada.id === sede.id}
                                alElegir={() => elegirDesdeLista(sede)}
                                referencia={elemento => tarjetas.current[sede.id] = elemento}
                            />
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}

function Mapa() {
    return (
        <>
            <Header />

            <main>
                <section className="hero">
                    <p className="hero-label"><b>CORDOBA CAPITAL</b></p>
                    <h2 className="hero-title">Gimnasios <span className="titulo_principal_rojo">cercanos</span></h2>
                    <p className="hero-text">
                        Encontrá tu sede más cercana en Córdoba.
                        Estos gimnasios cuentan con equipamiento de última generación y entrenadores certificados.
                    </p>
                </section>

                <MapaSedes />
            </main>

            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Mapa />);
