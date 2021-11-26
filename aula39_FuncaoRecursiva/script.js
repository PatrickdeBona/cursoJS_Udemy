function recursiva(max) {
    console.log(max);
    if(max >= 10) return;
    max++;
    
    recursiva(max); //Função recursiva, se chama novamente.
}

recursiva(0);