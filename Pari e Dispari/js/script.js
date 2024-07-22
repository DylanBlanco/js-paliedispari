//scegli paro o disparo
let choose = prompt(`scegli pari o dispari`);
console.log (`pari o dispari:`,choose, typeof choose);
//valori autorizzati
const autorizzati = ["pari", "dispari", "paro", "disparo"];
console.log (autorizzati, typeof autorizzati);
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
console.log (`num scelto:`, num, typeof num);
//valori autorizzati
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
    let casual = Math.floor(Math.random() * 5 )+ 1;
    console.log (`num. casuale generato:`, casual);
    //return
    return casual;
}

//somma dei num e numRandom / pari o dispari?
function somma (num, numRandom) {
    //somma valori
    let somma = num + numRandom;
    if(somma % 2 == 0) {
        console.log (`Il risultato è pari:`, somma);
        return true;
    }
    else {
        console.log (`Il risultato è dispari:`, somma);
        return false;
    }
}

// Determina il vincitore
if (choose == "pari" && somma) {
    console.log (`Il risultato è pari. Hai Vinto`);
    alert (`HAI VINTO`);
}
else if (choose == "dispari" && !somma) {
    console.log (`Il risultato è dispari. Hai Vinto`);
    alert (`HAI VINTO`);
}
else {
    console.log (`Hai Perso`);
    alert (`HAI PERSO`);
}