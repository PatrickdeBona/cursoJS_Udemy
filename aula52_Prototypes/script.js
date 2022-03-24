function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.haha = 'estou aqui'; //Colocando no prototype
Pessoa.prototype.nomeCompleto = function() {
    return this.nome +  ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'O.'); // <-- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função Construtora

console.dir(pessoa1);
console.dir(data);