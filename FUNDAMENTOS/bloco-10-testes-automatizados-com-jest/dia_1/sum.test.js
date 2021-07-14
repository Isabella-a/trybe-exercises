const { test, expect } = require('@jest/globals');
const sum = require('./sum.js');
// 1 A função sum(a, b) retorna a soma do parâmetro a com o b
// a. Teste se o retorno de sum(4, 5) é 9
// b. Teste se o retorno de sum(0, 0) é 0
// c. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// d. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe('Soma de dois números', () => {
  test('Soma de 4 e 5', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Soma de 0 e 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Teste de erro quando soma 4 e string 5', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  test('Teste se a mensagem de erro está funcionando para soma de 4 e "5"', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});