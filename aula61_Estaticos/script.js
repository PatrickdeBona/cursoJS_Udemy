class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }
    static trocaPilha(){ //Método estático
        console.log('Trocando, pilha');
    }
}

const controle =  new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();

ControleRemoto.trocaPilha(); //Método referente a classe
console.log(controle);