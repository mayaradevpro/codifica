const input = require("prompt-sync")();
const codigoDeOrigem = Number(input("Digite o código de origem: "));

let regiao;

switch (codigoDeOrigem) {
  case 1:
    regiao = 'Sul';
    break;
  case 2:
    regiao = 'Norte';
    break;
  case 3:
    regiao = 'Leste';
    break;
  case 4:
    regiao = 'Oeste';
    break;
  case 5:
  case 6:
    regiao = 'Nordeste';
    break;
  case 7:
  case 8:
  case 9:
    regiao = 'Sudeste';
    break;
  case ((codigoDeOrigem>=10 && codigoDeOrigem<=20) ? codigoDeOrigem : -1) :
    regiao = 'Centro-Oeste';
    break;
  case ((codigoDeOrigem>=25 && codigoDeOrigem<=50) ? codigoDeOrigem : -1) :
    regiao = 'Nordeste';
    break;
  default:
    regiao = 'Produto Importado';
}
console.log(regiao);