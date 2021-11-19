const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
//Atribuição via desestruturação
const {nome, sobrenome, idade, endereco: {rua, numero}} = pessoa;
console.log(nome, idade, rua, numero);

const { ...resto} = pessoa;
console.log(resto);