const multiplicador = require('./B/C/D/mod');
// const cachorro = require('./mod')

console.log(multiplicador(2,2))
const path = require('path')

console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))

console.log(__filename); //Pega o local do arquivo
console.log(__dirname) // Pega o diretorio do arquivo