const mod1 = require('./mod1');
const falaNome = mod1.falaNome
const axios = require('axios')
//Pega tudo que está em mod1
//console.log(mod1)
console.log(falaNome())

//Pode ser feito por desestruturação
//const {nome, sobrenome, falaNome} = require('./mod1')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e))