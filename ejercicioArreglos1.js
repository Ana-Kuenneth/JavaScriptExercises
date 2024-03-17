//Ejercicios con Arreglos
/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo. */

let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

console.log('Lista de meses:')
meses.forEach((mes) => {
    console.log(mes);
});


var titulo = document.createElement("h1");
titulo.textContent = "Lista de Meses";
document.body.appendChild(titulo);
var lista = document.createElement("ul");


meses.forEach((mes) => {
    var elemento = document.createElement("li");
    elemento.textContent = mes;
    lista.appendChild(elemento);
});

document.body.appendChild(lista);

//No funciona:
// document.write('<h1>Lista de Meses</h1>');
// document.write('<ul>');
// for(let i=0; i < month.length; i++){
//     document.write(`<li>${month[i]}</li>`)
// }
// document.write('</ul>');


