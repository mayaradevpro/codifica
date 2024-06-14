const input = require('prompt-sync')();

function validarInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if(valor.length !== 1){
            console.log('Digite aqui!')
        }
    } while(valor.length !== 1)

    return valor
}

function contagemDeAcertos(gabarito,ingresso){
    let acertos = 0;
    for(i = 0; i < gabarito.length; i++){
        if(gabarito[i] === ingresso[i]){
            acertos++
        }
    }
    return acertos
}

function lerGabarito(){
    let G = []
    for(i = 0; i < 20; i++){
        let numero = validarInput(`Digite a resposta da questão ${i + 1}: `)  
        G.push(numero)
    }
    return G
}

gabarito = lerGabarito()
for (let estudante = 1; estudante <= 50; estudante++) {
    console.log("- - - Estudante - - -", estudante + ":");
    const ingresso = [];
    for (let i = 0; i < 20; i++) {
        const resposta = validarInput(`Resposta da questão ${i + 1}: `);
        ingresso.push(resposta);
    }

    const numeroDeAcertos = contagemDeAcertos(gabarito, ingresso);

    console.log("Número de acertos:", numeroDeAcertos);
    if (numeroDeAcertos >+ 12) {
        console.log("APROVADO!");
    } else{
        console.log("REPROVADO!")
    }
}