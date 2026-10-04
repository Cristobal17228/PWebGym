const formulario = document.getElementById("form-paso-1");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const edad = Number(document.getElementById("edad").value);
    const actividad = Number(
        document.querySelector('input[name="actividad"]:checked').value
    );

    localStorage.setItem("sexo", sexo);
    localStorage.setItem("peso", peso);
    localStorage.setItem("altura", altura);
    localStorage.setItem("edad", edad);
    localStorage.setItem("actividad", actividad);

    window.location.href = "calculadora2.html";
});