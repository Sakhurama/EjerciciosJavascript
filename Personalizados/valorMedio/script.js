let numero1 = parseInt(prompt("Numero 1:"))
let numero2 = parseInt(prompt("Numero 2:"))
let numero3 = parseInt(prompt("Numero 3:"))

function promedio(){
    let suma = (numero1 + numero2 + numero3);
    return suma / 3
}

console.log(promedio());