//Ejercicios con String
/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por
teclado. */

let texto = prompt('Ingresa un texto. ¡Contaré las vocales que tiene!')
let contador=0
let indice=0
for(indice; indice<texto.length; indice++){
    if(texto[indice]=='a' || texto[indice]=='e' || texto[indice]=='i' || texto[indice]=='o' || texto[indice]=='u'
    || texto[indice]=='A' || texto[indice]=='E' || texto[indice]=='I' || texto[indice]=='O' || texto[indice]=='U'){
        contador++
        break
    }
}

if(contador!=0){
    console.log('La primera vocal del texto ingresado es la '+texto[indice].toUpperCase())
    console.log('Es la letra número '+ (indice+1) + ' del texto')
    console.log('Se encuentra en la posición '+ indice + ' del String')
    alert('La primera vocal del texto ingresado es la '+texto[indice].toUpperCase()+'\nEs la letra número '+ (indice+1) + ' del texto\nSe encuentra en la posición '+ indice + ' del String')
}
else{
    console.log('El texto ingresado no posee vocales')
    alert('El texto ingresado no posee vocales')
}