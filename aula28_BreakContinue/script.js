const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (let numero of numeros) {
    if (numero === 2 || numero === 5){
        continue; //Pula o 2 e o 5
    }
    if(numero === 7) {
        break; //Para o codigo
    }

    console.log(numero);
}