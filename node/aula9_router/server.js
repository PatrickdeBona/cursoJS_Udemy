const express = require('express');
const app = express();
const routes = require('./routes')


app.use(express.urlencoded({extended: true}))//Isso faz o Body do POST funcionar!
app.use(routes)


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando!')
})

//para dar play é so ir no terminal e digitar: node server.js