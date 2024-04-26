const professor = {
    nome: "Xavier",
    materia: "geografia",
    notas:{
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}
let soma = 0 ; 
for (const chave in professor.notas){
   
    soma += professor.notas[chave];

}
const media = soma/3;
console.log(`Média da turma ${media}`);
if (media >= 3) { 
    console.log('Média da turma aprovada')
} 