function buildTopBottom(dimension) {
  let side = "";
  for (var counter = 1; counter <= dimension; counter++) {
    side += "*";
    if (counter != dimension) {
      side += " ";
    }
  }
  return side;
}

function buildSide(dimension) {
  let spaceNumber = (dimension - 2) * 2 + 1;
  let side = "<br>*";
  for (var counter = 1; counter <= spaceNumber; counter++) {
    side += " ";
  }
  side += "*";
  return side;
}

function buildSides(dimension) {
  let output = "";
  for (var counter = 1; counter <= dimension - 2; counter++) {
    output += buildSide(dimension);
  }
  return output;
}

function display(dimension) {
  let output = buildTopBottom(dimension);
  output += buildSides(dimension);
  output += "<br>" + buildTopBottom(dimension);

  $("#response").hide().html(output).fadeIn("slow");
}

function process() {
  let number, n1;

  number = $("#number").val();

  n1 = parseInt(number);

  display(n1);
}

$(document).ready(function () {
  $("form").validate({
    rules: {
      number: { required: true, number: true, min: 2, max: 10 },
    },
    messages: {
      number: {
        required: "Please submit your preferred size",
        number: "Please enter a number",
        min: "Please enter a number between 2 and 10",
        max: "Please enter a number between 2 and 10",
      },
    },
    submitHandler: function (form, event) {
      if (event) event.preventDefault();
      process();
    },
  });
});
