/*
Primitivos (imutáveis) - String, number, boolean, undefined, 
null, (bigint, symbol) - Valor
Copia os dados!

Referências (mutável) - Array, object, function
Refere os dados!
*/

//Primitivos os valores são copiados
let a ='a';
let b = a; //copiou o dado de a
console.log(a,b);
a = 'c';
console.log(a,b);

//Referenciais são passados ex:
let c = [1, 2 ,3];
let d = c; // recebeu os valores
console.log(c,d);
c.push(4);
console.log(c,d);
d.pop();
console.log(c,d);