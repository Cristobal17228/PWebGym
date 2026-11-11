// Página de inicio. Las tarjetas de planes salen de planes/datosPlanes.js
// Se carga después de registroReact.jsx (usa BotonUsuario y BotonRegistroHero)

const enlacesMenu = [
    { texto: "Inicio", icono: "bi-house-door", href: "inicio.html", seleccionado: true },
    { texto: "Planes", icono: "bi-activity", href: "#planes" },
    { texto: "Nutrición", icono: "bi-basket", href: "nutricion/nutricion.html" },
    { texto: "Calculadora", icono: "bi-calculator", href: "calculadora/calculadora1.html" },
    { texto: "Gimnasios Cercanos", icono: "bi-geo-alt", href: "mapa/mapa.html" }
];

const redesSociales = [
    { icono: "bi-facebook", href: "https://facebook.com" },
    { icono: "bi-instagram", href: "https://instagram.com" },
    { icono: "bi-twitter-x", href: "https://twitter.com" },
    { icono: "bi-youtube", href: "https://youtube.com" }
];

const enlacesFooter = [
    { texto: "Inicio", href: "inicio.html" },
    { texto: "Planes", href: "#planes" },
    { texto: "Nutrición", href: "nutricion/nutricion.html" },
    { texto: "Calculadora", href: "calculadora/calculadora1.html" },
    { texto: "Gimnasios", href: "mapa/mapa.html" }
];

const estadisticasHero = [
    { valor: "5K+", texto: "Miembros Activos" },
    { valor: "+10", texto: "Planes Online" },
    { valor: "98%", texto: "Satisfacción" }
];

// Cada línea del título va en su propio renglón
const beneficios = [
    {
        icono: "bi-person",
        color: "icono-naranja",
        titulo: ["Acompañamiento", "Personalizado"],
        texto: "Un algoritmo avanzado que elige rutinas específicas para tus objetivos y nivel físico."
    },
    {
        icono: "bi-camera-video",
        color: "icono-rojo",
        titulo: ["Rutinas Virtuales"],
        texto: "Acceso 24/7 a planes. Entrena cuando quieras, donde quieras."
    },
    {
        icono: "bi-apple",
        color: "icono-naranja",
        titulo: ["Nutrición Online"],
        texto: "Planes alimenticios personalizados para potenciar tus resultados."
    },
    {
        icono: "bi-people",
        color: "icono-rojo",
        titulo: ["Comunidad", "Fitness"],
        texto: "Únete a una comunidad motivadora. Comparte logros, retos y experiencias con otros miembros."
    }
];

const testimonios = [
    {
        texto: "\"En 3 meses he logrado transformar completamente mi cuerpo. Los entrenamientos son intensos pero efectivos, y el apoyo nutricional ha sido clave. ¡100% recomendado!\"",
        iniciales: "MG",
        nombre: "María González",
        profesion: "Profesional en Marketing"
    },
    {
        texto: "\"Trabajo desde casa y Lock In me ha dado la flexibilidad que necesitaba. Las clases en vivo son increíbles y la comunidad es muy motivadora.\"",
        iniciales: "CR",
        nombre: "Carlos Ramírez",
        profesion: "Ingeniero de Software"
    },
    {
        texto: "\"Los entrenadores son profesionales excepcionales. Me han ayudado a superar mis límites y alcanzar metas que creía imposibles. Mejor inversión en mi salud.\"",
        iniciales: "AM",
        nombre: "Ana Martínez",
        profesion: "Emprendedora"
    }
];

const estadisticasTestimonios = [
    { valor: "4.9/5", texto: "Calificación promedio" },
    { valor: "5,000+", texto: "Miembros activos" },
    { valor: "15K+", texto: "Clases impartidas" },
    { valor: "98%", texto: "Recomiendan" }
];

function Header() {
    // En celular el menú se abre y cierra con el botón hamburguesa
    const [menuAbierto, setMenuAbierto] = React.useState(false);

    return (
        <header className="barra-superior">
            <div className="contenedor header-contenido">
                <button
                    className="boton-menu"
                    type="button"
                    aria-label="Abrir menú"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                >
                    <i className={menuAbierto ? "bi bi-x-lg" : "bi bi-list"}></i>
                </button>

                <a href="inicio.html" className="logo">
                    <img src="imagenes/logo.png" alt="LockIn Logo" />
                </a>

                <nav className={menuAbierto ? "menu abierto" : "menu"}>
                    {enlacesMenu.map(enlace => (
                        <a
                            key={enlace.texto}
                            href={enlace.href}
                            className={enlace.seleccionado ? "seleccionado" : undefined}
                            onClick={() => setMenuAbierto(false)}
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
                    <img src="imagenes/logo.png" alt="LockIn" />
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

function Hero() {
    return (
        <section className="hero">
            <div className="contenedor hero-contenido">
                <p className="frase-antes-del-titulo">
                    <span className="punto"></span>
                    Tu gimnasio, en cualquier lugar
                </p>
                <h1 className="titulo-principal">
                    <span className="titulo-principal-blanco">TRANSFORMA TU</span>
                    <span className="titulo-principal-rojo">CUERPO Y MENTE</span>
                </h1>
                <p className="descripcion-hero">
                    Lock In es un proyecto que busca ayudar a los usuarios a organizar y mejorar su estilo
                    de vida saludable, permitiéndoles gestionar sus planes de entrenamiento y
                    alimentación desde un mismo lugar.
                </p>
                <div className="botones-hero">
                    <a href="#planes" className="boton-entrenamiento">
                        Empieza tu entrenamiento online
                        <i className="bi bi-arrow-right"></i>
                    </a>
                    <div id="registro-hero-react">
                        <BotonRegistroHero />
                    </div>
                </div>
                <div className="estadisticas-hero">
                    {estadisticasHero.map(estadistica => (
                        <div className="estadistica" key={estadistica.texto}>
                            <h3>{estadistica.valor}</h3>
                            <p>{estadistica.texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Beneficios() {
    return (
        <section className="beneficios">
            <div className="contenedor">
                <div className="encabezado-centrado">
                    <p className="etiqueta-seccion">BENEFICIOS</p>
                    <h2 className="beneficios-titulo">
                        ¿Por qué elegir <span>Lock In?</span>
                    </h2>
                    <p className="beneficios-descripcion">
                        Todo lo que necesitas para alcanzar tus metas fitness en un solo lugar
                    </p>
                </div>

                <div className="beneficios-contenedor">
                    {beneficios.map(beneficio => (
                        <div className="beneficio" key={beneficio.icono}>
                            <div className={"beneficio-icono " + beneficio.color}>
                                <i className={"bi " + beneficio.icono}></i>
                            </div>
                            <h3>
                                {beneficio.titulo.map((linea, indice) => (
                                    <React.Fragment key={linea}>
                                        {indice > 0 && <br />}
                                        {linea}
                                    </React.Fragment>
                                ))}
                            </h3>
                            <p>{beneficio.texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TarjetaPlan({ clave, plan }) {
    const tarjeta = plan.tarjeta;

    return (
        <article className="plan-tarjeta">
            <div className="plan-media">
                <img src={plan.imagen} alt={plan.nombre} />
                {tarjeta.destacado && <span className="plan-popular">{plan.badge}</span>}
                <div className={tarjeta.colorIcono ? "plan-icono " + tarjeta.colorIcono : "plan-icono"}>
                    <i className={"bi " + tarjeta.icono}></i>
                </div>
            </div>

            <div className="plan-contenido">
                <div className="plan-badges">
                    <span className={"badge " + tarjeta.claseCategoria}>{plan.categoria.texto}</span>
                    <span className={"badge " + tarjeta.claseNivel}>{plan.nivel.texto}</span>
                </div>
                <h3>{plan.nombre}</h3>
                <p className="plan-subtitulo">{plan.subtitulo}</p>
                <p className="plan-descripcion">{tarjeta.descripcion}</p>
                <div className="plan-datos">
                    <p>
                        <i className="bi bi-clock"></i>
                        {plan.frecuencia}
                    </p>
                    <p>
                        <i className="bi bi-tools"></i>
                        {tarjeta.equipamiento || plan.equipamiento}
                    </p>
                </div>
                <a href={"planes/" + clave + ".html"} className="plan-enlace">
                    Ver plan
                    <i className="bi bi-chevron-right"></i>
                </a>
            </div>
        </article>
    );
}

function Planes() {
    return (
        <section id="planes" className="planes">
            <div className="contenedor">
                <p className="planes-etiqueta">ENTRENAMIENTO</p>
                <h2 className="planes-titulo">
                    Planes de <span>Entrenamiento</span>
                </h2>
                <p className="planes-descripcion">
                    Elegí el programa que se adapte a tus objetivos. Cada plan incluye rutinas
                    semanales completas, progresión y guía de ejercicios.
                </p>

                <div className="planes-resumen">
                    <span>
                        <i className="bi bi-lightning-charge-fill"></i>
                        {Object.keys(planes).length} planes disponibles
                    </span>
                    <span>
                        <i className="bi bi-bullseye"></i>
                        3 niveles de dificultad
                    </span>
                    <span>
                        <i className="bi bi-fire"></i>
                        Garantía 30 días
                    </span>
                </div>

                <div className="planes-tarjetas">
                    {Object.keys(planes).map(clave => (
                        <TarjetaPlan key={clave} clave={clave} plan={planes[clave]} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Testimonios() {
    return (
        <section className="testimonios">
            <div className="contenedor">
                <div className="encabezado-centrado">
                    <p className="etiqueta-seccion">TESTIMONIOS</p>
                    <h2 className="testimonios-titulo">
                        Lo que dicen <span>Nuestros Miembros</span>
                    </h2>
                    <p className="testimonios-descripcion">
                        Miles de personas han transformado sus vidas con Lock In
                    </p>
                </div>

                <div className="testimonios-contenedor">
                    {testimonios.map(testimonio => (
                        <article className="testimonio" key={testimonio.nombre}>
                            <div className="comillas">”</div>
                            <div className="estrellas">★★★★★</div>
                            <p className="testimonio-texto">{testimonio.texto}</p>
                            <div className="testimonio-autor">
                                <div className="avatar">{testimonio.iniciales}</div>
                                <div>
                                    <h4>{testimonio.nombre}</h4>
                                    <p>{testimonio.profesion}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="testimonios-estadisticas">
                    {estadisticasTestimonios.map(estadistica => (
                        <div className="testimonio-estadistica" key={estadistica.texto}>
                            <h3>{estadistica.valor}</h3>
                            <p>{estadistica.texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Inicio() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Beneficios />
                <Planes />
                <Testimonios />
            </main>

            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Inicio />);
