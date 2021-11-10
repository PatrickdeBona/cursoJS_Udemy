const nome = 'Patrick';
const sobrenome = 'Demarco';
const idade = 19;
const peso = 78;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2021 - idade;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg ');
console.log('Tem', altura, 'de altura e seu IMC é', imc);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);