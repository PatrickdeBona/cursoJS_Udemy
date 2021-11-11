let num1 = 100;
let num2 = 2.555567;

// console.log(num1.toString() + num2);
//num1 = num1.toString();

console.log(num1.toString(2)); //Mostra o numero de forma Binaria!
console.log(num2.toFixed(2)) //Mostra somente as casas decimais mostradas!
console.log(Number.isInteger(num1)); //Retorna falso ou verdadeiro se o numero é int
//let temp = num1 * 'Ola';
//console.log(Number.isNaN(temp));

let num3 = 0.7;
let num4 = 0.2;

num3 += num4; //Vai retornar 0.8999 e nao 0.9
console.log(num3);

num3 = parseFloat(num3.toFixed(2)); // Resposta 0.9 Modo de Consertar
console.log(num3);
