const input = require("prompt-sync")();

let soma = 0
let somapeso = 0

while(true){
    let valorDecimal = parseFloat(input("Valor decimal: ")); 

    if(valorDecimal === 0){
        if(somapeso === 0){
           console.log("Nenhum número foi digitado.");
    }
    else{
        let mediaPonderada = soma / somapeso;
           console.log("A média ponderada é igual a: " + mediaPonderada);
    }
    break;
}
    else{
         let peso = parseFloat(input("Digite o peso: " ));
          soma += valorDecimal * peso;
          somapeso += peso;
    }
}