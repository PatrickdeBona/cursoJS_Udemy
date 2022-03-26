class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
}
    Comer(){
        console.log(`${this.nome} está comendo`);
}
    beber(){
        console.log(`${this.nome} está bebendo`);
}
}

const p1 = new Pessoa('Lucas', 'Dias');
console.log(p1);
p1.beber();