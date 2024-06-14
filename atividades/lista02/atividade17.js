const input = require('prompt-sync')()
const nomes = []
const idade = []
const menor = []

function validarIdadeInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) <= 0){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) <= 0)

    return parseInt(valor)
}

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

function validarNome(nomes){
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
  return regex.test(nomes);
}

for(i = 0; i < 9; i++){
   nomes.push(validarNomeInput('Digite o nome da pessoa: '))
   idade.push(validarIdadeInput('Digite a idade da pessoa: '))
}

for(j = 0; j < idade.length; j++){
    if(idade[j] < 18){
        menor.push([nomes[j], idade[j]])
    }
}
console.log("a coluna 0 representa os nomes das pessoas, a coluna 1 representa as idades das pessoas")
console.table(menor)