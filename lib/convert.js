const convert = (cotacao, quantidade) => {
  return cotacao * quantidade
}

const toMoney = valor => {
  return Number(valor).toFixed(2)
}

module.exports = {convert, toMoney}