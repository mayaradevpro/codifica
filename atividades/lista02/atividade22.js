const input = require('prompt-sync')()
let populacaoArray = []

class Pessoa {
    constructor(salario, filhos) {
        this.salario = salario;
        this.filhos = filhos;
    }
}

function validarSalarioInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(!(Number(valor)) || isNaN(valor) || Number(valor) <= 0){
            console.log('Digite um salário válido!')
        }
    } while(!(Number(valor)) || isNaN(valor) || Number(valor) <= 0)

    return valor
}

function validarNumeroDeFilhosInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) < 0){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(valor)) || isNaN(valor) || Number(valor) < 0)

    return parseInt(valor)
}

function registrarPessoa(){
    const salario = validarSalarioInput('Digite o salário: ')
    const filhos = validarNumeroDeFilhosInput('Digite a quantidade de filhos: ')
    return new Pessoa(salario, filhos)
}


function search(){
    while(true){
        const pessoa = registrarPessoa()
        populacaoArray.push(pessoa)
        let prosseguir = input("Deseja inserir dados de mais Pessoas? (S para sim): ").toUpperCase();
        if (prosseguir !== 'S') {
            break;
        }
    }

        let total_salario = 0
        let salarioAlto = Number(populacaoArray[0].salario);
        let salarioMedio = 0;
        let total_criancas = 0
        let avg_criancas = 0;
        let baixaRenda = 0;
        for(i = 0; i < populacaoArray.length; i++){
            total_salario += Number(populacaoArray[i].salario)
            total_criancas += Number(populacaoArray[i].filhos)

            if(Number(populacaoArray[i].salario) <= 350){
                baixaRenda++;
            }

            if( Number(populacaoArray[i].salario) > salarioAlto)
                salarioAlto = Number(populacaoArray[i].salario)
        }
        salarioMedio = total_salario / populacaoArray.length
        avg_criancas = total_criancas / populacaoArray.length
        baixaRenda_percentual = (baixaRenda / populacaoArray.length) * 100
        return { mediaSalario: salarioMedio.toFixed(2), mediaFilhos: avg_criancas.toFixed(2), maiorSalario: salarioAlto.toFixed(2),percentualPessoasBaixaRenda: baixaRenda_percentual + '%'}
}

console.log(search())