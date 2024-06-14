let obj1 = {
    nome: "João",
    idade: 22,
    cidade: "Curitiba"
};

let obj2 = {
    idade: 28,
    cidade: "Belo Horizonte",
    email: "joaobosco20@gmail.com"
};

function entradaObjetivo(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let entradaObj = entradaObjetivo(obj1, obj2);

console.log(entradaObj);
