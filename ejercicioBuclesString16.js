//Ejercicios con String
/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo
“hola que tal” deberá mostrar “lat euq aloh”. */

let texto = prompt('Ingresa un texto. ¡Lo escribiré al revés!')
let texto2=''
let guardar
for(let indice=texto.length-1; indice>=0; indice--){
    guardar=texto[indice]
    texto2+=guardar
}
console.log(texto2)