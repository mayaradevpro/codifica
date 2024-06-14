const input = require('prompt-sync')()
function validarNomeInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if (value === "") {
            console.log("Insira um valor.");
            continue;
        }
        if(isNaN(value)){
            console.log('Digite um número.')
        }
    } while(isNaN(value) || value === "")

    return Number(value)
}
let array = []
let arrayEven = []
for(i = 0; i < 10; i++){
    array[i] = validarNomeInput('Digite um número: ')
    if(array[i] % 2 === 0){
        arrayEven.push([array[i], i])
    } 
}

console.log(arrayEven)