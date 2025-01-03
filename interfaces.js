"use strict";
let dev = {
    nombre: 'Pedro',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomaCafe: true
};
let dev2 = {
    nombre: "Federico",
    tecnologias: ['HTML', 'Cobol'],
    tomaCafe: null
};
function enviarCv(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCv(dev2);
