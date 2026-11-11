// Listado de dietas. Las tarjetas salen de ../dietas/datosDietas.js
// Se carga después de ../registroReact.jsx (usa BotonUsuario)

// Ruta desde esta carpeta hasta la raíz del proyecto
const RAIZ = "../";

const enlacesMenu = [
    { texto: "Inicio", icono: "bi-house-door", href: RAIZ + "inicio.html" },
    { texto: "Planes", icono: "bi-activity", href: RAIZ + "inicio.html#planes" },
    { texto: "Nutrición", icono: "bi-basket", href: "nutricion.html", seleccionado: true },
    { texto: "Calculadora", icono: "bi-calculator", href: RAIZ + "calculadora/calculadora1.html" },
    { texto: "Gimnasios Cercanos", icono: "bi-geo-alt", href: RAIZ + "mapa/mapa.html" }
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
    { texto: "Nutrición", href: "nutricion.html" },
    { texto: "Calculadora", href: RAIZ + "calculadora/calculadora1.html" },
    { texto: "Gimnasios", href: RAIZ + "mapa/mapa.html" }
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
            <div className="contenedor footer_contenido">
                <div className="footer_marca">
                    <img src={RAIZ + "imagenes/logo.png"} alt="LockIn" />
                    <p>
                        Tu gimnasio virtual de confianza.
                        Transforma tu cuerpo y mente desde cualquier lugar.
                    </p>

                    <div className="footer_redes">
                        {redesSociales.map(red => (
                            <a key={red.icono} href={red.href} target="_blank">
                                <i className={"bi " + red.icono}></i>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer_enlaces">
                    <h4>Enlaces Rápidos</h4>
                    {enlacesFooter.map(enlace => (
                        <a key={enlace.texto} href={enlace.href}>{enlace.texto}</a>
                    ))}
                </div>

                <div className="footer_contacto">
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

            <div className="footer_inferior">
                <div className="contenedor footer_inferior_contenido">
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

function TarjetaDieta({ clave, dieta }) {
    const { proteina, carbohidratos, grasas } = dieta.macros;

    return (
        <div className="tarjeta">
            <div className="tarjeta-img">
                <img src={RAIZ + dieta.imagen} alt={dieta.nombre} />
                <span className="tarjeta-badge">{dieta.badge}</span>
                <span className="tarjeta-emoji">{dieta.emoji}</span>
            </div>

            <div className="tarjeta-body">
                <div className="tarjeta-head">
                    <h3>{dieta.nombre}</h3>
                    <span className={"nivel " + dieta.nivel.clase}>{dieta.nivel.texto}</span>
                </div>

                <p className="tarjeta-sub">{dieta.subtitulo}</p>
                <p className="tarjeta-desc">{dieta.descripcion}</p>

                {/* El ancho de cada tramo de la barra sale de las variables --p, --c y --g */}
                <div className="macros" style={{ "--p": proteina, "--c": carbohidratos, "--g": grasas }}>
                    <div className="macros-labels">
                        <span>Proteína {proteina}%</span>
                        <span>Carbs {carbohidratos}%</span>
                        <span>Grasa {grasas}%</span>
                    </div>
                    <div className="macros-bar">
                        <span className="m-prot"></span>
                        <span className="m-carb"></span>
                        <span className="m-grasa"></span>
                    </div>
                </div>

                <div className="tarjeta-foot">
                    <span className="meta"><i className="bi bi-record-circle"></i> {dieta.objetivo}</span>
                    <span className="meta"><i className="bi bi-clock"></i> {dieta.duracion}</span>
                    <a href={RAIZ + "dietas/" + clave + ".html"} className="tarjeta-link">
                        Ver dieta <i className="bi bi-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

function Nutricion() {
    return (
        <>
            <Header />

            <section className="hero">
                <p className="hero-label"><b>NUTRICIÓN</b></p>
                <h2 className="hero-title">Planes <span className="titulo_principal_rojo">nutricionales</span></h2>
                <p className="hero-text">
                    Elige el plan nutricional que se adapte a tus objetivos.
                    Cada dieta incluye plan semanal completo, macronutrientes y lista de alimentos detallada.
                </p>

                <div className="hero-stats">
                    <span><i className="bi bi-lightning-charge-fill"></i> {Object.keys(dietas).length} planes disponibles</span>
                    <span><i className="bi bi-bullseye"></i> Plan semanal incluido</span>
                    <span><i className="bi bi-clock"></i> Actualizado 2026</span>
                </div>
            </section>

            <section className="dietas">
                <h3 className="dietas-titulo">Nuestras Dietas Disponibles</h3>

                <div className="dietas-grid">
                    {Object.keys(dietas).map(clave => (
                        <TarjetaDieta key={clave} clave={clave} dieta={dietas[clave]} />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Nutricion />);
