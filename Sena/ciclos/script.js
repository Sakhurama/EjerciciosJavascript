/*  
    Ciclo For:
        Se usa cuando SABEMOS cuanto debe durar un ciclo.

        Estructura:
        for(inicializacion; condición; incrementacion){codigo que se va a repetir mientras la condición sea true.}

        OJO: los parametros se separan con punto y coma (;)
*/

for(i = 1; i < 5; i++){
    console.log("El ciclo for se ejecutó por " + i + " vez. Por qué " + i + " es menor que 5.")
}


/*
    Ciclo While:
    Lo usamos cuando no sabemos exactamente cuanto debe durar el ciclo.
    Se ejecutará hasta que la condición deje de ser verdadera.

    Estructura:
    while (condición) {
    Código a ejecutar mientras la condición sea verdadera
    }
*/

let condicion = 0;
while (condicion < 3) {
    console.log(condicion);
    condicion++;
}

/* 
    Ciclo do While:
    Es igual al While pero ejecutará el código 1 vez antes de validar la condición. Es decir, ejecutará el código 1 vez si o si,
    luego evalua la condición y si es true volverá a ejecutar el código, sino, solamente se habrá ejecutado el código 1 vez.

    Es útil cuando queremos que el código se ejecute al menos una vez.
    do {
        Código a ejecutar
    } while (condición);
*/

let b = 1
do {
    console.log("do while: " + b); // La condicion del while no se cumple pero como es un do while de todas formas lo ejecuta 1 vez antes de validar y cancelar el ciclo.
    b++
} while (b < 1); 

/* 
    Ciclo for of:
    El ciclo for...of se utiliza para recorrer objetos iterables (como arreglos, cadenas, mapas, conjuntos, etc.). 
    Es una manera sencilla de recorrer elementos en una lista.

    Estructura:
    for (variable of que-va-a-iterar){
        Código a ejecutar para cada elemento
    }
*/

let amigos = ["Daniel" , "Juan", "Felipe" , "Anny"];
for (const nombres of amigos){
    console.log("Uno de mis amigos es: " + nombres);
}


/* 
    Ciclo for in:
    Se usa para iterar con objetos, aunque para iterar con objetos podrías usar los metodos map, filter, reduce, for each...

    Estructura:
    for(variable in objeto){
        código a ejecutar
    }
*/

const heroe = {
    anime: "Vinland",
    nombre: "Thorfind",
    poder: "Ser pacifico"
}

for(const key in heroe){
    console.log(`${key}: ${heroe[key]}`);
}