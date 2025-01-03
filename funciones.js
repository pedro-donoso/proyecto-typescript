"use strict";
class Pelicula {
    proyectarEnCine() {
        console.log(`La película ${this.nombre} está siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        (this.nombre = nombre),
            (this.protagonistas = protagonistas),
            (this.actores = actores);
    }
}
const pelicula = new Pelicula("Barbie", ["Barbie", "Ken"], ["Margot Robbie", "Ryan Gosling"]);
const pelicula2 = new Pelicula("Oppenheimer", ["Oppenheimer", "Strauss"], ["Cillian Murphy", "Robert Downey Jr"]);
pelicula2.proyectarEnCine();
console.log(pelicula2);
