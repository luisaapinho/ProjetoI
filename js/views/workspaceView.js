const pause = document.querySelector("#pause");
pause.addEventListener("click", function(event) {
  event.preventDefault(); // takes to the pauseScreen when clicked the windows button
  window.location.href = "../html/pauseScreen.html";
});

const trashCan = document.querySelector("#trashCan");
const trashOpen = document.querySelector("#imgTrashOpen");
const closeBtn = document.querySelector("#closeBtn");
const fileImage = document.querySelector("#fileImage");
const imgForm = document.querySelector("#imgCodeForms");
const closeBtnForms = document.querySelector("#closeBtnForms");

trashCan.addEventListener("click", function() {
  trashOpen.style.display = 'flex'; // makes the image imgTrashOpen appears
});

closeBtn.addEventListener("click", function() {
  trashOpen.style.display = 'none'; // Close the imgTrashOpen
});

fileImage.addEventListener("click", function() {
  trashOpen.style.display = 'none'; //Close the imgTrashOpen
  imgForm.style.display = 'flex';   //Opens the image where are the forms needed to the code of one game
});

closeBtnForms.addEventListener("click", function() {
    imgForm.style.display = 'none';//Closes the image of the forms
    trashOpen.style.display = 'flex'; //Opens where the file was, the imgTrashOpen
});

// Inicializa o plugin "Responsive Image Maps"
$('img[usemap]').rwdImageMaps();
