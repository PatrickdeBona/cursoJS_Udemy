//definePropety - definePropeties
function Produto(nome, preco, estoque){
    

    Object.defineProperty(this, 'estoque',{
        enumerable: true,//mostra as chave de 'Estoque' se falso não aparece.
        value: estoque,//valor
        writable:false, //Proibir de mudar um valor depois de ser passado.(true)pode alterar
        configurable: true // PERMIÇÃO DE RECONFIGURAR, NÃO PODENDO MEXER NAS PROPRIEDADES!
    });

    //Para plural usa-se defineProperties
    Object.defineProperties(this, {
        nome: {    enumerable: true,//mostra as chave de 'Estoque' se falso não aparece.
        value: nome,//valor
        writable:false, //Proibir de mudar um valor depois de ser passado.(true)pode alterar
        configurable: true},
        preco: {
            enumerable: true,//mostra as chave de 'Estoque' se falso não aparece.
            value: preco,//valor
            writable:false, //Proibir de mudar um valor depois de ser passado.(true)pode alterar
            configurable: true
        }
    });

}

const p1 = new Produto('Camisa', 20, 3);
//p1.estoque = 5000; Não pode por causa do writable.
//delete p1.estoque; Não pode por causa do configurable.
console.log(p1);
console.log(Object.keys(p1));