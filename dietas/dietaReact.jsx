// Página de una dieta. Cada HTML de esta carpeta indica cuál mostrar con data-dieta en #root,
// y los datos salen de datosDietas.js. Se carga después de ../registroReact.jsx (usa BotonUsuario y Seguimiento)

// Ruta desde esta carpeta hasta la raíz del proyecto
const RAIZ = "../";

const enlacesMenu = [
    { texto: "Inicio", icono: "bi-house-door", href: RAIZ + "inicio.html", clase: "inicio" },
    { texto: "Planes", icono: "bi-activity", href: RAIZ + "inicio.html#planes" },
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

function Portada({ clave, dieta }) {
    // Seguimiento (de ../registroReact.jsx) lee los datos del botón desde un "dataset"
    const datosSeguimiento = {
        dataset: {
            tipo: "dieta",
            nombre: dieta.nombre,
            descripcion: dieta.subtitulo,
            enlace: clave + ".html"
        }
    };

    return (
        <section className="dieta-hero">
            <div className="hero-imagen">
                <img className="hero-bg" src={RAIZ + dieta.imagen} alt={dieta.nombre} />

                <div className="contenedor-interno">
                    <a href={RAIZ + "nutricion/nutricion.html"} className="hero-volver">
                        <i className="bi bi-arrow-left"></i> Volver a dietas
                    </a>
                    <span className="hero-badge">{dieta.badge}</span>
                </div>

                <div className="contenedor-interno hero-titulo">
                    <p className="hero-etiqueta">{dieta.objetivo}</p>
                    <div className="hero-fila">
                        <span className="hero-emoji">{dieta.emoji}</span>
                        <div>
                            <h1>{dieta.nombre}</h1>
                            <p className="hero-sub">{dieta.subtitulo}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contenedor-interno hero-datos">
                <div className="hero-datos-info">
                    <span className={"nivel " + dieta.nivel.clase}>{dieta.nivel.texto}</span>
                    <span className="dato"><i className="bi bi-clock"></i> {dieta.duracion}</span>
                    <span className="dato"><i className="bi bi-fire"></i> {dieta.calorias}</span>
                </div>
                <div className="seguimiento-react">
                    <Seguimiento contenedor={datosSeguimiento} />
                </div>
            </div>
        </section>
    );
}

function MacrosYPublico({ dieta }) {
    const macros = [
        { nombre: "Proteína", valor: dieta.macros.proteina, clase: "macro-prot" },
        { nombre: "Carbohidratos", valor: dieta.macros.carbohidratos, clase: "macro-carb" },
        { nombre: "Grasas", valor: dieta.macros.grasas, clase: "macro-grasa" }
    ];

    return (
        <section className="dieta-info">
            <div className="contenedor-interno dieta-info-grid">
                <article className="dieta-tarjeta">
                    <h3 className="dieta-tarjeta-titulo">Distribución de macros</h3>

                    {macros.map(macro => (
                        <div className="macro-item" key={macro.clase}>
                            <div className="macro-fila">
                                <span>{macro.nombre}</span>
                                <b>{macro.valor}%</b>
                            </div>
                            <div className="macro-barra">
                                <span className={"macro-relleno " + macro.clase} style={{ width: macro.valor + "%" }}></span>
                            </div>
                        </div>
                    ))}

                    <p className="macro-calorias">
                        <i className="bi bi-fire"></i> Calorías estimadas: <b>{dieta.calorias}</b>
                    </p>
                </article>

                <article className="dieta-tarjeta">
                    <h3 className="dieta-tarjeta-titulo">¿Para quién es?</h3>
                    <p className="publico-texto">{dieta.publico}</p>

                    <p className="publico-objetivo"><i className="bi bi-star"></i> <b>Objetivo principal</b></p>
                    <span className="publico-pildora"><i className="bi bi-bullseye"></i> {dieta.objetivo}</span>
                </article>
            </div>
        </section>
    );
}

function Beneficios({ beneficios }) {
    return (
        <section className="dieta-beneficios">
            <div className="contenedor-interno">
                <h2 className="dieta-titulo">Beneficios comprobados</h2>

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

function TarjetaAlimentos({ clase, icono, colorIcono, titulo, alimentos }) {
    return (
        <article className={"alimentos-tarjeta " + clase}>
            <h3>
                <span className={"icono-circulo " + colorIcono}><i className={"bi " + icono}></i></span>
                {titulo}
            </h3>
            <ul>
                {alimentos.map(alimento => <li key={alimento}>{alimento}</li>)}
            </ul>
        </article>
    );
}

function PlanSemanal({ planSemanal }) {
    return (
        <section className="dieta-plan">
            <div className="contenedor-interno">
                <h2 className="dieta-titulo">Plan semanal</h2>

                <div className="plan-lista">
                    {planSemanal.map((comidas, indice) => (
                        <details className="dia" open={indice === 0} key={diasSemana[indice].nombre}>
                            <summary>
                                <span className="dia-abrev">{diasSemana[indice].abrev}</span>
                                <span className="dia-nombre">{diasSemana[indice].nombre}</span>
                                <i className="bi bi-chevron-right dia-flecha"></i>
                            </summary>
                            <div className="dia-comidas">
                                {comidas.map(comida => (
                                    <div className="comida" key={comida.tipo}>
                                        <span className="comida-tipo">{comida.tipo}</span>
                                        <p>{comida.descripcion}</p>
                                    </div>
                                ))}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PaginaDieta({ clave }) {
    const dieta = dietas[clave];

    return (
        <>
            <Header />

            <main>
                <Portada clave={clave} dieta={dieta} />

                <section className="dieta-acerca">
                    <div className="contenedor-interno">
                        <h2 className="dieta-titulo">Sobre esta dieta</h2>
                        <p className="dieta-acerca-texto">{dieta.acerca}</p>
                    </div>
                </section>

                <MacrosYPublico dieta={dieta} />
                <Beneficios beneficios={dieta.beneficios} />

                <section className="dieta-alimentos">
                    <div className="contenedor-interno">
                        <h2 className="dieta-titulo">Alimentos</h2>

                        <div className="alimentos-grid">
                            <TarjetaAlimentos
                                clase="alimentos-permitidos"
                                icono="bi-check-lg"
                                colorIcono="icono-verde"
                                titulo="Alimentos permitidos"
                                alimentos={dieta.permitidos}
                            />
                            <TarjetaAlimentos
                                clase="alimentos-evitar"
                                icono="bi-x-lg"
                                colorIcono="icono-rojo"
                                titulo="Alimentos a evitar"
                                alimentos={dieta.evitar}
                            />
                        </div>
                    </div>
                </section>

                <PlanSemanal planSemanal={dieta.planSemanal} />
            </main>

            <Footer />
        </>
    );
}

const contenedorDieta = document.getElementById("root");

ReactDOM.createRoot(contenedorDieta).render(
    <PaginaDieta clave={contenedorDieta.dataset.dieta} />
);
