import * as User from "../models/UserModel.js";

User.init();

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("#loginBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      if (User.login(username, password)) {
        showMessage("success", "Login successful!");
        console.log("oi");
        window.location.href = "../html/workspace.html";
      } else {
        showMessage("error", "Invalid username or password!");
      }
    } catch (error) {
      console.log("deu erro");
      showMessage("error", error.message);
    }
  });

  function showMessage(type, message) {
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  }
});
