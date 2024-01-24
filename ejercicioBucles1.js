//Ejercicios de Bucles/Loops
/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje
que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un
mensaje.*/

let edad = prompt("Ingrese su edad")
if (edad < 18) {
    alert("Usted no puede conducir un vehículo aún")
}else{
    alert("Usted ya puede conducir un vehículo")
}