function letterGrade(gradePercentage) {
  switch (true) {
    case gradePercentage >= 90:
      return "A";
      break;
    case gradePercentage >= 80 && gradePercentage < 90:
      return "B";
      break;
    case gradePercentage >= 70 && gradePercentage < 80:
      return "C";
      break;
    case gradePercentage >= 60 && gradePercentage < 70:
      return "D";
      break;
    default:
      return "F";
      break;
  }
}

function display(hwkAvg, midTermScore, finalExamScore, participationScore) {
  let gradePercentage =
    0.5 * hwkAvg +
    0.2 * midTermScore +
    0.2 * finalExamScore +
    0.1 * participationScore;
  let grade = letterGrade(gradePercentage);
  let output = "Final Grade: " + gradePercentage.toFixed(2) + "% - " + grade;

  if (grade == "D" || grade == "F") {
    output += "<br> Student must retake the course";
  }

  $("#response").hide().html(output).fadeIn("slow");
}

function process() {
  var hwkAvg, midTermScore, finalExamScore, participationScore, n1, n2, n3, n4;

  hwkAvg = $("#hwkAvg").val();
  midTermScore = $("#midTermScore").val();
  finalExamScore = $("#finalExamScore").val();
  participationScore = $("#participationScore").val();

  n1 = parseInt(hwkAvg);
  n2 = parseInt(midTermScore);
  n3 = parseInt(finalExamScore);
  n4 = parseInt(participationScore);

  display(n1, n2, n3, n4);
}

$(document).ready(function () {
  $("form").on("reset", function (e) {
    $("#response").html("").fadeIn("slow");
  });

  $("form").validate({
    rules: {
      hwkAvg: { required: true, number: true, min: 0, max: 100 },
      midTermScore: { required: true, number: true, min: 0, max: 100 },
      finalExamScore: { required: true, number: true, min: 0, max: 100 },
      participationScore: { required: true, number: true, min: 0, max: 100 },
    },
    messages: {
      hwkAvg: {
        required: "This field is required",
        number: "Please enter a number",
        min: "Please enter a number greater than 0",
        max: "Please enter a number less than 100",
      },
      midTermScore: {
        required: "This field is required",
        number: "Please enter a number",
        min: "Please enter a number greater than 0",
        max: "Please enter a number less than 100",
      },
      finalExamScore: {
        required: "This field is required",
        number: "Please enter a number",
        min: "Please enter a number greater than 0",
        max: "Please enter a number less than 100",
      },
      participationScore: {
        required: "This field is required",
        number: "Please enter a number",
        min: "Please enter a number greater than 0",
        max: "Please enter a number less than 100",
      },
    },
    submitHandler: function (form) {
      process();
    },
  });
});
