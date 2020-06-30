const parseCurrency = price => {
  return new Intl.NumberFormat('fil-PH', { style: 'currency', currency: 'PHP' }).format(price)
}

module.exports = parseCurrency