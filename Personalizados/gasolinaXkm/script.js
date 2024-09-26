/*
Escribe un programa que solicite al usuario ingresar el número de kilómetros
recorridos por su coche y el número de litros consumidos.
El script debe mostrar el consumo de combustible por kilómetro.

Un problema matemático muy simple numero de litros dividido por número de kilómetros.
*/

let km = prompt("Kilometros recorridos");
let gasolina = prompt("Galones de gasolina gastados");

function rendimiento () {
    return gasolina / km
}

const resultado = rendimiento()

alert("Tu rendimiendo es de " + resultado + " galones por kilometro.")