const input = require("prompt-sync")();
const primeiroInteiro = Number(input("Primeiro inteiro: "));

const segundoInteiro = Number(input("Segundo inteiro: "));

const terceiroInteiro = Number(input("Terceiro inteiro: "));

let quartoInteiro = Number(input("Quarto inteiro: "));
quartoInteiro = primeiroInteiro + segundoInteiro + terceiroInteiro;

console.log(primeiroInteiro + 25);
console.log(segundoInteiro * 3);
console.log(12/100 * terceiroInteiro);
console.log(primeiroInteiro + segundoInteiro + terceiroInteiro);