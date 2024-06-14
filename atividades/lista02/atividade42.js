let empresaModa = {
    nome: ["Martina Closet"],
    fundada: ["15 de junho de 2020"],
    endereco: {
        localização: ["Contagem"],
        estado: ["MG"],
    },
    contato: ["1234-5678"],
    produtos: ["roupas", "acessórios"]
}

function dadosArray(obj) {
    let resultado = {};
    for (let chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}
let objetoArray = dadosArray(empresaModa);
console.log(objetoArray);