//Produto -> aumento, desconto
// Camiseta, caneca, lapis
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.construtor = Camiseta;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.construtor = Caneca;