// EXERCÍCIO 1
const greetPeople = (parameter) => {
  let greeting = [];


  for (let index in parameter) {
    greeting.push(`Hello ${parameter[index]}`);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);

// EXERCÍCIO 2
const removeVowels = (parameter2) => {
  const characters = parameter2.split('');
  let results = '';
  let numVowels = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      numVowels += 1;
      characters[index] = numVowels;
    }
  }
  for (let index of characters) {
    results += index;
  }
  
  return results;
};

console.log(removeVowels('Dayane'));
const parameter2 = 'Dayane';
const result2 = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(removeVowels(parameter2), result2);

// EXERCÍCIO 3


// EXERCÍCIO 4
