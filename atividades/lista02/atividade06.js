const input = require('prompt-sync')()

function randomComputadorNumber(){
    return (Math.floor((Math.random() * 5)) + 1);        
}


function validarInput(msg) {
    let valor;
    do {
        valor = input(msg).trim();
        if (valor === "") {
            console.log("Por favor, insira um valor.");
            continue;
        }
        if (!Number.isInteger(Number(valor)) || isNaN(valor) || (Number(valor) < 0 || Number(valor) > 5)) {
            console.log("Por favor, escolha uma opção válida.");
        }
    } while (!Number.isInteger(Number(valor)) || isNaN(valor) || (Number(valor) < 0 || Number(valor) > 5) || valor === "");

    return parseInt(valor);
}

let computadorNumber = randomComputadorNumber()
let usuarioNumber = validarInput("Advinhe o número, escolha um número entre 1 e 5: ")

if(usuarioNumber === computadorNumber){
    console.log("Você escolheu " + usuarioNumber + " e o computador escolheu " + computadorNumber)
    console.log("GANHOU!")
}else{
    console.log("Você escolheu " + usuarioNumber + " e o computador escolheu " + computadorNumber)
    console.log("PERDEU!")
}