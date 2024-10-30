class Planta {
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }

    consultarPlanta(){
        console.log(`La planta es un ${this.nombre} y es de color ${this.color}`)
    }

    plantaSaludo(){
        console.log(`Hola soy el ${this.nombre} y estoy muy ${this.color}.`)
    }

    informacion(){
        console.log(`El color ${this.color} es un color común en los ${this.nombre}. Sobre todo en los que viven en la región Andina.`)
    }
}

const cactus = new Planta("Cactus", "Verde")
const trinitario = new Planta("Trinitario", "Morado")
const cactusDesertico = new Planta("Cactus Desertico", "Verde Paliducho")

cactus.consultarPlanta(),
cactus.plantaSaludo();
cactus.informacion();

trinitario.informacion();

cactusDesertico.consultarPlanta();