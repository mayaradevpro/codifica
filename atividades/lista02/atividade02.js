const input = require('prompt-sync')()

function verificarVelocidade(velocidade) {
    if(velocidade > 80){
        const multa = ((velocidade - 80) * 5)
        console.log ('Multado. Você deve pagar: ' + multa + 'R$')
    }
}

function validarInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) <= 0){
            console.log('Digite um valor inteiro positivo: ')
        }
    } while(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) <= 0)

    return parseInt(valor)
}

let velocidadeDoCarro = validarInput("Digite a velocidade do carro: ")
verificarVelocidade(velocidadeDoCarro)