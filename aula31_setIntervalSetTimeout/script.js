function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        Hour12: false
    });
}


const timer = setInterval(function () { //Cria um intervalo de repetição do codigo
    console.log(mostraHora());
}, 1000);

setTimeout(function() { //Coloca um tempo para que a execução do intervalo termine
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('oi');
}, 6000);