let interMiami: number | null | undefined = 11;
let fcDallas: number = 11;
let messi: number = 1;
let juegoMessi: boolean = true;

let palabras: string = "Me emocioné al ver a Messi";

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
 let motivo: string = "";
 if (juegaMessi) {
  equipo1 += messi;
  motivo = "porque juega Messi";
 }

 if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`);
 if (equipo1 == equipo2) console.log("Empatan");
 if (equipo1 < equipo2) console.log("Gana FC Dallas");
}

jugar(interMiami, fcDallas, juegoMessi);
