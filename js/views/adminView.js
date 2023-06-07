import * as User from "../models/UserModel.js";


let arrow = document.querySelector("#adminHome");
let lupa = document.getElementById("lupa");


arrow.addEventListener("click", function() {
    User.logout()
    setTimeout(() => {
        location.href = "../index.html";
    }, 1000);
})


lupa.addEventListener("click", function () {
  const usernameSearched = document.querySelector('#inputForm').value;
  let allUsers = User.getUsers();

  renderTable(allUsers, usernameSearched);

  
});

function renderTable(allUsers, usernameSearched) {
  let table = document.querySelector("#tableAdmin");
  let content = "<tr><th>USER</th><th>ACTION</th><tr>";
  let userFound = false;

  for (const user of allUsers) {
    if (user.username.includes(usernameSearched)) {
      userFound = true;
      content += `
        <tr>
          <td>${user.username}</td>
          <td><button class='remove' id='remove'>REMOVE</button></td>
        </tr>
      `;
    }
  }

  if (!userFound) {
    content = `
      <tr>
        <td colspan="2">NO USERS WITH THAT USERNAME HAVE FINISHED THE GAME</td>
      </tr>
    `;
  }

  table.innerHTML = content;

  // Add listener to the "REMOVE" button
  const buttons = document.querySelectorAll(".remove");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      allUsers.splice(index, 1); // Remove the user from the array
      localStorage.setItem("users", JSON.stringify(allUsers));
      renderTable(allUsers, usernameSearched);
    });
  });
}
