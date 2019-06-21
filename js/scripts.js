$(document).ready(function() {

//Array
function PizzaOptions() {
  this.selections = []
}
//Objects
function Pizza(topping, crust, size) {
  this.topping = topping,
  this.crust = crust,
  this.size = size
}
function Cart(topping, crust, size) {
  this.topping = topping,
  this.crust = crust,
  this.size = size
}
var pizzaPurchase;


  $("#purchase").click(function(event) {
  event.preventDefault();
    var inputtedTopping = parseInt($("#toppingChoice :selected").val());
    var inputtedCrust = parseInt($("#crustChoice :selected").val());
    var inputtedSize = parseInt($("#sizeChoice :selected").val());
    var inputtedToppingStr = $("#toppingChoice :selected").text();
    var inputtedCrustStr = $("#crustChoice :selected").text();
    var inputtedSizeStr = $("#sizeChoice :selected").text();
  pizzaPurchase = new Pizza(inputtedTopping, inputtedCrust, inputtedSize);
  pizzaCart = new Cart(inputtedToppingStr, inputtedCrustStr, inputtedSizeStr);
  var selectedItems = Object.values(pizzaPurchase);
  console.log(selectedItems);

  pizzaPurchase.totalPrice();
  console.log(pizzaPurchase.totalPrice());
});

Pizza.prototype.totalPrice = function() {
  return this.topping + this.crust + this.size;
}
Cart.prototype.itemsInCart = function() {
  return this.topping + this.crust + this.size;
}

$("#addToCart").click(function(event) {
 event.preventDefault();
 console.log(pizzaPurchase);
  pizzaPurchase.totalPrice();
  $("#output").text("$" + pizzaPurchase.totalPrice() + ".00" );
    $("#output2").text(pizzaCart.itemsInCart());


  });
});
