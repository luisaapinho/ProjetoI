// userModule.js
let users = [];

// Initializes the users array with data from local storage if it exists
export function init() {
  console.log("oi");
  users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
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

// Checks if a user with the given username and password exists in the users array and, if so, stores the user in local storage
export function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else if (users.some((user) => user.username === username)) {
    throw Error("Invalid password!");
  } else {
    throw Error("Invalid username or password!");
  }
}


// Removes the logged-in user from local storage
export function logout() {
  localStorage.removeItem("loggedUser");
}

// Returns true if a user is logged in (i.e. if there is a logged-in user in local storage), false otherwise
export function isLogged() {
  return localStorage.getItem("loggedUser") ? true : false;
}

// Returns the logged-in user from local storage
export function getUserLogged() {
  return JSON.parse(localStorage.getItem("loggedUser"));
}

export function updateUserTime(username, time) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const userIndex = users.findIndex((user) => user.username === username);
  if (userIndex !== -1) {
    users[userIndex].time = time;
    localStorage.setItem("users", JSON.stringify(users));

    // Check if the logged-in user matches the updated user
    const loggedUser = getUserLogged();
    if (loggedUser && loggedUser.username === username) {
      loggedUser.time = time;
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    }
  }
}


// User class definition
class User {
  username = "";
  email = "";
  password = "";
  time = 0;
  inventory = [];

  // Constructor for creating a new User object
  constructor(username, email, password,time=60) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.time=time;
  }
}

