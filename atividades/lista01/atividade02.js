const input = require("prompt-sync")();
const eleitores = Number(input("Votos dos eleitores: "));

const brancos = Number(input("Votos brancos: "));

const nulos = Number(input("Votos nulos: "));

const validos = Number(input("Votos validos: "));

console.log(brancos/eleitores * 100 + " (percentual de votos brancos)");
console.log(nulos/eleitores * 100 + " (percentual de votos nulos)");
console.log(validos/eleitores * 100 + " (percentual de votos validos)");