const input = require('prompt-sync')()

function validarInput(msg) {
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
        linha.push(validarInput(`Escreva um valor para a posição [${i + 1}][${j + 1}]: `));
    }
    M.push(linha);
}

let SL = new Array(5).fill(0);
let SC = new Array(5).fill(0);

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        SL[i] += M[i][j];
        SC[j] += M[i][j];
    }
}

console.log("Matriz M:");
for (let i = 0; i < 5; i++) {
    console.log(M[i]);
}

console.log("Vetor SL (representa as Somas das Linhas):");
console.table(SL);

console.log("Vetor SC (Somas das colunas):");
console.table(SC);