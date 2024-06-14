function combinarInventarios(inventarioA, inventarioB) {
    const inventarioCombinado = { ...inventarioA };

    for (const item in inventarioB) {
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += inventarioB[item];
        } else {
            inventarioCombinado[item] = inventarioB[item];
        }
    }

    return inventarioCombinado;
}
const inventarioLojaA = {
    'alface': 40,
    'cenouras': 45,
    'tomate': 25
};

const inventarioLojaB = {
    'repolho': 35,
    'alface': 20,
    'cenouras': 30,
};

const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioCombinado);