
function MostrarPersonas( principal, ...secundarias){
    console.log(`La persona principal es: ${principal}`)
    console.log(`Las personas secundarias son:`)

    secundarias.forEach((nombre, index) => {
        console.log(`${index + 1}. ${nombre}`)
    })
}

MostrarPersonas("Daniel", "Amparo", "Jaime", "Mayra", "Anny", "Dayana", "Juan")

/* Si no usara el parametro REST "...secundarias" entonces tendría 
que pasarle cada parametro a la función. Es decir: 
function MostrarPersonas(principal, secundaria1, secundaria2, secundaria3, secundaria4)
*/