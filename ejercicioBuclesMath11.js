//Ejercicios con Math
/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del
mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

let bandera = 0;
let nombre1 = prompt('Te diremos quién de tres personas es la mayor\n Ingrese el primer nombre:');
let nombre2 = prompt('Te diremos quién de tres personas es la mayor\n Ingrese el segundo nombre:');
let nombre3 = prompt('Te diremos quién de tres personas es la mayor\n Ingrese el tercer nombre:');

while (bandera==0) {
    let edad1 = prompt('Te diremos quién de tres personas es la mayor\n Ingrese la edad del primer nombre:');
    let edad2 = prompt('Te diremos quién de tres personas es la mayor\n Ingrese la edad del segundo nombre:');
    let edad3 = prompt('Te diremos quién de tres personas es la mayor\n Ingrese la edad del tercer nombre:');

    if (edad1 === null || edad2 ===null || edad3 ===null) {
        break;
    }
    if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
        alert('Ingrese un número válido')
        continue
    }
    else{
        let mayorEdad = Math.max(edad1, edad2, edad3);
        
        let nombreMayor = '';
        if (mayorEdad === edad1) {
            nombreMayor = nombre1;
        } else if (mayorEdad === edad2) {
            nombreMayor = nombre2;
        } else {
            nombreMayor = nombre3;
        }
        
        alert('La persona con mayor edad es: '+nombreMayor);
        bandera=1;
    }
}

