let nombre = "Daniel"
let poema = `
Hay un bello ser
llamado ${nombre},
Él es lo más hermoso
y por eso es ${nombre}

...

Tal vez existan muchos ${nombre}es
pero ninguno es como el ${nombre}
que yo conozco.
`

console.log(poema)

// ------ PROPIEDADES -----

// let mensajeUsuario = prompt("Ingrese una frase");

function enviarTexto(){
    const frase = document.getElementById("frase");
    const mayusculas = document.getElementById("mayusculas");
    const minusculas = document.getElementById("minusculas");
    const mensajeUsuario = document.getElementById("input").value;


    frase.textContent = mensajeUsuario;
    mayusculas.textContent = mensajeUsuario.toUpperCase();
    minusculas.textContent = mensajeUsuario.toLowerCase();
}
