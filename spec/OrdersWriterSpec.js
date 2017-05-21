describe("OrdersWriter", function() {
  var Product = require('../lib/Product');
  var Order = require('../lib/Order');
  var Orders = require('../lib/Orders');
  var OrdersWriter = require('../lib/OrdersWriter');

  var orders;
  var order111;

  beforeEach(function() {
    orders = new Orders();
    order111 = new Order(111);
    orders.addOrder(order111);
  });

  it("has no order", function() {
    expect(new OrdersWriter(new Orders()).getContents())
      .toEqual('<orders></orders>');
  })

  it("has one order", function() {
    expect(new OrdersWriter(orders).getContents())
      .toEqual('<orders><order><id>111</id><products></products></order></orders>');
  })

  it("has two orders", function() {
    orders.addOrder(new Order(222));

    var order111Json = jsonOrder111WithProduct('');
    var order222Json = '<order><id>222</id><products></products></order>';
    expect(new OrdersWriter(orders).getContents())
      .toEqual('<orders>' + order111Json + order222Json + '</orders>');
  })

  it("has one order with one product", function() {
    order111.addProduct(new Product("Shirt", 1, 3, 2.99, "TWD"));

    var order111Json = jsonOrder111WithProduct('<product><code>Shirt</code><color>blue</color><size>M</size><price>2.99</price><currency>TWD</currency></product>');
    expect(new OrdersWriter(orders).getContents())
      .toEqual('<orders>' + order111Json + '</orders>');
  })

  it("has one order with one product but no size", function() {
    order111.addProduct(new Product("Pot", 2, -1, 16.50, "SGD"));

    var order111Json = jsonOrder111WithProduct('<product><code>Pot</code><color>red</color><price>16.5</price><currency>SGD</currency></product>');
    expect(new OrdersWriter(orders).getContents())
      .toEqual('<orders>' + order111Json + '</orders>');
  })

  function jsonOrder111WithProduct(productJson) {
    return '<order><id>111</id><products>' + productJson + '</products></order>';
  }
});
