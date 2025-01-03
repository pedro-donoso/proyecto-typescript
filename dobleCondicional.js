"use strict";
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegoMessi = true;
let palabras = "Me emocioné al ver a Messi";
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = "porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log("Empatan");
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
}
jugar(interMiami, fcDallas, juegoMessi);
