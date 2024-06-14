const input = require('prompt-sync')();

function validarInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(valor === "" || !Number.isInteger(Number(valor)) || isNaN(valor)){
            console.log('Digite um valor inteiro')
        }
    } while(valor === "" || !Number.isInteger(Number(valor)) || isNaN(valor))

    return parseInt(valor)
}

function contagemDeAcertos(gabarito,bilhete){
    let acertos = 0;
    for(i = 0; i < gabarito.length; i++){
        if(gabarito[i] === bilhete[i]){
            acertos++
        }
    }
    return acertos
}

function lerGabarito(){
    let gabarito = []
    for(i = 0; i < 13; i++){
        let numero = validarInput('Digite o número para ganhar o bilhete premiado: ')  
        gabarito.push(numero)
    }
    return gabarito
}

gabarito = lerGabarito()
for (let apostador = 1; apostador <= 100; apostador++) {
    console.log("- - - Apostador - - -", apostador + ":");
    const bilhete = [];
    for (let i = 0; i < 13; i++) {
        const resposta = validarInput(`Resposta ${i + 1}: `);
        bilhete.push(resposta);
    }

    const numeroDeAcertos = contagemDeAcertos(gabarito, bilhete);

    console.log("Número de acertos:", numeroDeAcertos);
    if (numeroDeAcertos === 13) {
        console.log("Parabéns, você foi o GANHADOR!!!");
    }
}