const input = require('prompt-sync')()

function passagemValor(dist){
    if(dist <= 200){
        return dist * 0.5
    }else{
        return dist * 0.45
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

let distancia = validarInput('Distância percorrida: ')
console.log('O valor da passagem é: ' + passagemValor(distancia))