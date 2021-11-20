//For in
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas){ // le os indices do Array
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: 30
};

for (let i in pessoa) {
    console.log(pessoa[i])
}