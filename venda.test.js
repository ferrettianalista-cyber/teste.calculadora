const { calcularVenda } = require("./venda");

test("calcula a venda de dois produtos de R$ 50 com 10% de desconto", () => {
  expect(calcularVenda(50, 2, 10)).toBe(90);
});

test("calcula a venda de três produtos de R$ 80 com 15% de desconto", () => {
  expect(calcularVenda(80, 3, 15)).toBe(204);
});
