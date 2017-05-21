Product.SIZE_NOT_APPLICABLE = -1;

function Product(code, color, size, price, currency) {
  this.code = code;
  this.color = color;
  this.size = size;
  this.price = price;
  this.currency = currency;
}

module.exports = Product;
