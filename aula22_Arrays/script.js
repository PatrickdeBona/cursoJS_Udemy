/*
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/
//               0,1,2,3,4,5,6,7,8
const numeros = [1,2,3,4,5,6,7,8,9];
const [primeiroNumero, segundoNumero, ,quartoNumero, ...resto] = numeros; //pega o elemento 0, 1 e 4
console.log(primeiroNumero, quartoNumero);
console.log(resto); //O resto e todos os outros valores
//                    0         1           2
//                 0  1  2    0  1  2    0  1  2  
const numerosA = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numerosA[1][2]); // 6

const [lista1, lista2, lista3] = numerosA;
console.log(lista3[2]); // 9