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

/*document.getElementById("resultado-proteina-pct").textContent =
    30;*/

document.getElementById("resultado-carbos-g").textContent =
    Math.round(carbosGramos);

document.getElementById("resultado-carbos-kcal").textContent =
    Math.round(caloriasCarbos);

/*document.getElementById("resultado-carbos-pct").textContent =
    45;*/

document.getElementById("resultado-grasas-g").textContent =
    Math.round(grasasGramos);

document.getElementById("resultado-grasas-kcal").textContent =
    Math.round(caloriasGrasas);

/*document.getElementById("resultado-grasas-pct").textContent =
    25;*/

document.getElementById("progreso-proteina").value = 30;
document.getElementById("progreso-carbos").value = 45;
document.getElementById("progreso-grasas").value = 25;

/*document.getElementById("resultado-texto-objetivo").textContent =
    nombreObjetivo.toLowerCase();*/

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


const dietasRecomendadas = {
    superavit: [
        {
            nombre: "Dieta de Volumen",
            descripcion: "Superávit calórico controlado con alta proteína",
            categoria: "Ganancia de músculo",
            enlace: "dietas/volumen.html"
        },
        {
            nombre: "Dieta Mediterránea",
            descripcion: "Equilibrio entre salud y sabor, con carbohidratos y grasas saludables",
            categoria: "Salud general",
            enlace: "dietas/mediterranea.html"
        }
    ],
    deficit: [
        {
            nombre: "Ayuno Intermitente",
            descripcion: "Ventanas de alimentación para optimizar la quema de grasa",
            categoria: "Pérdida de peso",
            enlace: "dietas/ayunoIntermitente.html"
        },
        {
            nombre: "Dieta Paleo",
            descripcion: "Carnes magras, pescado, frutas y vegetales, sin procesados",
            categoria: "Composición corporal",
            enlace: "dietas/paleo.html"
        }
    ]
};
 
const listaDietas = dietasRecomendadas[objetivo === "superavit" ? "superavit" : "deficit"];
 
listaDietas.forEach(function (dieta, indice) {
    const n = indice + 1;
 
    document.getElementById("dieta-" + n + "-nombre").textContent = dieta.nombre;
    document.getElementById("dieta-" + n + "-descripcion").textContent = dieta.descripcion;
    document.getElementById("dieta-" + n + "-categoria").textContent = dieta.categoria;
    document.getElementById("dieta-" + n + "-enlace").href = dieta.enlace;
});