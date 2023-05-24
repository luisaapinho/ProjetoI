const btnResume = document.getElementById('btnResume');
const arrow1 = document.getElementById('arrow1');

const btnQuit = document.getElementById('btnQuit');
const arrow2 = document.getElementById('arrow2');

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

btnResume.addEventListener('click', function() {
    window.location.href = "../html/workspace.html";
});