// userModule.js
let users = [];

// Initializes the users array with data from local storage if it exists
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// Adds a new user to the users array and updates local storage
export function add(username, email, password) {
  if (users.some((user) => user.username === username)) {
    throw Error(`User with username "${username}" already exists!`);
  } else {
    users.push(new User(username, email, password));
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// Checks if a user with the given username and password exists in the users array and, if so, stores the user in session storage
export function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else {
    throw Error("Invalid login!");
  }
}

// Removes the logged-in user from session storage
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// Returns true if a user is logged in (i.e. if there is a logged-in user in session storage), false otherwise
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// Returns the logged-in user from session storage
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}

// User class definition
class User {
  username = "";
  email = "";
  password = "";
  time = 0;
  inventory = [];

  // Constructor for creating a new User object
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

// register.js

// Imports the add function from userModule.js
import { add } from "../js/userModule.js";

// Adds an event listener to the register button that calls the add function when clicked
document.getElementById("registerBtn").addEventListener("click", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    add(username, email, password);
    showMessage("success", "Registration successful!");
    // Redirects to the login page
    window.location.href = "ProjetoI/html/login.html";
  } catch (error) {
    showMessage("error", error.message);
  }
});

// Displays a message of the given type (e.g. success or error) with the given text
function showMessage(type, message) {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}
