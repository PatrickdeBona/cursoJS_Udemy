/*
Aritméticos:
+ -> Adição | Concatenção
- -> menos  | / -> divisão | * -> multiplicação
** -> Potenciação
% -> Resto da divisão

Prescedencia = (), **, * / %, + -.

Incremento ++;
Decremento --;

Operador de atribuição = +=, *=, **= .

*/

const num1 = 2;
const num2 = 10;

console.log(num1 + num2);
console.log(num1 ** num2);

let contador = 1;
contador++; // NÃO FUNCIONA EM CONST, pois constante não pode ser mudada!
console.log(contador);

console.log(contador++); //NÃO FUNCIONA, pois exibe o valor e do depois e incrementado
console.log(++contador); //Maneira Correta, vai incrementar e depois mostrar

//Existe também o -- .

let conta = 2;
conta += 2; // conta = conta + 2;
//pode ser usado *=, **=
console.log(conta); // 4

//NaN - Not a Number
const numero1 = 10;
const numero2 = parseInt('5'); // Transforma a String em Int
const numero3 = Number('8'); // mesmo resultado do que o de cima!
// existe parseFloat tbm!

console.log(num1 + num2);