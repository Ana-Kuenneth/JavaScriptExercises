//Ejercicios con Funciones
/*2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

let texto = prompt('Ingresa una cadena de texto')
alert(composicion(texto))
console.log(composicion(texto))

function composicion(texto){
    let contadorMay=0
    let contadorMin=0
    for(let i=0; i<texto.length; i++){
        let letra = texto[i]

        if(letra === letra.toUpperCase()){
            contadorMay=1
        }
        else{
            contadorMin=1
        }
    }

    if(contadorMin==1 && contadorMay==1){
        return 'El texto ingresado contiene letras en MAYUSCÚLAS y MINÚSCULAS'
    }
    if(contadorMin==0 && contadorMay==1){
        return 'El texto ingresado contiene solo letras en MAYÚSCULAS'
    }
    if(contadorMin==1 && contadorMay==0){
        return 'El texto ingresado contiene solo letras en MINÚSCULAS'
    }
    
}