
// FUNCION DECLARATIVA

function sumar (a, b){
    return a + b
}

console.log(sumar(4,6))


// FUNCIONES ANONIMAS

const sumaArrowFunction = (c, d) => {
    return c + d;
}

const sumaAnonima = function (e, f) {
    return e + f
}

console.log(sumaArrowFunction(1, 2))
console.log(sumaAnonima(5, 10))