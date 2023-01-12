
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('Connectado a base de dados')
    app.emit('pronto')
}).catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware')


app.use(express.urlencoded({extended: true}))//Isso faz o Body do POST funcionar!
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
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
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(meuMiddleware);
app.use(routes);

app.on('pronto', () =>{
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando!')
    })
})


//para dar play é so ir no terminal e digitar: node server.js