const _velocidade = Symbol(); //vai gerar um id aleatório sempre que chamado!

class Carro {
    constructor(nome){
        this.nome = nome;
        //this.velocidade = 0;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] =  valor;
    }

    acelerar() {
        if(this.velocidade >= 100) return; //para em 100km
        //this.velocidade++;
        this[_velocidade]++;
    }

    freiar() {
        if(this.velocidade <= 0) return;
        //this.velocidade--;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++){ //Velocidade para em 100km
    c1.acelerar();
}

console.log(c1);
//c1.velocidade = 2000; Não funciona
c1.velocidade = 200; //Limita a 100 por causa do symbol e get e set!
console.log(c1.velocidade);
