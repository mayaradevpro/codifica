function agruparTransacoesPorCategoria(transacoes) {
  const resultado = {};

  transacoes.forEach(transacao => {
      const { id, valor, data, categoria } = transacao;

      if (!resultado[categoria]) {
          resultado[categoria] = {
              transacoes: [],
              subtotal: 0
          };
      }
      resultado[categoria].transacoes.push({ id, valor, data });

      resultado[categoria].subtotal += valor;
  });
}
  return resultado;

const transacoes = [
  { id: 1, valor: 250.75, data: '2024-06-10', categoria: 'Supermercado' },
  { id: 2, valor: 30.5, data: '2024-06-10', categoria: 'Transporte' },
  { id: 3, valor: 120, data: '2024-06-11', categoria: 'Lazer' },
  { id: 4, valor: 500, data: '2024-06-12', categoria: 'Supermercado' },
  { id: 5, valor: 80.25, data: '2024-06-12', categoria: 'Restaurante' },
  { id: 6, valor: 200, data: '2024-06-13', categoria: 'Transporte' },
  { id: 7, valor: 45.9, data: '2024-06-13', categoria: 'Restaurante' }
];

const resultadoAgrupado = agruparTransacoesPorCategoria(transacoes);
console.log(resultadoAgrupado);