function formatUSD(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function dollarsSold(itemAmount, itemNumber) {
  let dollars = 0;
  switch (itemNumber) {
    case 1:
      dollars = itemAmount * 20.99;
      break;
    case 2:
      dollars = itemAmount * 12.75;
      break;
    case 3:
      dollars = itemAmount * 9.95;
      break;
    case 4:
      dollars = itemAmount * 35.89;
      break;
    default:
      break;
  }

  return dollars;
}

function totalDollarsSold(item1Amount, item2Amount, item3Amount, item4Amount) {
  let dollars =
    dollarsSold(item1Amount, 1) +
    dollarsSold(item2Amount, 2) +
    dollarsSold(item3Amount, 3) +
    dollarsSold(item4Amount, 4);
  return dollars;
}

function display(name, item1Amount, item2Amount, item3Amount, item4Amount) {
  let totalAmount = item1Amount + item2Amount + item3Amount + item4Amount;
  let totalDollars = totalDollarsSold(
    item1Amount,
    item2Amount,
    item3Amount,
    item4Amount
  );

  $("#qty1").val(item1Amount);
  $("#qty2").val(item2Amount);
  $("#qty3").val(item3Amount);
  $("#qty4").val(item4Amount);
  $("#qtyTotal").val(totalAmount);

  $("#amt1").val(formatUSD(dollarsSold(item1Amount, 1)));
  $("#amt2").val(formatUSD(dollarsSold(item2Amount, 2)));
  $("#amt3").val(formatUSD(dollarsSold(item3Amount, 3)));
  $("#amt4").val(formatUSD(dollarsSold(item4Amount, 4)));
  $("#amtTotal").val(formatUSD(totalDollars));
}

function process() {
  var name, item1Amount, item2Amount, item3Amount, item4Amount, n1, n2, n3, n4;

  name = $("#name").val();
  item1Amount = $("#item1Amount").val();
  item2Amount = $("#item2Amount").val();
  item3Amount = $("#item3Amount").val();
  item4Amount = $("#item4Amount").val();

  n1 = parseInt(item1Amount);
  n2 = parseInt(item2Amount);
  n3 = parseInt(item3Amount);
  n4 = parseInt(item4Amount);

  display(name, n1, n2, n3, n4);
}

$(document).ready(function () {
  $("form").on("reset", function (e) {
    $("input[type='text']").val("");
  });

  $("form").validate({
    rules: {
      name: { required: true },
      item1Amount: { required: true, digits: true, min: 0 },
      item2Amount: { required: true, digits: true, min: 0 },
      item3Amount: { required: true, digits: true, min: 0 },
      item4Amount: { required: true, digits: true, min: 0 },
    },
    messages: {
      name: { required: "Please enter a seller's name" },
      item1Amount: {
        required: "This field is required",
        digits: "Please enter a whole number (no decimals)",
        min: "Please enter a number greater than 0",
      },
      item2Amount: {
        required: "This field is required",
        digits: "Please enter a whole number (no decimals)",
        min: "Please enter a number greater than 0",
      },
      item3Amount: {
        required: "This field is required",
        digits: "Please enter a whole number (no decimals)",
        min: "Please enter a number greater than 0",
      },
      item4Amount: {
        required: "This field is required",
        digits: "Please enter a whole number (no decimals)",
        min: "Please enter a number greater than 0",
      },
    },
    submitHandler: function (form, event) {
      if (event) event.preventDefault();
      process();
    },
  });
});
