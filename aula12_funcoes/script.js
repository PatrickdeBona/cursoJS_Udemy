// Introdução
function saudacao(nome) {
    return`Bom diaa, ${nome}!`;//Retorna alguma coisa
}

saudacao('Lucca'); //Chamando uma função
saudacao('Felipe');

const variavel = saudacao('Jonas'); //Salva o que saudacao retorna
console.log(variavel);
// ------------------------------------------------------------------------------
// 1ºForma de fazer Função.
function soma(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2,2));
function soma(x= 1, y = 2){ //Se nada for colocado na chamada da função x sera 1
    const resultado = x + y; // y sera 2
    return resultado;
}
// ---------------------------------------------------------------------------
// 2ºForma de fazer Função.

const raiz = function (n) {
    return n** 0.5;
}; //Precisa do ; nesse caso

console.log(raiz(9));

//---------------------------------------------------------------------------
// 3ºForma de fazer Função.
const raizz = (n) => { //A palavra function e substituida por =>.
    return n ** 0.5;
};

// | const raizz = n => n** 0.5; | Forma resumida da funçao de cima.

console.log(raizz(14));