const { useState, useEffect } = React;

// Ruta desde esta carpeta hasta la raíz del proyecto
const RAIZ = "../";

// Tarjeta del resumen: muestra el dato guardado o un mensaje si todavía no hay
function TarjetaPerfil({ icono, tipo, titulo, valor, info, vacio, enlace }) {
    return (
        <article className="perfil-tarjeta">
            <div className="perfil-icono">
                <i className={"bi " + icono}></i>
            </div>

            <p className="perfil-tipo">{tipo}</p>
            <h2>{titulo}</h2>

            {valor ? (
                <>
                    <p className="perfil-valor">{valor}</p>
                    {info && <p className="perfil-info">{info}</p>}
                </>
            ) : (
                <p className="perfil-vacio">{vacio}</p>
            )}

            {enlace && (
                <a href={enlace.href} className="perfil-boton">
                    {valor ? enlace.textoConDato : enlace.textoSinDato}
                    <i className="bi bi-arrow-right"></i>
                </a>
            )}
        </article>
    );
}

function Perfil() {
    const [usuario, setUsuario] = useState(null);
    const [dieta, setDieta] = useState(null);
    const [calorias, setCalorias] = useState(null);
    const [entrenamiento, setEntrenamiento] = useState(null);

    useEffect(() => {
        const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioActual"));

        if (!usuarioGuardado) {
            alert("Primero tenés que registrarte o iniciar sesión.");
            window.location.href = RAIZ + "login/login.html";
            return;
        }

        const email = usuarioGuardado.email;

        setUsuario(usuarioGuardado);
        setDieta(JSON.parse(localStorage.getItem(`dieta_${email}`)));
        setCalorias(localStorage.getItem(`calorias_${email}`));
        setEntrenamiento(JSON.parse(localStorage.getItem(`entrenamiento_${email}`)));
    }, []);

    function cerrarSesion() {
        localStorage.removeItem("usuarioActual");
        window.location.href = RAIZ + "inicio.html";
    }

    if (!usuario) {
        return null;
    }

    const tarjetas = [
        {
            icono: "bi-basket",
            tipo: "NUTRICIÓN",
            titulo: "Dieta actual",
            valor: dieta && dieta.nombre,
            info: dieta && dieta.descripcion,
            vacio: "Todavía no configuraste una dieta.",
            enlace: {
                // Si sigue una dieta, abre su página; si no, el listado de dietas
                href: dieta && dieta.enlace
                    ? RAIZ + dieta.enlace
                    : RAIZ + "nutricion/nutricion.html",
                textoConDato: "Ver dieta",
                textoSinDato: "Configurar dieta"
            }
        },
        {
            icono: "bi-fire",
            tipo: "CALORÍAS",
            titulo: "Objetivo diario",
            valor: calorias && calorias + " kcal",
            info: "Tu objetivo calórico diario actual.",
            vacio: "Todavía no calculaste tus calorías.",
            enlace: {
                href: RAIZ + "calculadora/calculadora1.html",
                textoConDato: "Recalcular",
                textoSinDato: "Calcular calorías"
            }
        },
        {
            icono: "bi-activity",
            tipo: "ENTRENAMIENTO",
            titulo: "Plan actual",
            valor: entrenamiento && entrenamiento.nombre,
            info: "Tu plan de entrenamiento seleccionado.",
            vacio: "Todavía no elegiste un plan de entrenamiento.",
            enlace: {
                // Si sigue un plan, abre su página; si no, la sección de planes
                href: entrenamiento && entrenamiento.enlace
                    ? RAIZ + entrenamiento.enlace
                    : RAIZ + "inicio.html#planes",
                textoConDato: "Ver entrenamiento",
                textoSinDato: "Elegir plan"
            }
        },
        {
            icono: "bi-clock-history",
            tipo: "HISTORIAL",
            titulo: "Tu actividad",
            vacio: "Acá vamos a registrar tus dietas, cálculos y entrenamientos realizados."
        }
    ];

    const datosPersonales = [
        { nombre: "Nombre", valor: `${usuario.nombre} ${usuario.apellido || ""}` },
        { nombre: "Email", valor: usuario.email },
        { nombre: "Teléfono", valor: usuario.telefono },
        { nombre: "DNI", valor: usuario.dni }
    ];

    const iniciales =
        usuario.nombre.charAt(0).toUpperCase() +
        (usuario.apellido ? usuario.apellido.charAt(0).toUpperCase() : "");

    return (
        <>
            <header className="perfil-header">
                <a href={RAIZ + "inicio.html"} className="perfil-logo">
                    LOCK-IN
                </a>

                <a href={RAIZ + "inicio.html"} className="perfil-volver">
                    <i className="bi bi-arrow-left"></i>
                    Volver al inicio
                </a>
            </header>

            <main className="perfil-contenedor">
                <section className="perfil-presentacion">
                    <p className="perfil-etiqueta">MI PERFIL</p>
                    <h1>Hola, {usuario.nombre}</h1>
                    <p className="perfil-descripcion">
                        Acá podés consultar tu información,
                        tu alimentación, tus objetivos y tu progreso en LockIn.
                    </p>
                </section>

                <section className="perfil-grid">
                    {tarjetas.map(tarjeta => (
                        <TarjetaPerfil key={tarjeta.tipo} {...tarjeta} />
                    ))}
                </section>

                <section className="perfil-datos">
                    <div className="perfil-datos-header">
                        <div>
                            <p className="perfil-etiqueta">CUENTA</p>
                            <h2>Datos personales</h2>
                        </div>

                        <div className="perfil-avatar">{iniciales}</div>
                    </div>

                    {datosPersonales.map(dato => (
                        <div className="perfil-fila" key={dato.nombre}>
                            <span>{dato.nombre}</span>
                            <strong>{dato.valor}</strong>
                        </div>
                    ))}
                </section>

                <button className="perfil-cerrar" onClick={cerrarSesion}>
                    <i className="bi bi-box-arrow-right"></i>
                    Cerrar sesión
                </button>
            </main>

            <style>{`

                * {
                    box-sizing: border-box;
                }

                html {
                    background: #080808;
                }

                body {
                    margin: 0;
                    background: #080808;
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                    min-height: 100vh;
                }

                .perfil-header {
                    height: 75px;
                    padding: 0 7%;
                    background: #0b0b0b;
                    border-bottom: 1px solid #222;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .perfil-logo {
                    color: #f51620;
                    font-size: 21px;
                    font-weight: 900;
                    text-decoration: none;
                }

                .perfil-volver {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: #999;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 600;
                }

                .perfil-volver:hover {
                    color: white;
                }

                .perfil-contenedor {
                    width: 90%;
                    max-width: 1150px;
                    margin: auto;
                    padding: 60px 0 80px;
                }

                .perfil-presentacion {
                    margin-bottom: 38px;
                }

                .perfil-etiqueta {
                    color: #f51620;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    margin: 0 0 8px;
                }

                .perfil-presentacion h1 {
                    font-size: 38px;
                    margin: 0;
                    font-weight: 800;
                }

                .perfil-descripcion {
                    color: #8b8b8b;
                    max-width: 650px;
                    font-size: 14px;
                    line-height: 1.7;
                    margin-top: 12px;
                }

                .perfil-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                }

                .perfil-tarjeta {
                    background: #111;
                    border: 1px solid #242424;
                    border-radius: 16px;
                    padding: 26px;
                    min-height: 280px;
                }

                .perfil-icono {
                    width: 46px;
                    height: 46px;
                    background: rgba(245, 22, 32, 0.12);
                    color: #f51620;
                    border-radius: 11px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 21px;
                    margin-bottom: 22px;
                }

                .perfil-tipo {
                    color: #f51620;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    margin: 0 0 7px;
                }

                .perfil-tarjeta h2 {
                    font-size: 20px;
                    margin: 0 0 17px;
                }

                .perfil-valor {
                    font-size: 26px;
                    font-weight: 800;
                    margin: 0 0 8px;
                }

                .perfil-info {
                    color: #888;
                    font-size: 13px;
                    line-height: 1.6;
                    min-height: 42px;
                }

                .perfil-vacio {
                    color: #777;
                    font-size: 13px;
                    line-height: 1.6;
                    min-height: 42px;
                }

                .perfil-boton {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 17px;
                    padding: 11px 15px;
                    border-radius: 8px;
                    background: #f51620;
                    color: white;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 700;
                }

                .perfil-boton:hover {
                    background: #d91019;
                }

                .perfil-datos {
                    margin-top: 20px;
                    background: #111;
                    border: 1px solid #242424;
                    border-radius: 16px;
                    padding: 28px;
                }

                .perfil-datos-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                }

                .perfil-datos-header h2 {
                    margin: 0;
                    font-size: 22px;
                }

                .perfil-avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: #f51620;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 800;
                    font-size: 16px;
                }

                .perfil-fila {
                    padding: 16px 0;
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    border-bottom: 1px solid #222;
                    font-size: 13px;
                }

                .perfil-fila:last-child {
                    border-bottom: none;
                }

                .perfil-fila span {
                    color: #777;
                }

                .perfil-fila strong {
                    font-weight: 600;
                    text-align: right;
                }

                .perfil-cerrar {
                    margin-top: 25px;
                    padding: 12px 17px;
                    border-radius: 8px;
                    border: 1px solid #393939;
                    background: transparent;
                    color: #aaa;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .perfil-cerrar:hover {
                    border-color: #f51620;
                    color: #f51620;
                }

                @media (max-width: 750px) {

                    .perfil-grid {
                        grid-template-columns: 1fr;
                    }

                    .perfil-presentacion h1 {
                        font-size: 30px;
                    }

                    .perfil-volver {
                        font-size: 0;
                    }

                    .perfil-volver i {
                        font-size: 18px;
                    }

                    .perfil-fila {
                        flex-direction: column;
                        gap: 6px;
                    }

                    .perfil-fila strong {
                        text-align: left;
                    }

                }

            `}</style>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("perfil-react")).render(<Perfil />);
