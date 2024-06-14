const input = require('prompt-sync')()

function validateInput(msg) {
    let valor = parseFloat(input(msg));
    while (isNaN(valor)) {
        valor = parseFloat(input("Inválido. " + msg));
    }
    return valor;
}

let M = [];
for (let i = 0; i < 5; i++) {
    let linha = [];
    for (let j = 0; j < 5; j++) {
        linha.push(validateInput(`Escreva o valor para a posição [${i + 1}][${j + 1}]: `));
    }
    M.push(linha);
}


let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTodosElementos = 0;


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 3) {
            somaLinha4 += M[i][j];
        }
        if (j === 1) {
            somaColuna2 += M[i][j];
        }
        if (i === j) {
            somaDiagonalPrincipal += M[i][j];
        }
        somaTodosElementos += M[i][j];
    }
}

console.log("Matriz M:");
for (let i = 0; i < 5; i++) {
    console.log(M[i]);
}

console.log("Soma da linha 4:", somaLinha4);
console.log("Soma da coluna 2:", somaColuna2);
console.log("Soma da diagonal principal:", somaDiagonalPrincipal);
console.log("Soma de todos os elementos da matriz:", somaTodosElementos);