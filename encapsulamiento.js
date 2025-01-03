"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getNumero() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Pedro');
sorteo.setTicket(7);
console.log(sorteo.sortear());
