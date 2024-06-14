const input = require('prompt-sync')()
let funcionario = []

function validarSalarioInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(!(Number(valor)) || isNaN(valor) || Number(valor) <= 0){
            console.log('Digite um salário válido: ')
        }
    } while(!(Number(valor)) || isNaN(valor) || Number(valor) <= 0)

    return valor
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

function validarRegistradoInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(funcionario.find(({ registracao }) => registracao === Number(valor))){
            console.log('Matricula existente! Digite novamente uma nova matricula')
        }
        if(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) < 0){
            console.log('Digite um valor inteiro: ')
        }
    } while(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) < 0 || funcionario.find(({ registracao }) => registracao === Number(valor)))

    return parseInt(valor)
}

class empregado {
    constructor(registracao, nome, salarioBruto, inss, salarioLiquido) {
        this.registracao = registracao;
        this.nome = nome;
        this.salarioBruto = salarioBruto;
        this.inss = inss;
        this.salarioLiquido = salarioLiquido;
    }
}

function registroEmpregado(){
    const registracao = validarRegistradoInput('Digite a matrícula: ')
    const nome = validarNomeInput('Nome do funcionário: ')
    const salarioBruto = validarSalarioInput('Salário do funcionário: ')
    const inss = salarioBruto * 0.12
    const salarioLiquido = salarioBruto - inss
    return new empregado(registracao,nome,salarioBruto, inss, salarioLiquido)
}

for(i = 0; i < 80; i++){
    const empregado = registroEmpregado()
    funcionario.push(empregado)
}

for(i = 0; i < funcionario.length; i++){
    console.log('Matrícula: ' + funcionario[i].registracao)
    console.log('Nome: ' + funcionario[i].nome)
    console.log('Salário bruto: ' + funcionario[i].salarioBruto)
    console.log('Dedução INSS: ' + funcionario[i].inss)
    console.log('Salário líquido: ' + funcionario[i].salarioLiquido)
}