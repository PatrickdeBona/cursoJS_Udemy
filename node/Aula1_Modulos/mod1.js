const nome = 'Luiz';
const sobrenome = 'Miranda'

const falaNome = () => nome + ' ' + sobrenome;


// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
//exports é uma referência
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'Testando'
// O this se refere ao exports
//console.log(module.exports)

