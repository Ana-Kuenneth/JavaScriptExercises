//Prácticas con variables
/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*/
const num9 = parseInt(prompt("Escribe un número"), 10);
if (num9 % 2 == 0) {
    console.log("El número ingresado es divisible por 2")
}
else {
    if (num9 % 3 == 0) {
        console.log("El número ingresado es divisible por 3")
    }
    else {
        if (num9 % 5 == 0) {
            console.log("El número ingresado es divisible por 5")
        }
        else {
            if (num9 % 7 == 0) {
                console.log("El número ingresado es divisible por 7")
            }
            else {
                console.log("El número ingresado NO es divisible por 2, 3, 5 o 7")
            }
        }
    }
}