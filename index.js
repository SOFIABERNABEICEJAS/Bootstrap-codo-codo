// Elementos del DOM

const botonComprarTickets = document.getElementById("boton-comprar-tickets");
const seccionConferencia = document.getElementById("seccion-conferencia");
const seccionComprar = document.getElementById("seccion-comprar")
const seccionLugar = document.getElementById("seccion-lugar")
const seccionOradores =document.getElementById("seccion-oradores")
const seccionConvertite = document.getElementById("seccion-convertite")

const inputCantidad= document.getElementById("input-cantidad")
//Funcion Onclick

botonComprarTickets.onclick = () => {
	seccionConferencia.classList.add("ocultar");
	seccionLugar.classList.add("d-none");
	seccionOradores.classList.add("d-none");
	seccionConvertite.classList.add("d-none");
	seccionComprar.classList.remove("d-none")
};

// Funcion sumar 



    //seccionConvertite.innerHTML = "<em>Total a Pagar FUNCIONAAAA: $"+inputCantidad.value+"</em>";
    




console.log(inputCantidad.value)


