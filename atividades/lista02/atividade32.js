const input = require('prompt-sync')()

function validarInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(!Number(valor) || isNaN(valor)){
            console.log('Digite um número: ')
        }
    } while(!Number(valor) || isNaN(valor))

    return valor
}

function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 12; i++) {
        let linha = [];
        for (let j = 0; j < 13; j++) {
            let valor = validarInput(`Digite um valor para a posição [${i + 1}][${j + 1}]:`);
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

function valorAbsoluto(linha) {
    return Math.max(...linha.map(Math.abs));
}

function modificarMatriz(matriz) {
    let mudarMatriz = [];
    for (let i = 0; i < 12; i++) {
        let maxAbs = valorAbsoluto(matriz[i]);
        let newRow = matriz[i].map(valor => valor / maxAbs);
        mudarMatriz.push(newRow);
    }
    return mudarMatriz;
}

function mostrarMatriz(matriz) {
    matriz.forEach(linha => {
        console.log(linha.join(' '));
    });
}


let M = lerMatriz();

console.log('Matriz original:');
mostrarMatriz(M);

let modifiedM = modificarMatriz(M);

console.log('Matriz mudada:');
mostrarMatriz(modifiedM);