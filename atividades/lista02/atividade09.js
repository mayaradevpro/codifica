const input = require('prompt-sync')()

let funcionario = [];
let salarioHomem = 0;
let salarioMulher = 0;

function validateWageInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if (isNaN(valor) || valor <= 0) {
            console.log("Salário inválido. Por favor, digite um valor numérico maior que zero.");
            continue;
        }
    } while(isNaN(valor) || valor <= 0)

    return Number(valor)
}

function validarGeneroInput(msg){
    let valor;
    do {
        valor = input(msg).trim().toUpperCase();
        if (valor !== 'M' && valor !== 'F') {
            console.log("Sexo inválido. Por favor, digite M para masculino ou F para feminino.");
            continue;
        }    
    } while(valor !== 'M' && valor !== 'F')
    
    return valor
}

while (true) {
    let salario = validateWageInput("Salário do funcionário:");
    let genero = validarGeneroInput("Digite o sexo do funcionário (H para homem, M para mulher):").toUpperCase();

    if (genero === 'M') {
        salarioHomem += salario;
    } else if (genero === 'F') {
        salarioMulher += salario;
    } 

    funcionario.push({ salario, genero });

    let prosseguir = input("Deseja inserir dados de mais funcionários? (S para sim): ").toUpperCase();
    if (prosseguir !== 'S') {
        break;
    }
}

console.log("Lista de funcionários:", funcionario);
console.log("Total pago para os homens: R$ " + salarioHomem.toFixed(2));
console.log("Total pago para as mulheres: R$ " + salarioMulher.toFixed(2));