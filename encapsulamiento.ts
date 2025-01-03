class Sorteo<T>{
  private ticket?: T;

  constructor(
    private nombre : string
  ){}

  setTicket(ticket: T) {
    this.ticket = ticket
  }

  getNumero() {
    return this.ticket
  }

  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`
  }

}

let sorteo = new Sorteo<number>('Pedro')
sorteo.setTicket(7)
console.log(sorteo.sortear());
