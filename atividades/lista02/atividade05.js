const input = require('prompt-sync')()

function ganhador(usuario,bot){
    if( (usuario === 'Pedra' && bot === 'Tesoura') || (usuario === 'Papel' && bot === 'Pedra') || (usuario === 'Tesoura' && bot === 'Papel')){
        pontuacao_usuario += 1
        console.log('O computador escolheu ' + bot + ' e você escolheu ' + usuario )
        console.log('GANHOU!')
    }else if((bot === 'Pedra' && usuario === 'Tesoura') || (bot === 'Papel' && usuario === 'Pedra') || (bot === 'Tesoura' && usuario === 'Papel')){
        pontuacao_bot += 1
        console.log('O computador escolheu ' + bot + ' e você escolheu ' + usuario )
        console.log('PERDEU!')
    }else if(usuario === -1){
        console.log("Acabou!")
        loop = false
    }else{
        console.log('O computador escolheu ' + bot + ' e você escolheu ' + usuario )
        console.log('EMPATE!')
    }
}

function aleatorioBotopcao(){
    const bot_escolha = Math.floor((Math.random() * 3) + 1);
    return opcao(bot_escolha)    
}

function opcao(usuario){
    switch(usuario){
        case 0:
            return -1
        case 1: 
            return 'Pedra' 
        case 2:
            return 'Papel'
        case 3: 
            return 'Tesoura'   
        default:
            break;    
    }
}


function validarInput(msg) {
    let valor;
    do {
        valor = input(msg).trim();
        if (valor === "") {
            console.log("Insira um valor");
            continue;
        }
        if (!Number.isInteger(Number(valor)) || isNaN(valor) || (Number(valor) < 0 || Number(valor) > 3)) {
            console.log("Escolha uma opção válida.");
        }
    } while (!Number.isInteger(Number(valor)) || isNaN(valor) || (Number(valor) < 0 || Number(valor) > 3) || valor === "");

    return parseInt(valor);
}


let loop = true;
let pontuacao_usuario = 0;
let pontuacao_bot = 0;
while (loop){
console.log("------------JOKENPO------------")
console.log("Pontuação:" + " você " + pontuacao_usuario + 'x' + pontuacao_bot + ' Computador')
console.log("\n 0 - Para sair \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura \n")
console.log("-------------------------------")

let usuario_opcao = opcao(validarInput("Escolha uma opção: "))
let bot_opcao = aleatorioBotopcao()

ganhador(usuario_opcao, bot_opcao)

if(loop === true){
input("Pressione Enter para jogar novamente...");
console.clear()
}
}