type Programador = {
  nombre: string,
  tecnologias: string[],
  tomaCafe?: boolean | null
}

let programador: Programador ={
  nombre: 'Pedro Donoso',
  tecnologias: ['React', 'PHP', 'Java'],
  tomaCafe: true
}

let programador2: Programador = {
  nombre: "Federico",
  tecnologias: ['HTML', 'Cobol'],
  tomaCafe: null
}
