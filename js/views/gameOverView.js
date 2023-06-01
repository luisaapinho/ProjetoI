import { getUserLogged, updateUserTime } from "../models/UserModel.js";
const btnYes = document.getElementById('btnYes');
const arrow1 = document.getElementById('arrow1');

const btnNo = document.getElementById('btnNo');
const arrow2 = document.getElementById('arrow2');

btnYes.addEventListener('mouseover', function() {
    arrow1.style.display = 'block';
});

btnYes.addEventListener('mouseout', function() {
    arrow1.style.display = 'none';
});

btnNo.addEventListener('mouseover', function() {
    arrow2.style.display = 'block';
});

btnNo.addEventListener('mouseout', function() {
    arrow2.style.display = 'none';
});

btnYes.addEventListener('click', function() {
    // Retrieve the logged-in user
    const loggedUser = getUserLogged();

    // Check if there is a logged-in user
    if (loggedUser) {
        // Set the default time value in the userClass
        loggedUser.time = 60; // Set the default time (60 seconds)

        // Update the time value in the userModule.js module
        updateUserTime(loggedUser.username, loggedUser.time);
    }

    // Redirect to the workspace.html
    window.location.href = "../html/workspace.html";
});
btnNo.addEventListener('click', function() {
    // Retrieve the logged-in user
    const loggedUser = getUserLogged();

    // Check if there is a logged-in user
    if (loggedUser) {
        // Set the default time value in the userClass
        loggedUser.time = 60; // Set the default time (60 seconds)

        // Update the time value in the userModule.js module
        updateUserTime(loggedUser.username, loggedUser.time);
    }
    window.location.href = "../index.html";
});
