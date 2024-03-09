//Ejercicios con String
/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre
cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir
“h-o-l-a- -q-u-e- -t-a-l”. */

let texto = prompt('Ingresa un texto. ¡Te lo mostraré distinto!')
let renglon=''
for(let indice=0; indice<texto.length; indice++){
    
    if(indice==texto.length-1){
        renglon += texto[indice]
    }
    else{
        renglon += texto[indice] + '-';
    }
}
console.log(renglon)