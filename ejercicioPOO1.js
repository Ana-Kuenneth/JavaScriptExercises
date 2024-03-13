//Ejercicios con objetos
/*1 - Crea un objeto llamado auto que tenga algunas características como el color, marca,
modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender
y apagar el auto. */

let auto = {
    color: 'rojo',
    marca: 'Volkswagen',
    modelo: 'Gol Trend',
    encendido: true
}

function cambiar (auto){
    if(auto.encendido === true){
        auto.encendido = false
    }else{
        auto.encendido = true
    }
}
