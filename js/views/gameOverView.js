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
    window.location.href = "../html/workspace.html";
});
btnNo.addEventListener('click', function() {
    window.location.href = "../index.html";
});
