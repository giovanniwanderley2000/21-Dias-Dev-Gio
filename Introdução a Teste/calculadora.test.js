const calculadora = require ("./calculadora")


test('somar um mais um é igual a dois', () => {
  expect(calculadora.somar(1, 1)).toBe(2)
});

test('subtrair um por um é zero', () => {
    expect(calculadora.subtrair(1, 1)).toBe(0)
  });

  test('multiplicar 2 por um é igual a dois', () => {
    expect(calculadora.multiplicar(2, 1)).toBe(2)
  });

  test('dividir quatro por dois é igual a 2', () => {
    expect(calculadora.dividir(4, 2)).toBe(2)
  });