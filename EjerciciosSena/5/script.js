let edad = prompt("¿Cuál es tu edad?");
let ingreso = prompt("¿Cuántos son tus ingresos?");

if (edad < 17 || ingreso < 1000) {
    alert("NO debes pagar tributo")
} else {
    alert("Debes tributar.")
}

