const input = require("prompt-sync")();
const numero = Number(input("Número de 1000 a 1999: "));

for (let i = 1000; i <= 1999; i++) {
  if (i % 11 === 5) {
    console.log(i);
  }
}
