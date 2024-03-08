//Ejercicios de Bucles/Loops
/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número
deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá
indicarse la suma total de los números introducidos.*/

let sumaTotal = 0
let bandera = true

while (bandera === true) {
    let ingreso = prompt("Introduce un número:");

    if (isNaN(ingreso)  || !ingreso===null) {
        alert("El valor ingresado no corresponde. Ingrese números")
    }
    else{
        if (ingreso === null) {
            bandera = false
        }else{
            sumaTotal += parseFloat(ingreso)
        }
    }
}
alert("La suma total de los números ingresados es: " + sumaTotal);

//FORMA 2, simplificado
/* let sumaTotal = 0

while (true) {
    let ingreso = prompt("Introduce un número:");

    if (isNaN(ingreso)) {
        alert("El valor ingresado no corresponde. Ingrese números")
    }
    else{
        if (ingreso === null) {
            break;
        }else{
            sumaTotal += parseFloat(ingreso)
        }
    }
}
alert("La suma total de los números ingresados es: " + sumaTotal); */


//EXTRA (distinto, sin alert)
/*
let sumaTotal = 0;

while (true) {
    let ingreso = prompt("Introduce un número:");

    if (ingreso === null || isNaN(ingreso)){
        break;
    }

    sumaTotal = sumaTotal + parseFloat(ingreso);
}
alert("La suma total de los números ingresados es: " + sumaTotal);
*/