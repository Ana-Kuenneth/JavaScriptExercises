/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….*/

let renglon=''
let piramide= ''
let boton = confirm('¡Haz click en ´Aceptar´ y verás una pirámide de números!\nSi quieres salir, haz click en ´Cancelar´')
if(boton===true){
    for(let fila = 1; fila <= 30; fila++) {
        let renglon = '';
        for(let columna = 1; columna <= fila; columna++) {
            renglon += fila.toString();
        }
        console.log(renglon);
        piramide += renglon + '\n'
    }
    alert(piramide)
}

