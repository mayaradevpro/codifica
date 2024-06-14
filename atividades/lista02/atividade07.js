const input = require("prompt-sync")()

function validarInput(msg) {
    let valor;
    do {
        valor = input(msg).trim();
        if (valor === "") {
            console.log("Por favor, insira um valor.");
            continue;
        }
        if (!Number.isInteger(Number(valor)) || isNaN(valor) || (Number(valor) < 0)) {
            console.log("Por favor, insira um valor inteiro positivo.");
        }
    } while (valor === "" || !Number.isInteger(Number(valor)) || isNaN(valor) || (Number(valor) < 0));

    return parseInt(valor);
}

function carroPopular(){
    aluguelDias = validarInput('Digite quantos dias de aluguel: ')
    kmPercorridos = validarInput('Digite quantos KM foram percorridos: ')
    if(kmPercorridos > 100){
        return kmPercorridos * 0.10
    }else{
        return kmPercorridos * 0.20
    }
}

function carroLuxo(){
    aluguelDias = validarInput('Digite quantos dias de aluguel: ')
    kmPercorridos = validarInput('Digite quantos KM foram percorridos: ')
    if(kmPercorridos > 200){
        return kmPercorridos * 0.25
    }else{
        return kmPercorridos * 0.30
    }
}


function carroIdentificacao(carroTipo){
    if(carroTipo === "luxo"){
        return carroLuxo()
    }else{
        return carroPopular()
    }
}


function validarTipoCarro(msg){
    let tipo;
    do{
        tipo = input(msg).trim().toLowerCase();
        if (tipo === "") {
            console.log("Por favor, insira um valor.");
            continue;
        }
        if((tipo != "popular" && tipo != "luxo")){
            console.log("Por favor, escreva o tipo de carro alugado: Popular ou Luxo")
        }
    }while(tipo === "" || (tipo != "popular" && tipo != "luxo"))
    return tipo;
}


let tipoDeCarro = validarTipoCarro("Escreva o tipo de carro alugado: Popular ou Luxo: ")
let finalPreco = carroIdentificacao(tipoDeCarro)
console.log("Preço total: " + finalPreco)