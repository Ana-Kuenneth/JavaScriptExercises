//Prácticas con variables
/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substr. (developer mozilla)*/
let frase = prompt("Escribe una frase")
console.log(frase.match(/[aeiou]/gi)) //FORMA 1

for (let i = 0; i <= frase.length; i++) {
    if (frase[i] == 'a' ||
        frase[i] == 'e' ||
        frase[i] == 'i' ||
        frase[i] == 'o' ||
        frase[i] == 'u') {
        let caracter = frase.substring(i, i + 1)
        console.log(caracter)          //FORMA 2

        console.log(frase.substring(i, i + 1)) //FORMA 3
    }
}