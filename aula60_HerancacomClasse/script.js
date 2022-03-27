class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }    

    desligar(){
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }    

}

const d1 = new Dispositivo('Fone');
d1.ligar();
console.log(d1);

class Smartphone extends Dispositivo{ //chama a classe pai!
    constructor(nome, cor){
        super(nome); // chamando o construtor da classe pai
        this.cor = cor;
    }
}

const s1 = new Smartphone('LG', 'Preto');
console.log(s1);