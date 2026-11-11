const { somar, subtrair, multiplicar, dividir } = require("./calculadora");

test("soma 10 + 5 e retorna 15", () => {
  expect(somar(10, 5)).toBe(15);
});

test("subtrai 5 de 10 e retorna 5", () => {
  expect(subtrair(10, 5)).toBe(5);
});

test("multiplica 10 por 5 e retorna 50", () => {
  expect(multiplicar(10, 5)).toBe(50);
});

test("divide 10 por 5 e retorna 2", () => {
  expect(dividir(10, 5)).toBe(2);
});

test("dividir por zero gera o erro esperado", () => {
  expect(() => dividir(10, 0)).toThrow("Divisão por zero");
});

test("soma 15 + 5 e retorna 20", () => {
  expect(somar(15, 5)).toBe(20);
});

test("subtrai 8 de 20 e retorna 12", () => {
  expect(subtrair(20, 8)).toBe(12);
});

test("multiplica 6 por 7 e retorna 42", () => {
  expect(multiplicar(6, 7)).toBe(42);
});

test("divide 40 por 5 e retorna 8", () => {
  expect(dividir(40, 5)).toBe(8);
});
