const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'testando',
    descricao: 'testando descricao'
}).then(dados => console.log(dados)).catch(e => console.log(e));


exports.paginaInicial = (req, res, next) => {
    res.render('index');
    return;

};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return;
}