const input = require('prompt-sync')()

function validarInput(msg) {
    let valor = parseFloat(input(msg));
    while (isNaN(valor)) {
        valor = parseFloat(input("Inválido. " + msg));
    }
    return valor;
}

let M = [];
for (let i = 0; i < 6; i++) {
    let linha = [];
    for (let j = 0; j < 6; j++) {
        linha.push(validarInput(`Escreva um valor para a posição [${i + 1}][${j + 1}]: `));
    }
    M.push(linha);
}

let A = validarInput("Escreva o valor A para multiplicar a matriz: ");
let V = new Array(36);

let index = 0;
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        V[index] = M[i][j] * A;
        index++;
    }
}

console.log("Vetor V: ");
console.log(V);