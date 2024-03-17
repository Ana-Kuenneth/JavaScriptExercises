//Ejercicios con Arreglos
/*2- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'. */

let ciudad=''
let ciudades=[]
alert('Ingresa nombres de ciudades, ¡luego te mostraremos qué pasa!')
while(true){
    ciudad = prompt('Ingresa una ciudad')
    if (ciudad === null || ciudad === '0'){ 
        console.log(ciudades)
        break;
    } else {
        ciudades.push(ciudad);
    }
}

//Mostrar en el documento web
let div = document.createElement('div');
let p = document.createElement('p');

//1
console.log('La longitud del arreglo de ciudades es: '+ciudades.length)
p.textContent = 'La longitud del arreglo de ciudades es: ' + ciudades.length;
div.appendChild(p);

//2
console.log('El primer elemento es: '+ciudades[0]+'\n'+ 'El tercer elemento es: '+ciudades[2]+'\n'+'El ultimo elemento es: '+ciudades[ciudades.length-1])
p = document.createElement('p');
p.textContent = 'El primer elemento es: ' + ciudades[0] + '\nEl tercer elemento es: ' + ciudades[2] + '\nEl último elemento es: ' + ciudades[ciudades.length - 1];
div.appendChild(p);

//3
ciudades.push('París')
console.log('El array modificado es: '+ciudades)
//4
console.log('El segundo elemento es: '+ciudades[1])
p = document.createElement('p');
p.textContent = 'El segundo elemento es: ' + ciudades[1];
div.appendChild(p);

//5
ciudades[1]= 'Barcelona'
console.log('El array modificado es: '+ciudades)
p = document.createElement('p');
p.textContent = 'El array modificado es: ' + ciudades.join(', ');
div.appendChild(p);
document.body.appendChild(div);


//Alternativa
// let cities = [];
// let exit = true;
// do {
//   let city = prompt("Ingrese una ciudad o presione 0 para salir del programa");
//   if (city === null) {
//     exit = false;
//   } else {
//     cities.push(city);
//     console.log(city);
//   }
// } while (exit);

// console.log(cities);

// // Mostrar la longitud del arreglo.
// document.write(
//   `<p>El arreglo de ciudades tiene ${cities.length} elementos</p>`
// );
// // Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// document.write(`<ul>
// <li>Elemento 1er posicion: ${cities[0]} </li>
// <li>Elemento 3er posicion: ${cities[2]} </li>
// <li>Elemento ultima posicion: ${cities[cities.length - 1]}  </li>
// </ul>`);

// // Añade en última posición la ciudad de París.
// cities.push("Paris");
// // Escribe por pantalla el elemento que ocupa la segunda posición.
// document.write(`<ul>
// <li>Elemento 2da posicion: ${cities[1]} </li>
// </ul>`);

// // Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
// cities.splice(1, 0, "Barcelona");

// // muestro todo el arreglo
// document.write(`<h1>Arreglo de ciudades</h1>`);
// document.write(`<ul>`);
// for (let i = 0; i < cities.length; i++) {
//   document.write(`<li>Elemento: ${cities[i]} </li>`);
// }
// document.write(`</ul>`);
