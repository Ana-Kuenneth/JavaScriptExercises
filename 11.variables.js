//Prácticas con variables
/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)*/
const num10 = parseInt(prompt("Escribe un número"), 10);
let bandera = 0;

if (num10 % 2 === 0) {
    console.log("El número ingresado es divisible por 2")
    bandera++
}
if (num10 % 3 === 0) {
    console.log("El número ingresado es divisible por 3")
    bandera++
}

if (num10 % 5 === 0) {
    console.log("El número ingresado es divisible por 5")
    bandera++
}

if (num10 % 7 === 0) {
    console.log("El número ingresado es divisible por 7")
    bandera++
}

if(!(num10 % 2 === 0) && !(num10 %3 === 0) && !(num10 % 5 === 0) && !(num10 % 7 === 0)){
    console.log("El número ingresado NO es divisible por 2, 3, 5 o 7")
}

//FORMA 2
const num11 = parseInt(prompt("Escribe un número"), 10);
let array = []

if (num11 % 2 === 0) {
    array.push("2")
}
if (num11 % 3 === 0) {
    array.push("3")
}

if (num11 % 5 === 0) {
    array.push("5")
}

if (num11 % 7 === 0) {
    array.push("7")
}

if(!(num11 % 2 === 0) && !(num11 %3 === 0) && !(num11 % 5 === 0) && !(num11 % 7 === 0)){
    console.log("El número ingresado NO es divisible por 2, 3, 5 o 7")
}

let longitud = array.length
if(longitud == 4){
    console.log("El número ingresado es divisible por 2, 3, 5 y 7")
}
if(longitud == 3){
    console.log("El número ingresado es divisible por "+array[0]+", "+array[1]+" y "+array[2])
}
if(longitud == 2){
    console.log("El número ingresado es divisible por "+array[0]+" y "+array[1])
}
if(longitud == 1){
    console.log("El número ingresado es divisible por "+array[0])
}