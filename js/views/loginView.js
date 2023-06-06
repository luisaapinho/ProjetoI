import * as User from "../models/UserModel.js";
//Calls the function init that checks the array Users
User.init();

// Adds an event listener to the register button that calls the add function when clicked
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("#loginBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      if (User.login(username, password)) {
        if (username === "admin1" && password === "admin1") {
          showMessage("success", "Login as admin successful!");
          // Redirect to a different page for admin
          setTimeout(() => {
            location.href = "../html/admin.html";
          }, 1000);
        } else {
          showMessage("success", "Login successful!");
          // Redirects to the workspace starting the game and the timer
          setTimeout(() => {
            location.href = "../html/workspace.html";
          }, 1000);
        }
      } else {
        showMessage("error", "Invalid username or password!");
      }
    } catch (error) {
      showMessage("error", error.message);
    }
    
// Displays a message of the given type (e.g. success or error) with the given text
  function showMessage(type, message) {
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  }
})});
