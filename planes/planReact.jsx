// Página de un plan de entrenamiento. Cada HTML de esta carpeta indica cuál mostrar con data-plan en #root,
// y los datos salen de datosPlanes.js. Se carga después de ../registroReact.jsx (usa BotonUsuario y Seguimiento)

// Ruta desde esta carpeta hasta la raíz del proyecto
const RAIZ = "../";

const enlacesMenu = [
    { texto: "Inicio", icono: "bi-house-door", href: RAIZ + "inicio.html", clase: "inicio" },
    { texto: "Planes", icono: "bi-activity", href: RAIZ + "inicio.html#planes", clase: "planes" },
    { texto: "Nutrición", icono: "bi-basket", href: RAIZ + "nutricion/nutricion.html", clase: "nutricion" },
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
    { texto: "Nutrición", href: RAIZ + "nutricion/nutricion.html" },
    { texto: "Calculadora", href: RAIZ + "calculadora/calculadora1.html" },
    { texto: "Gimnasios", href: RAIZ + "mapa/mapa.html" }
];

const diasSemana = [
    { abrev: "Lun", nombre: "Lunes" },
    { abrev: "Mar", nombre: "Martes" },
    { abrev: "Mié", nombre: "Miércoles" },
    { abrev: "Jue", nombre: "Jueves" },
    { abrev: "Vie", nombre: "Viernes" },
    { abrev: "Sáb", nombre: "Sábado" },
    { abrev: "Dom", nombre: "Domingo" }
];

function Header() {
    return (
        <header className="barra_superior">
            <div className="contenedor header_contenido">
                <a href={RAIZ + "inicio.html"} className="logo">
                    <img src={RAIZ + "imagenes/logo.png"} alt="LockIn Logo" />
                </a>

                <nav className="menu">
                    {enlacesMenu.map(enlace => (
                        <a key={enlace.texto} href={enlace.href} className={enlace.clase}>
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

function Portada({ clave, plan }) {
    // Seguimiento (de ../registroReact.jsx) lee los datos del botón desde un "dataset"
    const datosSeguimiento = {
        dataset: {
            tipo: "entrenamiento",
            nombre: plan.nombre,
            descripcion: plan.subtitulo,
            enlace: clave + ".html"
        }
    };

    return (
        <section className="plan-hero">
            <div className="hero-imagen">
                <img className="hero-bg" src={RAIZ + plan.imagen} alt={plan.nombre} />

                <div className="contenedor-interno">
                    <a href={RAIZ + "inicio.html#planes"} className="hero-volver">
                        <i className="bi bi-arrow-left"></i> Volver a planes
                    </a>
                    <span className="hero-badge">{plan.badge}</span>
                </div>

                <div className="contenedor-interno hero-titulo">
                    <p className="hero-etiqueta">{plan.etiqueta}</p>
                    <div className="hero-fila">
                        <span className="hero-emoji">{plan.emoji}</span>
                        <div>
                            <h1>{plan.nombre}</h1>
                            <p className="hero-sub">{plan.subtitulo}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contenedor-interno hero-datos">
                <div className="hero-datos-info">
                    <span className={"nivel " + plan.nivel.clase}>{plan.nivel.texto}</span>
                    <span className={"categoria-badge " + plan.categoria.clase}>{plan.categoria.texto}</span>
                    <span className="dato"><i className="bi bi-clock"></i> {plan.frecuencia}</span>
                    <span className="dato"><i className="bi bi-tools"></i> {plan.equipamiento}</span>
                </div>
                <div className="seguimiento-react">
                    <Seguimiento contenedor={datosSeguimiento} />
                </div>
            </div>
        </section>
    );
}

function VolumenYPublico({ plan, diasEntreno }) {
    return (
        <section className="plan-info">
            <div className="contenedor-interno plan-info-grid">
                <article className="plan-tarjeta">
                    <h3 className="plan-tarjeta-titulo">Distribución del volumen</h3>

                    {plan.volumen.map(parte => (
                        <div className="contenedor-volumen" key={parte.clase}>
                            <div className="volumen-fila">
                                <span>{parte.nombre}</span>
                                <b>{parte.valor}%</b>
                            </div>
                            <div className="volumen-barra">
                                <span className={"volumen-relleno " + parte.clase} style={{ width: parte.valor + "%" }}></span>
                            </div>
                        </div>
                    ))}

                    <div className="volumen-dias">
                        <span className="volumen-item"><i className="bi bi-lightning-charge-fill"></i> <b>{diasEntreno} días de entreno</b></span>
                        <span className="volumen-item"><i className="bi bi-arrow-repeat"></i> <b>{7 - diasEntreno} días de descanso</b></span>
                    </div>
                </article>

                <article className="plan-tarjeta">
                    <h3 className="plan-tarjeta-titulo">¿Para quién es?</h3>
                    <p className="publico-texto">{plan.publico}</p>

                    <p className="publico-objetivo"><i className="bi bi-star"></i> <b>Objetivo</b></p>
                    <span className="publico-pildora"><i className="bi bi-bullseye"></i> {plan.objetivo}</span>
                </article>
            </div>
        </section>
    );
}

function Beneficios({ beneficios }) {
    return (
        <section className="plan-beneficios">
            <div className="contenedor-interno">
                <h2 className="plan-titulo">Beneficios comprobados</h2>

                <div className="beneficios-grid">
                    {beneficios.map(beneficio => (
                        <div className="beneficio" key={beneficio}>
                            <span className="icono-circulo icono-rojo"><i className="bi bi-check-lg"></i></span>
                            {beneficio}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function DiaPrograma({ dia, indice }) {
    const descanso = !dia.ejercicios;

    return (
        <details className={descanso ? "dia dia-descanso" : "dia"} open={indice === 0}>
            <summary>
                <span className="dia-abrev">{diasSemana[indice].abrev}</span>
                <div className="dia-info-header">
                    <span className="dia-nombre">{diasSemana[indice].nombre} — {dia.titulo}</span>
                    <span className="dia-sub">{dia.detalle}</span>
                </div>
                {!descanso && <i className="bi bi-chevron-right dia-flecha"></i>}
            </summary>

            {!descanso && (
                <div className="dia-ejercicios">
                    {dia.ejercicios.map((ejercicio, numero) => (
                        <div className="ejercicio" key={numero}>
                            <span className="ejercicio-tipo">{ejercicio.tipo}</span>
                            <p>{ejercicio.descripcion}</p>
                        </div>
                    ))}
                </div>
            )}
        </details>
    );
}

function PaginaPlan({ clave }) {
    const plan = planes[clave];
    const diasEntreno = plan.programa.filter(dia => dia.ejercicios).length;

    return (
        <>
            <Header />

            <main>
                <Portada clave={clave} plan={plan} />

                <section className="plan-acerca">
                    <div className="contenedor-interno">
                        <h2 className="plan-titulo">Sobre este plan</h2>
                        <p className="plan-acerca-texto">{plan.acerca}</p>
                    </div>
                </section>

                <VolumenYPublico plan={plan} diasEntreno={diasEntreno} />
                <Beneficios beneficios={plan.beneficios} />

                <section className="plan">
                    <div className="contenedor-interno">
                        <h2 className="plan-titulo">Programa semanal</h2>
                        <p className="programa-subtitulo">
                            {diasEntreno} sesiones de entrenamiento · Expandí cada día para ver los ejercicios
                        </p>

                        <div className="plan-lista">
                            {plan.programa.map((dia, indice) => (
                                <DiaPrograma key={diasSemana[indice].nombre} dia={dia} indice={indice} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

const contenedorPlan = document.getElementById("root");

ReactDOM.createRoot(contenedorPlan).render(
    <PaginaPlan clave={contenedorPlan.dataset.plan} />
);
