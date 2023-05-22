// Imports all the function from userModule.js
import * as User  from "../models/UserModel.js";

//Calls the function init that checks the array Users
User.init();

// Adds an event listener to the register button that calls the add function when clicked
document.getElementById("registerBtn").addEventListener("click", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    User.add(username, email, password);
    showMessage("success", "Registration successful!");
    // Redirects to the login page
    window.location.href = "../html/login.html";
  } catch (error) {
    showMessage("error", error.message);
  }
});

// Displays a message of the given type (e.g. success or error) with the given text
function showMessage(type, message) {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}
