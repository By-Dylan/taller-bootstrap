
const miBoton = document.getElementById("iboton"); //conectamos el html con js

// 1. Ir arriba al hacer clic
miBoton.addEventListener("click", () => {     //addeventliterner es como ponerle un microfono
    window.scrollTo({ top: 0, behavior: "smooth" }); //hasta arriba, smooth deslizamiento suave
});

// 2. Mostrar si bajaste más de 200px, ocultar si estás arriba (0)
window.addEventListener("scroll", () => {
    const scrollActual = window.scrollY;

    // Si es 0, se oculta por completo. Si es mayor a 200, se muestra.
    if (scrollActual === 0) {
        miBoton.classList.remove("mostrar-boton");
    } else if (scrollActual > 100) {
        miBoton.classList.add("mostrar-boton");
    }
});