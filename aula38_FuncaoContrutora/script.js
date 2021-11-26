//Função contrutora -> objetos
// Construtora -> Inicia com letra Maiuscula.

function Pesssoa (nome, sobrenome){
    //PRIVADAS
    const metodoInterno = function() {

    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ' Sou um método');
    };
}

const p1 = new Pesssoa('Lucca', 'Lima');
const p2 = new Pesssoa('Lindinho', 'Silva');
p1.metodo();
