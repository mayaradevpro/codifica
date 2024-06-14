const input = require('prompt-sync')()

function validarInputt(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if (valor === "") {
            console.log("Insira um valor: ");
            continue;
        }
        if(isNaN(valor)){
            console.log('Digite um número: ')
        }
    } while(isNaN(valor))

    return Number(valor)
}

function aritmetica(termo , n){
    if(n === 0 )return;
    termo += razao
    soma+= termo
    console.log(termo)
    aritmetica(termo, n - 1)
}

let termo = validarInputt('Valor do termo: ') 
const razao = validarInputt('Valor da razão: ')
let soma = 0;


aritmetica(termo, 10)
console.log(soma)