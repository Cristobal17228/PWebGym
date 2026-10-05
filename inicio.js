const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("abierto");

    const icono = botonMenu.querySelector("i");

    if (menu.classList.contains("abierto")) {
        icono.classList.remove("bi-list");
        icono.classList.add("bi-x-lg");
    } else {
        icono.classList.remove("bi-x-lg");
        icono.classList.add("bi-list");
    }
});

const enlacesMenu = menu.querySelectorAll("a");

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");

        const icono = botonMenu.querySelector("i");
        icono.classList.remove("bi-x-lg");
        icono.classList.add("bi-list");
    });
});