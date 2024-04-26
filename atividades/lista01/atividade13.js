const input = require("prompt-sync")();
let N;
for (let i = 0; i < 5; i++) {
    N = Number(input("Digite aqui o número: "));
    for (let j = 1; j <= N; j++) { 
    console.log(j + "x" + N + '=' + (N*j));
    }
}
