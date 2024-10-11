
let num = parseInt(prompt("Diga un numero del 1 al 7"))

function obtenerDia(num){
    const diasSemana = [
        "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"
    ]

    if(num >= 1 && num<=7){
        return alert(diasSemana[num - 1])
    } else {
        return alert("Número invalido")
    }
}

obtenerDia(num);
