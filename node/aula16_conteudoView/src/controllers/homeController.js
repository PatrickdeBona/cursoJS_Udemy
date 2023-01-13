const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'testando',
    descricao: 'testando descricao'
}).then(dados => console.log(dados)).catch(e => console.log(e));


exports.paginaInicial = (req, res, next) => {
    req.flash('info', 'Olá Mundo')
    res.render('index', {
        titulo: 'Este é o titulo da página',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    });
    return;

};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return;
}