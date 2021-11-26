//Factory function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        fala: function(assunto = 'NADA') {
            return `${nome} ${this.sobrenome} está falando sobre ${assunto}.`;
        },
        altura,
        peso,
        //Getter
         get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Patrick', 'Demarco', 1.8, 80);
console.log(p1.fala('tempo'));
console.log(p1.imc);
p1.nomeCompleto = 'Jucca da Silva';
console.log(p1.nomeCompleto);