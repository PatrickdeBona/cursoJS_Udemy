const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware')


app.use(express.urlencoded({extended: true}))//Isso faz o Body do POST funcionar!
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(meuMiddleware);
app.use(routes);


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando!')
})

//para dar play é so ir no terminal e digitar: node server.js