//return

function soma(a, b) {
    return a + b; //retorna
}

function soma2(a, b) {
    console.log(a + b); //somente exibe
}

soma2(5, 2);

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Patrick', 'Demarco');
const p2 = {
    nome: 'Lucas',
    sobrenome:'Silva'
};

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);
//--------------------------------------------------------------------------
function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(2));