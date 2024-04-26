const filmes = [
    {titulo: 'Tarzan', genero: 'desenho animado'},
    {titulo: 'Barbie', genero: 'desenho animado'},
    {titulo: 'A morte te dá parabéns', genero: 'terror'},
    {titulo: 'Querido John', genero: 'romance'},
]

const contagemPorGenero = {};

filmes.forEach(filme => {
    const { genero } = filme;
    if (contagemPorGenero[genero]) {
        contagemPorGenero[genero]++;
    } else {
        contagemPorGenero[genero] = 1;
    }
});

console.log('Contagem de filmes por gênero:');
for (const genero in contagemPorGenero) {
    console.log(`${genero}: ${contagemPorGenero[genero]}`);
}
