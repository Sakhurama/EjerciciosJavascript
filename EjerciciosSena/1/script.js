let edad = parseInt(prompt("Cual es tu edad"));

function Legal(){
    if (isNaN(edad) || edad < 0){
        alert("Ingrese un número válido pedazo de monda.")
    } else if (edad < 18) {
        alert("Si no ere mayol te me va pa tu casa, a vel pocoyo.")
    } else if (edad > 100) {
        alert("Acá no tratamos con cadaveres.")
    } else {
        alert("Unas polas o que!")
    }
}

Legal();