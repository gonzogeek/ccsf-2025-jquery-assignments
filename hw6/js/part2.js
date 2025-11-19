function normalize(text) {
  return text.toLowerCase();
}

function countOccurrences(content, char) {
  let count = 0;
  const normalizedContent = normalize(content);
  const normalizedChar = normalize(char);

  for (let ch of normalizedContent) {
    if (ch === normalizedChar) count++;
  }

  return count;
}

function buildResultHTML(char, count) {
  return `
    <p>
      The character "<strong>${char}</strong>" appears 
      <strong>${count}</strong> time(s) in your text.
    </p>
  `;
}

function openNotFoundPopup(char) {
  const popup = window.open(
    "",
    "notFoundWindow",
    "width=300,height=100,left=900,top=100"
  );

  popup.document.write(`
    <html>
    <body style="font-family: sans-serif; padding: 10px;">
      <p>Search character "<strong>${char}</strong>" not found in the content you typed.</p>
      <button onclick="window.close()">Close</button>
    </body>
    </html>
  `);

  popup.document.close();
}

function processSearch() {
  const content = $("#contentInput").val();
  const char = $("#charInput").val();

  if (!char || char.length !== 1) {
    $("#output").html(
      `<p style="color:red;">Please enter exactly one character.</p>`
    );
    return;
  }

  const count = countOccurrences(content, char);

  if (count > 0) {
    $("#output").html(buildResultHTML(char, count));
  } else {
    $("#output").html("");
    openNotFoundPopup(char);
  }
}

function clearForm() {
  $("#contentInput").val("");
  $("#charInput").val("");
  $("#output").html("");
}
