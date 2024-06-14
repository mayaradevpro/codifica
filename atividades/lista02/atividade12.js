function fibonacci(x){
    if(x <= 1 ){
        return x
    }
    return fibonacci(x -1) + fibonacci (x - 2)
}

const x  = 10

for (let i = 1; i <= x; i++) { 
    console.log(fibonacci(i)); 
};