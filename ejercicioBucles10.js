//Ejercicios de Bucles/Loops
/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada
una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por
ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

let filas = prompt('¡Escribirimos una tabla!\n Ingresa el número de filas')
let columnas = prompt('¡Escribirimos una tabla! \n Ingresa el número de columnas')

let cantElem = filas*columnas

for(let i=1; i<=filas; i++){
    let renglon = ''
    for(let j=1; j<=columnas; j++){
        if(j==columnas){
            renglon += cantElem
        }
        else{
            renglon += cantElem + '\t';
        }
        cantElem--
    }
    console.log(renglon)
}
