let M = [ 
    [1,-3,2,-5,4,-7,8,-2],
    [-51,54,50,-55,-56,57,-58,59],
    [-12,-3,2,-12,4,7,-8,34],
    [1,-3,2,-5,4,-7,8,-2],
    [1,-35,2,13,4,7,-8,-2],
    [100,300,500,600,700,900,800,200],
    
]

let C = Array(6).fill(0)

for(i = 0; i < 6; i++){
    let quantidadeNegativa = 0;
    for(j = 0; j < 8; j++){
        if(M[i][j] < 0){
            quantidadeNegativa++;
        }
    }
    C[i] = quantidadeNegativa;
} 

console.log(C)