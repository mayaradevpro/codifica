const input = require('prompt-sync')()

function lerMatriz(){
    let M = []
    for(i = 0; i < 50; i++){
        let linha = [] 
        for(j = 0; j < 50; j++){
            linha.push(input(`Digite o valor para a posição [${i + 1}][${j + 1}]:`));
          
        }
        M.push(linha)
    }
    return M
}
function multiplicarDiagonal(M){
    const tamanho = M.length
    for(i = 0; i < tamanho; i++){
        const elemento = M[i][i]
        for(j = 0; j < 50; j++){
            M[i][j] *= elemento
        }
    }
    return M
}
 let M = lerMatriz()
 console.log(multiplicarDiagonal(M))
