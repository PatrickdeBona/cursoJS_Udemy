const nomes = ['Eduardo', 'Maria', 'João'];

//Outra forma de fazer:
const nomes2 = new Array('Eduardo', 'Lucas', 'Davi');
const novo = [...nomes];
novo.pop();
nomes[2]= 'Joana';
delete nomes[2];

console.log(novo);
console.log(nomes);
//Tira o 1º elemento
const removido = nomes.shift();
console.log(nomes)

//Colocar coisa no array
nomes.push('Jucca');

const nomes3 = ['Rui', 'Luiz', 'Augusto'];
const nome = nomes3.join(' '); //Transforma em string
console.log(nome)