//Ejercicios de Bucles/Loops
/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que
indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

let piramide= ''
let numero = prompt('¡Ingresa un número, haz click en ´Aceptar´ y verás una pirámide de números invertida!\nSi quieres salir, haz click en ´Cancelar´')
while(true){
    if(numero>50 || numero<0){
        for(let columna = numero; columna >= 1; columna--) {
            let renglon = '';
            for(let fila = 1; fila <= columna; fila++) {
                renglon += columna.toString();
            }
            piramide += renglon + '\n';
        }
        alert(piramide)

    }
}
