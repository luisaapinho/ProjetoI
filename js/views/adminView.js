// Import the UserModel module
import * as User from "../models/UserModel.js";

// When the DOM content is loaded, execute the following code
document.addEventListener("DOMContentLoaded", function () {
  // Get all users from the UserModel module
  const allUsers = User.getUsers();

  // Call the renderTable function to display all users in the table
  renderTable(allUsers);
});

// Select the elements with IDs "adminHome" and "lupa"
let arrow = document.querySelector("#adminHome");
let lupa = document.getElementById("lupa");

// Add a click event listener to the "adminHome" element
arrow.addEventListener("click", function () {
  // Call the logout function from the UserModel module
  User.logout();

  // Redirect to the index.html page after a delay of 1000 milliseconds
  setTimeout(() => {
    location.href = "../index.html";
  }, 1000);
});


// Add a click event listener to the "lupa" element
lupa.addEventListener("click", function () {
  // Get the value entered in the input field with ID "inputForm"
  const usernameSearched = document.querySelector("#inputForm").value;

  // Get all users from the UserModel module
  const allUsers = User.getUsers();

  // Call the renderTable function with the searched username
  renderTable(allUsers, usernameSearched);
});

function renderTable(allUsers, usernameSearched = "") {
  // Select the table element with ID "tableAdmin"
  let table = document.querySelector("#tableAdmin");

  // Initialize the table content with the table header row
  let content = "<tr><th>USER</th><th>ACTION</th><tr>";

  // Variable to track if the user is found
  let userFound = false;

  // Loop through each user in the allUsers array
  for (const user of allUsers) {
    // Check if the username contains the searched username
    if (user.username.includes(usernameSearched)) {
      // Set userFound to true
      userFound = true;

      // Add a table row for the user with username and remove button
      content += `
        <tr>
          <td>${user.username}</td>
          <td><button class='remove' id='remove'>REMOVE</button></td>
        </tr>
      `;
    }
  }

  // If no user is found, display a message in the table
  if (!userFound) {
    content = `
      <tr>
        <td colspan="2">NO USERS WITH THAT USERNAME HAVE FINISHED THE GAME</td>
      </tr>
    `;
  }

  // Set the table's innerHTML to the generated content
  table.innerHTML = content;

  // Add click event listeners to the "REMOVE" buttons
  const buttons = document.querySelectorAll(".remove");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove the user at the current index from the allUsers array
      allUsers.splice(index, 1); 

      // Update the users data in the local storage
      localStorage.setItem("users", JSON.stringify(allUsers));

      // Render the table again with the updated users data
      renderTable(allUsers, usernameSearched);
    });
  });
}
