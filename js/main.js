//Funcion para pedir numero sea para total a pagar o numero de personas

function pedirNumero(mensaje){
let entrada = prompt(mensaje);
let numero = parseFloat(entrada);

while (isNaN(numero) || numero <= 0){
entrada = prompt("Ingrese un numero mayor a cero");
numero = parseFloat(entrada);
}

return numero;
}

//Esta funcion calcula cuando debe pagar por persona

const montoPorPersona = (montoTotal, personas) => montoTotal / personas

//Mostrar resultado

function mostrarResultado (montoTotal, personas, porPersona) {
let mensaje = "El monto total a dividir es: " + montoTotal + "\n" +
"El numero de personas es: " + personas + "\n" +
"El monto a pagar por persona es: " + porPersona + "\n"
alert(mensaje);
console.log(mensaje);
}

//Aca llamamos a las funciones con las preguntas

let total = pedirNumero ("Cuanto es el monto total a dividir?");
let personas = pedirNumero ("Entre cuantas personas?");
let totalporPersona = montoPorPersona (total, personas);

mostrarResultado (total, personas, totalporPersona);
