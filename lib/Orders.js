function Orders() {
  this.orders = [];
}

Orders.prototype.addOrder = function(order) {
  this.orders.push(order);
};

Orders.prototype.getOrdersCount = function() {
  return this.orders.length;
};

Orders.prototype.getOrder = function(j) {
  return this.orders[j];
};

module.exports = Orders;
