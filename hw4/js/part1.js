function buildArray(firstDigit, lastDigit, i) {
  let myArray = [];
  for (var counter = firstDigit; counter <= lastDigit; counter += i) {
    myArray.push(counter);
  }
  return myArray;
}

function findAnswer(numArray, operation) {
  let answer = numArray[0];
  let first = true;
  for (var value of numArray) {
    if (first) {
      first = false;
      continue;
    }
    answer = eval(`${answer} ${operation} ${value}`);
  }
  return answer;
}

function buildMessage(numArray, operation) {
  let message = `${numArray[0]} `;
  let first = true;
  for (var value of numArray) {
    if (first) {
      first = false;
      continue;
    }
    message += `${operation} ${value} `;
  }
  let answer = findAnswer(numArray, operation);
  message += `= ${answer.toLocaleString()}`;
  return message;
}

$(document).ready(function () {
  let array1 = buildArray(5, 25, 4);
  let array2 = buildArray(3, 18, 3);
  $("#sum1").text(buildMessage(array1, "+"));
  $("#mult1").text(buildMessage(array1, "*"));
  $("#sum2").text(buildMessage(array2, "+"));
  $("#mult2").text(buildMessage(array2, "*"));
  $("#draggable").draggable();
});
