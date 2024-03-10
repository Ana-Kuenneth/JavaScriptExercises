//Ejercicios con Funciones
/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

● La fórmula del perímetro es p = 2*(a +b) */

let lado1 = parseInt(prompt('¡Calcularemos el perímetro de un rectángulo!\n Ingresa la medida del lado más corto'))
let lado2 = parseInt(prompt('¡Calcularemos el perímetro de un rectángulo!\n Ingresa la medida del lado más largo'))
alert(perimetro(lado1, lado2))
console.log(perimetro(lado1, lado2))

function perimetro(lado1, lado2){
    let perimetro = 2*(lado1+lado2)
    return 'El perímetro del rectángulo es: '+perimetro+'\n LADO CORTO: '+lado1+'\n LADO LARGO: '+lado2
}