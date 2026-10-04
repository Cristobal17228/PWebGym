const sexo = localStorage.getItem("sexo");
const peso = Number(localStorage.getItem("peso"));
const actividad = Number(localStorage.getItem("actividad"));

const tmb = Number(localStorage.getItem("tmb"));
const mantenimiento = Number(localStorage.getItem("mantenimiento"));

const objetivo = localStorage.getItem("objetivo");

let caloriasTotales;
let nombreObjetivo;
let tipoAjuste;
let valorAjuste;

if (objetivo === "superavit") {
    caloriasTotales = mantenimiento + 400;
    nombreObjetivo = "Volumen";
    tipoAjuste = "Superávit";
    valorAjuste = 400;
} else {
    caloriasTotales = mantenimiento - 400;
    nombreObjetivo = "Definición";
    tipoAjuste = "Déficit";
    valorAjuste = -400;
}

const caloriasProteina = caloriasTotales * 0.30;
const caloriasCarbos = caloriasTotales * 0.45;
const caloriasGrasas = caloriasTotales * 0.25;

const proteinaGramos = caloriasProteina / 4;
const carbosGramos = caloriasCarbos / 4;
const grasasGramos = caloriasGrasas / 9;

document.getElementById("resultado-tmb").textContent =
    Math.round(tmb);

document.getElementById("resultado-mantenimiento").textContent =
    Math.round(mantenimiento);

document.getElementById("resultado-tipo-ajuste").textContent =
    tipoAjuste;

document.getElementById("resultado-calorias-totales").textContent =
    Math.round(caloriasTotales);

document.getElementById("resultado-nombre-objetivo").textContent =
    nombreObjetivo;

document.getElementById("resultado-proteina-g").textContent =
    Math.round(proteinaGramos);

document.getElementById("resultado-proteina-kcal").textContent =
    Math.round(caloriasProteina);

document.getElementById("resultado-proteina-pct").textContent =
    30;

document.getElementById("resultado-carbos-g").textContent =
    Math.round(carbosGramos);

document.getElementById("resultado-carbos-kcal").textContent =
    Math.round(caloriasCarbos);

document.getElementById("resultado-carbos-pct").textContent =
    45;

document.getElementById("resultado-grasas-g").textContent =
    Math.round(grasasGramos);

document.getElementById("resultado-grasas-kcal").textContent =
    Math.round(caloriasGrasas);

document.getElementById("resultado-grasas-pct").textContent =
    25;

document.getElementById("progreso-proteina").value = 30;
document.getElementById("progreso-carbos").value = 45;
document.getElementById("progreso-grasas").value = 25;

document.getElementById("resultado-texto-objetivo").textContent =
    nombreObjetivo.toLowerCase();

document.getElementById("desglose-sexo").textContent =
    sexo;

document.getElementById("desglose-tmb").textContent =
    Math.round(tmb);

document.getElementById("desglose-factor-actividad").textContent =
    actividad;

document.getElementById("desglose-tdee").textContent =
    Math.round(mantenimiento);

document.getElementById("desglose-tipo-ajuste").textContent =
    tipoAjuste;

document.getElementById("desglose-valor-ajuste").textContent =
    valorAjuste > 0
        ? "+" + valorAjuste
        : valorAjuste;

document.getElementById("desglose-total-diario").textContent =
    Math.round(caloriasTotales);

let actividadTexto;

if (actividad === 1.2) {
    actividadTexto = "Sedentario";
} else if (actividad === 1.375) {
    actividadTexto = "Ligeramente activo";
} else if (actividad === 1.55) {
    actividadTexto = "Moderadamente activo";
} else if (actividad === 1.725) {
    actividadTexto = "Muy activo";
} else {
    actividadTexto = "Extremadamente activo";
}

document.getElementById("desglose-actividad-texto").textContent =
    actividadTexto;

if (objetivo === "superavit") {
    document.getElementById("dieta-1-nombre").textContent =
        "Dieta de Volumen";

    document.getElementById("dieta-1-descripcion").textContent =
        "Alta en calorías, proteína y carbohidratos";

    document.getElementById("dieta-1-categoria").textContent =
        "Ganancia de músculo";

    document.getElementById("dieta-2-nombre").textContent =
        "Dieta Balanceada";

    document.getElementById("dieta-2-descripcion").textContent =
        "Distribución equilibrada de macronutrientes";

    document.getElementById("dieta-2-categoria").textContent =
        "Rendimiento";
} else {
    document.getElementById("dieta-1-nombre").textContent =
        "Dieta de Definición";

    document.getElementById("dieta-1-descripcion").textContent =
        "Alta en proteína y moderada en calorías";

    document.getElementById("dieta-1-categoria").textContent =
        "Pérdida de grasa";

    document.getElementById("dieta-2-nombre").textContent =
        "Dieta Proteica";

    document.getElementById("dieta-2-descripcion").textContent =
        "Prioriza proteína y alimentos saciantes";

    document.getElementById("dieta-2-categoria").textContent =
        "Definición";
}

if (objetivo === "superavit") {
    document.getElementById("dieta-1-nombre").textContent = "Dieta de Volumen";
    document.getElementById("dieta-1-descripcion").textContent = "Alta en calorías, proteína y carbohidratos";
    document.getElementById("dieta-1-categoria").textContent = "Ganancia de músculo";
    document.getElementById("dieta-1-enlace").href = "dieta-volumen.html";

    document.getElementById("dieta-2-nombre").textContent = "Dieta Balanceada";
    document.getElementById("dieta-2-descripcion").textContent = "Distribución equilibrada de macronutrientes";
    document.getElementById("dieta-2-categoria").textContent = "Rendimiento";
    document.getElementById("dieta-2-enlace").href = "dieta-balanceada.html";
} else {
    document.getElementById("dieta-1-nombre").textContent = "Dieta de Definición";
    document.getElementById("dieta-1-descripcion").textContent = "Alta en proteína y moderada en calorías";
    document.getElementById("dieta-1-categoria").textContent = "Pérdida de grasa";
    document.getElementById("dieta-1-enlace").href = "dieta-definicion.html";

    document.getElementById("dieta-2-nombre").textContent = "Dieta Proteica";
    document.getElementById("dieta-2-descripcion").textContent = "Prioriza proteína y alimentos saciantes";
    document.getElementById("dieta-2-categoria").textContent = "Definición";
    document.getElementById("dieta-2-enlace").href = "dieta-proteica.html";
}