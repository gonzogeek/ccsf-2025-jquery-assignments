function interest(principal, interest_rate, years) {
  return principal * Math.pow(interest_rate + 1, years);
}

function buildInterestTable(principal, interest_rate, year_number) {
  let html = `
    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Year</th>
          <th>Amount on Deposit</th>
          <th>Interest Rate</th>
        </tr>
      </thead>
      <tbody>
  `;

  let year = 1;
  while (year <= year_number) {
    let amount = interest(principal, interest_rate, year);
    html += `
      <tr>
        <td>${year}</td>
        <td>${amount.toFixed(2)}</td>
        <td>${(interest_rate * 100).toFixed(0)}%</td>
      </tr>
    `;
    year++;
  }

  html += `
      </tbody>
    </table>
  `;
  return html;
}

function buildAndDisplayInterestTables(id) {
  let interest_rates = [0.05, 0.06, 0.07];
  let year_number = 4;
  let principal = 1000;
  html = "";
  for (let interest_rate of interest_rates) {
    console.log(interest_rate);
    html += buildInterestTable(principal, interest_rate, year_number);
    html += "<br>";
  }
  $(id).html(html);
}

$(document).ready(function () {
  buildAndDisplayInterestTables("#table-container");
});
