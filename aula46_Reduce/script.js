const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0); //setar o 1º valor como 0

console.log(total);


//Retorne um array com os pares (Filter)
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total2 = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

console.log(total2);

//Retorne um array com o dobro dos valores (Map)

const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total3 = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(total3);

//Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 63}
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);
