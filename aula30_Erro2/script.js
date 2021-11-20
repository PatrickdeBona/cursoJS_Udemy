try{
    // é executado quando não há erros
} catch (e) {
    // é executado quando há erros
} finally {
    //sempre
}

function retornaHora(data) {
    if (!(data instanceof Date)) {
        console.log('Não é')
    }
}