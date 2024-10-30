/* 
Desestructurar es guardar información del objeto o array en una variable, 
para poder usar esta información sin tener que acceder al indice de la variable por ejemplo.
*/

// DESESTRUCTURAR ARRAY //
/*
Para desestructurar un array debemos crear la variable con [] y asignarle como valor el nombre del array.
Por dentro de [] le pasaremos el nombre a la variable y esta tomará el primer objeto del array y vamos separando con comas el segundo, tercero.
*/

const frutas = ["Manzana", "Pera", "Aguacate", "Naranja"]; // Tenemos un array con frutas

const [primeraFruta, segundaFruta, , terceraFruta] = frutas // Tenemos un array de variables, a - b - c y cada una accede al index del array
let [prueba] = frutas

console.log(primeraFruta) // Como vemos, 'a' nos da la primer fruta del array
console.log(terceraFruta) // Nos da naranja que es la cuarta fruta, por que en las variables dejamos vacío un espacio , así que nos saltamos una posición.
console.log(prueba)



// ****************************
// DESESTRUCTURACIÓN DE OBJETOS
// ****************************

/*
Para desestrucutrar un objeto debemos crear la variable con {} y como valor le pasamos el nombre del objeto, 
dentro de las llaves los nombres de variables que usemos deben ser los mismos que la propiedad del objeto,
pero también podemos cambiar el nombre indicandolo.
*/

const persona = {
    nombre: "Daniel",
    apellido: "Romero",
    edad: "22",
}

// Sin desestructuración accederiamos así
const pruebaNombre = persona.nombre;
const pruebaApellido = persona.apellido;

console.log("Sin desestructurar " + pruebaNombre);
console.log("Sin desestructurar " + pruebaApellido);

// Desestructuración
const { nombre, apellido, edad, deporte = "Skate", } = persona; // Los nombre de las variables son iguales a la propiedad del objeto. Ademas añado una nueva propiedad al objeto.
console.log("Desestructurando " + nombre);
console.log("Desestructurando " + apellido);
console.log(deporte)

// Cambiando el nombre de la propiedad en la desestructuración
const { nombre: nombreUsuario, apellido: apellidoUsuario, edad: edadUsuario, } = persona;

console.log("Desestructurando y cambiado nombre " + nombreUsuario);
console.log("Desestructurando y cambiado nombre " + apellidoUsuario);
console.log("Desestructurando y cambiado nombre " + edadUsuario);



// ******************************
// DESESTRUCTURACIÓN EN FUNCIONES
// ******************************
/*
Podemos desestructuras los parametros que recibe una función para simplificar el acceso a las propiedades de un objeto.
para eso dentro de las propiedades de la función usaremos {} el resto será igual.
*/


const cactus = {
    color: "verde",
    espinas: true,
    tamaño: 12 + "cm",
}

function MostrarPlanta({color, espinas, tamaño}){
    console.log(`El cactus es ${color}, ¿Tiene espinas? ${espinas}, Y mide ${tamaño}`);
}

MostrarPlanta(cactus);
