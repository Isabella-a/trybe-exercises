//Parte I
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercício 1
console.log(`Bem vinda, ${info.personagem}!`);

//Exercício 2
info['recorrente'] = 'Sim';

for (let key in info) {
  console.log(`${key} : ${info[key]}`);
}

//Exercício 3
for (let key in info) {
  console.log(key);
}

//Exercício 4
for (let key in info) {
  console.log(info[key]);
}

//Exercício 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Montain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for (let key in info) {
  if (info[key] === info.recorrente && info[key] === 'Sim' && info[key] === info2[key]) {
    console.log('Ambos recorrentes');
  } else {
  console.log (`${info[key]} e ${info2[key]}`);
  }
}

//Parte II
//Exercício 1
function checkPalindromo(word) {
  let palindromo = false;
  for (let index in word) {
    if (word[index] === word[word.length - 1 - index]) {
      palindromo = true;
    } else {
      palindromo = false;
    }
  }
  console.log(`A palavra é um palíndromo? ${palindromo}`);
}
checkPalindromo('arara');

//Exercício 2
function findTheHighestNumber(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let indexHighestNumber = 0;
  for (let index in arrayNumbers) {
    if (highestNumber < arrayNumbers[index]) {
      highestNumber = arrayNumbers[index];
      indexHighestNumber = index;
    }
  }
  console.log(`O índice do maior número é ${indexHighestNumber}`);
}
findTheHighestNumber([2, 3, 6, 7, 10, 1]);

//Exercício 3
function findTheSmallestNumber(arrayNumbers2) {
  let smallestNumber = arrayNumbers2[0];
  let indexSmallestNumbers = 0;
  for (let index in arrayNumbers2) {
    if (smallestNumber > arrayNumbers2[index]) {
      smallestNumber = arrayNumbers2[index];
      indexSmallestNumbers = index;
    }
  }
  console.log(`O índice do menor número é ${indexSmallestNumbers}`);
}
findTheSmallestNumber([2, 4, 6, 7, 10, 0, -3]);

//Exercício 4
function findTheLonggestName(arrayNames) {
  let longgestName = arrayNames[0];
  for (let indexArray = 0; indexArray < arrayNames.length; indexArray += 1) {
    if (longgestName.length < arrayNames[indexArray].length) {
      longgestName = arrayNames[indexArray];
    }
  }
  console.log(`O nome com maior número de caracteres é: ${longgestName}.`)
}
findTheLonggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

//Exercício 5


//Exercício 6
function logNumber(number) {
  let somaNumber = 0;
  for (let index = 1; index <= number; index += 1) {
    somaNumber += index; 
  }
  console.log(`A soma é: ${somaNumber}`);
}
logNumber(5);

//Exercício 7
function comparingStrings(stringWord, stringEnding) {
  let comparisonOfStrings = false;
  let index2 = 0;
  for (let index = stringWord.length - stringEnding.length; index < stringWord.length; index += 1) {
    if (stringWord[index] === stringEnding[index2]) {
      comparisonOfStrings = true;
    } else {
      comparisonOfStrings = false;
    }
    index2 += 1;
  }
  console.log(comparisonOfStrings);
}
comparingStrings('trybe', 'be');