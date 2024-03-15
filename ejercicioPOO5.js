//Ejercicios con clases
/***Generaciones**
5 - Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo. Los métodos que se debe poder utilizar son:

● mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación. Para realizar este método tener en cuenta la siguiente tabla de generaciones: (imagen)
● esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
● mostrarDatos: devuelve toda la información del objeto.
● generaDNI(): genera un número aleatorio de 8 cifras. */

class Persona{
    constructor(nombre, edad, DNI, sexo, peso, altura, anioNac){
        this.nombre = nombre
        this.edad = edad
        this.DNI = DNI
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.anioNac = anioNac
    }

    mostrarGeneracion(){
        if (this.anioNac<=2010 && this.anioNac>=1994) {
            console.log('Pertenece a la Generación Z')
            console.log('Su rango característico es: Irreverencia')
        }
        if (this.anioNac<=1993 && this.anioNac>=1981) {
            console.log('Pertenece a la Generación Y')
            console.log('Su rango característico es: Frustración')
        }
        if (this.anioNac<=1980 && this.anioNac>=1969) {
            console.log('Pertenece a la Generación X')
            console.log('Su rango característico es: Obsesión por el éxito')
        }
        if (this.anioNac<=1968 && this.anioNac>=1949) {
            console.log('Pertenece a la Generación Baby Boom')
            console.log('Su rango característico es: Ambición')
        }
        if (this.anioNac<=1948 && this.anioNac>=1930) {
            console.log('Pertenece a la Generación Silent Generation')
            console.log('Su rango característico es: Austeridad')
        }
    }

    esMayorDeEdad(){
        let anios = 2024 - this.anioNac

        if(anios>=18){
            console.log('La persona es mayor de edad')
        }
        if(anios<18){
            console.log('La persona no es mayor de edad')
        }
    }

    mostrarDatos(){
        return this
    }

    generaDNI(){
        let DNI = Math.round(Math.random()*100000000)+10000000
        console.log(`El DNI generado es: ${DNI}`)
    }
}

let persona = new Persona('Ana', 22, 101010, 'M', 10, 10, 2000)


//Alternativa
// class Persona {
//     constructor(nombre, edad, sexo, peso, altura, fechaNacimiento) {
//       this.nombre = nombre;
//       this.edad = edad;
//       this.dni = this.generaDNI();
//       this.sexo = sexo;
//       this.peso = peso;
//       this.altura = altura;
//       this.fechaNacimiento = fechaNacimiento;
//     }
  
//     mostrarDetalleGeneracion(generacion, marcoTemporal, historia, rasgo) {
//       return `<ul>
//       <li> Generación: ${generacion}</li>
//       <li> Marco temporal:  ${marcoTemporal} </li>
//       <li> Circunstancia histórica:  ${historia}</li>
//       <li> Rasgo característico: ${rasgo} </li>
//     </ul>
//     `;
//     }
//     mostrarGeneracion() {
//       if (this.fechaNacimiento >= 1930 && this.fechaNacimiento <= 1948) {
//         return this.mostrarDetalleGeneracion(
//           "Silent Generation",
//           "1930-1948",
//           "Conflictos bélicos",
//           "Austeridad 😐"
//         );
//       } else if (this.fechaNacimiento >= 1949 && this.fechaNacimiento <= 1968) {
//         return this.mostrarDetalleGeneracion(
//           "baby Boom",
//           "1949-1968",
//           "Paz y explosión demográfica",
//           "Ambicion 🤑"
//         );
//       } else if (this.fechaNacimiento >= 1969 && this.fechaNacimiento < 1980) {
//         return this.mostrarDetalleGeneracion(
//           "Generación X",
//           "1969 - 1980",
//           "Crisis del 73 y transición española",
//           "Obsesión por el exito 😎"
//         );
//       } else if (this.fechaNacimiento >= 1981 && this.fechaNacimiento < 1993) {
//         return this.mostrarDetalleGeneracion(
//           "Generación Y (Millenials)",
//           "1981 - 1993",
//           "Inicio de la digitalización",
//           "Frustración 😕"
//         );
//       } else if (this.fechaNacimiento >= 1994 && this.fechaNacimiento < 2010) {
//         return this.mostrarDetalleGeneracion(
//           "Generación Z (Centennials)",
//           "1994 - 2010",
//           "Expansión masiva de internet",
//           "Irreverencia 😋"
//         );
//       } else if (this.fechaNacimiento >= 2011) {
//         return this.mostrarDetalleGeneracion(
//           "Generación Alfa",
//           "2011 - Actualidad",
//           "Nativos Digitales al 100%",
//           "Son predilectos 😜"
//         );
//       } else {
//         return '<p>No se posee datos para la fecha seleccionada</p>';
//       }
//     }
  
//     esMayorDeEdad() {
//       if (this.edad >= 21) {
//         return true;
//       } else {
//         return false;
//       }
//     }
  
//     mostrarDatos() {
//       return `<ul>
//         <li>Persona</li>
//         <li>Nombre: ${this.nombre}</li>
//         <li>Edad: ${this.edad}</li>
//         <li>DNI: ${this.dni}</li>
//         <li>Genero: ${this.sexo}</li>
//         <li>Peso: ${this.peso} Kg</li>
//         <li>Altura: ${this.altura} Cm</li>
//         <li>Año de nacimiento: ${this.fechaNacimiento}</li>
//         </ul>
//         `;
//     }
  
//     generaDNI() {
//       return parseInt(Math.random() * 99999999);
//     }
//   }
  
//   let nombre = prompt("Ingrese un nombre");
//   let edad = prompt("Ingrese una edad");
//   let genero = prompt("Ingrese un genero : H(hombre), M(Mujer)");
//   let peso = prompt("Ingrese un peso en kg");
//   let altura = prompt("Ingrese una altura cm");
//   let anioNac = prompt("Ingrese el año de nacimiento");
//   let personaNueva = new Persona(nombre, edad, genero, peso, altura, anioNac);
  
//   document.write(personaNueva.mostrarDatos());
//   document.write(
//     `<p>La persona es mayor de edad: ${
//       personaNueva.esMayorDeEdad ? "Si" : "No"
//     }</p>`
//   );
//   document.write(personaNueva.mostrarGeneracion());