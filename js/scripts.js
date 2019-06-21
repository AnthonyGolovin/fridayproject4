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
    var inputtedTopping = $("#toppingChoice :selected").val();
    var inputtedCrust = $("#crustChoice :selected").val();
    var inputtedSize = $("#sizeChoice :selected").val();
    var inputtedToppingStr = $("#toppingChoice :selected").text();
    var inputtedCrustStr = $("#crustChoice :selected").text();
    var inputtedSizeStr = $("#sizeChoice :selected").text();
  console.log(inputtedTopping);
  console.log(inputtedToppingStr);
  
});

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
