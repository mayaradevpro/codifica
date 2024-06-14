const input = require('prompt-sync')()
function validarSalarioInput(msg){
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

function validarNome(nome){
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
  return regex.test(nome);
}

function Employee(nome,cargo,salario){
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario
}


let employee1 = new Employee(validarNomeInput('Nome do funcionário : '), validarNomeInput('Cargo do funcionário: '), validarSalarioInput('Salário do funcionário: '))
console.log(employee1.nome + ' que está no cargo de ' + employee1.cargo + ' e recebe ' + employee1.salario + ' é o mais novo funcionário!')