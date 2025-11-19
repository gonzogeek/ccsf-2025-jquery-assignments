function hasFourDecimals(text) {
  const match = text.match(/^[-+]?\d+\.(\d{4,})$/);
  return match !== null;
}

function buildErrorHTML() {
  return `
    <p style="color:red;">
      Invalid input! Please enter a valid number with at least 4 decimal places.
    </p>
  `;
}

function buildResultHTML(
  num,
  roundedInt,
  sqrtInt,
  tenths,
  hundredths,
  thousandths
) {
  return `
    <table border="1" cellspacing="0" cellpadding="6">
      <tr><th>Original Number</th><td>${num}</td></tr>
      <tr><th>Plain ol' Rounded</th><td>${roundedInt}</td></tr>
      <tr><th>Square Root (rounded)</th><td>${sqrtInt}</td></tr>
      <tr><th>Rounded to Tenths</th><td>${tenths}</td></tr>
      <tr><th>Rounded to Hundredths</th><td>${hundredths}</td></tr>
      <tr><th>Rounded to Thousandths</th><td>${thousandths}</td></tr>
    </table>
  `;
}

function processNumber() {
  const inputText = $("#numInput").val().trim();

  if (!hasFourDecimals(inputText) || isNaN(parseFloat(inputText))) {
    $("#output").html(buildErrorHTML());
    return;
  }

  const num = parseFloat(inputText);

  const roundedInt = Math.round(num);
  const sqrtInt = Math.round(Math.sqrt(num));
  const tenths = num.toFixed(1);
  const hundredths = num.toFixed(2);
  const thousandths = num.toFixed(3);

  $("#output").html(
    buildResultHTML(num, roundedInt, sqrtInt, tenths, hundredths, thousandths)
  );
}

function clearForm() {
  $("#numInput").val("");
  $("#output").html("");
}
