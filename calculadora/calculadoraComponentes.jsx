// Componentes compartidos por las 3 páginas de la calculadora.
// Se carga después de ../registroReact.jsx (usa BotonUsuario) y antes de cada calculadoraNReact.jsx

// Ruta desde esta carpeta hasta la raíz del proyecto
const RAIZ = "../";

const enlacesMenu = [
    { texto: "Inicio", icono: "bi-house-door", href: RAIZ + "inicio.html" },
    { texto: "Planes", icono: "bi-activity", href: RAIZ + "inicio.html#planes" },
    { texto: "Nutrición", icono: "bi-basket", href: RAIZ + "nutricion/nutricion.html" },
    { texto: "Calculadora", icono: "bi-calculator", href: "calculadora1.html", seleccionado: true },
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
    { texto: "Nutrición", href: RAIZ + "nutricion/nutricion.html" },
    { texto: "Calculadora", href: "calculadora1.html" },
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

// Arma la página completa (header + contenido + footer) y la monta en #root
function renderizarPagina(contenido) {
    ReactDOM.createRoot(document.getElementById("root")).render(
        <>
            <Header />
            <main>{contenido}</main>
            <Footer />
        </>
    );
}

function obtenerUsuarioActual() {
    return JSON.parse(localStorage.getItem("usuarioActual"));
}
