function aplicarDesconto(valor, percentual) {
  return valor - (valor * percentual) / 100;
}

module.exports = { aplicarDesconto };
