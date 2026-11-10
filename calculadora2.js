const sexo = localStorage.getItem("sexo");
const peso = Number(localStorage.getItem("peso"));
const altura = Number(localStorage.getItem("altura"));
const edad = Number(localStorage.getItem("edad"));
const actividad = Number(localStorage.getItem("actividad"));

let ajusteSexo;

if (sexo === "hombre") {
    ajusteSexo = 5;
} else {
    ajusteSexo = -161;
}

const tmb =
    (10 * peso) +
    (6.25 * altura) -
    (5 * edad) +
    ajusteSexo;

const mantenimiento = tmb * actividad;

const superavit = mantenimiento + 400;
const deficit = mantenimiento - 400;

document.getElementById("tmb-previo").textContent =
    Math.round(tmb);

document.getElementById("mantenimiento-previo").textContent =
    Math.round(mantenimiento);

document.getElementById("calorias-superavit-opcion").textContent =
    Math.round(superavit);

document.getElementById("calorias-deficit-opcion").textContent =
    Math.round(deficit);

localStorage.setItem("tmb", tmb);
localStorage.setItem("mantenimiento", mantenimiento);

const formulario = document.getElementById("form-paso-2");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const usuarioActual = JSON.parse(
        localStorage.getItem("usuarioActual")
    );

    if (!usuarioActual) {
        alert(
            "Para guardar tu objetivo y continuar primero tenés que registrarte o iniciar sesión."
        );

        window.location.href = "login.html";
        return;
    }

    const objetivo = document.querySelector(
        'input[name="objetivo"]:checked'
    ).value;

    let caloriasObjetivo;

    if (objetivo === "superavit") {
        caloriasObjetivo = Math.round(superavit);
    } else {
        caloriasObjetivo = Math.round(deficit);
    }

    localStorage.setItem("objetivo", objetivo);

    localStorage.setItem(
        `calorias_${usuarioActual.email}`,
        caloriasObjetivo
    );

    localStorage.setItem(
        `objetivo_${usuarioActual.email}`,
        objetivo
    );

    localStorage.setItem(
        `tmb_${usuarioActual.email}`,
        Math.round(tmb)
    );

    localStorage.setItem(
        `mantenimiento_${usuarioActual.email}`,
        Math.round(mantenimiento)
    );

    window.location.href = "calculadora3.html";
});