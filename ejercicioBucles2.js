//Ejercicios de Bucles/Loops 
/*2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar la
calificación en un alert según los siguientes rangos de nota:

● 0-2: Muy deficiente
● 3-4: Insuficiente
● 5-6: Suficiente
● 7: Bien
● 8-9: Notable
● 10: Sobresaliente

Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de
“número erróneo”. Si el numero ingresado no es válido mostrar el mensaje “Introduce un
número válido”.*/

let nota = prompt("Ingrese la calificación");
if (nota >= 0 && nota < 15) {
    switch (parseFloat(nota)) {
        case (0 || 1 || 2):
            alert("Muy deficiente");
            break;
        case (3 || 4):
            alert("Insuficiente");
            break;
        case (5 || 6):
            alert("Suficiente");
            break;
        case (7):
            alert("Bien");
            break;
        case (8 || 9):
            alert("Notable");
            break;
        case (10):
            alert("Sobresaliente");
            break;
        default:
            alert("Introduce un número válido");
            break;
    }
} else {
    alert("Número erróneo");
}

//FORMA 2
let nota3 = prompt("Ingrese la calificación");
if (nota3 >= 0 && nota3 < 15) {
    mensaje(nota3)
} else {
    alert("Número erróneo")
}

function mensaje(notaIngresada) {
    switch (parseFloat(notaIngresada)) {
        case (0 || 1 || 2):
            alert("Muy deficiente");
            break;
        case (3 || 4):
            alert("Insuficiente");
            break;
        case (5 || 6):
            alert("Suficiente");
            break;
        case (7):
            alert("Bien");
            break;
        case (8 || 9):
            alert("Notable");
            break;
        case (10):
            alert("Sobresaliente");
            break;
        default:
            alert("Introduce un número válido");
            break;
    }
}

//FORMA 3
let nota4 = prompt("Ingrese la calificación");
if (nota4 >= 0 && nota4 < 15) {
    mensaje(nota4)
} else {
    let nota5 = prompt("Número erróneo");
    mensaje(nota5)
}

function mensaje(notaIngresada) {
    switch (parseFloat(notaIngresada)) {
        case (0 || 1 || 2):
            alert("Muy deficiente");
            break;
        case (3 || 4):
            alert("Insuficiente");
            break;
        case (5 || 6):
            alert("Suficiente");
            break;
        case (7):
            alert("Bien");
            break;
        case (8 || 9):
            alert("Notable");
            break;
        case (10):
            alert("Sobresaliente");
            break;
        default:
            alert("Introduce un número válido");
            break;
    }
}
