const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))//Isso faz o Body do POST funcionar!

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar </button>
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.get('/teste/:idUsuarios?', (req, res) => {
    console.log(req.query)
    res.send(req.params.idUsuarios);
});
//interrogação diz que o parametro pode ou nao ser recebido
//query : nome=Luiz&sobrenome=Miranda&idade=30

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando!')
})

//para dar play é so ir no terminal e digitar: node server.js