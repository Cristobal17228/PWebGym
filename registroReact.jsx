const { useState, useEffect } = React;

function obtenerBase() {
    const contenedorUsuario =
        document.getElementById("usuario-react");

    const contenedorRegistro =
        document.getElementById("registro-react");

    if (contenedorUsuario && contenedorUsuario.dataset.base) {
        return contenedorUsuario.dataset.base;
    }

    if (contenedorRegistro && contenedorRegistro.dataset.base) {
        return contenedorRegistro.dataset.base;
    }

    return "";
}

function BotonUsuario() {
    const usuarioActual = JSON.parse(
        localStorage.getItem("usuarioActual")
    );

    const base = obtenerBase();

    function abrirRegistro(evento) {
        evento.preventDefault();

        window.dispatchEvent(
            new Event("abrir-registro")
        );
    }

    if (usuarioActual) {
        return (
            <>
                <a
                    href={`${base}perfil/perfil.html`}
                    className="boton-unete usuario-react-boton"
                >
                    <i className="bi bi-person-circle"></i>
                    Hola, {usuarioActual.nombre}
                </a>

                <style>{`
                    #usuario-react {
                        display: flex;
                        align-items: center;
                    }

                    #usuario-react .usuario-react-boton {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 7px;
                        background: #f51620;
                        color: white;
                        text-decoration: none;
                        padding: 16px 28px;
                        border-radius: 14px;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 700;
                        font-size: 14px;
                        white-space: nowrap;
                    }

                    #usuario-react .usuario-react-boton:hover {
                        background: #d91019;
                        color: white;
                        text-decoration: none;
                    }
                `}</style>
            </>
        );
    }

    return (
        <>
            <a
                href="#"
                className="boton-unete usuario-react-boton"
                onClick={abrirRegistro}
            >
                Únete Ahora
            </a>

            <style>{`
                #usuario-react {
                    display: flex;
                    align-items: center;
                }

                #usuario-react .usuario-react-boton {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    background: #f51620;
                    color: white;
                    text-decoration: none;
                    padding: 16px 28px;
                    border-radius: 14px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 700;
                    font-size: 14px;
                    white-space: nowrap;
                }

                #usuario-react .usuario-react-boton:hover {
                    background: #d91019;
                    color: white;
                    text-decoration: none;
                }
            `}</style>
        </>
    );
}

function BotonRegistroHero() {
    const usuarioActual = JSON.parse(
        localStorage.getItem("usuarioActual")
    );

    function abrirRegistro(evento) {
        evento.preventDefault();

        window.dispatchEvent(
            new Event("abrir-registro")
        );
    }

    if (usuarioActual) {
        return null;
    }

    return (
        <a
            href="#"
            className="boton_demo"
            onClick={abrirRegistro}
        >
            <i className="bi bi-person-plus"></i>
            Registrarse
        </a>
    );
}

function Registro() {
    const [abierto, setAbierto] = useState(false);
    const [paso, setPaso] = useState(1);
    const [error, setError] = useState("");

    const [datos, setDatos] = useState({
        email: "",
        telefono: "",
        password: "",
        dni: "",
        nombre: "",
        apellido: ""
    });

    const base = obtenerBase();

    useEffect(() => {
        function abrirRegistro() {
            setAbierto(true);
        }

        window.addEventListener(
            "abrir-registro",
            abrirRegistro
        );

        return () => {
            window.removeEventListener(
                "abrir-registro",
                abrirRegistro
            );
        };
    }, []);

    function cambiarDato(evento) {
        const { name, value } = evento.target;

        setDatos({
            ...datos,
            [name]: value
        });

        setError("");
    }

    function cerrarModal() {
        setAbierto(false);
        setPaso(1);
        setError("");
    }

    function siguientePaso(evento) {
        evento.preventDefault();

        const email =
            datos.email.trim().toLowerCase();

        const telefono =
            datos.telefono.trim();

        const password =
            datos.password.trim();

        if (!email || !telefono || !password) {
            setError("Completá todos los campos.");
            return;
        }

        if (!email.includes("@")) {
            setError("Ingresá un email válido.");
            return;
        }

        if (password.length < 6) {
            setError(
                "La contraseña debe tener al menos 6 caracteres."
            );
            return;
        }

        const usuarios =
            JSON.parse(
                localStorage.getItem("usuarios")
            ) || [];

        const existe = usuarios.some(
            usuario =>
                usuario.email.toLowerCase() === email
        );

        if (existe) {
            setError(
                "Esta cuenta ya está registrada."
            );
            return;
        }

        setDatos({
            ...datos,
            email: email
        });

        setError("");
        setPaso(2);
    }

    function crearCuenta(evento) {
        evento.preventDefault();

        const dni =
            datos.dni.trim();

        const nombre =
            datos.nombre.trim();

        const apellido =
            datos.apellido.trim();

        if (!dni || !nombre || !apellido) {
            setError("Completá todos los campos.");
            return;
        }

        const usuarios =
            JSON.parse(
                localStorage.getItem("usuarios")
            ) || [];

        const existe = usuarios.some(
            usuario =>
                usuario.email.toLowerCase() ===
                datos.email.toLowerCase()
        );

        if (existe) {
            setPaso(1);

            setError(
                "Esta cuenta ya está registrada."
            );

            return;
        }

        const nuevoUsuario = {
            email: datos.email,
            telefono: datos.telefono.trim(),
            password: datos.password,
            dni: dni,
            nombre: nombre,
            apellido: apellido
        };

        usuarios.push(nuevoUsuario);

        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );

        alert(
            "Cuenta creada correctamente."
        );

        window.location.href =
            `${base}login/login.html`;
    }

    if (!abierto) {
        return null;
    }

    return (
        <>
            <div
                className="registro-react-fondo"
                onClick={cerrarModal}
            >
                <div
                    className="registro-react-modal"
                    onClick={(evento) =>
                        evento.stopPropagation()
                    }
                >

                    <button
                        className="registro-react-cerrar"
                        onClick={cerrarModal}
                    >
                        ×
                    </button>

                    <div className="registro-react-logo">
                        LOCK-IN
                    </div>

                    <h2>
                        Crear cuenta
                    </h2>

                    <p className="registro-react-subtitulo">
                        Completá tus datos para comenzar
                    </p>

                    <div className="registro-react-progreso">

                        <div className="registro-react-paso">

                            <span
                                className={
                                    paso >= 1
                                        ? "registro-react-circulo activo"
                                        : "registro-react-circulo"
                                }
                            >
                                1
                            </span>

                            <p>
                                Contacto
                            </p>

                        </div>

                        <div
                            className={
                                paso === 2
                                    ? "registro-react-linea activa"
                                    : "registro-react-linea"
                            }
                        ></div>

                        <div className="registro-react-paso">

                            <span
                                className={
                                    paso === 2
                                        ? "registro-react-circulo activo"
                                        : "registro-react-circulo"
                                }
                            >
                                2
                            </span>

                            <p>
                                Datos personales
                            </p>

                        </div>

                    </div>

                    {paso === 1 && (

                        <form onSubmit={siguientePaso}>

                            <label>
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="ejemplo@email.com"
                                value={datos.email}
                                onChange={cambiarDato}
                                autoFocus
                            />

                            <label>
                                Teléfono
                            </label>

                            <input
                                type="tel"
                                name="telefono"
                                placeholder="+54 351..."
                                value={datos.telefono}
                                onChange={cambiarDato}
                            />

                            <label>
                                Contraseña
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Mínimo 6 caracteres"
                                value={datos.password}
                                onChange={cambiarDato}
                            />

                            {error && (

                                <p className="registro-react-error">
                                    {error}
                                </p>

                            )}

                            <button
                                type="submit"
                                className="registro-react-boton"
                            >
                                Siguiente
                            </button>

                            <p className="registro-react-login">

                                ¿Ya estás registrado?{" "}

                                <a href={`${base}login/login.html`}>
                                    Iniciar sesión
                                </a>

                            </p>

                        </form>

                    )}

                    {paso === 2 && (

                        <form onSubmit={crearCuenta}>

                            <label>
                                DNI
                            </label>

                            <input
                                type="text"
                                name="dni"
                                placeholder="Ingresá tu DNI"
                                value={datos.dni}
                                onChange={cambiarDato}
                                autoFocus
                            />

                            <label>
                                Nombre
                            </label>

                            <input
                                type="text"
                                name="nombre"
                                placeholder="Ingresá tu nombre"
                                value={datos.nombre}
                                onChange={cambiarDato}
                            />

                            <label>
                                Apellido
                            </label>

                            <input
                                type="text"
                                name="apellido"
                                placeholder="Ingresá tu apellido"
                                value={datos.apellido}
                                onChange={cambiarDato}
                            />

                            {error && (

                                <p className="registro-react-error">
                                    {error}
                                </p>

                            )}

                            <div className="registro-react-botones">

                                <button
                                    type="button"
                                    className="registro-react-volver"
                                    onClick={() => {
                                        setPaso(1);
                                        setError("");
                                    }}
                                >
                                    Volver
                                </button>

                                <button
                                    type="submit"
                                    className="registro-react-boton"
                                >
                                    Crear cuenta
                                </button>

                            </div>

                        </form>

                    )}

                </div>
            </div>

            <style>{`
                .registro-react-fondo {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 99999;
                    font-family: 'Montserrat', sans-serif;
                    padding: 20px;
                }

                .registro-react-modal {
                    position: relative;
                    width: 100%;
                    max-width: 470px;
                    background: #111111;
                    border: 1px solid #292929;
                    border-radius: 20px;
                    padding: 35px;
                    color: white;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
                }

                .registro-react-cerrar {
                    position: absolute;
                    top: 15px;
                    right: 18px;
                    background: none;
                    border: none;
                    color: #888;
                    font-size: 30px;
                    cursor: pointer;
                }

                .registro-react-cerrar:hover {
                    color: white;
                }

                .registro-react-logo {
                    color: #f51620;
                    font-size: 15px;
                    font-weight: 900;
                    margin-bottom: 20px;
                }

                .registro-react-modal h2 {
                    margin: 0;
                    font-size: 30px;
                    font-weight: 800;
                }

                .registro-react-subtitulo {
                    margin: 8px 0 25px;
                    color: #999;
                    font-size: 14px;
                }

                .registro-react-progreso {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 28px;
                }

                .registro-react-paso {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 90px;
                }

                .registro-react-paso p {
                    font-size: 11px;
                    color: #999;
                    margin: 7px 0 0;
                    text-align: center;
                }

                .registro-react-circulo {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: #252525;
                    color: #777;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    font-weight: 700;
                }

                .registro-react-circulo.activo {
                    background: #f51620;
                    color: white;
                }

                .registro-react-linea {
                    flex: 1;
                    height: 2px;
                    background: #292929;
                    margin-top: 14px;
                }

                .registro-react-linea.activa {
                    background: #f51620;
                }

                .registro-react-modal form {
                    display: flex;
                    flex-direction: column;
                }

                .registro-react-modal label {
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 7px;
                }

                .registro-react-modal input {
                    width: 100%;
                    box-sizing: border-box;
                    background: #191919;
                    border: 1px solid #333333;
                    border-radius: 9px;
                    padding: 13px 14px;
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    outline: none;
                    margin-bottom: 17px;
                }

                .registro-react-modal input:focus {
                    border-color: #f51620;
                }

                .registro-react-modal input::placeholder {
                    color: #666;
                }

                .registro-react-boton {
                    width: 100%;
                    border: none;
                    border-radius: 9px;
                    padding: 14px;
                    background: #f51620;
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                }

                .registro-react-boton:hover {
                    background: #d91019;
                }

                .registro-react-error {
                    color: #ff4d55;
                    font-size: 13px;
                    margin: -4px 0 15px;
                }

                .registro-react-login {
                    text-align: center;
                    font-size: 13px;
                    color: #888;
                    margin: 20px 0 0;
                }

                .registro-react-login a {
                    color: #f51620;
                    text-decoration: none;
                    font-weight: 700;
                }

                .registro-react-botones {
                    display: flex;
                    gap: 10px;
                }

                .registro-react-volver {
                    width: 40%;
                    border: 1px solid #333;
                    background: #1b1b1b;
                    color: white;
                    border-radius: 9px;
                    padding: 14px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    cursor: pointer;
                }

                .registro-react-botones .registro-react-boton {
                    width: 60%;
                }

                #usuario-react {
                    display: flex;
                    align-items: center;
                }

                #usuario-react .boton-unete {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                }

                #registro-hero-react {
                    display: flex;
                    align-items: center;
                }

                @media (max-width: 520px) {
                    .registro-react-modal {
                        padding: 28px 22px;
                    }

                    .registro-react-modal h2 {
                        font-size: 26px;
                    }
                }
            `}</style>
        </>
    );
}

const contenedorUsuario =
    document.getElementById("usuario-react");

if (contenedorUsuario) {
    const rootUsuario =
        ReactDOM.createRoot(contenedorUsuario);

    rootUsuario.render(
        <BotonUsuario />
    );
}

const contenedorRegistroHero =
    document.getElementById("registro-hero-react");

if (contenedorRegistroHero) {
    const rootRegistroHero =
        ReactDOM.createRoot(contenedorRegistroHero);

    rootRegistroHero.render(
        <BotonRegistroHero />
    );
}

const contenedorRegistro =
    document.getElementById("registro-react");

if (contenedorRegistro) {
    const rootRegistro =
        ReactDOM.createRoot(contenedorRegistro);

    rootRegistro.render(
        <Registro />
    );
}

function Seguimiento({ contenedor }) {

    const tipo =
        contenedor.dataset.tipo;

    const nombre =
        contenedor.dataset.nombre;

    const descripcion =
        contenedor.dataset.descripcion || "";

    const enlace =
        contenedor.dataset.enlace || "";

    const [siguiendo, setSiguiendo] =
        React.useState(false);


    React.useEffect(() => {

        const usuarioActual =
            JSON.parse(
                localStorage.getItem("usuarioActual")
            );

        if (!usuarioActual) {
            return;
        }

        const clave =
            tipo === "dieta"
                ? `dieta_${usuarioActual.email}`
                : `entrenamiento_${usuarioActual.email}`;

        const guardado =
            JSON.parse(
                localStorage.getItem(clave)
            );

        if (
            guardado &&
            guardado.nombre === nombre
        ) {
            setSiguiendo(true);
        }

    }, []);


    function seguir() {

        const usuarioActual =
            JSON.parse(
                localStorage.getItem("usuarioActual")
            );

        if (!usuarioActual) {

            alert(
                "Primero tenés que registrarte o iniciar sesión."
            );

            window.dispatchEvent(
                new Event("abrir-registro")
            );

            return;
        }


        let enlacePerfil = enlace;

        if (
            tipo === "dieta" &&
            !enlace.startsWith("dietas/")
        ) {
            enlacePerfil =
                `dietas/${enlace}`;
        }

        if (
            tipo === "entrenamiento" &&
            !enlace.startsWith("planes/")
        ) {
            enlacePerfil =
                `planes/${enlace}`;
        }


        const informacion = {
            nombre: nombre,
            descripcion: descripcion,
            enlace: enlacePerfil
        };


        if (tipo === "dieta") {

            localStorage.setItem(
                `dieta_${usuarioActual.email}`,
                JSON.stringify(informacion)
            );

        } else {

            localStorage.setItem(
                `entrenamiento_${usuarioActual.email}`,
                JSON.stringify(informacion)
            );

        }


        setSiguiendo(true);


        if (tipo === "dieta") {

            alert(
                `${nombre} guardada en tu perfil.`
            );

        } else {

            alert(
                `${nombre} guardado en tu perfil.`
            );

        }
    }


    return (
        <button
            type="button"
            className="btn-rojo"
            onClick={seguir}
        >

            {siguiendo ? (
                <>
                    <i className="bi bi-check-circle-fill"></i>
                    {" "}
                    Siguiendo
                </>
            ) : (
                <>
                    {tipo === "dieta"
                        ? "Seguir Dieta"
                        : "Empezar Plan"}
                    {" "}
                    <i className="bi bi-chevron-right"></i>
                </>
            )}

        </button>
    );
}


const contenedoresSeguimiento =
    document.querySelectorAll(
        ".seguimiento-react"
    );


contenedoresSeguimiento.forEach(
    contenedor => {

        const rootSeguimiento =
            ReactDOM.createRoot(
                contenedor
            );

        rootSeguimiento.render(
            <Seguimiento
                contenedor={contenedor}
            />
        );

    }
);