const input = require("prompt-sync")();
const primeiraavaliacao = Number(input("Nota da primeira avaliação: "));

const segundaavaliacao = Number(input("Nota da segunda avaliação: "));

if((primeiraavaliacao + segundaavaliacao) / 2 >= 6 ){
console.log("PARABÉNS! Você foi aprovado");
}
