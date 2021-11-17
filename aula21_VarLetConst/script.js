const verdadeira = true;

//Let tem escopo de bloco {... bloco}
//Var só tem escopo de função

let nome = 'Luiz'; // crinado
var nome2 = 'Luiz';

var nome2 = 'Lucca'; // O var redeclara o valor != do let

if (verdadeira) {
    let nome = 'Otavio' // criando
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra Coisa'; //criando
        console.log(nome, nome2); //Vai buscando a variavel nome por bloco.
    }
}

function falaOi () {
    var nome = 'Luiz';
}

console.log(nome);// Nao deixa que os outros acesse os dados dentro da função.
falaOi();

var nome1 = 'Joao';
function falaOO () {
    console.log(nome1); //Procura a variavel fora da função
}

falaOO();
//-------------------------------------------------------------------

