function validatePhone() {
  const phoneInput = document.getElementById("phone").value.trim();
  const output = document.getElementById("output");
  const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;

  if (!phoneRegex.test(phoneInput)) {
    output.textContent =
      "❌ Invalid format. Please type the phone number like this: (999) 999-9999";
    return;
  }

  output.textContent = `✅ Thank you for your phone number: ${phoneInput}. An agent of chaos will contact you soon.`;
}

function clearForm() {
  document.getElementById("phone").value = "";
  document.getElementById("output").textContent = "";
}
