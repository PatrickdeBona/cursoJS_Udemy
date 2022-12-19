function rand(min,max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min) + min);
}
   
   
function Espera(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad Value');
        setTimeout(()=>{
        resolve(msg + ' Passei');
        },tempo);

    });

}
   

//Promise.all Promise.race Promise.resolve Promise.reject

const promises = ['Primeiro valor',
Espera('Promise 1', 3000),
Espera('Promise 2', 500),
Espera('Promise 3', 1000),
'Outro valor'
];
const p = [
Espera('Promise 1', 3000),
Espera('Promise 2', 500),
Espera('Promise 3', 1000),
];

Promise.all(promises).then(function(valor){
    console.log(valor);
}).catch(function(erro) {
    console.log(erro);
})

Promise.race(p).then(function(valor){
    console.log(valor);
}).catch(function(erro) {
    console.log(erro);
})

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    }else {
        return Espera('Baixei a pagina', 3000);
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e))