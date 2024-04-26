const input = require("prompt-sync")();
const valorUm = Number(input("Valor um: "));
const valorDois = Number(input("Valor dois: "));

if(valorUm == valorDois){
console.log("Valores iguais, programa encerrado.");
} else { 
    if(valorUm > valorDois){
        console.log(valorDois, valorUm);
       }  else { 
           console.log(valorUm, valorDois);
       } 
}