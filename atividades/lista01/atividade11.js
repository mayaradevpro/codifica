const input = require("prompt-sync")();

while(true){
    const valorInteiro = Number(input("Valor: "));
    if(valorInteiro <=0){
        console.log('Programa Encerrado');
        break;
    }
    if(valorInteiro % 2 === 0){
        console.log('Número Par');
    } else{
        console.log('Número Ímpar');
    }
}