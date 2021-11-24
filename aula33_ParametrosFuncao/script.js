function funcao() {
    console.log(arguments); //Vira um 'array';
}
funcao('Valor',1,2,3,4,5);

function funcaoA() {
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total); //mostra o calculo de todos os argumentos passados
}
funcaoA(1,2,3,4,5,6,7,8);
//arguments que sustenta todos os argumentos enviados!

function funcaoB(a, b = 2, c = 4){ // Caso não passe valor para b ou c ele ira assumir valores
    console.log(a + b+ c);         //pre definidos.
}
funcaoB(2, undefined, 2);

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('-', 0, 20, 30, 40, 50);

//Arguments NÃO FUNCIONA em Arrow Function
//Usar o rest operator!