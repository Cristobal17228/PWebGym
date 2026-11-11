// Datos de los 6 planes de entrenamiento. Los usan planes/planReact.jsx e inicioReact.jsx

const planes = {
    definicionTotal: {
        nombre: "Definición Total",
        subtitulo: "Esculpí tu cuerpo, bajá el porcentaje graso",
        // Lo que solo usa la tarjeta del plan en inicio.html
        tarjeta: {
            descripcion: "Entrenamiento de resistencia progresivo con énfasis en hipertrofia moderada y reducción de grasa corporal.",
            icono: "bi-lightning-charge-fill",
            colorIcono: "",
            claseCategoria: "categoria-estetica",
            claseNivel: "nivel-intermedio",
            // En la tarjeta el equipamiento dice otra cosa que en la página del plan
            equipamiento: "Pesas libres + máquinas + cardio",
            destacado: true
        },
        imagen: "imagenes/Plan - Definición Total.png",
        badge: "MÁS POPULAR",
        emoji: "⚡",
        nivel: { texto: "Intermedio", clase: "nivel-moderado" },
        categoria: { texto: "Estética", clase: "categoria-estetica" },
        etiqueta: "PÉRDIDA DE GRASA · DEFINICIÓN",
        objetivo: "Pérdida de grasa · Definición",
        frecuencia: "4 sesiones/semana · 12 semanas",
        equipamiento: "Pesas libres + máquinas",
        acerca: "Definición Total combina el entrenamiento de fuerza con el déficit calórico para lograr el físico que buscás. El programa sigue una división de 4 días (Upper/Lower split) que maximiza la frecuencia de estímulo muscular mientras deja tiempo suficiente para la recuperación. Cada bloque de 4 semanas aumenta la intensidad progresivamente: las primeras 4 semanas construyen la base, las siguientes 4 elevan el volumen y las últimas 4 son de intensidad máxima con técnicas avanzadas como superseries y drop sets.",
        volumen: [
            { nombre: "Fuerza / Resistencia", valor: 65, clase: "volumen-fuerza" },
            { nombre: "Cardio / Metabólico", valor: 25, clase: "volumen-cardio" },
            { nombre: "Movilidad / Técnica", valor: 10, clase: "volumen-movilidad" }
        ],
        publico: "Personas con al menos 6 meses de experiencia en gimnasio que buscan bajar su porcentaje graso y lograr una apariencia más definida. No requiere equipo especializado.",
        beneficios: [
            "Reducción de grasa corporal sin perder músculo",
            "Mejora de la definición y densidad muscular",
            "Aumento del metabolismo basal",
            "Mayor resistencia muscular",
            "Progresión clara semana a semana",
            "Compatible con déficit calórico moderado"
        ],
        // Un elemento por día, de lunes a domingo. Los días sin ejercicios son de descanso
        programa: [
            {
                titulo: "Tren Superior A — Empuje",
                detalle: "Pecho, hombros y tríceps con sobrecarga progresiva",
                ejercicios: [
                    { tipo: "Pecho Principal", descripcion: "Press de banca plano con barra: 4x8-10 al RPE 8 con pausa en el pecho" },
                    { tipo: "Superserie Pecho", descripcion: "Press inclinado con mancuernas (3x10) + Aperturas con mancuernas en banco plano (3x12)" },
                    { tipo: "Hombros", descripcion: "Press militar con mancuernas sentado (3x10) + Elevaciones laterales estrictas (4x15)" },
                    { tipo: "Tríceps", descripcion: "Fondos en paralelas lastrados o libres (3x12) + Extensiones en polea con cuerda (3x15)" },
                    { tipo: "Hombro Posterior", descripcion: "Face pulls en polea alta con cuerda (3x15) + Elevaciones frontales con mancuerna (3x12)" },
                    { tipo: "Cardio LISS Final", descripcion: "15 minutos de caminata inclinada en cinta (6-8% de pendiente) a ritmo moderado para potenciar el déficit calórico" }
                ]
            },
            {
                titulo: "Tren Inferior A — Cuádriceps dominante",
                detalle: "Sentadillas, prensa y trabajo accesorio",
                ejercicios: [
                    { tipo: "Pierna Principal", descripcion: "Sentadilla trasera con barra: 4x8 progresivas buscando profundidad controlada" },
                    { tipo: "Volumen Cuádriceps", descripcion: "Prensa de piernas inclinada: 3x12 (última serie con técnica drop set al fallo)" },
                    { tipo: "Cadena Posterior", descripcion: "Curl femoral tumbado en máquina: 4x12 controlando 3 segundos la bajada" },
                    { tipo: "Gemelos y Core", descripcion: "Elevación de talones de pie en máquina (4x15) + Rueda abdominal desde rodillas (3x12)" },
                    { tipo: "Aductor / Abductor", descripcion: "Máquina aductora (3x15) + Máquina abductora (3x15) para moldear el contorno interno y externo del muslo" },
                    { tipo: "Cardio Final", descripcion: "20 minutos de bicicleta estática a ritmo moderado-bajo (Zona 2) para aceleración del metabolismo post-entreno" }
                ]
            },
            { titulo: "Descanso activo", detalle: "Cardio suave LISS o caminata 45 min" },
            {
                titulo: "Tren Superior B — Tracción",
                detalle: "Espalda, bíceps y deltoides posterior",
                ejercicios: [
                    { tipo: "Espalda Grosor", descripcion: "Remo con barra prono: 4x8 pesado con torso a 45 grados y bloqueo escapular" },
                    { tipo: "Espalda Amplitud", descripcion: "Jalón al pecho agarre neutro (3x10) + Remo unilateral con mancuerna en banco (3x12)" },
                    { tipo: "Deltoides Posterior", descripcion: "Face pulls en polea alta con cuerda hacia la frente: 4x15 con 1s de contracción" },
                    { tipo: "Bíceps", descripcion: "Curl con barra Z de pie (3x10) en superserie con Curl martillo con mancuernas (3x12)" },
                    { tipo: "Espalda Baja Accesoria", descripcion: "Hiperextensiones en banco 45° (3x12) + Superman isométrico (3x20s) para fortalecer la cadena posterior baja sin sobrecargar la columna" },
                    { tipo: "Cardio LISS Final", descripcion: "15 minutos de caminata inclinada en cinta o elíptica a intensidad baja para terminar en zona de quema de grasa" }
                ]
            },
            {
                titulo: "Tren Inferior B — Isquiotibial dominante",
                detalle: "Peso muerto rumano, zancadas y gemelos",
                ejercicios: [
                    { tipo: "Cadena Posterior", descripcion: "Peso muerto rumano con barra: 4x8 manteniendo espalda neutra y tensión en isquios" },
                    { tipo: "Unilateral Pierna", descripcion: "Zancadas caminando con mancuernas: 3x12 pasos por pierna con paso amplio" },
                    { tipo: "Glúteo y Cuádriceps", descripcion: "Hip thrust con barra pesada (3x10) + Extensiones de cuádriceps en máquina (3x15)" },
                    { tipo: "Finisher HIIT", descripcion: "15 minutos de intervalos en bicicleta estática (30 segundos sprint / 30 segundos suave)" },
                    { tipo: "Gemelos y Tibial", descripcion: "Elevación de talones sentado en máquina (3x20) + Dorsiflexión de tobillo con banda para equilibrar el trabajo de pantorrilla y prevenir lesiones" },
                    { tipo: "Cardio Quema-Grasa Final", descripcion: "20 minutos de caminata inclinada en cinta (8% pendiente) a ritmo moderado para maximizar el gasto calórico post-sesión" }
                ]
            },
            { titulo: "Descanso activo", detalle: "Movilidad y estiramientos suaves" },
            { titulo: "Descanso completo", detalle: "Recuperación total y recarga de glucógeno" }
        ]
    },
    powerliftingBase: {
        nombre: "Powerlifting Base",
        subtitulo: "Construí fuerza real desde cero",
        // Lo que solo usa la tarjeta del plan en inicio.html
        tarjeta: {
            descripcion: "Programa centrado en los tres grandes levantamientos con periodización lineal y progresión de carga semanal.",
            icono: "bi-sliders2",
            colorIcono: "",
            claseCategoria: "categoria-fuerza",
            claseNivel: "nivel-avanzado",
            destacado: false
        },
        imagen: "imagenes/Plan - Powerlifting Base.png",
        badge: "FUERZA MÁXIMA",
        emoji: "🏋️‍♂️",
        nivel: { texto: "Avanzado", clase: "nivel-avanzado" },
        categoria: { texto: "Fuerza", clase: "categoria-estetica" },
        etiqueta: "FUERZA · POWERLIFTING",
        objetivo: "Aumento de 1RM en Sentadilla, Banca y Peso Muerto",
        frecuencia: "3 sesiones/semana · 16 semanas",
        equipamiento: "Barra + discos + rack + banco",
        acerca: "Powerlifting Base es un programa estructurado en torno a los tres movimientos de competición: la sentadilla (squat), el press de banca (bench press) y el peso muerto (deadlift). Basado en el modelo de periodización lineal ondulada, este plan de 16 semanas optimiza la eficiencia biomecánica, la coordinación neuromuscular y la capacidad de expresar fuerza máxima en un intento de una repetición (1RM), protegiendo la salud articular mediante accesorios específicos.",
        volumen: [
            { nombre: "Fuerza / Resistencia", valor: 80, clase: "volumen-fuerza" },
            { nombre: "Cardio / Metabólico", valor: 10, clase: "volumen-cardio" },
            { nombre: "Movilidad / Técnica", valor: 10, clase: "volumen-movilidad" }
        ],
        publico: "Levantadores que quieren maximizar su fuerza absoluta en los tres grandes movimientos, ya sea para competir en powerlifting o para construir una base de fuerza inquebrantable aplicable a cualquier deporte.",
        beneficios: [
            "Incremento probado de la fuerza máxima (1RM)",
            "Perfeccionamiento técnico en los tres levantamientos",
            "Aumento de la densidad ósea y refuerzo tendinoso",
            "Dominio del sistema de regulación de esfuerzo RPE / RIR",
            "Prevención de desbalances con accesorios específicos",
            "Metodología comprobada de peaking para toma de marcas"
        ],
        // Un elemento por día, de lunes a domingo. Los días sin ejercicios son de descanso
        programa: [
            {
                titulo: "Sentadilla Pesada y Banca de Volumen",
                detalle: "Sentadilla de competición y acumulación en press de banca",
                ejercicios: [
                    { tipo: "Sentadilla Principal", descripcion: "Sentadilla trasera con barra: 4x4 al 80% 1RM con pausa en paralelo y walkout firme" },
                    { tipo: "Banca Secundaria", descripcion: "Press de banca con parada en el pecho: 4x6 al 72% 1RM enfocando retracción escapular" },
                    { tipo: "Accesorio Cuádriceps", descripcion: "Prensa de piernas o Sentadilla frontal ligera: 3x10 a ritmo controlado" },
                    { tipo: "Core y Estabilidad", descripcion: "Plancha con peso en espalda (3x45s) + Hiperextensiones lumbares (3x12)" },
                    { tipo: "Curl Femoral Accesorio", descripcion: "Curl femoral nórdico excéntrico o en máquina tumbado: 3x8 controlando 4 segundos la bajada para prevenir lesiones" },
                    { tipo: "Movilidad de Cadera", descripcion: "Estiramiento 90-90 en el suelo (3x40s por lado) + Rotaciones de cadera en cuatro apoyos (2x10 círculos por pierna)" }
                ]
            },
            { titulo: "Descanso y Recuperación", detalle: "Descanso completo o caminata suave 30 min y movilidad de cadera" },
            {
                titulo: "Press de Banca Pesado y Accesorios de Empuje",
                detalle: "Banca de competición, trabajo de tríceps y deltoides",
                ejercicios: [
                    { tipo: "Banca Principal", descripcion: "Press de banca con barra: 5x3 al 82% 1RM con arco competitivo y leg drive sólido" },
                    { tipo: "Banca Variación", descripcion: "Press de banca con agarre cerrado: 3x6 al 75% 1RM para sobrecarga de tríceps" },
                    { tipo: "Espalda Soporte", descripcion: "Remo con barra apoyado en pecho o con mancuernas: 4x10 para base de empuje" },
                    { tipo: "Accesorios Brazo", descripcion: "Press militar de pie (3x8) + Extensiones de tríceps en polea (3x12)" },
                    { tipo: "Fortalecimiento Manguito", descripcion: "Rotaciones externas con banda elástica (3x15 por lado) + Face pulls con cuerda (3x15) para proteger el hombro bajo cargas máximas" },
                    { tipo: "Movilidad Torácica", descripcion: "Extensiones torácicas sobre foam roller (2x40s) + rotaciones torácicas en cuatro apoyos (2x10 por lado)" }
                ]
            },
            { titulo: "Descanso", detalle: "Nutrición rica en proteínas, hidratación y sueño reparador" },
            {
                titulo: "Peso Muerto y Sentadilla Secundaria",
                detalle: "Tirón pesado convencional o sumo y sentadilla pausada",
                ejercicios: [
                    { tipo: "Peso Muerto Principal", descripcion: "Peso muerto convencional/sumo: 4x3 al 80% 1RM con bloqueo firme de glúteos" },
                    { tipo: "Sentadilla Técnica", descripcion: "Sentadilla con parada de 2 segundos en el fondo (Pause Squat): 3x4 al 70% 1RM" },
                    { tipo: "Accesorio Isquios", descripcion: "Peso muerto rumano con mancuernas o barra: 3x8 manteniendo espalda neutra" },
                    { tipo: "Espalda Alta y Agarre", descripcion: "Jalón al pecho agarre prono (3x10) + Farmer's Walk con agarre estricto (3x40m)" },
                    { tipo: "Hip Thrust Accesorio", descripcion: "Hip Thrust con barra en banco: 3x10 con pausa de 1s arriba para fortalecer el glúteo de apoyo en el arrancado del peso muerto" },
                    { tipo: "Movilidad de Tobillo y Cadera", descripcion: "Estiramiento de tobillo en pared (2x20 repeticiones por lado) + estiramiento de glúteo en mariposa (2x40s) para mejorar la posición en el levantamiento" }
                ]
            },
            { titulo: "Descanso activo", detalle: "Estiramientos dinámicos, movilidad de tobillos y hombros" },
            { titulo: "Descanso total", detalle: "Recuperación total y preparación para el siguiente microciclo" }
        ]
    },
    resistenciaRunner: {
        nombre: "Resistencia Runner",
        subtitulo: "Mejorá tu capacidad cardiovascular al máximo",
        // Lo que solo usa la tarjeta del plan en inicio.html
        tarjeta: {
            descripcion: "Plan progresivo para mejorar la resistencia aeróbica con rodajes, series y fuerza de apoyo para corredores.",
            icono: "bi-wind",
            colorIcono: "plan-icono-azul",
            claseCategoria: "categoria-cardio",
            claseNivel: "nivel-principiante",
            destacado: false
        },
        imagen: "imagenes/Plan - Resistencia Runner.png",
        badge: "CARDIO & RUNNING",
        emoji: "🏃‍♂️",
        nivel: { texto: "Principiante", clase: "nivel-facil" },
        categoria: { texto: "Cardio", clase: "categoria-estetica" },
        etiqueta: "CARDIO · RESISTENCIA AERÓBICA",
        objetivo: "Resistencia cardiovascular y ritmo constante",
        frecuencia: "5 sesiones/semana · 8 semanas",
        equipamiento: "Calzado running · Sin equipamiento extra",
        acerca: "Resistencia Runner es un programa integral diseñado para corredores principiantes e intermedios que buscan incrementar su distancia, mejorar ritmos de carrera y desarrollar una resistencia aeróbica sólida. A través de una combinación calculada de rodajes suaves en Zona 2, series de velocidad en pista, tiradas largas progresivas y entrenamiento de fuerza funcional para corredores, el programa minimiza el riesgo de lesiones y asegura una evolución sostenible semana tras semana.",
        volumen: [
            { nombre: "Fuerza / Resistencia", valor: 20, clase: "volumen-fuerza" },
            { nombre: "Cardio / Metabólico", valor: 70, clase: "volumen-cardio" },
            { nombre: "Movilidad / Técnica", valor: 10, clase: "volumen-movilidad" }
        ],
        publico: "Personas que quieren iniciarse en el running o preparar carreras de 5K, 10K y 21K sin sufrir sobrecargas ni lesiones. No requiere membresía de gimnasio ni equipamiento complejo.",
        beneficios: [
            "Expansión de la capacidad aeróbica y menor pulso en reposo",
            "Mejora de la economía de carrera y zancada eficiente",
            "Prevención activa de periostitis, fascitis y dolor de rodillas",
            "Fortalecimiento de tobillos, pantorrillas y glúteos de apoyo",
            "Capacidad pulmonar incrementada y mayor recuperación pos-esfuerzo",
            "Cronogramas de ritmos adaptados a tu estado físico actual"
        ],
        // Un elemento por día, de lunes a domingo. Los días sin ejercicios son de descanso
        programa: [
            {
                titulo: "Rodaje Regenerativo y Fuerza de Apoyo",
                detalle: "Carrera suave en Zona 2 complementada con ejercicios de estabilidad",
                ejercicios: [
                    { tipo: "Carrera Continua", descripcion: "Rodaje suave en Zona 2 (ritmo conversacional cómodo): 35 minutos continuos" },
                    { tipo: "Fuerza Glúteos", descripcion: "Puente de glúteos a una pierna (3x12 por pierna) + Clamshells con banda elástica (3x15)" },
                    { tipo: "Estabilidad Tobillo", descripcion: "Elevación de talones excéntrica sobre escalón: 3x15 con 3 segundos de bajada" },
                    { tipo: "Core Funcional", descripcion: "Plancha frontal isométrica (3x45s) + Dead bug coordinado (3x12 por lado)" },
                    { tipo: "Técnica de Carrera", descripcion: "Skipping alto + talones al glúteo: 4x20m de cada ejercicio para mejorar la cadencia y la zancada" },
                    { tipo: "Estiramiento Post-Rodaje", descripcion: "Estiramiento de fascia plantar (2x30s por pie) + estiramiento de sóleo en pared (2x30s por pierna) + movilidad de cadera en el suelo 5 min" }
                ]
            },
            {
                titulo: "Series de Velocidad / Fartlek",
                detalle: "Intervalos de intensidad para elevar el umbral anaeróbico",
                ejercicios: [
                    { tipo: "Calentamiento", descripcion: "10 min trote suave + movilidad de cadera y técnica de carrera (skipping, talones)" },
                    { tipo: "Intervalos Fartlek", descripcion: "8 repeticiones de 2 minutos a ritmo 5K alternados con 1 minuto de trote suave" },
                    { tipo: "Transferencia Cadencia", descripcion: "4 rectas progresivas de 80m buscando zancada fluida y apoyo de mediopié" },
                    { tipo: "Vuelta a la Calma", descripcion: "5 min de caminata relajada + respiración diafragmática profunda" },
                    { tipo: "Fuerza de Apoyo", descripcion: "Sentadillas a una pierna asistidas o libres (3x8 por lado) + elevaciones de pantorrilla sobre escalón (3x15) para fortalecer el aparato locomotor" },
                    { tipo: "Estiramiento Activo", descripcion: "Pierna oscilante (leg swing) frontal y lateral (2x15 por pierna) + estiramiento de banda iliotibial de pie (2x30s por lado)" }
                ]
            },
            { titulo: "Descanso activo", detalle: "Caminata ligera 30 min, estiramientos de piernas o sesión de yoga suave" },
            {
                titulo: "Rodaje de Ritmo Medio (Tempo Run)",
                detalle: "Carrera a ritmo controlado para trabajar la tolerancia al lactato",
                ejercicios: [
                    { tipo: "Calentamiento", descripcion: "10 min de trote progresivo muy suave preparando las articulaciones" },
                    { tipo: "Bloque Tempo", descripcion: "20-25 minutos continuos a ritmo de carrera exigente pero sostenible (Zona 3-4)" },
                    { tipo: "Fuerza Tronco", descripcion: "Zancadas estáticas sin peso (3x12 por pierna) + Sentadillas isométricas en pared (3x40s)" },
                    { tipo: "Enfriamiento", descripcion: "5 min de trote regenerativo y descompresión articular de piernas" },
                    { tipo: "Fortalecimiento Tibial", descripcion: "Elevaciones de punta de pie (dorsiflexión) contra pared (3x15) + alfabeto de tobillo dibujando letras con el pie (2 veces por pierna) para prevenir shin splints" },
                    { tipo: "Estiramiento de Cierre", descripcion: "Estiramiento de gemelo y sóleo en escalón (2x30s por pierna) + posición de mariposa sedentaria para adductores (2x40s) post-tempo" }
                ]
            },
            { titulo: "Descanso o Movilidad", detalle: "Rodillo de espuma (foam roller) en gemelos, cuádriceps y banda iliotibial" },
            {
                titulo: "Tirada Larga (Long Run)",
                detalle: "Acumulación de kilómetros a ritmo suave para construir base aeróbica",
                ejercicios: [
                    { tipo: "Tirada Larga", descripcion: "Carrera continua en Zona 2: 50 a 65 minutos manteniendo pulso constante y controlado" },
                    { tipo: "Hidratación", descripcion: "Pauta de sorbos de agua o electrolitos cada 15-20 minutos durante el recorrido" },
                    { tipo: "Movilidad Cadera", descripcion: "90-90 hip stretch (3x30s por pierna) + Estiramiento del flexor de cadera (3x30s)" },
                    { tipo: "Recuperación", descripcion: "Elevación de piernas contra la pared durante 10 minutos para drenaje venoso" },
                    { tipo: "Foam Rolling", descripcion: "Rodillo de espuma en gemelos, banda iliotibial y cuádriceps (2 minutos por zona) para liberar tensión acumulada por el rodaje largo" },
                    { tipo: "Protocolo de Nutrición Post-Long Run", descripcion: "Hidratación con electrolitos y ventana de recarga de carbohidratos: consumir una comida con proteína + carbohidrato complejo en los primeros 30-45 minutos post-carrera" }
                ]
            },
            {
                titulo: "Fuerza y Movilidad para Runners",
                detalle: "Entrenamiento de fuerza sin impacto para proteger articulaciones",
                ejercicios: [
                    { tipo: "Fuerza Unilateral", descripcion: "Sentadillas búlgaras libres: 3x10 por pierna enfocando el empuje con talón" },
                    { tipo: "Cadena Posterior", descripcion: "Peso muerto rumano a una pierna (3x10 por pierna) para equilibrio y fuerza en isquios" },
                    { tipo: "Core Anti-Rotación", descripcion: "Plancha lateral con elevación de pierna (3x30s por lado) + Bird-Dog (3x12)" },
                    { tipo: "Estiramientos", descripcion: "Sesión guiada de 15 minutos enfocada en fascia plantar, sóleos y glúteo medio" },
                    { tipo: "Activación Escapular", descripcion: "Face pulls con banda (3x15) + Rotaciones externas con banda (3x15 por lado) para mantener el equilibrio muscular y la postura de carrera" },
                    { tipo: "Cierre de Semana", descripcion: "10 minutos de respiración diafragmática profunda en posición de mariposa o supino para activar el sistema nervioso parasimpático y preparar la recuperación" }
                ]
            }
        ]
    },
    quemaMaxima: {
        nombre: "Quema Máxima",
        subtitulo: "Intervalos de alta intensidad para resultados rápidos",
        // Lo que solo usa la tarjeta del plan en inicio.html
        tarjeta: {
            descripcion: "Sesiones explosivas de 30-40 minutos que maximizan la quema calórica con trabajo de alta intensidad.",
            icono: "bi-fire",
            colorIcono: "plan-icono-naranja",
            claseCategoria: "categoria-hiit",
            claseNivel: "nivel-intermedio",
            destacado: false
        },
        imagen: "imagenes/Plan - Quema Máxima.png",
        badge: "ALTA INTENSIDAD",
        emoji: "🔥",
        nivel: { texto: "Intermedio", clase: "nivel-moderado" },
        categoria: { texto: "HIIT", clase: "categoria-estetica" },
        etiqueta: "HIIT · QUEMA CALÓRICA INTENSA",
        objetivo: "Quema de calorías y definición rápida",
        frecuencia: "4 sesiones/semana · 6 semanas",
        equipamiento: "Mínimo: mat, mancuernas opcionales",
        acerca: "Quema Máxima está diseñado para maximizar el gasto energético en sesiones concentradas de 30 a 40 minutos gracias al efecto EPOC (consumo excesivo de oxígeno post-entrenamiento), que mantiene el metabolismo elevado durante horas tras finalizar. Utilizando protocolos Tabata, EMOMs y circuitos metabólicos con peso corporal y cargas moderadas, este programa tonifica los grupos musculares clave mientras acelera la combustión de calorías.",
        volumen: [
            { nombre: "Fuerza / Resistencia", valor: 35, clase: "volumen-fuerza" },
            { nombre: "Cardio / Metabólico", valor: 55, clase: "volumen-cardio" },
            { nombre: "Movilidad / Técnica", valor: 10, clase: "volumen-movilidad" }
        ],
        publico: "Personas con poco tiempo diario que buscan perder grasa rápidamente, tonificar todo el cuerpo y ganar condición física sin pasar horas en una cinta de correr ni utilizar máquinas complejas.",
        beneficios: [
            "Efecto Afterburn (EPOC) para quemar calorías tras entrenar",
            "Entrenamientos dinámicos de 35 minutos de alto impacto",
            "Mejora de la sensibilidad a la insulina y gasto calórico",
            "Pérdida de grasa preservando la masa muscular magra",
            "Aumento exponencial de la potencia y resistencia anaeróbica",
            "Mínimo equipamiento requerido para entrenar en cualquier lugar"
        ],
        // Un elemento por día, de lunes a domingo. Los días sin ejercicios son de descanso
        programa: [
            {
                titulo: "Full Body Tabata Inferno",
                detalle: "Intervalos 20s trabajo / 10s descanso para aceleración metabólica",
                ejercicios: [
                    { tipo: "Bloque Tabata 1", descripcion: "Burpees con salto completo: 8 rondas (20s de trabajo máximo / 10s de pausa)" },
                    { tipo: "Bloque Tabata 2", descripcion: "Mountain Climbers a ritmo veloz: 8 rondas (20s trabajo / 10s descanso)" },
                    { tipo: "Bloque Tabata 3", descripcion: "Jumping Squats (sentadillas con salto explosivo): 8 rondas (20s trabajo / 10s descanso)" },
                    { tipo: "Core Metabólico", descripcion: "Plancha activa con toques de hombro: 4 series de 40s con 20s de descanso" },
                    { tipo: "Bloque Tabata 4", descripcion: "Speed Skaters (patinador lateral explosivo): 8 rondas (20s trabajo / 10s descanso) para activación de glúteo medio y potencia lateral" },
                    { tipo: "Vuelta a la Calma", descripcion: "5 minutos de respiración controlada caminando + estiramiento de cuádriceps, isquios y pantorrillas" }
                ]
            },
            {
                titulo: "EMOM de Empuje y Potencia",
                detalle: "Every Minute on the Minute: fuerza reactiva y resistencia muscular",
                ejercicios: [
                    { tipo: "EMOM Minuto 1", descripcion: "15 Kettlebell o Dumbbell Swings pesados con cadera explosiva" },
                    { tipo: "EMOM Minuto 2", descripcion: "12 Flexiones de brazos (Push-ups) estrictas o apoyando rodillas" },
                    { tipo: "EMOM Minuto 3", descripcion: "16 Zancadas alternadas con salto (Jumping Lunges)" },
                    { tipo: "EMOM Minuto 4", descripcion: "45 segundos de plancha isométrica en antebrazos (15s descanso antes de reiniciar)" },
                    { tipo: "EMOM Minuto 5", descripcion: "10 Sentadillas con salto (Squat Jumps) a máxima altura + aterrizaje suave absorbiendo con rodillas" },
                    { tipo: "EMOM Minuto 6", descripcion: "12 Remos con mancuernas en posición de tabla (Renegade Rows) alternando brazos para core y espalda" }
                ]
            },
            { titulo: "Descanso activo", detalle: "Caminata al aire libre de 45 minutos y sesión de estiramientos de piernas" },
            {
                titulo: "Circuito AMRAP Quema-Grasa",
                detalle: "Tantas rondas como sea posible en 20 minutos con foco en resistencia",
                ejercicios: [
                    { tipo: "Tracción / Empuje", descripcion: "Man-makers con mancuernas ligeras o burpee con press de hombros: 8 repeticiones" },
                    { tipo: "Pierna Metabólica", descripcion: "Thrusters con mancuernas al pecho: 12 repeticiones continuas" },
                    { tipo: "Resistencia Core", descripcion: "Bicycle Crunches (abdominales bicicleta): 20 repeticiones por lado" },
                    { tipo: "Cardio Dinámico", descripcion: "High Knees (rodillas al pecho en el lugar): 40 repeticiones a ritmo de sprint" },
                    { tipo: "Explosivo Lateral", descripcion: "Lateral Bounds (saltos laterales explosivos a una pierna): 3x10 por lado con aterrizaje controlado y amortiguación de rodilla" },
                    { tipo: "Recuperación Activa", descripcion: "3 minutos de marcha en el lugar con respiración nasal controlada para bajar la frecuencia cardíaca + estiramiento de cuádriceps y flexores de cadera" }
                ]
            },
            { titulo: "Descanso y Recuperación", detalle: "Hidratación, baño de contraste o descanso regenerativo total" },
            {
                titulo: "Finisher HIIT 30-20-10",
                detalle: "Estructura piramidal descendente sin pausas intermedias",
                ejercicios: [
                    { tipo: "Paso 1 (30 reps)", descripcion: "30 saltos con separación (Jumping Jacks) + 30 Sentadillas al aire sin peso" },
                    { tipo: "Paso 2 (20 reps)", descripcion: "20 Burpees sin flexión (Sprawls) + 20 Flexiones diamante o estándar" },
                    { tipo: "Paso 3 (10 reps)", descripcion: "10 Saltos agrupados (Tuck Jumps) + 10 V-ups abdominales en colchoneta" },
                    { tipo: "Vuelta a la calma", descripcion: "5 minutos de respiración diafragmática y estiramiento de cuádriceps e isquios" },
                    { tipo: "Cardio LISS Final", descripcion: "10 minutos de marcha suave o bicicleta estática a intensidad muy baja (Zona 1) para recuperación activa y quema de calorías adicional" },
                    { tipo: "Estiramiento Global", descripcion: "Sesión de 5 minutos de estiramientos estáticos de cuerpo completo: flexores de cadera, isquios, pectorales y hombros para cerrar la semana de entrenamiento" }
                ]
            },
            { titulo: "Descanso completo", detalle: "Recuperación neuromuscular para iniciar la semana al 100%" }
        ]
    },
    movimientoLibre: {
        nombre: "Movimiento Libre",
        subtitulo: "Recuperá la movilidad y prevenite de lesiones",
        // Lo que solo usa la tarjeta del plan en inicio.html
        tarjeta: {
            descripcion: "Programa de movilidad funcional, trabajo de core y flexibilidad dinámica para recuperar el movimiento libre.",
            icono: "bi-arrow-counterclockwise",
            colorIcono: "plan-icono-verde",
            claseCategoria: "categoria-movilidad",
            claseNivel: "nivel-principiante",
            destacado: false
        },
        imagen: "imagenes/Plan - Movimiento Libre.png",
        badge: "MOVILIDAD & SALUD",
        emoji: "🧘",
        nivel: { texto: "Principiante", clase: "nivel-facil" },
        categoria: { texto: "Movilidad", clase: "categoria-estetica" },
        etiqueta: "MOVILIDAD · FLEXIBILIDAD DINÁMICA",
        objetivo: "Flexibilidad funcional y salud postural",
        frecuencia: "3 sesiones/semana · 8 semanas",
        equipamiento: "Mat de yoga · Sin equipamiento extra",
        acerca: "Movimiento Libre es un programa centrado en la salud articular, la descompresión postural y la recuperación de rangos de movimiento naturales que el sedentarismo y los patrones repetitivos van limitando. Combina principios de yoga dinámico, trabajo de movilidad articular FRC (Functional Range Conditioning) y fortalecimiento del core profundo para eliminar dolores de espalda, liberar caderas y hombros, y mejorar el rendimiento atlético global.",
        volumen: [
            { nombre: "Fuerza / Resistencia", valor: 20, clase: "volumen-fuerza" },
            { nombre: "Cardio / Metabólico", valor: 10, clase: "volumen-cardio" },
            { nombre: "Movilidad / Técnica", valor: 70, clase: "volumen-movilidad" }
        ],
        publico: "Personas que pasan muchas horas sentadas frente a pantallas, deportistas con rigidez muscular recurrente o cualquiera que busque moverse con fluidez, corregir su postura y vivir sin molestias articulares.",
        beneficios: [
            "Alivio sustancial de molestias lumbares, cervicales y hombros",
            "Apertura y movilidad profunda de cadera y tobillos",
            "Corrección de patrones posturales disfuncionales y rigidez",
            "Fortalecimiento del suelo pélvico y transverso abdominal",
            "Mayor fluidez, rango y control motor en movimientos diarios",
            "Reducción del estrés físico mediante respiración consciente"
        ],
        // Un elemento por día, de lunes a domingo. Los días sin ejercicios son de descanso
        programa: [
            {
                titulo: "Apertura de Caderas y Cadena Posterior",
                detalle: "Desbloqueo de pelvis, psoas y flexores de cadera con control activo",
                ejercicios: [
                    { tipo: "Rotación de Cadera", descripcion: "Rotaciones 90-90 dinámicas con transición activa: 3 series de 10 cambios por lado" },
                    { tipo: "Flexores de Cadera", descripcion: "Estiramiento de psoas con retroversión pélvica activa en zancada: 3x40s por lado" },
                    { tipo: "Isquios y Cadena Posterior", descripcion: "Sentadilla cosaca (Cossack Squat) asistida o libre: 3x8 repeticiones fluidas por lado" },
                    { tipo: "Descompresión Lumbar", descripcion: "Postura de la paloma modificada con respiración diafragmática: 3x45s por pierna" },
                    { tipo: "Control Motor Glúteo", descripcion: "Puentes de glúteo isométricos con activación consciente (3x20s contracción) + Clamshells con banda (2x15 por lado)" },
                    { tipo: "Respiración Integrativa", descripcion: "Respiración 4-7-8 en posición de estrella de mar (3 series de 5 ciclos) para cierre de sesión y regulación del sistema nervioso" }
                ]
            },
            { titulo: "Integración y Caminata Consciente", detalle: "Caminata de 30 minutos prestando atención a la postura erguida y apoyo del pie" },
            {
                titulo: "Movilidad Torácica y Cintura Escapular",
                detalle: "Liberación de hombros, columna dorsal y cuello",
                ejercicios: [
                    { tipo: "Rotación Torácica", descripcion: "Enhebrar la aguja (Thread the needle) en cuatro apoyos: 3x10 repeticiones por lado" },
                    { tipo: "Extensión Dorsal", descripcion: "Posición del cachorro (Puppy pose) con manos elevadas: 3 series de 45 segundos" },
                    { tipo: "Salud de Hombro", descripcion: "Dislocaciones de hombro con toalla o palo de escoba: 3x12 lentas y controladas" },
                    { tipo: "Movilidad Escapular", descripcion: "Flexiones escapulares en plancha alta o rodillas: 3x12 con 2s de bloqueo escapular" },
                    { tipo: "Apertura Pectoral", descripcion: "Estiramiento en pared de pecho y hombros (2x40s por lado) + rotaciones de cuello conscientes (2x8 por dirección)" },
                    { tipo: "Descompresión Cervical", descripcion: "Retracción de mentón (chin tuck) sentado (3x10 con 2s de contracción) para alineación postural de cuello y columna cervical" }
                ]
            },
            { titulo: "Descanso postural", detalle: "Evitar posiciones encorvadas prolongadas e incorporar micro-pausas activas" },
            {
                titulo: "Flujo Global de Cuerpo Entero y Core Profundo",
                detalle: "Encadenamiento de posturas dinámicas y estabilidad central",
                ejercicios: [
                    { tipo: "Flujo Dinámico", descripcion: "Saludo al sol dinámico (transición perro boca abajo a cobra): 5 rondas lentas" },
                    { tipo: "Fuerza Profunda de Core", descripcion: "Bird-Dog isométrico con activación cruzada: 3x10 repeticiones con 3s de pausa" },
                    { tipo: "Estabilidad de Espalda", descripcion: "Gato-Camello (Cat-Cow) articulando vértebra por vértebra: 3x12 repeticiones completas" },
                    { tipo: "Relajación", descripcion: "Postura del niño (Child's pose) con estiramiento lateral de brazos: 4 minutos" },
                    { tipo: "Equilibrio y Propiocepción", descripcion: "Postura del árbol (Tree pose) sostenida (3x30s por pierna) + balanceo en BOSU o suelo inestable para activar los estabilizadores del tobillo" },
                    { tipo: "Cierre de Sesión", descripcion: "Savasana con respiración 4-4-4 (3 minutos de relajación total en decúbito supino) para integración neuromuscular de la sesión" }
                ]
            },
            { titulo: "Movilidad suave al aire libre", detalle: "Movilidad libre no estructurada, paseos en la naturaleza o práctica recreativa" },
            { titulo: "Descanso completo", detalle: "Descanso reparador para reiniciar la semana con el cuerpo renovado" }
        ]
    },
    atletaTotal: {
        nombre: "Atleta Total",
        subtitulo: "Rendimiento completo en todos los dominios físicos",
        // Lo que solo usa la tarjeta del plan en inicio.html
        tarjeta: {
            descripcion: "Entrenamiento cruzado de alto rendimiento: pesas olímpicas, gimnástica y cardio metabólico.",
            icono: "bi-heart",
            colorIcono: "plan-icono-rojo",
            claseCategoria: "categoria-crossfit",
            claseNivel: "nivel-avanzado",
            destacado: true
        },
        imagen: "imagenes/Plan - Atleta Total.png",
        badge: "ELITE",
        emoji: "⚡",
        nivel: { texto: "Avanzado", clase: "nivel-avanzado" },
        categoria: { texto: "CrossFit", clase: "categoria-estetica" },
        etiqueta: "CROSSFIT · RENDIMIENTO HÍBRIDO",
        objetivo: "Fuerza, potencia y resistencia híbrida",
        frecuencia: "5 sesiones/semana · 20 semanas",
        equipamiento: "Gimnasio completo con olímpicos",
        acerca: "Atleta Total es el programa definitivo de acondicionamiento físico general para quienes no se conforman con una sola disciplina. Integra levantamiento olímpico, calistenia avanzada y capacidad cardiovascular de alta intensidad en sesiones estructuradas. Inspirado en la metodología cross-training de competición, este plan de 20 semanas dividido en 4 fases optimiza la potencia explosiva, la fuerza bruta, la agilidad gimnástica y la resistencia metabólica bajo fatiga extrema.",
        volumen: [
            { nombre: "Fuerza / Resistencia", valor: 45, clase: "volumen-fuerza" },
            { nombre: "Cardio / Metabólico", valor: 35, clase: "volumen-cardio" },
            { nombre: "Movilidad / Técnica", valor: 20, clase: "volumen-movilidad" }
        ],
        publico: "Atletas y deportistas avanzados que dominan los patrones básicos de fuerza y buscan llevar su capacidad de trabajo al nivel más alto. Ideal para quienes quieren competir en eventos híbridos o dominar cualquier desafío físico.",
        beneficios: [
            "Desarrollo de potencia explosiva con levantamientos olímpicos",
            "Mejora drástica del VO2 máx y resistencia lactácida",
            "Dominio corporal total mediante gimnásticos avanzados",
            "Composición corporal magra y atlética",
            "Capacidad de rendimiento sostenido bajo fatiga extrema",
            "Planificación por bloques con picos de rendimiento programados"
        ],
        // Un elemento por día, de lunes a domingo. Los días sin ejercicios son de descanso
        programa: [
            {
                titulo: "Fuerza y Potencia Olímpica",
                detalle: "Snatch, sentadilla frontal pesada y WOD metabólico",
                ejercicios: [
                    { tipo: "Potencia Olímpica", descripcion: "Power Snatch (Arrancada de potencia): 5x3 al 75-80% 1RM con pausa en recepción" },
                    { tipo: "Fuerza Pierna", descripcion: "Sentadilla frontal (Front Squat): 4x5 al 80% 1RM con torso vertical estricto" },
                    { tipo: "Gimnástico", descripcion: "Bar Muscle-Ups o dominadas al pecho: 4x6 con técnica fluida y descanso de 90s" },
                    { tipo: "Metcon / WOD", descripcion: "AMRAP 12 min: 10 Thrusters con barra (43/30 kg) + 10 Burpees sobre la barra" },
                    { tipo: "Core Pesado", descripcion: "Good Mornings con barra ligera (3x12) + GHD Sit-Ups o abdominales con peso en decline (3x15)" },
                    { tipo: "Movilidad Post-Sesión", descripcion: "Estiramiento de cadera en posición de paloma (2x45s por lado) + movilidad de tobillo en pared (2x20 repeticiones)" }
                ]
            },
            {
                titulo: "Capacidad Gimnástica y Accesorios",
                detalle: "Handstand push-ups, tracciones y resistencia de agarre",
                ejercicios: [
                    { tipo: "Gimnástico Empuje", descripcion: "Handstand Push-Ups estrictos o con kipping: 5x8 controlando descenso" },
                    { tipo: "Fuerza Tracción", descripcion: "Dominadas lastradas: 4x5 con sobrecarga progresiva" },
                    { tipo: "Accesorios Torso", descripcion: "Press de banca con mancuernas (3x10) + Remo Pendlay con barra (3x8)" },
                    { tipo: "Cardio Intervalado", descripcion: "SkiErg o Remo: 6 series de 500m a ritmo de carrera (1:1 de descanso)" },
                    { tipo: "Core Antirotación", descripcion: "Pallof Press en polea (3x12 por lado) + Hollow Body hold (3x30s) para estabilidad del núcleo bajo fatiga" },
                    { tipo: "Movilidad de Hombros", descripcion: "Dislocaciones de hombro con banda (2x15) + estiramiento del manguito rotador en pared (2x30s por lado)" }
                ]
            },
            { titulo: "Descanso activo", detalle: "Movilidad articular, trabajo miofascial y caminata suave 40 min" },
            {
                titulo: "Halterofilia y Empuje Pesado",
                detalle: "Clean & Jerk, press militar y trabajo de core",
                ejercicios: [
                    { tipo: "Levantamiento Olímpico", descripcion: "Clean & Jerk (Dos tiempos): 5 series de 2+1 repeticiones al 80% 1RM" },
                    { tipo: "Fuerza Hombros", descripcion: "Press militar estricto de pie con barra: 4x6 al 75% 1RM" },
                    { tipo: "Fuerza Accesoria", descripcion: "Zancadas búlgaras con mancuernas (3x10 por pierna) + Fondos en anillas (3x10)" },
                    { tipo: "Metcon Intenso", descripcion: "3 rondas por tiempo: 400m carrera + 21 Kettlebell Swings (24/16 kg) + 12 Toes-to-Bar" },
                    { tipo: "Técnica Olímpica", descripcion: "Hang Power Clean (colgante de potencia): 4x3 al 70% 1RM para trabajar la recepción alta y la triple extensión" },
                    { tipo: "Movilidad de Tobillo y Cadena", descripcion: "Sentadilla en pared con soporte (3x40s buscando profundidad) + estiramiento de muñecas en posición frontal (2x20s por lado)" }
                ]
            },
            {
                titulo: "Fuerza de Tirón y Cadena Posterior",
                detalle: "Peso muerto convencional, gimnásticos de tracción y finisher",
                ejercicios: [
                    { tipo: "Fuerza Máxima", descripcion: "Peso muerto convencional con barra: 4x4 al 82% 1RM con técnica impoluta" },
                    { tipo: "Cadena Posterior", descripcion: "GHD Hip Extensions o Buenos Días con barra: 3x12 con 2s de pausa arriba" },
                    { tipo: "Gimnástico", descripcion: "Chest-to-bar Pull-Ups: 4x10 o transiciones avanzadas en barra" },
                    { tipo: "Chipper Condicionamiento", descripcion: "Por tiempo: 50 Wall Balls (9/6 kg) + 40 Box Jumps (24/20\") + 30 D-Ball Cleans (40/30 kg)" },
                    { tipo: "Tracción Accesoria", descripcion: "Remo en barra fija agarre supino (3x10) + Face pulls con banda (3x15) para completar el volumen de espalda y deltoides posterior" },
                    { tipo: "Movilidad Cadena Posterior", descripcion: "Estiramiento de isquiotibiales en el suelo con banda (2x40s por pierna) + pigeon pose para apertura de cadera (2x40s por lado)" }
                ]
            },
            {
                titulo: "Resistencia Híbrida / Long Metcon",
                detalle: "Trabajo por intervalos de alta duración y máquina de cardio",
                ejercicios: [
                    { tipo: "Bloque Ergos", descripcion: "Bicicleta Echo / Assault Bike: 5x1 min max cal con 2 min de recuperación activa" },
                    { tipo: "Doble Comba", descripcion: "Double Unders (Saltos dobles de comba): 4x50 repeticiones continuas" },
                    { tipo: "Transporte de Cargas", descripcion: "Paseo del granjero con mancuernas pesadas: 4x50 metros sin soltar" },
                    { tipo: "Finisher de Core", descripcion: "Hollow Rocks (3x30s) + Plancha lateral con rotación (3x15 por lado)" },
                    { tipo: "Yoke / Sled Push", descripcion: "Empuje de trineo o sustituto (3x20m) a máxima potencia con descanso completo entre series para desarrollar la fuerza de aceleración" },
                    { tipo: "Recuperación Activa Final", descripcion: "10 minutos de bicicleta estática a ritmo muy suave (Zona 1) + foam rolling de cuádriceps, isquios y gemelos para facilitar la recuperación semanal" }
                ]
            },
            { titulo: "Descanso completo", detalle: "Recuperación neuromuscular, hidratación y recarga nutricional" }
        ]
    }
};
