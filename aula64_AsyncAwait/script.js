function rand(min= 0,max = 3) {
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

Espera('Fase 1', rand(0, 3)).then( valor => {
    console.log(valor)
    return Espera('Fase 2', rand());
}).then(fase => {
    console.log(fase)
    return Espera('Fase 3', rand());
}).then(fase => {
    console.log(fase)
    
}).catch( e => console.log(e));

async function executa(){
    try{
   const fase1 = await Espera('Fase 1', rand(0, 3));
   console.log(fase1)
   const fase2 = await Espera('Fase 1', rand(0, 3));
   console.log(fase2)
   const fase3 = await Espera('Fase 1', rand(0, 3));
   console.log(fase3)
    } catch(e){
        console.log(e);
    }
}
executa();

