//Exercício 1
let a = 6;
let b = 3;
console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Resto da divisão: ' + (a % b));

//Exercício 2
if (a > b) {
  console.log('a é maior que b');
} else {
  console.log('b é maior que a');
}

//Exercício 3
let c = 10;
if (a > b && a > c) {
  console.log('O maior número é o a');
} else if (b > a && b > c){
  console.log('O maior número é o b');
} else {
  console.log('O maior número é o c');
}

//Exercício 4
let number = 0;
if (number > 0) {
  console.log('Positive!');
} else if (number < 0) {
  console.log('Negative!');
} else {
  console.log('Zero!');
}

//Exercício 5
let angulo1 = 90;
let angulo2 = 30;
let angulo3 = 60;

if (angulo1 + angulo2 + angulo3 === 180) {
  console.log('True, os ângulos formam um triângulo.');
} else {
  console.log('False, os ângulos não formam um triângulo.');
}

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log('Ângulo inválido, todos os ângulos devem ser positivos.');
}
//Exercício 6
let pecaXadrez = 'torre';
let peca = pecaXadrez.toLowerCase();

switch (peca) {
  case 'rei':
    console.log('O rei pode se mover em qualquer direção, porém apenas uma casa por vez.');
    break;
  case 'rainha':
    console.log('A rainha pode se mover em qualquer direção e quantas casas quiser.');
    break;
  case 'torre':
    console.log('A torre pode se mover em linha reta, tanto na vertical como na horizontal, quantas casas quiser.');
    break;
  case 'bispo':
    console.log('O bispo pode se mover na diagonal, quantas casas quiser.');
    break;
  case 'cavalo':
    console.log('O cavalo pode se mover em L e é a única peça que pode pular outras.');
    break;
  case 'peao':
    console.log('O peão move sempre uma casa para frente, exceto no primeiro movimento que é possível se mover duas casas para frente.');
    break;
  default:
    console.log('Essa peça não existe!');
}

//Exercício 7
let nota = 75;

if (nota < 0 || nota > 100) {
  console.log('Nota inválida!');
} else if (nota >= 90) {
  console.log('Nota A!');
} else if (nota >= 80) {
  console.log('Nota B!');
} else if (nota >= 70) {
  console.log('Nota C!');
} else if (nota >= 60) {
  console.log('Nota D!');
} else if (nota >= 50) {
  console.log('Nota E!');
} else {
  console.log('Nota F!');
}

//Exercício 8
let number1 = 1;
let number2 = 3;
let number3 = 5;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  console.log('True, pelo menos um número é par!');
} else {
  console.log('False, nenhum número é par!');
}

//Exercício 9
if (number1 % 2 != 0 || number2 % 2 != 0 || number3 % 2 != 0) {
  console.log('True, pelo menos um número é ímpar!');
} else {
  console.log('False, nenhum número é ímpar!');
}

//Exercício 10
let productCost = 100;
let productValue = 200;

if (productCost < 0 || productValue < 0) {
  console.log('Erro, valor informado menor que zero!');
} else {
let profit = productValue - (productCost * 1.2);
console.log('O seu lucro é de R$ ' + profit);
}

//Exercício 11
let salario = 3000;
let aliquotaINSS;
let aliquotaIR;

if (salario <= 1556.94) {
  aliquotaINSS = salario * 0.08;
} else if (salario >= 1556.95 && salario <= 2594.92) {
  aliquotaINSS = salario * 0.09;
} else if (salario >= 2494.93 && salario <= 5189.82) {
  aliquotaINSS = salario * 0.11;
} else {
  aliquotaINSS = 570.88;
}

salario -= aliquotaINSS;

if (salario <= 1903.98) {
  aliquotaIR = 0;
} else if (salario >= 1903.99 && salario <= 3751.05) {
  aliquotaIR = salario * 0.075 - 142.8;
} else if (salario >= 2826.66 && salario <= 3751.05) {
  aliquotaIR = salario * 0.15 - 354.8;
} else if (salario >= 3751.06 && salario <= 4664.68) {
  aliquotaIR = salario * 0,225 - 636.13;
} else {
  aliquotaIR = salario * 0.275 - 869.36;
}

salario -= aliquotaIR;
console.log('Seu salário líquido é de R$ ' + salario);