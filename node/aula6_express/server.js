const express = require('express');
const app = express();

//Operações:
//CRUD -> CREATE, READ, UPDATE, DELETE
//         POST   GET   PUT     DELETE

//http://meusite.com/ <- GET para entregar a página!
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar </button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebido!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando!')
})

//para dar play é so ir no terminal e digitar: node server.js