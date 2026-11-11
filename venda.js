const { aplicarDesconto } = require("./desconto");

function calcularVenda(preco, quantidade, desconto) {
  const subtotal = preco * quantidade;
  return aplicarDesconto(subtotal, desconto);
}

module.exports = { calcularVenda };
