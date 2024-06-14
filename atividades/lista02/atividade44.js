let filme = {
    titulo: "A origem",
    diretor: "Christopher Nolan",
    genero: ['Sci-Fi', 'Ação', 'Aventura'],
    elencot: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    sinopsia: 'Um ladrão que rouba segredos corporativos através do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.',
    ano: 2010,
    duração: '148 minutos',
    avaliação: '8.8/10'
}

function contagemStrings(obj) {
    let contagem = 0;
    for (const prop in obj) {
        if (typeof obj[prop] === 'string') {
            contagem++;
        }
    }
    return contagem;
}

console.log(contagemStrings(filme));