//               01234567
let umaString = 'Um Texto';

console.log(umaString[4]); //mostra o indice 4 
console.log(umaString.charAt(6)) //mostra indice

console.log(umaString.indexOf('Texto')); 
//procura a palavra e retorna o indice de inicio

console.log(umaString.lastIndexOf('Texto')); 
//procura a palvra do final para o inicio

console.log(umaString.match(/[a-z]/g)); 
//Procura e retorna um Array com todas as letras minusculas do texto

console.log(umaString.search(/x/));
//Procura a letra letra e retona seu indice 'Parecido com indexOf'

console.log(umaString.replace('Um', 'Outra')); //Substitui uma palavra por outra
// 'Outra Texto'

console.log(umaString.length); 
//Retorna o tamanho da String, Nº de Strings

console.log(umaString.slice(0, 6)); 
//retorna o texto contido nas strings selecionadas
//Ex: Um tex

console.log(umaString.slice(-2)); 
//Seleciona do final para o inicio

console.log(umaString.split(' '));// divide a String nos espaços
//divide a String, e cria se um Array nas divisões

console.log(umaString.toUpperCase()); // coloca o texto todo em caixa alta
console.log(umaString.toLowerCase()); // coloca o texto em caiza baixa



