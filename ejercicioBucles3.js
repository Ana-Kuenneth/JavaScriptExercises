//Ejercicio Bucles/Loops
/*3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con
“cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let texto = "Ingresa texto. Luego verás todo lo que ingresaste!";
let mostrarTexto = "";

while (confirm(texto)) {
    let mensaje = prompt("Escribe algo:");
    mostrarTexto += mensaje + "-";
}

alert("Texto ingresado:\n" + mostrarTexto.replace(/.$/, ''));