var Product = require('./Product');

function OrdersWriter(orders) {
  this.orders = orders;
}

OrdersWriter.prototype.getContents = function() {
  var result = '<orders>';

  for(var i = 0; i < this.orders.getOrdersCount(); i++) {
    var order = this.orders.getOrder(i);

    result += '<order>';
    result += '<id>' + order.id + '</id>';
    result += '<products>';

    for(var j = 0; j < order.getProductsCount(); j++) {
      var product = order.getProduct(j);

      result += '<product>';
      result += '<code>' + product.code + '</code>';
      result += '<color>' + getColorFor(product) + '</color>';

      if(product.size != Product.SIZE_NOT_APPLICABLE)
        result += '<size>' + getSizeFor(product) + '</size>';

      result += '<price>' + product.price + '</price>';
      result += '<currency>' + product.currency + '</currency>';
      result += '</product>';
    }

    result += '</products>';
    result += '</order>';
  }

  result += '</orders>';
  return result;
};

function getSizeFor(product) {
   switch (product.size) {
     case 1:
         return "XS";
     case 2:
         return "S";
     case 3:
         return "M";
     case 4:
         return "L";
     case 5:
         return "XL";
     case 6:
         return "XXL";
     default:
         return "Invalid Size";
   }
};

function getColorFor(product) {
  switch (product.color) {
    case 1:
      return "blue";
    case 2:
      return "red";
    case 3:
      return "yellow";
    default:
      return "no color";
  }
};

module.exports = OrdersWriter;
