const input = require('prompt-sync')()

let numbers = []

function validarNumerosInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if (valor === "") {
            console.log("Insira um valor.");
            continue;
        }
        if(isNaN(valor)){
            console.log('Digite um número.')
        }
    } while(isNaN(valor) || valor === "")

    return Number(valor)
}

function validarProsseguirInput(msg){
    let valor;
    do{
        valor = input(msg).trim().toUpperCase();
        if(valor !== 'S' && valor !== 'N'){
            console.log('Por favor, digite S para sim ou N para não')
        }
    }while(valor !== 'S' && valor !== 'N')
    return valor
}


do{
    let number = validarNumerosInput("Digite um número: ")
    numbers.push(number);
    let prosseguir = validarProsseguirInput("Deseja continuar? (S para sim, N para não): ").toUpperCase();
    if (prosseguir !== 'S') {
        break;
    }


}while(true)

let soma = numbers.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
let media = (soma / numbers.length) || 0
let pares = numbers.filter((num) => num % 2 === 0)
console.log(numbers)
console.log(soma)
console.log(Math.min(...numbers))
console.log(media)
console.log(pares.length);