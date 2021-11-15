//const data = new Date(); //Cria um objeto data;
//const data0 = new Date(0); //marco 0
//const data = new Date(2019, 3, 20, 15, 14, 27); 0-11 mes
//ano, mes, dia, hora, min, s, ms

const data = new Date('2019-04-20 20:20:49'); //Outra forma
console.log(data);
console.log(data.toString());
console.log('Dia', data.getDate()); // da para pegar dia, hora, ano ...

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min= zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataBrasil = formataData(data);
console.log(dataBrasil);