//definePropety - definePropeties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque',{
        enumerable: true,//mostra as chave de 'Estoque' se falso não aparece.
        configurable: true, // PERMIÇÃO DE RECONFIGURAR, NÃO PODENDO MEXER NAS PROPRIEDADES!
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisa', 20, 3);

console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);