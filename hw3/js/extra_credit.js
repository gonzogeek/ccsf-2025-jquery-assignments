let a = Math.floor(Math.random() * 9) + 1;
let b = Math.floor(Math.random() * 9) + 1;

function display(answer) {
  let output = "<br>";
  if (answer === a * b) {
    output += "Very Good! Would You like to continue playing?";
    $("#success-choices").fadeIn("slow");
  } else {
    output += "No. Please try again.";
  }
  $("#response").hide().html(output).fadeIn("slow");
}

function process() {
  var answer, n1;

  answer = $("#answer").val();

  n1 = parseInt(answer);

  display(n1);
}

function makeMultiplicationQuestion() {
  return "What is the product of " + a + " and " + b + "?";
}

function continuePlaying() {
  $("#response").hide();
  $("#success-choices").hide();
  $("#answer").val("");
  a = Math.floor(Math.random() * 9) + 1;
  b = Math.floor(Math.random() * 9) + 1;
  $("#question").html(makeMultiplicationQuestion());
}

function stopPlaying() {
  $("#response")
    .hide()
    .html("<br>Thanks for playing, see you next time")
    .fadeIn();
  $("#success-choices").hide();
}

$(document).ready(function () {
  $("#question").html(makeMultiplicationQuestion());

  $("form").validate({
    rules: {
      answer: { required: true, number: true, min: 0, max: 81 },
    },
    messages: {
      answer: {
        required: "Please give an answer",
        number: "Please enter a number",
        min: "Hint: the answer can't be lower than 0",
        max: "Hint: the answer can't be higher than 81",
      },
    },
    submitHandler: function (form, event) {
      if (event) event.preventDefault();
      process();
    },
  });
});
