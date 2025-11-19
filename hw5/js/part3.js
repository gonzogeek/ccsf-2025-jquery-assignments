const stateData = [
  {
    abbr: "AL",
    name: "Alabama",
    capital: "Montgomery",
    population: "4,903,185",
  },
  { abbr: "AK", name: "Alaska", capital: "Juneau", population: "731,545" },
  { abbr: "AZ", name: "Arizona", capital: "Phoenix", population: "7,278,717" },
  {
    abbr: "AR",
    name: "Arkansas",
    capital: "Little Rock",
    population: "3,017,825",
  },
  {
    abbr: "CA",
    name: "California",
    capital: "Sacramento",
    population: "39,512,223",
  },
  { abbr: "CO", name: "Colorado", capital: "Denver", population: "5,758,736" },
];

function normalize(text) {
  return text.trim().toLowerCase();
}

function findState(userInput) {
  let input = normalize(userInput);

  return stateData.find(
    (state) =>
      normalize(state.name) === input || normalize(state.abbr) === input
  );
}

function buildStateInfoHTML(state) {
  return `
    <table border="1" cellspacing="0" cellpadding="6">
      <tr><th>State</th><td>${state.name}</td></tr>
      <tr><th>Abbreviation</th><td>${state.abbr}</td></tr>
      <tr><th>Capital</th><td>${state.capital}</td></tr>
      <tr><th>Population</th><td>${state.population}</td></tr>
    </table>
  `;
}

function buildErrorHTML() {
  const available = stateData.map((s) => `${s.name} (${s.abbr})`).join(", ");
  return `
    <p style="color:red;">
      Sorry, we do not have information about this state!<br>
      We only have information about: <br><br>
      ${available}
    </p>
  `;
}

function handleStateLookup() {
  const userInput = $("#stateInput").val();

  if (userInput.trim() === "") {
    $("#output").html(
      "<p style='color:red;'>Please type a state name or abbreviation.</p>"
    );
    return;
  }

  const state = findState(userInput);

  if (state) {
    $("#output").html(buildStateInfoHTML(state));
  } else {
    $("#output").html(buildErrorHTML());
  }
}

function clearForm() {
  $("#stateInput").val("");
  $("#output").html("");
}
