const { useState, useEffect } = React;

function Perfil() {

    const [usuario, setUsuario] = useState(null);

    const [dieta, setDieta] = useState(null);
    const [calorias, setCalorias] = useState(null);
    const [entrenamiento, setEntrenamiento] = useState(null);

    useEffect(() => {

        const usuarioGuardado = JSON.parse(
            localStorage.getItem("usuarioActual")
        );

        if (!usuarioGuardado) {

            alert(
                "Primero tenés que registrarte o iniciar sesión."
            );

            window.location.href = "login.html";

            return;
        }

        setUsuario(usuarioGuardado);

        const email = usuarioGuardado.email;

        const dietaGuardada = JSON.parse(
            localStorage.getItem(`dieta_${email}`)
        );

        const caloriasGuardadas = localStorage.getItem(
            `calorias_${email}`
        );

        const entrenamientoGuardado = JSON.parse(
            localStorage.getItem(`entrenamiento_${email}`)
        );

        setDieta(dietaGuardada);
        setCalorias(caloriasGuardadas);
        setEntrenamiento(entrenamientoGuardado);

    }, []);

    function cerrarSesion() {

        localStorage.removeItem("usuarioActual");

        window.location.href = "inicio.html";

    }

    if (!usuario) {

        return null;

    }

    return (

        <>

            <header className="perfil-header">

                <a
                    href="inicio.html"
                    className="perfil-logo"
                >
                    LOCK-IN
                </a>

                <a
                    href="inicio.html"
                    className="perfil-volver"
                >
                    <i className="bi bi-arrow-left"></i>

                    Volver al inicio
                </a>

            </header>


            <main className="perfil-contenedor">

                <section className="perfil-presentacion">

                    <p className="perfil-etiqueta">
                        MI PERFIL
                    </p>

                    <h1>
                        Hola, {usuario.nombre}
                    </h1>

                    <p className="perfil-descripcion">
                        Acá podés consultar tu información,
                        tu alimentación, tus objetivos y tu progreso en LockIn.
                    </p>

                </section>


                <section className="perfil-grid">

                    <article className="perfil-tarjeta">

                        <div className="perfil-icono">

                            <i className="bi bi-basket"></i>

                        </div>

                        <p className="perfil-tipo">
                            NUTRICIÓN
                        </p>

                        <h2>
                            Dieta actual
                        </h2>

                        {dieta ? (

                            <>

                                <p className="perfil-valor">
                                    {dieta.nombre}
                                </p>

                                {dieta.descripcion && (

                                    <p className="perfil-info">
                                        {dieta.descripcion}
                                    </p>

                                )}

                                <a
                                    href="nutricion.html"
                                    className="perfil-boton"
                                >
                                    Ver dieta

                                    <i className="bi bi-arrow-right"></i>
                                </a>

                            </>

                        ) : (

                            <>

                                <p className="perfil-vacio">
                                    Todavía no configuraste una dieta.
                                </p>

                                <a
                                    href="nutricion.html"
                                    className="perfil-boton"
                                >
                                    Configurar dieta

                                    <i className="bi bi-arrow-right"></i>
                                </a>

                            </>

                        )}

                    </article>


                    <article className="perfil-tarjeta">

                        <div className="perfil-icono">

                            <i className="bi bi-fire"></i>

                        </div>

                        <p className="perfil-tipo">
                            CALORÍAS
                        </p>

                        <h2>
                            Objetivo diario
                        </h2>

                        {calorias ? (

                            <>

                                <p className="perfil-valor">
                                    {calorias} kcal
                                </p>

                                <p className="perfil-info">
                                    Tu objetivo calórico diario actual.
                                </p>

                                <a
                                    href="calculadora1.html"
                                    className="perfil-boton"
                                >
                                    Recalcular

                                    <i className="bi bi-arrow-right"></i>
                                </a>

                            </>

                        ) : (

                            <>

                                <p className="perfil-vacio">
                                    Todavía no calculaste tus calorías.
                                </p>

                                <a
                                    href="calculadora1.html"
                                    className="perfil-boton"
                                >
                                    Calcular calorías

                                    <i className="bi bi-arrow-right"></i>
                                </a>

                            </>

                        )}

                    </article>


                    <article className="perfil-tarjeta">

                        <div className="perfil-icono">

                            <i className="bi bi-activity"></i>

                        </div>

                        <p className="perfil-tipo">
                            ENTRENAMIENTO
                        </p>

                        <h2>
                            Plan actual
                        </h2>

                        {entrenamiento ? (

                            <>

                                <p className="perfil-valor">
                                    {entrenamiento.nombre}
                                </p>

                                <p className="perfil-info">
                                    Tu plan de entrenamiento seleccionado.
                                </p>

                                <a
                                    href="inicio.html#planes"
                                    className="perfil-boton"
                                >
                                    Ver entrenamiento

                                    <i className="bi bi-arrow-right"></i>
                                </a>

                            </>

                        ) : (

                            <>

                                <p className="perfil-vacio">
                                    Todavía no elegiste un plan de entrenamiento.
                                </p>

                                <a
                                    href="inicio.html#planes"
                                    className="perfil-boton"
                                >
                                    Elegir plan

                                    <i className="bi bi-arrow-right"></i>
                                </a>

                            </>

                        )}

                    </article>


                    <article className="perfil-tarjeta">

                        <div className="perfil-icono">

                            <i className="bi bi-clock-history"></i>

                        </div>

                        <p className="perfil-tipo">
                            HISTORIAL
                        </p>

                        <h2>
                            Tu actividad
                        </h2>

                        <p className="perfil-vacio">
                            Acá vamos a registrar tus dietas,
                            cálculos y entrenamientos realizados.
                        </p>

                    </article>

                </section>


                <section className="perfil-datos">

                    <div className="perfil-datos-header">

                        <div>

                            <p className="perfil-etiqueta">
                                CUENTA
                            </p>

                            <h2>
                                Datos personales
                            </h2>

                        </div>

                        <div className="perfil-avatar">

                            {usuario.nombre.charAt(0).toUpperCase()}

                            {usuario.apellido
                                ? usuario.apellido.charAt(0).toUpperCase()
                                : ""
                            }

                        </div>

                    </div>


                    <div className="perfil-fila">

                        <span>
                            Nombre
                        </span>

                        <strong>
                            {usuario.nombre} {usuario.apellido}
                        </strong>

                    </div>


                    <div className="perfil-fila">

                        <span>
                            Email
                        </span>

                        <strong>
                            {usuario.email}
                        </strong>

                    </div>


                    <div className="perfil-fila">

                        <span>
                            Teléfono
                        </span>

                        <strong>
                            {usuario.telefono}
                        </strong>

                    </div>


                    <div className="perfil-fila">

                        <span>
                            DNI
                        </span>

                        <strong>
                            {usuario.dni}
                        </strong>

                    </div>

                </section>


                <button
                    className="perfil-cerrar"
                    onClick={cerrarSesion}
                >

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


const contenedorPerfil =
    document.getElementById("perfil-react");

const rootPerfil =
    ReactDOM.createRoot(contenedorPerfil);

rootPerfil.render(
    <Perfil />
);