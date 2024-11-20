const contraseña = "romero01"
const contraseñaIngresada = prompt("Ingrese la contraseña")

function ValidarContraseña(){
    if ( contraseñaIngresada === contraseña) {
        alert("Acceso exitoso, Bienvenido.")
    } else {
        alert("Contraseña incorrecta. ACCESO DENEGADO.");
        location.reload();
    }
}

ValidarContraseña()