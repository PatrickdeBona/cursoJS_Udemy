const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/Controller');

//Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

route.get('/contato', contatoController.paginaInicial)

module.exports = route;

