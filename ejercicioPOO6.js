//Ejercicios con clases
/***Libros**
6 - Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
    “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

class Libro{
    constructor(isbn, titulo, autor, numPag){
        this.ISBN = isbn
        this.titulo = titulo
        this.autor = autor
        this.numPag = numPag
    }

    getISBN(){
        return this.ISBN
    }
    getTitulo(){
        return this.titulo
    }
    getAutor(){
        return this.autor
    }
    getNumPag(){
        return this.numPag
    }

    setISBN(isbn){
        this.ISBN = isbn
    }
    setAutor(autor){
        this.autor = autor
    }
    setTitulo(titulo){
        this.titulo = titulo
    }
    setNumPag(num){
        this.numPag = num
    }

    mostrarLibro(){
        console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numPag}`)
    }
}

let libro1 = new Libro(111,'Rayuela','Kafka',320)
let libro2 = new Libro(112,'Frankestein','MaryShelly',450)

function mayorPag(){
    if((libro1.getNumPag()) > (libro2.getNumPag())){
        console.log(`El libro ${libro1.getTitulo()} tiene más páginas que el libro ${libro2.getTitulo()}`)
    }else{
        console.log(`El libro ${libro2.getTitulo()} tiene más páginas que el libro ${libro1.getTitulo()}`)
    }
}


//Alternativa 
// class Libro {
//     constructor(isbn, titulo, autor, cantPaginas) {
//       this.isbn = isbn;
//       this.titulo = titulo;
//       this.autor = autor;
//       this.cantPaginas = cantPaginas;
//     }
  
//     set cambiarTitulo(tituloNuevo) {
//       this.titulo = tituloNuevo;
//     }
  
//     set cambiarIsbn(isbnNuevo) {
//       this.isbn = isbnNuevo;
//     }
  
//     set cambiarAutor(autorNuevo) {
//       this.autor = autorNuevo;
//     }
  
//     set cambiarCantPaginas(cantPaginasNuevo) {
//       this.cantPaginas = cantPaginasNuevo;
//     }
  
//     get mostrarIsbn() {
//       return this.isbn;
//     }
  
//     get mostrarTitulo() {
//       return this.titulo;
//     }
  
//     get mostrarAutor() {
//       return this.autor;
//     }
  
//     get mostrarCantPaginas() {
//       return parseInt(this.cantPaginas);
//     }
  
//     mostrarLibro() {
//       return `<p>El libro ${this.mostrarTitulo}, con ISBN N° ${this.mostrarIsbn}, creado por el autor ${this.mostrarAutor}, tiene ${this.mostrarCantPaginas} paginas.</p>`;
//     }
//   }
  
//   function compararLibros(libro1, libro2) {
//     if (libro1.mostrarCantPaginas > libro2.mostrarCantPaginas) {
//       return `<p>El libro ${libro1.mostrarTitulo} tiene mas paginas</p>`;
//     } else if (libro1.mostrarCantPaginas == libro2.mostrarCantPaginas) {
//       return `<p>El libro ${libro1.mostrarTitulo} y el libro ${libro2.mostrarTitulo}, tienen la misma cantidad de paginas</p>`;
//     } else {
//       return `<p>El libro ${libro2.mostrarTitulo} tiene mas paginas</p>`;
//     }
//   }
  
//   let theLordOfTheRings = new Libro(9788445003022,"El señor de los anillos","J.R.R. Tolkien",1392
//   );
//   let HarryPotter = new Libro(108478885196, "Harry Potter y el Prisionero de Azkaban", "Rowling, J.K.", 360);
  
//   document.write(theLordOfTheRings.mostrarLibro());
//   document.write(HarryPotter.mostrarLibro());
//   document.write(compararLibros(theLordOfTheRings, HarryPotter));