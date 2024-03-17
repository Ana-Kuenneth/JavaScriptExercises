//Ejercicios con POO Adicionales
/*Personas
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse". */

class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }

    saludar(nombre){
        console.log(`Buenas tardes ${nombre}. Soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`)
    }

    despedirse(nombre){
        console.log(`Hasta luego ${nombre}, un gusto conocerlo`)
    }
}

let persona1 = new Persona('Ana', 22, 'ingeniera en computación')
let persona2 = new Persona('María', 22, 'ingeniera en computación')

persona1.saludar(persona2.nombre)
persona2.saludar(persona1.nombre)
persona1.despedirse(persona2.nombre)
persona2.despedirse(persona1.nombre)