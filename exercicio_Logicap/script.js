//Escreva uma função que recebe 2 números e retorne  maior deles

function MaiorMenor(num1, num2) {
    if(num1 > num2){
        return num1;
    }
        return num2; //NÃO PRECISA DE ELSE POIS SE NÃO RETORNOU A DE CIMA VAI
                     // AUTOMATICAMENTE RETORNAR A DE BAIXO

}


/*
Outra forma:
const max = (x, y) => x > y ? x : y;
*/

console.log(MaiorMenor(2000, 500));