

function crearPoema(){
    const nombre = document.getElementById("nombre").value;
    const lugarDelPoema = document.getElementById("poema")
    let poema = `
    Hay un bello ser
    llamado ${nombre},
    Él es lo más hermoso
    y por eso es ${nombre}

    ...

    Tal vez existan muchos ${nombre}es
    pero ninguno es como el ${nombre}
    que yo conozco.
    `;

// Reemplaza los saltos de línea (\n) con <br> y asigna el HTML resultante
    lugarDelPoema.innerHTML = poema.replace(/\n/g, '<br>');
}


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
