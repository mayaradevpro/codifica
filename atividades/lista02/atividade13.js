function fibonacci(elemento){
    if(elemento <= 1 ){
        return elemento
    }
    return fibonacci(elemento -1) + fibonacci (elemento - 2)
}

let array = []
elemento  = 15

for (let i = 1; i <= elemento; i++) { 
    array[i-1] = fibonacci(i)
};

console.log(array)