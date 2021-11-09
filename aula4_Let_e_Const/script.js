// Não podemos criar constantes com palavras reservadas
// Dica: Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número.
// Nome de constante não pode conter espaços ou traços. Use: camelCase
// Ex: nomeCompleto, nomeCliente, meuNome.
// Case-sensitive = letra minuscula e maiuscula faz diferença.
// NÃO PODE MOODIFICAR O VALOR DA CONSTANTE (deve ser declarado na criação)
// NÃO UTILIZE VAR USE CONST

let exemplo = 'Lucca'; // String
const nome = 'João';
// nome = 'Otávio'; <-- Errado!
exemplo = 'Otávio';
console.log(nome);
console.log(exemplo);

//------------------ Exemplo Const --------------------------//
// + - * /
const primeiroNumero = 5; //Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);

//----------------- Diferença do Let ---------------------------//
let resultadoTriplicado = resultado * 2;
resultadoTriplicado = resultadoTriplicado + 5; // Sobreescreve a anterior
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero); //Saber o tipo: Number
console.log(typeof nome);// String
