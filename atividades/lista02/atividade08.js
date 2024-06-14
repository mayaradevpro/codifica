const input = require('prompt-sync')()

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

function calcularDinheiro(pontos){
    return pontos * 0.05;
}

function calcularPontos(horas){
    if(horas <= 10){
       return horas * 2
    }else if(horas <= 20){
        return horas * 5
    }else {
        return horas * 10
    }
}
let horasDeAtividade = validarInput("Quantidade de atividade física feita por mêS: ")
let pontos = calcularPontos(horasDeAtividade)
let dinheiro = calcularDinheiro(pontos)
console.log('Total de pontos: ' + pontos)
console.log('Dinheiro ganho: ' + dinheiro)