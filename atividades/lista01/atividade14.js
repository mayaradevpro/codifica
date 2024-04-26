const input = require("prompt-sync")();
let soma = 0;
let contador = 0;

while (true) {
    let numero = parseFloat(input("Digite um número decimal (ou digite 0 para encerrar):"));

    if (numero === 0) {
        if (contador === 0) {
            console.log("Nenhum número foi digitado.");
        } else {
            let media = soma / contador;
            console.log("A média dos números digitados é: " + media.toFixed(2));
        }
        break;
    } else {
        soma += numero;
        contador++;
    }
}

