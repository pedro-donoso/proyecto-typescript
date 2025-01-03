interface Programadores {
  nombre: string,
  tecnologias: string[],
  tomarCafe?: boolean | null
}

let dev: Programador = {
  nombre: 'Pedro',
  tecnologias: ['React', 'Angular', 'Svelte'],
  tomaCafe: true
}

let dev2: Programador = {
  nombre: "Federico",
  tecnologias: ['HTML', 'Cobol'],
  tomaCafe: null
}

function enviarCv(programador : Programadores) {
  console.log(`Este curriculum es de ${programador.nombre}`);
}

enviarCv(dev2)