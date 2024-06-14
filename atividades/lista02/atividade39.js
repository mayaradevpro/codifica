const input = require('prompt-sync')()

function validarVectorInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if (isNaN(valor)) {
            console.log("Escreva um número válido!");
            continue;
        }
    } while(isNaN(valor))

    return Number(valor)
}

function lerVector(){
    let vector= []
    for(i = 0; i < 100; i++){
        let numero = validarVectorInput(`Escreva o número para o endereço da memória ${i}:`)  
        vector.push(numero)
    }
    return vector
}

let vector = lerVector()
let resumoVector = vector.filter(n => n > 0)
console.log(resumoVector)