const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json');

const escreve = require('./modulos/escreve');
const ler = require('./modulos/ler');
// const pessoas = [
//     {nome: 'JOÃO'},
//     {nome: 'Maria'},
//     {nome: 'Juse'},
// ];
// const json = JSON.stringify(pessoas, '',2);
// escreve(caminhoArquivo, json);

async function lerArquivo(caminho){
  const dados =  await ler(caminho);
  renderiza(dados) ;
}

function renderiza(dados){
    dados = JSON.parse(dados);
    dados.forEach(element => 
        console.log(element.nome)
    );
}
lerArquivo(caminhoArquivo)
