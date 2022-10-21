// Elementos del DOM

const botonComprarTickets = document.getElementById("boton-comprar-tickets");
const seccionConferencia = document.getElementById("seccion-conferencia");
//Funcion Onclick

botonComprarTickets.onclick = () => {
	seccionConferencia.classList.add("none");
};
