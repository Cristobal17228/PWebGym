// Paso 2 de la calculadora: TMB, mantenimiento y elección del objetivo

function calcularTmb() {
    const sexo = localStorage.getItem("sexo");
    const peso = Number(localStorage.getItem("peso"));
    const altura = Number(localStorage.getItem("altura"));
    const edad = Number(localStorage.getItem("edad"));

    const ajusteSexo = sexo === "hombre" ? 5 : -161;

    return (10 * peso) + (6.25 * altura) - (5 * edad) + ajusteSexo;
}

function CalculadoraPaso2() {
    const [objetivo, setObjetivo] = React.useState("superavit");

    const tmb = calcularTmb();
    const mantenimiento = tmb * Number(localStorage.getItem("actividad"));

    const opciones = {
        superavit: Math.round(mantenimiento + 400),
        deficit: Math.round(mantenimiento - 400)
    };

    // calculadora3 lee estos valores
    React.useEffect(() => {
        localStorage.setItem("tmb", tmb);
        localStorage.setItem("mantenimiento", mantenimiento);
    }, []);

    function verResultados(evento) {
        evento.preventDefault();

        const usuarioActual = obtenerUsuarioActual();

        if (!usuarioActual) {
            alert("Para guardar tu objetivo y continuar primero tenés que registrarte o iniciar sesión.");
            window.location.href = RAIZ + "login/login.html";
            return;
        }

        localStorage.setItem("objetivo", objetivo);
        localStorage.setItem(`calorias_${usuarioActual.email}`, opciones[objetivo]);
        localStorage.setItem(`objetivo_${usuarioActual.email}`, objetivo);
        localStorage.setItem(`tmb_${usuarioActual.email}`, Math.round(tmb));
        localStorage.setItem(`mantenimiento_${usuarioActual.email}`, Math.round(mantenimiento));

        window.location.href = "calculadora3.html";
    }

    return (
        <>
            <section className="calculadora-header">
                <p><small><b>NUTRICIÓN</b></small></p>
                <h1>Calculadora de Calorías</h1>
                <p>Calcula tu Tasa Metabólica Basal (TMB) y tus calorías diarias con la fórmula de Mifflin-St Jeor.</p>
            </section>

            <div className="indicador-pasos">
                <span>⚪ 1</span> &mdash;
                <span>🔴 <b>2</b></span> &mdash;
                <span>⚪ 3</span>
            </div>

            <br />

            <section className="resumen-previo">
                <article className="caja-dato">
                    <p><small>Tu TMB calculada</small></p>
                    <h3><output>{Math.round(tmb)}</output> kcal/día</h3>
                </article>

                <article className="caja-dato">
                    <p><small>Calorías de mantenimiento</small></p>
                    <h3><output>{Math.round(mantenimiento)}</output> kcal/día</h3>
                </article>
            </section>

            <br />

            <section className="paso-calculadora">
                <form id="form-paso-2" onSubmit={verResultados}>
                    <fieldset>
                        <legend><h3>¿Cuál es tu objetivo?</h3></legend>
                        <p><small>Elige si quieres ganar músculo o perder grasa</small></p>

                        <div className="contenedor-objetivos">
                            <div>
                                <label className="btn-opcion-objetivo">
                                    <input
                                        type="radio"
                                        name="objetivo"
                                        value="superavit"
                                        checked={objetivo === "superavit"}
                                        onChange={() => setObjetivo("superavit")}
                                    />
                                    <span>📈 <b>Superávit</b></span><br />
                                    <small>Ganar masa muscular consumiendo más calorías de las que gastas</small><br />
                                    <b><output>{opciones.superavit}</output> kcal/día</b>
                                    <small>(+400 kcal)</small>
                                </label>
                            </div>

                            <br />

                            <div>
                                <label className="btn-opcion-objetivo">
                                    <input
                                        type="radio"
                                        name="objetivo"
                                        value="deficit"
                                        checked={objetivo === "deficit"}
                                        onChange={() => setObjetivo("deficit")}
                                    />
                                    <span>📉 <b>Déficit</b></span><br />
                                    <small>Perder grasa corporal consumiendo menos calorías de las que gastas</small><br />
                                    <b><output>{opciones.deficit}</output> kcal/día</b>
                                    <small>(-400 kcal)</small>
                                </label>
                            </div>
                        </div>

                        <br />

                        <div>
                            <button type="submit" id="btn-ver-resultados">Ver resultados de macronutrientes &gt;</button>
                        </div>

                        <br />

                        <p>
                            <a href="calculadora1.html" className="boton-recalcular">Recalcular objetivo</a>
                        </p>
                    </fieldset>
                </form>
            </section>
        </>
    );
}

renderizarPagina(<CalculadoraPaso2 />);
