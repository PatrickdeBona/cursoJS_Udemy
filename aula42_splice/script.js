const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//nomes.splice(índice, delete, elem1, elem2, elem3);
//remove um elemento
const removidos = nomes.splice(3, 2);
nomes.splice(2, 1, 'Luiz'); //Removeu um e add outro!
console.log(nomes, removidos);