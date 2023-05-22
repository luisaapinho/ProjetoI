import * as User  from "../models/UserModel.js";


//Calls the function init that checks the array Users
User.init();

document.addEventListener('DOMContentLoaded', function() {
    // Adds an event listener to the register button that calls the add function when clicked
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
  
  // Displays a message of the given type (e.g. success or error) with the given text
  function showMessage(type, message) {
      console.log("testee");
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  }
  });
