function rand(min,max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min) + min);
}
   
   
function Espera(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad Value');
        setTimeout(()=>{
        resolve(msg);
        },tempo);

    });

}
   

Espera('Frase 1', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return Espera(2222, rand(1,3))}).then(resposta => {
    console.log(resposta);
    return Espera('Frase 3', rand(1,3))}).then(resposta => {
    console.log(resposta);
}).catch(e => {
    console.log('Erro:', e);
});

console.log('Isso vai ser Mostrado antes.');
