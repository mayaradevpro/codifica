const input = require('prompt-sync')()

function calcularDiasPerdidos(cigarrosDia, anosFumando){
    if(anosFumando === 0){
        return (cigarrosDia * 10) / 1440
    }else{
        return ( ((cigarrosDia * (365 * anosFumando)) * 10) / 1440)
    }
}


function validarInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) <= 0){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) <= 0)

    return parseInt(valor)
}

let cigarrosDia = validarInput("Quantidade de cigarros fumados por dia: ")
let anosFumando = validarInput("Quantos anos você fuma? ")

console.log("Dias perdidos: " + Math.round(calcularDiasPerdidos(cigarrosDia,anosFumando)))