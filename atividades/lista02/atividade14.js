const input = require('prompt-sync')()
let array = []

function validarNomeInput(msg){
    let valor;
    do{
        valor = input(msg).trim();
        if(!validarNome(valor)) {
            console.log("Digite um nome válido: ")    
        }
    }while(!validarNome(valor))

    valor = valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase()

    return valor;
}

function validarNome(nome){
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
  return regex.test(nome);
}

for(i = 0; i < 7; i++){
    array[i] = validarNomeInput('Nome da pessoa: ')
}


console.log(array)