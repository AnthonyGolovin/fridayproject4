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

  $("#purchase").click(function(event) {
  event.preventDefault();
    var inputtedTopping = parseInt($("#toppingChoice :selected").val());
    var inputtedCrust = parseInt($("#crustChoice :selected").val());
    var inputtedSize = parseInt($("#sizeChoice :selected").val());
    var inputtedToppingStr = $("#toppingChoice :selected").text();
    var inputtedCrustStr = $("#crustChoice :selected").text();
    var inputtedSizeStr = $("#sizeChoice :selected").text();
  console.log(inputtedTopping);
  console.log(inputtedToppingStr);
  var pizzaPurchase = new Pizza(inputtedTopping, inputtedCrust, inputtedSize);
  var selectedItems = Object.values(pizzaPurchase);
  console.log(pizzaPurchase);
  console.log(Object.values(pizzaPurchase));
  console.log(selectedItems);
  console.log(selectedItems.reduce((a, b) => a + b));
  pizzaPurchase.totalPrice();
});

  // var pizzaPurchase = new Pizza(inputtedTopping, inputtedCrust, inputtedSize);
  // var totalPrice = Object.values(pizzaPurchase);
  // var optionsArray = [];
Pizza.prototpye.totalPrice = function() {
  return this.topping + this.crust + this.size;

}

$("#addToCart").click(function(event) {

  pizzaPurchase.totalPrice();












//     $("#purchase").click(function() {
//       if () {
//
//       } else if () {
//
//         } else if () {
//
//           }
//
//     })
// function price() {
//
// }
  });
};
});
