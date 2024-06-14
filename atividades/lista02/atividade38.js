const input = require('prompt-sync')()

function divisoria(array, baixo, alto) { 
	let centro = array[alto]; 
	let i = baixo - 1; 

	for (let j = baixo; j <= alto - 1; j++) { 
		if (array[j] < centro) { 
			i++; 
			[array[i], array[j]] = [array[j], array[i]]; 
		} 
	} 
	[array[i + 1], array[alto]] = [array[alto], array[i + 1]]; 
	return i + 1; 
} 

function organizacao(array, baixo, alto) { 
	if (baixo >= alto) return; 
	let pi = divisoria(array, baixo, alto); 

	organizacao(array, baixo, pi - 1); 
	organizacao(array, pi + 1, alto); 
} 


function validateVectorInput(msg){
    let valor;
    do {
        valor = input(msg).trim();
        if (isNaN(valor) || valor <= 0) {
            console.log("Digite um número válido!");
            continue;
        }
    } while(isNaN(valor) || valor <= 0)

    return Number(valor)
}

function validarOpcaoInput(msg){
    let valor;
    do{
        console.log("1- Soma dos Elementos \n2- Produto dos Elementos\n3- Média dos Elementos\n4- Ordene os elementos em ordem crescente\n5- Mostre o vetor.")
        valor = input(msg).trim();
        if(isNaN(valor) || valor <= 0 || valor > 5){
            console.log("Digite uma opção válida!");
            continue;
        }
    }while(isNaN(valor) || valor <= 0 || valor > 5)
    return Number(valor)    
}

function somaElementos(vector){
    return(vector.reduce((acumulador,valor) => acumulador + valor,0))
}

function produtoElementos(vector){
    return (vector.reduce((acumulador,valor) => acumulador * valor,1))
}

function mediaElementos(vector){
    return somaElementos(vector) / vector.length
}

function organizacaoElementos(vector){
    organizacao(vector, 0, vector.length - 1);
    return vector
}
function mostrarVector(vector){
    console.log(vector)
}

function operacao(variavel, vector){
    switch(variavel){
        case 1:
            console.log(somaElementos(vector))
            break;
        case 2:
            console.log(produtoElementos(vector))
            break;
        case 3:
            console.log(mediaElementos(vector))
            break;
        case 4:
            console.log(organizacaoElementos(vector))
            break;
        case 5:
            mostrarVector(vector)
            break;                
    }
}

function lerVector(){
    let vector= []
    for(i = 0; i < 6; i++){
        let number = validateVectorInput(`Digite o número para o endereço de memória ${i}:`)  
        vector.push(number)
    }
    return vector
}

function identificarVariavel(){
    let variavel = validarOpcaoInput('Digite uma variável identificadora: ')
    return variavel
}

let vector = lerVector()
const variavel = identificarVariavel()
operacao(variavel,vector)