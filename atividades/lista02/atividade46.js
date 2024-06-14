const vendas = [
    { vendedor: 'Anderson', valor: 100 },
    { vendedor: 'Amanda', valor: 200 },
    { vendedor: 'Amanda', valor: 150 },
    { vendedor: 'Mathias', valor: 250 },
    { vendedor: 'Jonas', valor: 300 },
    { vendedor: 'Amanda', valor: 400 }
];

function totalDeVendasVendedor(vendas) {
    return vendas.reduce((acc, venda) => {
     
        if (acc[venda.vendedor]) {
            acc[venda.vendedor] += venda.valor;
        } else {
            acc[venda.vendedor] = venda.valor;
        }
        return acc;
    }, {});
}

const resultado = totalDeVendasVendedor(vendas);
console.log(resultado);