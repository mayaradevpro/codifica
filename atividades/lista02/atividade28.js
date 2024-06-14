const input = require('prompt-sync')()
function validarInput(msg) {
    let valor = parseFloat(input(msg));
    while (isNaN(valor)) {
        valor = parseFloat(input("Entrada inválida. " + msg));
    }
    return valor;
}

let M = [];
for (let i = 0; i < 10; i++) {
    let linha = [];
    for (let j = 0; j < 10; j++) {
        linha.push(validarInput(`Digite o valor para a posição [${i + 1}][${j + 1}]`));
    }
    M.push(linha);
}

let somaAcimaDiagonal = 0;
let somaAbaixoDiagonal = 0;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i < j) {
            somaAcimaDiagonal += M[i][j];
        } else if (i > j) {
            somaAbaixoDiagonal += M[i][j];
        }
    }
}

console.log("Soma dos elementos acima da diagonal: ", somaAcimaDiagonal);
console.log("Soma dos elementos abaixo da diagonal: ", somaAbaixoDiagonal);