let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1
for (let number of numbers) {
  console.log(number);
}

//Exercício 2
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log('A soma dos números do array é: ' + soma);

//Exercício 3
let mediaAritmetica = 0;
mediaAritmetica = soma / numbers.length;
console.log('A média aritmética do array é: ' + mediaAritmetica);

//Exercício 4
if (mediaAritmetica > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

//Exercício 5
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index +=1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
console.log('Maior número do array: ' + maiorNumero);

//Exercício 6
let numImpar = 0;
for (let index = 0; index < numbers.length; index +=1) {
  if (numbers[index] % 2 != 0) {
    numImpar +=1;
  }
}

if (numImpar > 0) {
  console.log(`O array possui ${numImpar} números ímpares.`);
} else {
  console.log(`Nenhum valor ímpar encontrado!`);
}

//Exercício 7
let menorNum = numbers[0];
for (let index = 1; index < numbers.length; index +=1) {
  if (menorNum > numbers[index]) {
    menorNum = numbers[index];
  }
}
console.log(`O menor número do array é: ${menorNum}.`);

//Exercício 8
let numbers2 = [];
for (let index = 1; index < 26; index += 1) {
  numbers2.push(index);
}
console.log(numbers2);

//Exercício 9
for (let index = 0; index < numbers2.length; index += 1) {
  console.log(numbers2[index] * 2);
}
