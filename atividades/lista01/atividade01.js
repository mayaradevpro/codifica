const input = require("prompt-sync")();
const celsius = Number(input("Digite aqui a temperatura em celsius: "));
const fahrenheit = (celsius * 1.8) + 32;
console.log(fahrenheit);