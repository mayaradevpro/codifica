const input = require("prompt-sync")();

let A = parseFloat(input("Digite o valor do lado A: "));
let B = parseFloat(input("Digite o valor do lado B: "));
let C = parseFloat(input("Digite o valor do lado C: "));

while (!(A < B + C && B < A + C && C < A + B)) {
    console.log("Os valores fornecidos não formam um triângulo. Tente novamente.");
    A = parseFloat(input("Digite o valor do lado A: "));
    B = parseFloat(input("Digite o valor do lado B: "));
    C = parseFloat(input("Digite o valor do lado C: "));
}

if (A === B && B === C) {
    console.log("O triângulo é equilátero.");
} else if (A === B || A === C || B === C) {
    console.log("O triângulo é isósceles.");
} else {
    console.log("O triângulo é escaleno.");
}