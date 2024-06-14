const input = require('prompt-sync')();

function pesoIdeal(h,g){
    if(g === 'masculino')
        return ((72.7 * h) - 58)
    else
        return ((62.1 * h) - 44.7)
}

 function generoEscolha(numberInput){
     if(numberInput === 1)
         return 'masculino'
     else    
         return 'feminino'
 }

 function validarGeneroInput(msg){
     let valor;
     do {
         valor = input(msg).trim();
         if( Number(valor) != 1 && Number(valor) != 2 ){
             console.log('Digite novamente!')
         }
     } while(Number(valor) != 1 && Number(valor) != 2)

     return generoEscolha(Number(valor))
 }
 function validarAlturaInput(msg){
 let valor;
 do {
     valor = input(msg).trim();
     if (isNaN(valor) || valor <= 0) {
         console.log("Altura inválida, digite novamente!");
         continue;
     }
 } while(isNaN(valor) || valor <= 0)

 return Number(valor)
 }

 console.log('Escolha seu gênero')
 const genero = validarGeneroInput('1 - masculino ou 2 - feminino: ')
 const altura = validarAlturaInput('Digite sua altura atual: ')
 const pesoIdea = pesoIdeal(altura,genero)
 console.log(pesoIdea)