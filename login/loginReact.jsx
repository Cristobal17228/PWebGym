const { useState } = React;

// Ruta desde esta carpeta hasta la raíz del proyecto
const RAIZ = "../";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [mostrarPassword, setMostrarPassword] = useState(false);

    function iniciarSesion(evento) {
        evento.preventDefault();

        const emailNormalizado = email.trim().toLowerCase();

        if (!emailNormalizado || !password) {
            setError("Completá todos los campos.");
            return;
        }

        const usuarios =
            JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioEncontrado = usuarios.find(
            usuario =>
                usuario.email.toLowerCase() === emailNormalizado &&
                usuario.password === password
        );

        if (!usuarioEncontrado) {
            setError("Email o contraseña incorrectos.");
            return;
        }

        const usuarioActual = {
            email: usuarioEncontrado.email,
            telefono: usuarioEncontrado.telefono,
            dni: usuarioEncontrado.dni,
            nombre: usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido
        };

        localStorage.setItem(
            "usuarioActual",
            JSON.stringify(usuarioActual)
        );

        window.location.href = RAIZ + "inicio.html";
    }

    return (
        <>
            <div className="login-pagina">

                <div className="login-contenedor">

                    <a href={RAIZ + "inicio.html"} className="login-volver">
                        <i className="bi bi-arrow-left"></i>
                        Volver al inicio
                    </a>

                    <div className="login-logo">
                        LOCK-IN
                    </div>

                    <h1>Iniciar sesión</h1>

                    <p className="login-subtitulo">
                        Ingresá a tu cuenta para continuar
                    </p>

                    <form onSubmit={iniciarSesion}>

                        <label>Email</label>

                        <div className="login-campo">
                            <input
                                type="email"
                                placeholder="ejemplo@email.com"
                                value={email}
                                onChange={(evento) => {
                                    setEmail(evento.target.value);
                                    setError("");
                                }}
                                autoFocus
                            />
                        </div>

                        <label>Contraseña</label>

                        <div className="login-campo login-password">

                            <input
                                type={
                                    mostrarPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Ingresá tu contraseña"
                                value={password}
                                onChange={(evento) => {
                                    setPassword(evento.target.value);
                                    setError("");
                                }}
                            />

                            <button
                                type="button"
                                className="login-ver-password"
                                onClick={() =>
                                    setMostrarPassword(
                                        !mostrarPassword
                                    )
                                }
                            >
                                <i
                                    className={
                                        mostrarPassword
                                            ? "bi bi-eye-slash"
                                            : "bi bi-eye"
                                    }
                                ></i>
                            </button>

                        </div>

                        {error && (
                            <div className="login-error">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="login-boton"
                        >
                            Iniciar sesión
                        </button>

                    </form>

                    <p className="login-registro">
                        ¿Todavía no tenés una cuenta?{" "}
                        <a
                            href="#"
                            onClick={(evento) => {
                                evento.preventDefault();
                                // Abre el modal de registro de ../registroReact.jsx
                                window.dispatchEvent(new Event("abrir-registro"));
                            }}
                        >
                            Registrate
                        </a>
                    </p>

                </div>

            </div>

            <style>{`
                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                }

                .login-pagina {
                    min-height: 100vh;
                    background: #080808;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                }

                .login-contenedor {
                    width: 100%;
                    max-width: 450px;
                    background: #111111;
                    border: 1px solid #292929;
                    border-radius: 20px;
                    padding: 38px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
                }

                .login-volver {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    color: #888;
                    text-decoration: none;
                    font-size: 13px;
                    margin-bottom: 25px;
                }

                .login-volver:hover {
                    color: white;
                }

                .login-logo {
                    color: #f51620;
                    font-weight: 900;
                    font-size: 17px;
                    margin-bottom: 18px;
                }

                .login-contenedor h1 {
                    margin: 0;
                    font-size: 30px;
                    font-weight: 800;
                }

                .login-subtitulo {
                    color: #999;
                    font-size: 14px;
                    margin: 8px 0 28px;
                }

                .login-contenedor form {
                    display: flex;
                    flex-direction: column;
                }

                .login-contenedor label {
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 7px;
                }

                .login-campo {
                    position: relative;
                    margin-bottom: 18px;
                }

                .login-campo input {
                    width: 100%;
                    background: #191919;
                    border: 1px solid #333333;
                    border-radius: 9px;
                    padding: 14px;
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    outline: none;
                }

                .login-campo input:focus {
                    border-color: #f51620;
                }

                .login-campo input::placeholder {
                    color: #666;
                }

                .login-password input {
                    padding-right: 48px;
                }

                .login-ver-password {
                    position: absolute;
                    right: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    color: #888;
                    cursor: pointer;
                    font-size: 17px;
                }

                .login-ver-password:hover {
                    color: white;
                }

                .login-error {
                    background: rgba(245, 22, 32, 0.1);
                    border: 1px solid rgba(245, 22, 32, 0.4);
                    color: #ff545c;
                    border-radius: 8px;
                    padding: 11px 12px;
                    font-size: 13px;
                    margin-bottom: 17px;
                }

                .login-boton {
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

                .login-boton:hover {
                    background: #d91019;
                }

                .login-registro {
                    text-align: center;
                    color: #888;
                    font-size: 13px;
                    margin: 22px 0 0;
                }

                .login-registro a {
                    color: #f51620;
                    font-weight: 700;
                    text-decoration: none;
                }

                @media (max-width: 520px) {
                    .login-contenedor {
                        padding: 28px 22px;
                    }

                    .login-contenedor h1 {
                        font-size: 26px;
                    }
                }
            `}</style>
        </>
    );
}

const contenedorLogin =
    document.getElementById("login-react");

const rootLogin =
    ReactDOM.createRoot(contenedorLogin);

rootLogin.render(
    <Login />
);