const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  let accountType;
  if (username === "employee" && password === "employees") {
    accountType = true;
    alert("You have successfully logged in as an employee.");
    location.reload();
  } else if (username === "manager" && password === "managers") {
    accountType = false;
    alert("You have successfully logged in as a manager.");
    location.reload();
  }
  else {
    loginErrorMsg.style.opacity = 1;
  }
})
