//For Classico -> Geralmente com interáveis como (array ou string)
const nome = ['Luiz', 'Moreno'];

for (let a = 0; a < nome.length; a++){
    console.log(nome[a]);
}

console.log('-------------------------');

//ForIn -> Retorna o índice ou chave (string, array ou objeto)

for (let i in nome) {
    console.log(nome[i]);
}

console.log('-------------------------');

//ForOf -> Retorna o valor em si (interáveis, array ou strings)

for (let valor of nome){
    console.log(valor);
}

console.log('--------------------------');

//ForEach

nome.forEach(function(el) {
    console.log(el);
});