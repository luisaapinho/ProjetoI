import * as User from "../models/UserModel.js";
const btnResume = document.getElementById('btnResume');
const arrow1 = document.getElementById('arrow1');

const btnQuit = document.getElementById('btnQuit');
const arrow2 = document.getElementById('arrow2');

const btnOptions = document.getElementById('btnOptions');
const arrow3 = document.getElementById('arrow3');

btnResume.addEventListener('mouseover', function() {
    arrow1.style.display = 'block';
});

btnResume.addEventListener('mouseout', function() {
    arrow1.style.display = 'none';
});

btnQuit.addEventListener('mouseover', function() {
    arrow2.style.display = 'block';
});

btnQuit.addEventListener('mouseout', function() {
    arrow2.style.display = 'none';
});
btnQuit.addEventListener('click', function() {
    window.location.href = "../index.html";
    User.logout()
});

btnResume.addEventListener('click', function() {
    window.location.href = "../html/workspace.html";
});
btnOptions.addEventListener('mouseover', function() {
    arrow3.style.display = 'block';
});

btnOptions.addEventListener('mouseout', function() {
    arrow3.style.display = 'none';
});
btnOptions.addEventListener('click', function() {
    window.location.href = "../html/changePassword.html";
});