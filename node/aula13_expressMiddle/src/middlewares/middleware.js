module.exports = (req, res, next) => {
    console.log('Passei no MiddleWare')
    if(req.body.cliente){
        console.log("eu vi o que vc mandou!")
    }
    next()
};