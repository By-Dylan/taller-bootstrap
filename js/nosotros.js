
const titulos = document.querySelectorAll(".tituloo");

// 2. Recorremos cada título con un bucle
titulos.forEach(titulo => {
    titulo.addEventListener("dblclick", (evento) => {
        evento.stopPropagation();
        // Buscamos el elemento hermano que sigue al título
        const parrafo = titulo.nextElementSibling;
        
        // Si el párrafo existe, alternamos la clase que lo oculta/muestra
        if (parrafo) {
            parrafo.classList.toggle("parrafo-oculto");
        }
    });
});



const tarjetas = document.querySelectorAll(".tarjeta-valor");

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        const contenidoFoto = tarjeta.querySelector(".contenedor-valores");
        // Apuntamos directamente a la clase fija '.descripcion'
        const descripcion = tarjeta.querySelector(".descripcion"); 

        if (contenidoFoto.classList.contains("valores-ocultar")) {
            // Segundo clic: mostramos foto, ocultamos texto
            contenidoFoto.classList.remove("valores-ocultar");
            descripcion.classList.add("texto-ocultar");
        } else {
            // Primer clic: ocultamos foto, mostramos texto
            contenidoFoto.classList.add("valores-ocultar");
            descripcion.classList.remove("texto-ocultar");
        }
    });
});



const boton_enviar= document.getElementById("btn-enviar");
const mensaje= document.getElementById("id-mensaje");


const formulario= document.getElementById("formulario-comentario");
formulario.addEventListener("submit",(evento)=>{

    evento.preventDefault(); //apra prevenir el recargue de pagina
    formulario.reset(); //para limpiar los imput

    

    setTimeout(() => {
        mensaje.classList.add("mensaje");
        console.log("no se recargo la paginaaaa y puso el msj a los segundos que puse");
    }, 2000);

    setTimeout(() => { // desaparición con setTimeout
        mensaje.classList.remove("mensaje");
    }, 6000); // 3000 milisegundos = 3 segundos


});







