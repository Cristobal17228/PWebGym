// Datos de las 6 dietas. Los usan dietas/dietaReact.jsx y nutricion/nutricionReact.jsx

const dietas = {
    cetogenica: {
        nombre: "Dieta Cetogénica",
        subtitulo: "Quema grasa como combustible principal",
        descripcion: "Alta en grasas, muy baja en carbohidratos. Induce cetosis para que el cuerpo use grasa como fuente de energía.",
        imagen: "imagenes/Dieta - Cetogénica.png",
        badge: "MÁS POPULAR",
        emoji: "🥑",
        nivel: { texto: "Moderado", clase: "nivel-moderado" },
        objetivo: "Pérdida de grasa",
        duracion: "8-12 semanas",
        calorias: "1800-2200 kcal/día",
        macros: { proteina: 25, carbohidratos: 5, grasas: 70 },
        acerca: "La dieta cetogénica es un plan alimentario que reduce drásticamente los carbohidratos y los reemplaza con grasas saludables. Esta reducción pone al cuerpo en un estado metabólico llamado cetosis, donde se vuelve increíblemente eficiente quemando grasa para obtener energía. La cetosis también convierte la grasa en cetonas en el hígado, que pueden suministrar energía al cerebro, mejorando la concentración y reduciendo los niveles de azúcar en sangre.",
        publico: "Personas que buscan pérdida de grasa rápida, control del apetito y mejora del rendimiento mental. Ideal para quienes no les importa reducir carbohidratos de forma estricta.",
        beneficios: [
            "Quema de grasa acelerada",
            "Control del apetito y menor hambre",
            "Mejora de la concentración mental",
            "Estabilización del azúcar en sangre",
            "Reducción de la inflamación",
            "Mayor energía sostenida sin picos"
        ],
        permitidos: [
            "Carnes rojas y aves",
            "Pescados y mariscos",
            "Huevos",
            "Aguacate",
            "Queso y lácteos enteros",
            "Nueces y semillas",
            "Aceite de oliva y coco",
            "Verduras de hoja verde"
        ],
        evitar: [
            "Pan, pasta y arroz",
            "Azúcar y dulces",
            "Frutas con alto índice glucémico",
            "Legumbres",
            "Alcohol",
            "Jugos y refrescos",
            "Papas y tubérculos",
            "Cereales procesados"
        ],
        // Un elemento por día, de lunes a domingo
        planSemanal: [
            [
                { tipo: "Desayuno", descripcion: "Huevos revueltos con aguacate" },
                { tipo: "Almuerzo", descripcion: "Ensalada verde con salmón y aceite de oliva" },
                { tipo: "Merienda", descripcion: "Nueces y queso" },
                { tipo: "Cena", descripcion: "Pechuga con brócoli" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Omelette de queso y espinaca" },
                { tipo: "Almuerzo", descripcion: "Ensalada de atún con mayonesa casera" },
                { tipo: "Merienda", descripcion: "Aceitunas y queso curado" },
                { tipo: "Cena", descripcion: "Bife de lomo con espárragos" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Huevos duros con palta" },
                { tipo: "Almuerzo", descripcion: "Puchero de carne magra y verduras verdes" },
                { tipo: "Merienda", descripcion: "Frutos secos y semillas" },
                { tipo: "Cena", descripcion: "Muslos de pollo al horno" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Huevos con panceta" },
                { tipo: "Almuerzo", descripcion: "Bowl de coliflor salteado con pollo" },
                { tipo: "Merienda", descripcion: "Queso y almendras" },
                { tipo: "Cena", descripcion: "Pescado blanco con manteca de hierbas" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Omelette de champiñones y queso" },
                { tipo: "Almuerzo", descripcion: "Costillas de cerdo con ensalada de rúcula y parmesano" },
                { tipo: "Merienda", descripcion: "Palta con sal marina" },
                { tipo: "Cena", descripcion: "Tortilla de zucchini y queso" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Pancakes keto con harina de almendras" },
                { tipo: "Almuerzo", descripcion: "Hamburguesas caseras envueltas en lechuga con palta" },
                { tipo: "Merienda", descripcion: "Queso brie y nueces" },
                { tipo: "Cena", descripcion: "Salmón a la plancha con espinaca salteada" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Brunch keto con huevos poché, palta y queso brie" },
                { tipo: "Almuerzo", descripcion: "Pollo al espiedo con verduras asadas aptas" },
                { tipo: "Merienda", descripcion: "Mix de frutos secos" },
                { tipo: "Cena", descripcion: "Crema de espinaca con queso" }
            ]
        ]
    },
    mediterranea: {
        nombre: "Dieta Mediterránea",
        subtitulo: "El equilibrio perfecto entre salud y sabor",
        descripcion: "Basada en los alimentos tradicionales del Mediterráneo: aceite de oliva, vegetales, legumbres y pescado fresco.",
        imagen: "imagenes/Dieta - Mediterránea.png",
        badge: "RECOMENDADA",
        emoji: "🫒",
        nivel: { texto: "Fácil", clase: "nivel-facil" },
        objetivo: "Salud general",
        duracion: "Estilo de vida",
        calorias: "1600-2000 kcal/día",
        macros: { proteina: 18, carbohidratos: 50, grasas: 32 },
        acerca: "La dieta mediterránea es uno de los patrones alimentarios más estudiados y respaldados por la ciencia. Se basa en los hábitos alimenticios tradicionales de los países que bordean el Mar Mediterráneo. Es rica en frutas, verduras, cereales integrales, legumbres, nueces y semillas, con el aceite de oliva como principal fuente de grasa añadida. El pescado y los mariscos se consumen regularmente, mientras que las carnes rojas y los dulces se reservan para ocasiones especiales.",
        publico: "Ideal para quienes buscan un estilo de vida saludable y sostenible sin restricciones extremas. Perfecta para personas con riesgo cardiovascular o que desean mantener su peso de forma duradera.",
        beneficios: [
            "Reducción del riesgo cardiovascular",
            "Antienvejecimiento y longevidad",
            "Control de peso sostenible",
            "Mejora de la salud cerebral",
            "Reducción de la inflamación crónica",
            "Excelente adherencia a largo plazo"
        ],
        permitidos: [
            "Aceite de oliva virgen extra",
            "Verduras y frutas frescas",
            "Legumbres (garbanzos, lentejas)",
            "Pescado azul y mariscos",
            "Cereales integrales",
            "Frutos secos",
            "Quesos y yogur natural",
            "Vino tinto (moderado)"
        ],
        evitar: [
            "Carnes procesadas",
            "Azúcares añadidos",
            "Grasas trans y aceites refinados",
            "Alimentos ultraprocesados",
            "Bebidas azucaradas",
            "Fast food",
            "Exceso de sal",
            "Mantequilla en exceso"
        ],
        // Un elemento por día, de lunes a domingo
        planSemanal: [
            [
                { tipo: "Desayuno", descripcion: "Tostada integral con aceite de oliva y tomate" },
                { tipo: "Almuerzo", descripcion: "Ensalada griega con salmón" },
                { tipo: "Cena", descripcion: "Pescado al horno con papas" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Yogur griego con nueces y miel" },
                { tipo: "Almuerzo", descripcion: "Potaje de lentejas con verduras" },
                { tipo: "Cena", descripcion: "Pechuga de pollo a la plancha con ensalada" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Tostada con palta y huevo" },
                { tipo: "Almuerzo", descripcion: "Pasta integral con mariscos y tomate natural" },
                { tipo: "Cena", descripcion: "Sardinas a la plancha con espinacas" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Frutas frescas con semillas" },
                { tipo: "Almuerzo", descripcion: "Ensalada de garbanzos con atún y huevo duro" },
                { tipo: "Cena", descripcion: "Dorada al horno con verduras asadas" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Avena cocida con frutos secos" },
                { tipo: "Almuerzo", descripcion: "Arroz integral con verduras y calamares" },
                { tipo: "Cena", descripcion: "Brochetas de pollo con ensalada mediterránea" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Tostada con jamón serrano y tomate" },
                { tipo: "Almuerzo", descripcion: "Paella marinera tradicional" },
                { tipo: "Cena", descripcion: "Ensalada completa con queso feta y aceitunas" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Pan integral con aceite y fruta fresca" },
                { tipo: "Almuerzo", descripcion: "Pescado a la sal con verduras salteadas" },
                { tipo: "Cena", descripcion: "Crema de calabaza y tortilla francesa" }
            ]
        ]
    },
    paleo: {
        nombre: "Dieta Paleo",
        subtitulo: "Come como nuestros ancestros, rinde como un atleta",
        descripcion: "Imita la alimentación del paleolítico: carnes magras, pescado, frutas, vegetales, nueces. Sin procesados ni granos.",
        imagen: "imagenes/Dieta - Paleo.png",
        badge: "FUERZA",
        emoji: "🍖",
        nivel: { texto: "Moderado", clase: "nivel-moderado" },
        objetivo: "Composición corporal",
        duracion: "12 semanas",
        calorias: "1900-2400 kcal/día",
        macros: { proteina: 30, carbohidratos: 35, grasas: 35 },
        acerca: "La dieta Paleo se basa en alimentos que nuestros ancestros cazadores-recolectores habrían comido durante el Paleolítico. La premisa es que el cuerpo humano está genéticamente inadaptado a la dieta moderna llena de procesados. Elimina granos, legumbres, productos lácteos, azúcar refinada y alimentos procesados, centrándose en proteínas de alta calidad, grasas saludables y carbohidratos de verduras y frutas.",
        publico: "Deportistas y personas activas que buscan mejorar su composición corporal, rendimiento y recuperación. También para quienes tienen sensibilidades digestivas o inflamación crónica.",
        beneficios: [
            "Aumento de masa muscular",
            "Reducción de grasa corporal",
            "Mayor energía y vitalidad",
            "Mejora digestiva",
            "Reducción de alergias alimentarias",
            "Control de glucosa en sangre"
        ],
        permitidos: [
            "Carnes de animales de pastoreo",
            "Pescado y mariscos salvajes",
            "Huevos de corral",
            "Frutas y verduras frescas",
            "Nueces y semillas",
            "Aceites naturales (oliva, coco, aguacate)",
            "Hierbas y especias",
            "Tubérculos como boniato"
        ],
        evitar: [
            "Cereales y granos (trigo, avena, maíz)",
            "Legumbres y frijoles",
            "Productos lácteos",
            "Azúcar refinada",
            "Aceites vegetales refinados",
            "Sal en exceso",
            "Alimentos procesados",
            "Alcohol"
        ],
        // Un elemento por día, de lunes a domingo
        planSemanal: [
            [
                { tipo: "Desayuno", descripcion: "Huevos revueltos con espinacas y nueces" },
                { tipo: "Almuerzo", descripcion: "Ensalada con pollo de pastoreo y palta" },
                { tipo: "Cena", descripcion: "Salmón salvaje con boniato asado" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Omelette con champiñones y tomate" },
                { tipo: "Almuerzo", descripcion: "Ensalada de atún fresco con aceite de oliva" },
                { tipo: "Cena", descripcion: "Bife de pastura con espárragos" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Frutas de estación con semillas de calabaza" },
                { tipo: "Almuerzo", descripcion: "Hamburguesa casera envuelta en lechuga con batata" },
                { tipo: "Cena", descripcion: "Cazuela de cerdo y verduras" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Huevos pasados por agua con palta" },
                { tipo: "Almuerzo", descripcion: "Pechuga a las hierbas con ensalada verde" },
                { tipo: "Cena", descripcion: "Trucha al horno con puré de calabaza" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Salteado de carne picada y vegetales" },
                { tipo: "Almuerzo", descripcion: "Ensalada con mariscos y frutos secos" },
                { tipo: "Cena", descripcion: "Costillas de cordero con verduras a la plancha" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Panqueques de plátano y huevo" },
                { tipo: "Almuerzo", descripcion: "Costillas ahumadas con batatas fritas en aceite de coco" },
                { tipo: "Cena", descripcion: "Ensalada de hojas verdes y pollo" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Omelette de jamón natural y hierbas" },
                { tipo: "Almuerzo", descripcion: "Asado de carne vacuna con ensalada mixta" },
                { tipo: "Cena", descripcion: "Pescado blanco con verduras al vapor" }
            ]
        ]
    },
    ayunoIntermitente: {
        nombre: "Ayuno Intermitente",
        subtitulo: "Maximiza los resultados con ventanas de alimentación",
        descripcion: "Cicla entre periodos de ayuno y alimentación (16:8, 18:6, 5:2) para optimizar la quema de grasa y la autofagia.",
        imagen: "imagenes/Dieta - Ayuno Intermitente.png",
        badge: "EFICIENCIA",
        emoji: "⏱️",
        nivel: { texto: "Moderado", clase: "nivel-moderado" },
        objetivo: "Pérdida de peso y longevidad",
        duracion: "Estilo de vida",
        calorias: "1500-2000 kcal en ventana",
        macros: { proteina: 30, carbohidratos: 40, grasas: 30 },
        acerca: "El ayuno intermitente no es una dieta en el sentido tradicional, sino un patrón de alimentación que alterna entre periodos de ayuno y ventanas de comida. El protocolo más popular es el 16:8 (ayunas 16 horas, comes en una ventana de 8 horas). Durante el ayuno, el cuerpo agota el glucógeno y comienza a quemar grasa almacenada. También activa la autofagia, un proceso celular de limpieza que se asocia con la longevidad y la prevención de enfermedades.",
        publico: "Personas con horarios ocupados que prefieren flexibilidad, quienes quieren perder grasa sin contar calorías obsesivamente, y cualquiera interesado en los beneficios anti-envejecimiento de la autofagia.",
        beneficios: [
            "Quema de grasa sin perder músculo",
            "Activación de la autofagia celular",
            "Mejora de la sensibilidad a la insulina",
            "Claridad mental durante el ayuno",
            "Simplificación del plan alimentario",
            "Efectos anti-envejecimiento"
        ],
        permitidos: [
            "Cualquier alimento en la ventana de comida",
            "Agua, café y té sin azúcar (en ayuno)",
            "Proteínas magras",
            "Vegetales de todo tipo",
            "Frutas saciantes",
            "Carbohidratos complejos",
            "Grasas saludables",
            "Electrólitos sin calorías"
        ],
        evitar: [
            "Cualquier caloría durante el ayuno",
            "Leche o crema en el café (en ayuno)",
            "Azúcar durante el ayuno",
            "Golosinas o dulces con azúcar",
            "Bebidas calóricas fuera de la ventana",
            "Comer en exceso al romper el ayuno",
            "Alcohol frecuente",
            "Ultraprocesados en la ventana de comida"
        ],
        // Un elemento por día, de lunes a domingo
        planSemanal: [
            [
                { tipo: "Almuerzo (Ventana 12:00)", descripcion: "Pechuga con ensalada y quinoa" },
                { tipo: "Cena (Hasta 20:00)", descripcion: "Salmón con verduras" }
            ],
            [
                { tipo: "Almuerzo (Ventana 12:00)", descripcion: "Bowl de atún y palta" },
                { tipo: "Cena (Hasta 20:00)", descripcion: "Tortilla de espinacas y ensalada" }
            ],
            [
                { tipo: "Almuerzo (Ventana 12:00)", descripcion: "Carne magra con batata" },
                { tipo: "Cena (Hasta 20:00)", descripcion: "Revuelto de huevos y verduras" }
            ],
            [
                { tipo: "Almuerzo (Ventana 12:00)", descripcion: "Pollo al curry con arroz integral" },
                { tipo: "Cena (Hasta 20:00)", descripcion: "Sopa de verduras y pescado" }
            ],
            [
                { tipo: "Almuerzo (Ventana 12:00)", descripcion: "Ensalada completa con legumbres" },
                { tipo: "Cena (Hasta 20:00)", descripcion: "Tacos de pollo en hojas de lechuga" }
            ],
            [
                { tipo: "Almuerzo (Ventana 13:00)", descripcion: "Almuerzo flex con hamburguesa casera" },
                { tipo: "Cena (Hasta 21:00)", descripcion: "Cena ligera con ensalada y queso" }
            ],
            [
                { tipo: "Almuerzo (Ventana 13:00)", descripcion: "Asado con ensaladas varias" },
                { tipo: "Cena (Hasta 21:00)", descripcion: "Cena liviana con frutas y yogurt" }
            ]
        ]
    },
    veganaFitness: {
        nombre: "Dieta Vegana Fitness",
        subtitulo: "Planta el poder, cosecha el rendimiento",
        descripcion: "100% plant-based orientada al rendimiento deportivo. Alta en proteínas vegetales para ganar músculo sin productos animales.",
        imagen: "imagenes/Dieta - Vegana Fitness.png",
        badge: "SOSTENIBLE",
        emoji: "🌱",
        nivel: { texto: "Avanzado", clase: "nivel-avanzado" },
        objetivo: "Masa muscular vegana",
        duracion: "Estilo de vida",
        calorias: "2000-2600 kcal/día",
        macros: { proteina: 25, carbohidratos: 55, grasas: 20 },
        acerca: "La dieta vegana fitness demuestra que es posible construir un cuerpo atlético sin consumir ningún producto animal. Requiere planificación para asegurar un perfil completo de aminoácidos, vitamina B12, hierro, zinc y omega-3. Con las combinaciones correctas de proteínas vegetales (legumbres, tofu, tempeh, seitán, proteínas en polvo veganas) y un superávit calórico adecuado, se puede ganar masa muscular de forma efectiva y sostenible.",
        publico: "Veganos y vegetarianos que quieren mejorar su rendimiento atlético y composición corporal. También para omnívoros que quieren reducir su consumo animal sin sacrificar resultados en el gym.",
        beneficios: [
            "Mejor recuperación muscular por antiinflamatorios",
            "Mejora de la salud cardiovascular",
            "Impacto ambiental positivo",
            "Menor riesgo de enfermedades crónicas",
            "Alto contenido en fibra y micronutrientes",
            "Energía estable durante el entrenamiento"
        ],
        permitidos: [
            "Legumbres: lentejas, garbanzos, frijoles",
            "Tofu, tempeh y seitán",
            "Proteína vegana en polvo",
            "Quinoa, arroz integral, avena",
            "Frutos secos y semillas",
            "Aguacate y aceite de oliva",
            "Frutas y vegetales variados",
            "Leches vegetales fortificadas"
        ],
        evitar: [
            "Carne, pollo y pescado",
            "Huevos y lácteos",
            "Miel (según criterio)",
            "Gelatina de origen animal",
            "Productos con caseína o suero",
            "Alimentos con colorantes animales",
            "Suplementos con gelatina",
            "Ultraprocesados veganos sin nutrientes"
        ],
        // Un elemento por día, de lunes a domingo
        planSemanal: [
            [
                { tipo: "Desayuno", descripcion: "Avena con proteína vegetal, chía y frutos rojos" },
                { tipo: "Almuerzo", descripcion: "Bowl de quinoa, tofu salteado y brócoli" },
                { tipo: "Cena", descripcion: "Curry de lentejas con arroz integral" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Tostadas integrales con hummus y palta" },
                { tipo: "Almuerzo", descripcion: "Ensalada de garbanzos con vegetales y semillas" },
                { tipo: "Cena", descripcion: "Seitán al wok con verduras" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Smoothie bowl proteico con espinaca y plátano" },
                { tipo: "Almuerzo", descripcion: "Chili vegano de porotos negros con maíz" },
                { tipo: "Cena", descripcion: "Pasta de lentejas con salsa boloñesa de soja texturizada" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Tofu revuelto con cúrcuma y espinaca" },
                { tipo: "Almuerzo", descripcion: "Hamburguesa de porotos y avena con batatas" },
                { tipo: "Cena", descripcion: "Estofado de tempeh con papas y zanahorias" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Panqueques de avena y proteína en polvo" },
                { tipo: "Almuerzo", descripcion: "Bowl mediterráneo de lentejas y falafel" },
                { tipo: "Cena", descripcion: "Salteado de fideos de arroz con verduras y tofu crocante" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Tostada con crema de maní y banana" },
                { tipo: "Almuerzo", descripcion: "Burrito vegano con arroz, frijoles y guacamole" },
                { tipo: "Cena", descripcion: "Pizza casera con masa integral, queso vegetal y vegetales" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Avena remojada con semillas de cáñamo y frutos secos" },
                { tipo: "Almuerzo", descripcion: "Risotto de hongos con levadura nutricional" },
                { tipo: "Cena", descripcion: "Ensalada tibia de quinoa, calabaza asada y seitán" }
            ]
        ]
    },
    volumen: {
        nombre: "Dieta de Volumen",
        subtitulo: "Construye músculo, define tu físico",
        descripcion: "Superávit calórico controlado con alta proteína para maximizar la síntesis muscular y minimizar la ganancia de grasa.",
        imagen: "imagenes/Dieta - Volumen.png",
        badge: "MASA MUSCULAR",
        emoji: "💪",
        nivel: { texto: "Avanzado", clase: "nivel-avanzado" },
        objetivo: "Ganancia de músculo",
        duracion: "16-20 semanas",
        calorias: "2800-3500 kcal/día",
        macros: { proteina: 30, carbohidratos: 50, grasas: 20 },
        acerca: "La dieta de volumen está diseñada para proporcionar al cuerpo los nutrientes necesarios para construir masa muscular de forma eficiente. Se basa en un superávit calórico moderado (250–500 kcal por encima del mantenimiento), alta ingesta proteica (2–2.5g por kg de peso) y suficientes carbohidratos para fueling del entrenamiento y recuperación. El objetivo es maximizar la síntesis de proteínas musculares mientras se minimiza la acumulación de grasa.",
        publico: "Deportistas y culturistas que quieren ganar masa muscular de forma eficiente. Ideal para principiantes e intermedios que buscan su primera etapa de volumen, y para avanzados en fase de construcción.",
        beneficios: [
            "Máxima ganancia de masa muscular",
            "Mayor fuerza y rendimiento",
            "Recuperación muscular óptima",
            "Aumento del metabolismo basal",
            "Mejora de la composición corporal",
            "Mayor resistencia en el entrenamiento"
        ],
        permitidos: [
            "Pechuga de pollo, pavo y ternera magra",
            "Salmón, atún y mariscos",
            "Huevos y claras de huevo",
            "Arroz blanco/integral, pasta, avena",
            "Patatas y boniato",
            "Legumbres como fuente proteica",
            "Frutas variadas para glucógeno",
            "Proteína whey y caseína"
        ],
        evitar: [
            "Grasas trans y aceites hidrogenados",
            "Azúcares simples en exceso",
            "Alcohol (reduce síntesis proteica)",
            "Comida basura y frituras",
            "Calorías vacías sin nutrientes",
            "Exceso de fibra que dificulte absorción",
            "Ayunos prolongados",
            "Carbohidratos simples antes de dormir"
        ],
        // Un elemento por día, de lunes a domingo
        planSemanal: [
            [
                { tipo: "Desayuno", descripcion: "Avena con leche, whey, plátano y crema de maní" },
                { tipo: "Almuerzo", descripcion: "Arroz con pollo y palta" },
                { tipo: "Cena", descripcion: "Pasta con carne magra picada y ensalada" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Huevos revueltos con tostadas y fruta" },
                { tipo: "Almuerzo", descripcion: "Batata con ternera y espárragos" },
                { tipo: "Cena", descripcion: "Salmón al horno con papas y brócoli" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Tazón de avena y frutos secos con batido proteico" },
                { tipo: "Almuerzo", descripcion: "Arroz con atún y verduras" },
                { tipo: "Cena", descripcion: "Pechuga con puré de papas y ensalada" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Omelette de 4 huevos con queso y tostadas" },
                { tipo: "Almuerzo", descripcion: "Pasta integral con pollo y salsa de tomate" },
                { tipo: "Cena", descripcion: "Carne asada con boniatos y ensalada" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Pancakes de avena y claras con miel" },
                { tipo: "Almuerzo", descripcion: "Arroz con salmón y verduras al vapor" },
                { tipo: "Cena", descripcion: "Hamburguesas caseras de carne magra con arroz" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Batido de avena, frutas, leche y proteína" },
                { tipo: "Almuerzo", descripcion: "Almuerzo libre controlado de carne y pastas" },
                { tipo: "Cena", descripcion: "Pollo al horno con papas asadas" }
            ],
            [
                { tipo: "Desayuno", descripcion: "Huevos con tostadas integrales y palta" },
                { tipo: "Almuerzo", descripcion: "Pasta con carne magra y queso parmesano" },
                { tipo: "Cena", descripcion: "Pescado con arroz y verduras" }
            ]
        ]
    }
};
