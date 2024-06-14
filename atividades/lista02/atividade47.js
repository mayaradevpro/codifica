function transformarObjeto(obj, fn) {
    return Object.keys(obj).reduce((acc, key) => {
        acc[key] = fn(obj[key]);
        return acc;
    }, {});
}

const produtos = {
    produto1: { nome: 'Laptop', preco: 1500 },
    produto2: { nome: 'Mouse', preco: 50 },
    produto3: { nome: 'Teclado', preco: 100 },
    produto4: { nome: 'Monitor', preco: 300 }
};

function aumentarPreco(produto) {
    return {
        ...produto,
        preco: produto.preco * 1.10
    };
}

const produtosTransformados = transformarObjeto(produtos, aumentarPreco);
console.log(produtosTransformados);