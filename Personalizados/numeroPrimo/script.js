let numero = parseInt(prompt("Di un número"))

function esPrimo(){
    if (numero < 2){
        alert("El número " + numero + " NO es primo");
        return
    }

    for (i = 2; i < numero; i++){
        if(numero % i === 0){
            alert("El número " + numero + " NO es primo.")
            return
        }
    }

    alert("El número " + numero + " es primo.")
}

esPrimo();