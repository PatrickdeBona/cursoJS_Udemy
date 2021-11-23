//1|Declaração de função (Function hoisting) = pode chamar a função antes ou depois.
falaoi();
function falaoi(){
    console.log('Oi');
}
falaoi();

//2|First-class objects (Objets de Primerira Classe)
//Function expression
const souUmDado = function () {
    console.log('Sou um dado!')
};
souUmDado();
function executaFuncao(funcao){
    funcao(); //Usa a função passada
}
executaFuncao(souUmDado); //passa a função

//3| Arrow function
const funcaoArrow = () => {
    console.log('Arrow function');
};
funcaoArrow();

//4| Dentro de um Objeto
const obj = {
    falar() {
        console.log('Estou falando...')
    }
};
obj.falar();