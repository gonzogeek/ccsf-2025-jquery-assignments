function sum(n1, n2, n3) {
  return n1 + n2 + n3;
}

function average(n1, n2, n3) {
  return ((n1 + n2 + n3) / 3).toFixed(2);
}

function product(n1, n2, n3) {
  return n1 * n2 * n3;
}

function display(sum, average, product, min, max) {
  let output =
    "Sum: " +
    sum +
    "<br>" +
    "\nAverage: " +
    average +
    "<br>" +
    "\nProduct: " +
    product +
    "<br>" +
    "\nSmallest: " +
    min +
    "<br>" +
    "\nLargest: " +
    max;

  if (
    isNaN(sum) ||
    isNaN(average) ||
    isNaN(product) ||
    isNaN(min) ||
    isNaN(max)
  ) {
    output = "Try again, with three numbers :)";
  }

  $("#response").hide().html(output).fadeIn("slow");
}

function process() {
  var number1, number2, number3, n1, n2, n3;

  number1 = $("#num1").val();
  number2 = $("#num2").val();
  number3 = $("#num3").val();

  n1 = parseInt(number1);
  n2 = parseInt(number2);
  n3 = parseInt(number3);

  display(
    sum(n1, n2, n3),
    average(n1, n2, n3),
    product(n1, n2, n3),
    Math.min(n1, n2, n3),
    Math.max(n1, n2, n3)
  );
}

$(document).ready(function () {
  $("form").on("reset", function (e) {
    $("#response").html("").fadeIn("slow");
  });
});
