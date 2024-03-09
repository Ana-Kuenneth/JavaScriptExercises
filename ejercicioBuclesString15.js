//Ejercicios con String
/*15- Realiza un script que cuente el número de vocales que tiene un texto. */

let texto = prompt('Ingresa un texto. ¡Contaré las vocales que tiene!')
let contador=0
for(let indice=0; indice<texto.length; indice++){
    
    if(texto[indice]=='a' || texto[indice]=='e' || texto[indice]=='i' || texto[indice]=='o' || texto[indice]=='u'){
        contador++
    }
    
}
if(contador!=0){
    console.log('El texto ingresado posee '+contador+' vocales')
}
else{
    console.log('El texto ingresado no posee vocales')
}