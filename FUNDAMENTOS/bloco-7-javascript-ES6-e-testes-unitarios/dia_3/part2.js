//EXERCÍCIO 1
const assert = require('assert');
// escreva a função addOne aqui
const addOne = (array) => {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(array[index] + 1);
  };
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

//EXERCÍCIO 2
// escreva a função wordLengths aqui
const wordLengths = (arrayWords) => {
  const wordNum = [];
  for (let index = 0; index < arrayWords.length; index += 1) {
    wordNum.push(arrayWords[index].length);
  };
  return wordNum;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected2 = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output2 = wordLengths(words);
assert.deepStrictEqual(output2, expected2);

//EXERCÍCIO 3
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arrayNum) => {
  let sumNum = 0;
  for (let index in arrayNum) {
    sumNum += arrayNum[index];
  };
  return sumNum;
}

const numbers = [9, 23, 10, 3, 8];
const expected3 = 53;
const output3 = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output3, expected3);

//EXERCÍCIO 4
// escreva a função findTheNeedle aqui
const findTheNeedle = (arrayNeedle, findWord) => {
  let spot = -1;
  for (let index = 0; index < arrayNeedle.length; index += 1) {
    if (arrayNeedle[index] === findWord) {
      spot = index;
    };
  };
  return spot;
}

let words2 = ['house', 'train', 'slide', 'needle', 'book'];
let expected4 = 3;
let output4 = findTheNeedle(words2, 'needle');
assert.strictEqual(output4, expected4);

words2 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = 0;
output4 = findTheNeedle(words2, 'plant');
assert.strictEqual(output4, expected4);

words2 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = -1;
output4 = findTheNeedle(words2, 'plat');
assert.strictEqual(output4, expected4);
