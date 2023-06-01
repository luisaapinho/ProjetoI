// Imports all the function from userModule.js
import * as User  from "../models/UserModel.js";

//Calls the function init that checks the array Users
User.init();

// Adds an event listener to the register button that calls the add function when clicked
document.getElementById("changePasswordBtn").addEventListener("click", function(event) {
  event.preventDefault();

  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  
  // Check if any of the input fields is empty
  if (newPassword == "" || confirmPassword == "") {
    showMessage("error", "Please fill all the fields");
  }
  // Check if the password and confirm password match
  else if (newPassword !== confirmPassword) {
    showMessage("error", "The passwords do not match");
  } else {
    try {
      User.changePassword(User.getUserLogged(), password);
      showMessage("success", "Password changed sucessfully");
      // Waits 1 second and redirects to the login page
      setTimeout(() => {
        location.href = "../html/login.html";
      }, 1000);
      
    } catch (error) {
      showMessage("error", error.message);
    }
  }
});

// Displays a message of the given type (e.g. success or error) with the given text
function showMessage(type, message) {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}


