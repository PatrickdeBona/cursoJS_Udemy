// Indice:        0        1       2
const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Matheus'; //alterando nome
// Os valores podem ser mudados quandos e trata de Array ou Objetos
alunos[3] = 'Lucca'; // Cria o indice
alunos[alunos.length] = 'Luiza'; //Adicionar um elemento no final
alunos.push('Otávio'); //Adiciona um elemento no final
alunos.unshift('Igor') //Adiciona no inicio
alunos.pop(); //Retira o ultimo elemento
alunos.shift(); //Remove do inicio
// Os indices são mexidos após excluir um indice

//delete alunos [1]; deleta e deixa vaga o indice sem mexer nos outros

console.log(alunos[0]); // mostra o aluno do indice escolhido;
console.log(alunos);
console.log(alunos.slice(0, -2)); //Mostra só uma parte do Array