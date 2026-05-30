
const miBoton = document.getElementById("iboton"); //conectamos el html con js
const iconoluna= document.getElementById("icono-luna");
const tarjeta= document.querySelectorAll(".tarjeta");



//Evento subir hacia arriba

miBoton.addEventListener("click", () => {     //addeventliterner es como ponerle un microfono
    window.scrollTo({ top: 0, behavior: "smooth" }); //hasta arriba, smooth deslizamiento suave
});

// 2. Mostrar si bajaste más de 200px, ocultar si estás arriba (0)
window.addEventListener("scroll", () => {
    const scrollActual = window.scrollY;

    // Si es 0, se oculta por completo. Si es mayor a 200, se muestra.
    if (scrollActual === 0) {
        miBoton.classList.remove("mostrar-boton");
    } else if (scrollActual > 400) {
        miBoton.classList.add("mostrar-boton");
    }
});



//cambiar el color del body

iconoluna.addEventListener("click", (evento) => {
    document.body.classList.toggle("body-oscuro");
    console.log(iconoluna);
    evento.preventDefault(); //evita que la pagina recargue por el href

    // 2. Corregido: Usamos "bi-moon-stars-fill" que es la clase real de tu HTML
    if (document.body.classList.contains("body-oscuro")) {
        // Al entrar a modo oscuro, reemplazamos la luna con estrellas por el sol
        iconoluna.classList.replace("bi-moon-stars-fill", "bi-brightness-high-fill");
    } else {
        // Al salir, reemplazamos el sol de vuelta por la luna con estrellas
        iconoluna.classList.replace("bi-brightness-high-fill", "bi-moon-stars-fill");
    }     
});



//cambiar de imagen en las cards

tarjeta.forEach((img) => { // 2. Recorres cada imagen de la lista una por una
    const imgOriginal = img.src;
    const imgNueva = img.getAttribute("data-img2");

    // 3. Evento: Cuando el mouse entra a la imagen
    img.addEventListener("mouseenter", () => {
        if (imgNueva) { //verifica si la imgnueva tiene el atributo o la ruta
            img.src = imgNueva; 
        }
    });

    // 4. Evento: Cuando el mouse sale de la imagen
    img.addEventListener("mouseleave", () => {
        img.src = imgOriginal;
    });
});


