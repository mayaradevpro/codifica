let count = 0;
let numero = 100;

while(count < 50){
    let isPrimo = true;
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            isPrimo = false;
            break;
        } 
    }
    if(isPrimo){
        console.log(numero);
        count++;
    }
    numero++;
}