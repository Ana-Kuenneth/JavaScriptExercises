//Ejercicios con clases
/***Rectángulos**
3 - Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

class Rectángulo{
    constructor(alto, ancho){
        this.alto = alto
        this.ancho = ancho
    }

    get verAlto(){
        return this.alto
    }

    get verAncho(){
        return this.ancho
    }
    set cambiarAlto(alto2){
        this.alto = alto2
    }

    set cambiarAncho(ancho2){
        this.ancho = ancho2
    }


    perimetro(){
        return 2*(this.ancho+this.alto)
    }

    area(){
        return this.ancho*this.alto
    }

}

let rect1= new Rectángulo(2,3)
let rect2= new Rectángulo(5,6)
let rect3= new Rectángulo(1,2)

rect1.verAlto()
rect1.verAncho()
rect2.cambiarAlto(2)
rect2.cambiarAncho(8)
rect3.perimetro()
rect3.area()


//Alternativa 
// class Rectangulo{
//     constructor(lado1, lado2){
//         this.alto=lado1;
//         this.ancho=lado2;
//     }

//     set cambiarAltura(nuevaAltura){
//         this.alto=nuevaAltura;
//     }
//     set CambiarAncho(nuevoAncho){
//         this.ancho=nuevoAncho;
//     }

//     get altoRectangulo(){
//         return this.alto;
//     }

//     get anchoRectangulo(){
//         return this.ancho;
//     }

//     get area(){
//         return this.alto*this.ancho;
//     }

//     get perimetro(){
//         return 2*(this.alto+this.ancho);
//     }

//     detalle(){
//         return `<p>El rectangulo tiene una altura de ${this.altoRectangulo} cm y un ancho de ${this.anchoRectangulo} cm </P>`;
//     }


// }


// document.write(`<h2>Primer rectangulo</h2>`);

// let rectangulo1= new Rectangulo( 10, 9);
// document.write(rectangulo1.detalle());
// document.write(`El area del rectangulo es ${rectangulo1.area} y su perimetro es ${rectangulo1.perimetro}`);

// document.write('<h3>Modificar el rectangulo</h3>');

// rectangulo1.cambiarAltura=15;
// rectangulo1.CambiarAncho=28;

// document.write(rectangulo1.detalle());
// document.write(`El area del rectangulo es ${rectangulo1.area} y su perimetro es ${rectangulo1.perimetro}`);

// document.write(`<h2>Primer rectangulo</h2>`);

// let rectangulo2= new Rectangulo( 5, 15);
// document.write(rectangulo2.detalle());
// document.write(`El area del rectangulo es ${rectangulo2.area} y su perimetro es ${rectangulo2.perimetro}`);

// document.write('<h3>Modificar el rectangulo</h3>');

// rectangulo2.cambiarAltura=23;
// rectangulo2.CambiarAncho=45;

// document.write(rectangulo2.detalle());
// document.write(`El area del rectangulo es ${rectangulo2.area} y su perimetro es ${rectangulo2.perimetro}`);