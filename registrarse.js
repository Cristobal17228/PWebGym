const secciones = document.querySelectorAll(".seccion-formulario");
const pasos = document.querySelectorAll(".paso");
const botonesSiguiente = document.querySelectorAll(".boton-siguiente");
const botonesAnterior = document.querySelectorAll(".boton-anterior");
const formulario = document.getElementById("form-registro");

function mostrarPaso(numero) {
    secciones.forEach(seccion => {
        seccion.classList.remove("activa");
    });

    pasos.forEach(paso => {
        paso.classList.remove("activo");
    });

    document.querySelector(`[data-seccion="${numero}"]`).classList.add("activa");

    pasos.forEach((paso, indice) => {
        if (indice < numero) {
            paso.classList.add("activo");
        }
    });
}

botonesSiguiente.forEach(boton => {
    boton.addEventListener("click", () => {
        const seccionActual = boton.closest(".seccion-formulario");
        const campos = seccionActual.querySelectorAll("input");
        let formularioValido = true;

        campos.forEach(campo => {
            if (!campo.checkValidity()) {
                campo.reportValidity();
                formularioValido = false;
            }
        });

        if (formularioValido) {
            mostrarPaso(Number(boton.dataset.siguiente));
        }
    });
});

botonesAnterior.forEach(boton => {
    boton.addEventListener("click", () => {
        mostrarPaso(Number(boton.dataset.anterior));
    });
});

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    const datosUsuario = {
        dni: document.getElementById("dni").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value
    };

    localStorage.setItem("usuarioLockIn", JSON.stringify(datosUsuario));

    alert("Cuenta creada correctamente");
    window.location.href = "inicio.html";
});