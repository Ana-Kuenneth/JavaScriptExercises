//Ejercicios con clases
/***Agenda telefónica**
7 - Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicándole nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:
    ● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
    ● existeContacto(Conctacto): indica si el contacto pasado existe o no.
    ● listarContactos(): Lista toda la agenda
    ● buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
    ● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
    ● agendaLlena(): indica si la agenda está llena.
    ● huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones por consola para probar todas estas funcionalidades. */

class Contacto{
    constructor(nombre, telefono){
        this.nombre = nombre
        this.telefono = telefono
    }
}

class Agenda{
    constructor(){
        this.agenda = []
    }

    aniadirContacto(contacto){
        if(this.agendaLlena()){
            console.log('No se pudo añadir el contacto')
        }else{
            if (this.existeContacto(contacto)) {
                console.log('No se pudo añadir el contacto')
            } else {
                this.agenda.push(contacto)
                console.log('Contacto agregado')
            }
        }
    }

    existeContacto(contacto){
        agenda.forEach(agendado => {
            if((agendado.nombre())===(contacto.nombre())){
                console.log('El contacto ya existe en la agenda')
                return true
            }
        });
    }

    listarContactos(){
        if(this.agenda.length()>=1){
            console.log('CONTACTOS AGENDADOS')
            this.agenda.forEach((contacto)=>{
                console.log('Nombre: '+contacto.nombre+'\nTeléfono: '+contacto.numero)
            })
        }else{
            console.log('La agenda no tiene contactos aún')
        }

    }

    buscarContacto(nombre){
        this.agenda.forEach((contacto)=>{
            if(contacto.nombre === nombre){
                console.log('Contacto encontrado')
                console.log(contacto)
                return contacto
            }
        })
    }

    eliminarContacto(contacto){
        this.agenda.forEach((agendado)=>{
            if(agendado === contacto){
                var index = this.agenda.indexOf(agendado);
                array.splice(index, 1);
                console.log('Contacto eliminado')
                return this.agenda
            }
        })
    }

    agendaLlena(){
        if(this.agenda.length()===10){
            console.log('La agenda telefónica está llena')
            return true
        }
    }

    huecosLibres(){
        let tamaño = this.agenda.length()
        let restante = 10-tamaño
        if(restante===0){
            console.log('No puede añadir más contactos, la agenda está llena')
        }else{
            console.log(`Puede añadir ${restante} contactos más`)
            return restante
        }
    }
}

let agendaPrueba = new Agenda(10);
  
do{
    let opcion = parseInt(prompt(
        `Seleccione una opcion: 
        1- agregar contacto,
        2- consulta si existe un contacto,
        3- listar contactos, 
        4- buscar contacto, 
        5- eliminar contacto
        6- consulta si la agenda esta llena
        7- consultar si la agenda tiene huecos libres
        8- cambiar el tamaño de la agenda`
    ));
  
    switch (opcion) {
      case 1:
        agendaPrueba.huecosLibres();
  
        let nombre = prompt("CREAR CONTACTO | Ingrese el nombre");
        let telefono = prompt("CREAR CONTACTO | Ingrese su teléfono");
        let contacto = new Contacto(nombre, telefono);
  
        agendaPrueba.agregarContacto(contacto);
        break;

      case 2:
        let nombre2 = prompt("EXISTE CONTACTO | Ingrese el nombre del contacto");
        let contacto2 = new Contacto(nombre2, 0);
        agendaPrueba.existeContacto(contacto2);
        break;

      case 3:
        agendaPrueba.listarContactos();
        break;

      case 4:
        let contactoBuscado = prompt("BUSCAR CONTACTO | Ingrese el nombre del contacto que busca");
        agendaPrueba.buscarContacto(contactoBuscado);
        break;

      case 5:
        let contactoParaEliminar = prompt("ELIMINAR CONTACTO | Ingrese el nombre del contacto a eliminar");
        agendaPrueba.eliminarContacto(contactoParaEliminar);
        break;

      case 6:
        agendaPrueba.agendaLlena();
        break;

      case 7:
        agendaPrueba.huecosLibres();
        break;

      default:
        document.write("Ingrese una opción válida");
    }
  } while (confirm("¿Quiere realizar otra operación?"));

//Alternativa 
// class Contacto {
//     constructor(nombre, telefono) {
//       this.nombre = nombre;
//       this.telefono = telefono;
//     }
  
//     mostrarDatos() {
//       document.write(`Nombre: ${this.nombre} Telefono: ${this.telefono}`);
//     }
  
//     get obtenerNombre() {
//       return this.nombre;
//     }
//     get obtenerTelefono() {
//       return this.telefono;
//     }
  
//     set modificarNombre(nuevoNombre) {
//       this.nombre = nuevoNombre;
//     }
//     set modificarTelefono(nuevotelefono) {
//       this.telefono = nuevotelefono;
//     }
//   }
  
//   class Agenda {
//     constructor(tamanio) {
//       this.contactos = [];
//       this.tamanio = tamanio;
//     }
  
//     set modificarTamanio(cantidad) {
//       this.tamanio = cantidad;
//     }
  
//     agregarContacto(contacto) {
//       // verificar si el contacto existe
//       if (this.existeContacto(contacto)) {
//         console.log("El contacto ya existe no se puede agregar");
//       } else {
//         // verificar si la agenda esta llena
//         if (!this.agendaLlena()) {
//           this.contactos.push(contacto);
//           console.log("contacto añadido");
//           this.listarContactos();
//         }
//       }
//     }
  
//     existeContacto(contacto) {
//       const exist = this.contactos.find(
//         (contactoExistente) => contactoExistente.nombre === contacto.nombre
//       );
//         if (exist) {
//         console.log("El contacto existe");
//         return true;
//       } else {
//         console.log("El contacto no existe");
//         return false;
//       }
//     }
  
//     listarContactos() {
//       for (let i = 0; i < this.contactos.length; i++) {
//         console.log(
//           `Contacto: ${this.contactos[i].obtenerNombre} - Telefono: ${this.contactos[i].obtenerTelefono}`
//         );
//       }
//     }
  
//     buscarContacto(contacto) {
//       const encontrado = this.contactos.find(
//         (existentes) => existentes.nombre === contacto
//       );
//       if (encontrado) {
//         console.log(`contacto encontrado, Telefono: ${contacto.telefono}`);
//       } else {
//         console.log("Este contacto no existe");
//       }
//     }
  
//     eliminarContacto(contacto) {
//       let contactosFiltrados = this.contactos.filter(
//         (contactoExistente) => contactoExistente.nombre != contacto
//       );
//       this.contactos = contactosFiltrados;
//       console.log("contactos almacenados en la agenda" + this.contactos);
//     }
  
//     agendaLlena() {
//       if (this.contactos.length === this.tamanio) {
//         console.log("agenda llena");
//         return true;
//       } else {
//         console.log("queda espacio");
//         return false;
//       }
//     }
  
//     huecosLibres() {
//       let cantidadEspacios = this.tamanio - this.contactos.length;
//       if (cantidadEspacios > 0)
//         console.log("Cantidad de espacio disponible " + cantidadEspacios);
//       else console.log("La agenda no tiene espacios libres");
//     }
//   }
  
//   let agendaPrueba = new Agenda(10);
  
//   do {
//     let opcion = parseInt(
//       prompt(
//         `Seleccione una opcion: 
//         1- agregar contacto,
//         2- consulta si existe un contacto,
//         3- listar contactos, 
//         4- buscar contacto, 
//         5- eliminar contacto
//         6- consulta si la agenda esta llena
//         7- consultar si la agenda tiene huecos libres
//         8- cambiar el tamaño de la agenda`
//       )
//     );
  
//     switch (opcion) {
//       case 1:
//         agendaPrueba.huecosLibres();
  
//         let nombre = prompt("ingrese un nombre");
//         let telefono = prompt("ingrese un telefono");
//         let nuevoContacto = new Contacto(nombre, telefono);
  
//         agendaPrueba.agregarContacto(nuevoContacto);
//         break;
//       case 2:
//         let nombreBuscado = prompt("ingrese un nombre");
//         let contacto = new Contacto(nombreBuscado, 0);
//         agendaPrueba.existeContacto(contacto);
  
//       case 3:
//         // listar contactos
//         agendaPrueba.listarContactos();
//         break;
//       case 4:
//         // buscar contacto
//         let contactoBuscado = prompt("ingrese el nombre que busca");
//         agendaPrueba.buscarContacto(contactoBuscado);
//         break;
//       case 5:
//         // Eliminar contacto
//         let contactoParaEliminar = prompt("ingrese el nombre que desea eliminar");
//         agendaPrueba.eliminarContacto(contactoParaEliminar);
//         break;
//       case 6:
//         // Agenda llena
//         agendaPrueba.agendaLlena();
//         break;
//       case 7:
//         // huecos llena
//         agendaPrueba.huecosLibres();
//         break;
//       case 8:
//         // cambiar tamaño
//         let nuevoTamanio = parseInt(
//           prompt("ingrese la cantidad de contactos que desea tener")
//         );
//         agendaPrueba.modificarTamanio = nuevoTamanio;
//         console.log(
//           "Tamaño de agenda modificado, cantidad actual: " + nuevoTamanio
//         );
//         break;
//       default:
//         document.write("Ingreso una opcion invalida");
//     }
//   } while (confirm("quiere realizar otra operacion?"));