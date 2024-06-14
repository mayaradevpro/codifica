const input = require('prompt-sync')()

let matriz = [];
for (let i = 0; i < 15; i++) {
    let linha = [];
    for (let j = 0; j < 20; j++) {
        // Solicitando ao usuário para digitar o valor
        let valor = parseFloat(input(`Escreva valor para a posição [${i + 1}][${j + 1}]: `));
        while (isNaN(valor)) {
            valor = parseFloat(input(`Inválido. Digite outro número para a posição [${i + 1}][${j + 1}]: `));
        }
        linha.push(valor);
    }
    matriz.push(linha);
}

let somaColuna = new Array(20).fill(0);
for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 15; i++) {
        somaColuna[j] += matriz[i][j];
    }
}

for (let j = 0; j < 20; j++) {
    console.log(`Soma da coluna ${j + 1}: ${somaColuna[j].toFixed(2)}`);
}