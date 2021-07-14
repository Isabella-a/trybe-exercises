const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const myRemove = require('./myRemove');

describe('Verifica se o item especificado foi retirado do array', () => {
  it('Verifica se o número 3 é removido do array: [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se o item especificado não foi retirado do array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se a função retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});