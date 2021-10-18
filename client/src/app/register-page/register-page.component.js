const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-form-submit");
const registerErrorMsg = document.getElementById("register-error-msg");

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = registerForm.username.value;
  const password = registerForm.password.value;

  let accountType;
  if (username === "employee" && password === "employees") {
    accountType = true;
    alert("You have successfully registered as an employee.");
    location.reload();
  } else if (username === "manager" && password === "managers") {
    accountType = false;
    alert("You have successfully registered as a manager.");
    location.reload();
  }
  else {
    loginErrorMsg.style.opacity = 1;
  }
})
