// FORMA 1 
const pessoa1 = { 
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`Olá ${this.nome}`)
    }
}; // chaves e objeto, couchete e array

console.log(pessoa1.nome);
pessoa1.fala();

//------------------------------------------------------------------------
// FORMA 2 
function criaPessoa (nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    }
}

const pessoa2 = criaPessoa('Lucas', 'Ruiz', 27);
const pessoa3 = criaPessoa('Davi', 'Junior', 55);

console.log(pessoa2.nome);