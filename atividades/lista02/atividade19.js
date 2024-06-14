const input = require('prompt-sync')()
let horario = []

function validarTempo(tempo){
    const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    return regex.test(tempo);
}

function validarTempoInput(msg){
    let tempo;
    do {
        tempo = input(msg).trim();

        if (!validarTempo(tempo)) {
            console.log("Horário incorreto! Digite no formato HH:MM:SS.");
        }
    } while (!validarTempo(tempo));
    return tempo
}

for( m = 0; m < 5; m++){
    horario[m] = validarTempoInput('Digite um horário(formato HH.MM.SS)')
}

console.log(horario)