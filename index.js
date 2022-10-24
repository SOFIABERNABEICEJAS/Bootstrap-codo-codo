// Elementos del DOM

const botonComprarTickets = document.getElementById("boton-comprar-tickets");
const seccionConferencia = document.getElementById("seccion-conferencia");
const seccionOradores =document.getElementById("section-oradores")
const seccionConvertite = document.getElementById("seccion-convertite")
const seccionLugar = document.getElementById("seccion-lugar")
const seccionComprar = document.getElementById("seccion-comprar")

const inputCantidad = document.getElementById("input-cantidad")
const formularioComprarTickets = document.getElementById("formulario-comprar-tickets")
const inputCategoria = document.getElementById("input-categoria")
const inputResultado = document.getElementById("input-resultado")


//Funcion Onclick mostrar seccion compra

botonComprarTickets.onclick = () => {
seccionComprar.classList.remove("d-none");
seccionConferencia.classList.add("d-none");
seccionOradores.classList.add("d-none");
seccionConvertite.classList.add("d-none");
seccionLugar.classList.add("d-none");

};

// Funcion Onsubmit calcular tickets 
const ticket = 200

formularioComprarTickets.onsubmit=(e)=>{
	e.preventDefault()

 if(inputCategoria.value == "trainee") {
    inputResultado.value = inputCantidad.value * (ticket - (ticket * 0.5));
    }
 if(inputCategoria.value == "junior") {
    inputResultado.value = inputCantidad.value * (ticket - (ticket * 0.15));
    }

  if(inputCategoria.value == "estudiante") {
     inputResultado.value = inputCantidad.value * (ticket - (ticket * 0.8));
   }

    inputResultado.innerHTML = `Total a Pagar $ ${inputResultado.value}`
		  
		 // NO APARECE TOTAL A PAGAR Y NO SE POR QUÉ 

 
}

 
 


