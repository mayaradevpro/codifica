const input = require('prompt-sync')()

function validarInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(valor === "" || !Number.isInteger(Number(valor)) || isNaN(valor)){
            console.log('Por favor, digite um valor inteiro')
        }
    } while(valor ==="" || !Number.isInteger(Number(valor)) || isNaN(valor))

    return parseInt(valor)
}

let paresValor = []
let chanceValor = []

for(i = 0; i < 30; i++){

    if(paresValor.length === 5 ){
        console.log(paresValor)
        paresValor = []
    }

    if(chanceValor.length === 5 ){
        console.log(chanceValor)
        chanceValor = []
    }

    const valor = validarInput('Digite um valor: ')

    if( valor % 2 === 0){
        paresValor.push(valor)
    }else{
        chanceValor.push(valor)
    }
}

console.log(paresValor)
console.log(chanceValor)