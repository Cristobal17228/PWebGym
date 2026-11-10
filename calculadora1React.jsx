const { useEffect } = React;

function CalculadoraPaso1() {

    useEffect(() => {

        const formulario =
            document.getElementById("form-paso-1");

        if (!formulario) {
            return;
        }

        function manejarFormulario(evento) {

            evento.preventDefault();

            const usuarioActual = JSON.parse(
                localStorage.getItem("usuarioActual")
            );

            if (!usuarioActual) {

                alert(
                    "Para utilizar la calculadora primero tenés que registrarte o iniciar sesión."
                );

                window.dispatchEvent(
                    new Event("abrir-registro")
                );

                return;
            }

            const sexo =
                document.querySelector(
                    'input[name="sexo"]:checked'
                ).value;

            const peso =
                Number(
                    document.getElementById("peso").value
                );

            const altura =
                Number(
                    document.getElementById("altura").value
                );

            const edad =
                Number(
                    document.getElementById("edad").value
                );

            const actividad =
                Number(
                    document.querySelector(
                        'input[name="actividad"]:checked'
                    ).value
                );

            const datosCalculadora = {
                sexo,
                peso,
                altura,
                edad,
                actividad
            };

            localStorage.setItem(
                `calculadoraDatos_${usuarioActual.email}`,
                JSON.stringify(datosCalculadora)
            );

            localStorage.setItem(
                "sexo",
                sexo
            );

            localStorage.setItem(
                "peso",
                peso
            );

            localStorage.setItem(
                "altura",
                altura
            );

            localStorage.setItem(
                "edad",
                edad
            );

            localStorage.setItem(
                "actividad",
                actividad
            );

            window.location.href =
                "calculadora2.html";
        }

        formulario.addEventListener(
            "submit",
            manejarFormulario
        );

        return () => {

            formulario.removeEventListener(
                "submit",
                manejarFormulario
            );

        };

    }, []);

    return null;
}


const contenedorCalculadora =
    document.getElementById("calculadora-react");

if (contenedorCalculadora) {

    const rootCalculadora =
        ReactDOM.createRoot(
            contenedorCalculadora
        );

    rootCalculadora.render(
        <CalculadoraPaso1 />
    );

}