//scegli paro o disparo
let choose = prompt(`scegli pari o dispari`);
console.log (`pari o dispari:`,choose);

const autorizzati = ["pari", "dispari", "paro", "disparo"];
console.log (autorizzati);
if (choose == autorizzati[0]) {
    console.log (`autorizzato:`, choose);
}
else if (choose == autorizzati[1]) {
    console.log (`autorizzato:`, choose);
}
else if (choose == autorizzati[2]) {
    console.log (`autorizzato:`, choose);
}
else if (choose == autorizzati[3]) {
    console.log (`autorizzato:`, choose);
}
else {
    console.log (`non autorizzato:`, choose);
    alert (`Inserisci solo: pari o dispari`);
}

//chiedi numero da 1 a 5
let num = prompt(`Inserisci numero da 1 a 5:`);
console.log (`num scelto:`, num);

if (num > 5) {
    console.log (`num non valido:`, num);
    alert (`Numero non valido. Inserisci numero da 1 a 5.`);
}
else if (num < 1) {
    console.log (`num non valido:`, num);
    alert (`Numero non valido. Inserisci numero da 1 a 5.`);
}

//genera numRandom da 1 a 5 usando funzione
function numRandom (random) {
    //genera num. random da 1 a 5
    let casual = Math.floor(Math.random() * 5) + 1;
    console.log (`num. casuale generato:`, casual);

    //return
    return casual;
}