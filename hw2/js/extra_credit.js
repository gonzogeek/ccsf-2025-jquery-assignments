function exchange() {
  let input = parseFloat($("input").val());
  $("tbody tr").each(function () {
    let cells = $(this).children("td");

    let exchangedContent = cells.eq(1).text();
    let exchangedInput = parseFloat(exchangedContent) * input;
    let output = Number.isNaN(exchangedInput)
      ? "$0.00"
      : "$" + exchangedInput.toFixed(2);
    cells.eq(2).text(output);
  });
}

function toggle() {
  if ($("#toggle").is(":hidden")) {
    $("#toggle").show();
  } else {
    $("#toggle").hide();
  }
}

function highlight() {
  $('input[type="text"]').css("background-color", "#a68dad");
}

function unhighlight() {
  $('input[type="text"]').css("background-color", "white");
}

$(document).ready(function () {
  $('input[type="text"]').focusout(function () {
    unhighlight();
  });
});
