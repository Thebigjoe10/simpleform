const form = document.querySelector("#myForm");
const errorDiv = document.querySelector("#errorDiv");
const pass = document.getElementById("password")

form.addEventListener('submit', function(){
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const gender = form.gender.value;
  const password = form.password.value;

  // Check for empty fields
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    gender === "" ||
    password === ""
  ) {
    errorDiv.innerHTML = "Please fill out all fields.";
    return;
  }

  // Check for valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorDiv.innerHTML = "Please enter a valid email address.";
    return;
  }

  // Clear any existing error messages
  errorDiv.innerHTML = "";

  // Display success message
  alert("Form submitted successfully!");
})
