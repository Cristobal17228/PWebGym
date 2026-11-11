// Paso 3 de la calculadora: resultados, macronutrientes y dietas recomendadas

const textosActividad = {
    1.2: "Sedentario",
    1.375: "Ligeramente activo",
    1.55: "Moderadamente activo",
    1.725: "Muy activo",
    1.9: "Extremadamente activo"
};

const ajustesObjetivo = {
    superavit: { nombreObjetivo: "Volumen", tipoAjuste: "Superávit", valorAjuste: 400 },
    deficit: { nombreObjetivo: "Definición", tipoAjuste: "Déficit", valorAjuste: -400 }
};

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

// Porcentaje de las calorías totales y kcal por gramo de cada macro
const macros = [
    { clave: "proteina", nombre: "Proteínas", porcentaje: 30, kcalPorGramo: 4 },
    { clave: "carbos", nombre: "Carbohidratos", porcentaje: 45, kcalPorGramo: 4 },
    { clave: "grasas", nombre: "Grasas", porcentaje: 25, kcalPorGramo: 9 }
];

function calcularResultado() {
    const objetivo = localStorage.getItem("objetivo") === "superavit" ? "superavit" : "deficit";
    const actividad = Number(localStorage.getItem("actividad"));
    const mantenimiento = Number(localStorage.getItem("mantenimiento"));
    const ajuste = ajustesObjetivo[objetivo];
    const caloriasTotales = mantenimiento + ajuste.valorAjuste;

    return {
        objetivo: objetivo,
        ...ajuste,
        sexo: localStorage.getItem("sexo"),
        peso: Number(localStorage.getItem("peso")),
        actividad: actividad,
        actividadTexto: textosActividad[actividad] || "Extremadamente activo",
        tmb: Number(localStorage.getItem("tmb")),
        mantenimiento: mantenimiento,
        caloriasTotales: caloriasTotales,
        macros: macros.map(macro => {
            const kcal = caloriasTotales * macro.porcentaje / 100;
            return { ...macro, kcal: kcal, gramos: kcal / macro.kcalPorGramo };
        })
    };
}

function CalculadoraPaso3() {
    const resultado = calcularResultado();
    const [proteinas, carbohidratos, grasas] = resultado.macros;

    // Guarda el resultado para mostrarlo en el perfil
    React.useEffect(() => {
        const usuarioActual = obtenerUsuarioActual();

        if (!usuarioActual) {
            return;
        }

        const resultadoCalculadora = {
            objetivo: resultado.objetivo,
            nombreObjetivo: resultado.nombreObjetivo,
            peso: resultado.peso,
            actividad: resultado.actividad,
            actividadTexto: resultado.actividadTexto,
            tmb: Math.round(resultado.tmb),
            mantenimiento: Math.round(resultado.mantenimiento),
            calorias: Math.round(resultado.caloriasTotales),
            proteinas: Math.round(proteinas.gramos),
            carbohidratos: Math.round(carbohidratos.gramos),
            grasas: Math.round(grasas.gramos)
        };

        localStorage.setItem(`calorias_${usuarioActual.email}`, resultadoCalculadora.calorias);
        localStorage.setItem(
            `resultadoCalculadora_${usuarioActual.email}`,
            JSON.stringify(resultadoCalculadora)
        );
    }, []);

    const desglose = [
        { nombre: "Sexo biológico", valor: resultado.sexo },
        { nombre: "TMB", valor: Math.round(resultado.tmb) + " kcal" },
        { nombre: "Factor de actividad", valor: resultado.actividad },
        { nombre: "Mantenimiento", valor: Math.round(resultado.mantenimiento) + " kcal" },
        { nombre: "Tipo de ajuste", valor: resultado.tipoAjuste },
        { nombre: "Ajuste", valor: resultado.valorAjuste > 0 ? "+" + resultado.valorAjuste : resultado.valorAjuste },
        { nombre: "Actividad", valor: resultado.actividadTexto },
        { nombre: "Meta diaria", valor: Math.round(resultado.caloriasTotales) + " kcal" }
    ];

    return (
        <>
            <section className="calculadora-header">
                <p className="etiqueta-nutricion">NUTRICIÓN</p>
                <h1>Resultados <span>de calorías</span></h1>
                <p className="descripcion-header">
                    Tu plan personalizado con la distribución de macronutrientes ideal para tu objetivo.
                </p>
            </section>

            <div className="indicador-pasos">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>

            <section className="paso-calculadora">
                <div className="tarjetas-resumen-resultado">
                    <article className="tarjeta-metrica">
                        <p>TMB</p>
                        <h2><output>{Math.round(resultado.tmb)}</output> kcal</h2>
                    </article>

                    <article className="tarjeta-metrica">
                        <p>Mantenimiento</p>
                        <h2><output>{Math.round(resultado.mantenimiento)}</output> kcal</h2>
                    </article>

                    <article className="tarjeta-metrica">
                        <p>Tipo de ajuste</p>
                        <h2><output>{resultado.tipoAjuste}</output></h2>
                    </article>

                    <article className="tarjeta-metrica">
                        <p>Total diario</p>
                        <h2><output>{Math.round(resultado.caloriasTotales)}</output> kcal</h2>
                    </article>
                </div>

                <div className="distribucion-macros-resultado">
                    <h3>
                        Distribución de macronutrientes para <output>{resultado.nombreObjetivo}</output>
                    </h3>

                    {resultado.macros.map(macro => (
                        <div className="macro-resultado-item" key={macro.clave}>
                            <p>
                                <b>{macro.nombre}</b>
                                <small>
                                    <output>{Math.round(macro.gramos)}</output> g ·{" "}
                                    <output>{Math.round(macro.kcal)}</output> kcal
                                </small>
                            </p>
                            <progress id={"progreso-" + macro.clave} max="100" value={macro.porcentaje}></progress>
                        </div>
                    ))}
                </div>

                <div className="dietas-recomendadas-resultado">
                    <h3>Dietas recomendadas</h3>
                    <p>
                        Te sugerimos estas opciones según tu objetivo y estilo de alimentación.
                    </p>

                    <div id="contenedor-dietas-recomendadas">
                        {dietasRecomendadas[resultado.objetivo].map(dieta => (
                            <div className="item-dieta-recomendada" key={dieta.nombre}>
                                <p>
                                    <b>{dieta.nombre}</b>
                                    <span>{dieta.categoria}</span>
                                </p>
                                <small>{dieta.descripcion}</small>
                                <br />
                                <a href={RAIZ + dieta.enlace}>Ver dieta</a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="desglose-calculo">
                    <h3>Desglose del cálculo</h3>
                    <table>
                        <tbody>
                            {desglose.map(fila => (
                                <tr key={fila.nombre}>
                                    <td>{fila.nombre}</td>
                                    <td><output>{fila.valor}</output></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p>
                    <button
                        type="button"
                        className="boton-recalcular"
                        onClick={() => window.location.href = "calculadora2.html"}
                    >
                        Recalcular objetivo
                    </button>
                </p>
            </section>
        </>
    );
}

renderizarPagina(<CalculadoraPaso3 />);
