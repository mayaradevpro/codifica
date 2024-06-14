const input = require('prompt-sync')()

function validarVectorInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(valor === "" || !Number.isInteger(Number(valor)) || isNaN(valor)){
            console.log('Digite um valor')
        }
    } while(valor === "" || !Number.isInteger(Number(valor)) || isNaN(valor))

    return parseInt(valor)
}

function igualarArray(arrayPrimaria, arraySecundaria) {
    if (arrayPrimaria.length !== arraySecundaria.length) return false;
    for (let i = 0; i < arrayPrimaria.length; i++) {
        if (arrayPrimaria[i] !== arraySecundaria[i]) return false;
    }
    return true;
}

function verificacaoApostas(resultado,apostas) {
    apostas.forEach((aposta, tabela) => {
        if (igualarArray(resultado, aposta)) {
            console.log(`Aposta da tabela: ${tabela}: Ganhador`);
        }
    });
}

function lerElementos(){
    let vector= []
    for(i = 0; i < 5; i++){
        let number = validarVectorInput(`Escreva o número para o endereço de memória ${i}:`)  
        vector.push(number)
    }
    return vector
}

function quantidadeDeApostas(){
    let apostas = []
    for(j = 0; j < 50; j++){
        let aposta = lerElementos()
        apostas.push(aposta)
    }
    return apostas
}



let resultadoDaLoteria= lerElementos()
console.log("\n--- APOSTAS --- \n")
let apostas = quantidadeDeApostas()
verificacaoApostas(resultadoDaLoteria,apostas)