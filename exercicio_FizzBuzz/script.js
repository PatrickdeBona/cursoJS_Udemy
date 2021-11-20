function random() {
    const r = Math.random() * (100 - 1) + 1;
    return Math.floor(r);
}

const FizB = (num) => {
    
    if(Number.isInteger(num) === true){
        if (num % 3 === 0 && num % 5 == 0){
            return 'FizzBuzz';
        }
        if( num % 3 === 0){
            return 'Fizz';
        }
        if(num % 5 === 0){
            return 'Buzz';
        }
            return num;
    }else{
        return num;
    }
}

console.log(FizB(random()));