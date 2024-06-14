const input = require('prompt-sync')()

function triangulo(ladoA,ladoB,ladoC){
    if( (ladoA < (ladoB + ladoC)) && (ladoB < (ladoA + ladoC)) && (ladoC < (ladoA + ladoB)) ){
        return 'É possível formar um triângulo'
    }else {
        return 'Não é possível formar um triângulo'
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

let reta_segmentoA = validarInput("Digite o tamanho do primeiro segmento de reta: ")
let reta_segmentoB = validarInput("Digite o tamanho do segundo segmento de reta: ")
let reta_segmentoC = validarInput("Digite o tamanho do terceiro segmento de reta: ")

console.log(triangulo(reta_segmentoA, reta_segmentoB, reta_segmentoC))