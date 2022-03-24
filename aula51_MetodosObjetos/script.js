const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa); //Irá sobreescrever o Objeto na memoria

/*const produto1 = {nome: 'Caneca', preco: 1.8};
const outraCoisa1 = {
    ...produto1,
    material: 'porcelana' //Copiar metodos de um objeto
};

outraCoisa1.nome = 'Outro nome';
outraCoisa1.preco = 2.5;
console.log(produto1);
console.log(outraCoisa1);
*/
const produto1 = {nome: 'Caneca', preco: 1.8};
const caneca = Object.assign({}, produto, {material: 'porcelana'});

caneca.nome = 'Outro nome';                 //Outra forma copiar metodos de um objeto.
caneca.preco = 2.5;
console.log(produto1);
console.log(caneca);

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //Mostra as configurações do Objeto.
console.log(Object.values(produto));//Pega somente os valores de um objeto
console.log(Object.keys(produto));//Só pega as chaves do objeto
console.log(Object.entries(produto));//Pega o valor e as chaves d objeto.