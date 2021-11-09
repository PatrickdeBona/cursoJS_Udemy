// String, number, undefined, null, boolean, 'symbol'

const nome = 'Luiz'; // String
const num = 10; // Number
const num1 = 10.52; // Number
let nomeAluno; // Undefined -> não aponta para lugar nenhum
let sobrenomeAluno = null; // Nulo -> não apomta para lugar nenhum na memória
const aprovado = true; // Boolean -> Só admite dois valores: true, false (lógico)

console.log(typeof aprovado);

//----------------------------------------------------------------------------
const a = [1,2];
const b = a;

console.log(a,b);

b.push(3);
console.log(a,b);