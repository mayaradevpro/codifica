const input = require('prompt-sync')()

function validarInput(msg) {
    let valor;
    do {
        valor = input(msg).trim();
        if(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) <= 0){
            console.log('Digite um valor inteiro.')
        }
    } while(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) <= 0)

    return parseInt(valor)
}

function processoMatriz(A, V) {
    let contagem = 0;
    let X = [];
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (V[i][j] === A) {
                contagem++;
            } else {
                X.push(V[i][j]);
            }
        }
    }
    console.log(`Número de elementos iguais a ${A}: ${contagem}`);
    console.log('Matriz X incluindo todos elementos de V diferente de A:');
    console.log(X);
}

function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 30; i++) {
        let linha = [];
        for (let j = 0; j < 30; j++) {
            linha.push(validarInput((`Digite o valor para a posição [${i+1}][${j+1}]: `)));
        }
        matriz.push(linha);
    }
    return matriz;
}

let A = validarInput(("Digite um número inteiro A: "));
let V = lerMatriz();

console.log('Matriz V:');
V.forEach(linha => console.log(linha));

processoMatriz(A, V);