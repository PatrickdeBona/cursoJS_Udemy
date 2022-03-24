// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
};
//___proto___: Object.prototype

const objB = {
    chaveB: 'B'
    //___proto___: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);

//Um esta dentro de outro!
//Não recomendado usar a função Proto de um objeto.

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(p) {
    this.preco = this.preco - (this.preco * (p/100));
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(50);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype); 
p2.desconto(10);
console.log(p2);

//Outra forma de criar
const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writabel: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho2: {}
});

