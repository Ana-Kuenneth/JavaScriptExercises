/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique
el usuario (no mayor de 50)

1
12
123
1234
12345
123456
…… */

while(true){
    let piramide= ''
    let numero = prompt('¡Ingresa un número, haz click en ´Aceptar´ y verás una pirámide de números invertida!\nSi quieres salir, haz click en ´Cancelar´')
    if(numero===null) {
        break;
    }
    if(isNaN(numero)){
        alert('Ingrese un número válido')
        continue
    }
    else{
        if(numero<50 || numero>0){
            for(let fila = 1; fila <= numero; fila++) {
                let renglon = '';
                for(let columna = 1; columna <= fila; columna++) {
                    renglon += columna.toString();
                }
                piramide += renglon + '\n';
            }
            alert(piramide)
    
        }
        else {
            alert('Ingrese un numero menor o igual a 50 y mayor a 0')
            continue
        }
    }
}
