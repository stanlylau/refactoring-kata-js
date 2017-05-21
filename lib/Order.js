function Order(id) {
  this.id = id;
  this.products = [];
}

Order.prototype.addProduct = function(product) {
  this.products.push(product);
};

Order.prototype.getProductsCount = function() {
  return this.products.length;
};

Order.prototype.getProduct = function(j) {
  return this.products[j];
};

module.exports = Order;
