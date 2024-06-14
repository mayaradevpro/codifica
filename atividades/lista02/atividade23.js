const matriz = new Array(7).fill(0).map(()=>new Array(7).fill(0))

for(d = 0; d < 7; d++){
    matriz[d][d] = 1;
}

for(d = 0; d < 7; d++){
    console.log(matriz[d])
}