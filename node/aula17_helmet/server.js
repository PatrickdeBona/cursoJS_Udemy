
require('dotenv').config(); //Variaveis de ambiente!
const express = require('express');//Inicialização do express
const app = express();

const mongoose = require('mongoose'); //Mongoose é o responsavel por modelar nosso banco de dados!
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('Connectado a base de dados')
    app.emit('pronto')
}).catch(e => console.log(e));

const session = require('express-session'); //Onde é identificado um navegador da pessoa, para reconhecer uma pessoa!
const MongoStore = require('connect-mongo');//Salvar na base de Dados
const flash = require('connect-flash'); //Mensagens rápidas e após lidas elas somem!

const routes = require('./routes'); //Rotas da aplicação
const path = require('path'); //Caminhos
const helmet = require('helmet'); // Segurança
const csrf = require('csurf'); //Crair Token para melhorar a seguraça da aplicação, principalmete em formulários.
const {meuMiddleware, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware'); //Funções executadas nas rotas

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}))//Isso faz o Body do POST funcionar!
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({ //Configurações de Sessão
    secret: 'abcdefghijk',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());
app.set('views', path.resolve(__dirname, 'src', 'views')); // Arquivos que renderizam na tela
app.set('view engine', 'ejs');
app.use(csrf())
app.use(meuMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);

app.use(routes);

app.on('pronto', () =>{
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando!')
    })
})


//para dar play é so ir no terminal e digitar: node server.js