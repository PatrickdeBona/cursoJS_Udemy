const nome = 'Patrick';
const sobrenome = 'Demarco';
const idade = 19;

function soma(x,y) {
    return x + y;
}

export {nome, sobrenome, idade, soma};


export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}