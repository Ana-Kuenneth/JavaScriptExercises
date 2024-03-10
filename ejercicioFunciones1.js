//Ejercicios con Funciones
/*1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */

let numero = parseInt(prompt('Ingresa un numero entero'))
alert(paridad(numero))
console.log(paridad(numero))

function paridad(numero){
    let mod = numero & 2
    if(mod==0){
        return 'El numero ingresado es PAR'
    }
    else{
        return 'El numero ingresado es IMPAR'
    }
}