//chiedi parola
let parola = prompt (`Inserisci Parola:`);
console.log (`parola scelta:`, parola);

//richiama funzione
const risultato = invertiParola(parola);
console.log (risultato);

//Funzione
function invertiParola(parola) {
    
    //dividi parola
    let parolaDivisa = parola.toLowerCase().split(``);
    console.log (`parola divisa:`, parolaDivisa);
    
    //inverti parola
    parolaDivisa = parolaDivisa.reverse(``);
    console.log (`parola invertita:`, parolaDivisa);
    
    //unisci in una sola stringa contenuto dell'array
    let parolaInvertita = parolaDivisa.join(``);
    console.log (`parola invertita:`, parolaInvertita);
    
    //condizione
    if (parola == parolaInvertita) {
        console.log (`La parola inserita è Palidroma:`, parolaInvertita);
    }
    else {
        console.log (`La parola inserita non è palidroma:`, parolaInvertita);
    }
    
    //Return
    return parolaInvertita;
}