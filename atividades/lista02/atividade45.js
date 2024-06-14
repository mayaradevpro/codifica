
function contagemString(array) {
    return array.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
}

const filmes = [
    'O Poderoso Chefão', 
    'Cidade de Deus', 
    'O Poderoso Chefão', 
    'A Origem', 
    'Cidade de Deus', 
    'O Poderoso Chefão', 
    'A Origem', 
    'O Cavaleiro das Trevas'
];

const resultado = contagemString(filmes);
console.log(resultado);