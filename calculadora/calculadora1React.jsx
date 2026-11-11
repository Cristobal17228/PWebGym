// Paso 1 de la calculadora: datos físicos y nivel de actividad

const nivelesActividad = [
    { valor: 1.2, nombre: "Sedentario", descripcion: "Poco o nada de ejercicio" },
    { valor: 1.375, nombre: "Ligeramente activo", descripcion: "Ejercicio 1-3 días/semana" },
    { valor: 1.55, nombre: "Moderadamente activo", descripcion: "Ejercicio 3-5 días/semana" },
    { valor: 1.725, nombre: "Muy activo", descripcion: "Ejercicio intenso 6-7 días/semana" },
    { valor: 1.9, nombre: "Extremadamente activo", descripcion: "Atleta o trabajo físico intenso" }
];

const medidasCorporales = [
    { campo: "peso", etiqueta: "PESO", unidad: "kg", placeholder: "70", min: 30, max: 300 },
    { campo: "altura", etiqueta: "ALTURA", unidad: "cm", placeholder: "175", min: 100, max: 250 },
    { campo: "edad", etiqueta: "EDAD", unidad: "años", placeholder: "25", min: 10, max: 120 }
];

function CalculadoraPaso1() {
    const [datos, setDatos] = React.useState({
        sexo: "hombre",
        peso: "",
        altura: "",
        edad: "",
        actividad: 1.55
    });

    function cambiarDato(campo, valor) {
        setDatos({ ...datos, [campo]: valor });
    }

    function calcular(evento) {
        evento.preventDefault();

        const usuarioActual = obtenerUsuarioActual();

        if (!usuarioActual) {
            alert("Para utilizar la calculadora primero tenés que registrarte o iniciar sesión.");
            window.dispatchEvent(new Event("abrir-registro"));
            return;
        }

        const datosCalculadora = {
            sexo: datos.sexo,
            peso: Number(datos.peso),
            altura: Number(datos.altura),
            edad: Number(datos.edad),
            actividad: datos.actividad
        };

        localStorage.setItem(
            `calculadoraDatos_${usuarioActual.email}`,
            JSON.stringify(datosCalculadora)
        );

        // Claves que leen calculadora2 y calculadora3
        Object.keys(datosCalculadora).forEach(clave => {
            localStorage.setItem(clave, datosCalculadora[clave]);
        });

        window.location.href = "calculadora2.html";
    }

    return (
        <>
            <section className="calculadora-header">
                <p className="etiqueta-nutricion">NUTRICIÓN</p>
                <h1>Calculadora <span>de Calorías</span></h1>
                <p className="descripcion-header">
                    Calcula tu Tasa Metabólica Basal (TMB) y tus calorías diarias con la fórmula de Mifflin-St Jeor.
                </p>
            </section>

            <div className="indicador-pasos">
                <div className="paso activo">1</div>
                <div className="linea-paso"></div>
                <div className="paso">2</div>
                <div className="linea-paso"></div>
                <div className="paso">3</div>
            </div>

            <section className="paso-calculadora">
                <form id="form-paso-1" onSubmit={calcular}>
                    <div className="tarjeta-calculadora">
                        <div className="encabezado-datos">
                            <div className="icono-datos">
                                <i className="bi bi-person"></i>
                            </div>
                            <div>
                                <h3>Tus datos</h3>
                                <p>Ingresa tus datos físicos para calcular tu TMB</p>
                            </div>
                        </div>

                        <div className="grupo-campo">
                            <p className="titulo-campo">SEXO BIOLÓGICO</p>
                            <div className="opciones-sexo">
                                <label className="btn-opcion-sexo">
                                    <input
                                        type="radio"
                                        name="sexo"
                                        value="hombre"
                                        checked={datos.sexo === "hombre"}
                                        onChange={() => cambiarDato("sexo", "hombre")}
                                    />
                                    <span><i className="bi bi-gender-male"></i> Hombre</span>
                                </label>
                                <label className="btn-opcion-sexo">
                                    <input
                                        type="radio"
                                        name="sexo"
                                        value="mujer"
                                        checked={datos.sexo === "mujer"}
                                        onChange={() => cambiarDato("sexo", "mujer")}
                                    />
                                    <span><i className="bi bi-gender-female"></i> Mujer</span>
                                </label>
                            </div>
                        </div>

                        <div className="medidas-corporales">
                            {medidasCorporales.map(medida => (
                                <div className="campo-medida" key={medida.campo}>
                                    <label htmlFor={medida.campo}>{medida.etiqueta}</label>
                                    <div className="input-medida">
                                        <input
                                            type="number"
                                            id={medida.campo}
                                            name={medida.campo}
                                            placeholder={medida.placeholder}
                                            min={medida.min}
                                            max={medida.max}
                                            value={datos[medida.campo]}
                                            onChange={evento => cambiarDato(medida.campo, evento.target.value)}
                                            required
                                        />
                                        <span>{medida.unidad}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grupo-actividad">
                            <p className="titulo-campo"><i className="bi bi-lightning-charge"></i> NIVEL DE ACTIVIDAD</p>

                            {nivelesActividad.map(nivel => (
                                <label className="btn-opcion-actividad" key={nivel.valor}>
                                    <input
                                        type="radio"
                                        name="actividad"
                                        value={nivel.valor}
                                        checked={datos.actividad === nivel.valor}
                                        onChange={() => cambiarDato("actividad", nivel.valor)}
                                    />
                                    <span className="actividad-texto">
                                        <b>{nivel.nombre}</b>
                                        <small>{nivel.descripcion}</small>
                                    </span>
                                    <span className="factor">x{nivel.valor}</span>
                                </label>
                            ))}
                        </div>

                        <button type="submit" id="btn-calcular">
                            <i className="bi bi-calculator"></i>
                            Calcular mis calorías
                            <i className="bi bi-chevron-right"></i>
                        </button>

                        <div className="formula">
                            Fórmula Mifflin-St Jeor: TMB = (10 x kg) + (6.25 x cm) - (5 x edad) + s
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}

renderizarPagina(<CalculadoraPaso1 />);
