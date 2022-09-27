var imagenes = [];
imagenes["Cauchin"] = "img/vaca.png";
imagenes["Pokacho"] = "img/pollo.png";
imagenes["Tocinauro"] = "img/cerdo.png";

class Pakiman
{
    constructor(nombre, vida, ataque)
    {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;

        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" +this.nombre+ "</strong> <br>");
        document.write("Vida: " +this.vida+ "<br>");
        document.write("Ataque: " +this.ataque+ "<br>");
        document.write("</p>");
    }
}

//var cauchin = new Pakiman("Cauchin", 100, 30);
//var pokacho = new Pakiman("Pokacho", 80, 50);
//var tocinauro = new Pakiman("Tocinauro", 120, 40);

//Otra manera de agregar pakimanes a la clase sin tener que crear variables
var coleccion = [];
coleccion.push( new Pakiman("Cauchin", 100, 30) );
coleccion.push( new Pakiman("Pokacho", 80, 50) );
coleccion.push( new Pakiman("Tocinauro", 120, 40) );

//Que clase de for es este??? un for especial
for(var pakidex of coleccion)
{
    pakidex.mostrar();
}