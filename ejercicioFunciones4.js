//Ejercicios con Funciones
/*4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

let numero = parseInt(prompt('¡Calcularemos la tabla de multiplicar de un número!\n Ingresa el numero que desees'))
console.log(tabla(numero))

function tabla(numero){
    console.log('TABLA DEL '+numero)
    for(let i=1; i<=10; i++){
        console.log(i+' * '+numero+' = '+i*numero)
    }
}