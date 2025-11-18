function validateName() {
  const name = $("#name").val().trim();
  return name === "" ? "Please enter your name." : "";
}

function validateAge() {
  const age = $("input[name='age']:checked").val();
  return !age ? "Please select an age range." : "";
}

function validateBrowsers() {
  const browsers = $("input[name='browser']:checked");
  return browsers.length === 0 ? "Please select at least one browser." : "";
}

function validateGenre() {
  const genre = $("#genres").val();
  return !genre ? "Please select a movie genre." : "";
}

function buildValidationResponse(errors) {
  if (errors.length > 0) {
    let html = "";
    for (let error of errors) {
      html += `${error}<br>`;
    }
    return html;
  } else {
    return "Thanks, your data was submitted!";
  }
}

function handleFormSubmit(id) {
  let errors = [];

  const validators = [
    validateName,
    validateAge,
    validateBrowsers,
    validateGenre,
  ];

  for (let validator of validators) {
    let error = validator();
    if (error !== "") errors.push(error);
  }

  const result = buildValidationResponse(errors);

  $(id).html(result);
}

// --- Document Ready ---

$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    handleFormSubmit("#response");
  });

  $("input[type='reset']").on("click", function () {
    $("#response").html("");
  });
});
