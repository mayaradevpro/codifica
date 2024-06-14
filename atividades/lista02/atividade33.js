const input = require('prompt-sync')();

function lerMatriz(){
    let M = []
    for(i = 0; i < 3; i++){
        let linha = [] 
        for(j = 0; j < 3; j++){
            linha.push(input(`Digite o valor para a posição [${i + 1}][${j + 1}]:`));
          
        }
        M.push(linha)
    }
    return M
}
function calcularMedia(M){
   let soma = 0
   for(i = 0; i < 3; i++){
    soma += Number(M[i][2 - i])
   } 
   return soma/3
}
function multiplicar(M, media){
    for( i = 0; i < 3; i++){
        M[i][i] *= media
    }
    return M
}
let matriz = lerMatriz()
console.log(matriz)
let media = calcularMedia(matriz)
let resultado = multiplicar(matriz, media)
console.log(resultado)