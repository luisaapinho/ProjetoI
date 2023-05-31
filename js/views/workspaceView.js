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
const fileA=document.querySelector("#fileA");
const imgFileA=document.querySelector("#imgFileA");
const closeBtnFileA=document.querySelector("#closeBtnFileA");
const fileB=document.querySelector("#fileB")
const imgFileB=document.querySelector("#imgFileB");
const closeBtnFileB=document.querySelector("#closeBtnFileB");

trashCan.addEventListener("click", function() {
  trashOpen.style.display = 'flex'; // Show the bin
  trashOpen.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    trashOpen.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms
});
closeBtn.addEventListener("click", function() {
  trashOpen.classList.add("animated-close"); // Add the class to the closing animation
  setTimeout(function() {
    trashOpen.style.display = 'none'; // Remove the element after the animation
    trashOpen.classList.remove("animated-close"); // Remove class after the animation
  }, 200); //Duration of the animation in ms
});

fileImage.addEventListener("click", function() {
  trashOpen.classList.add("animated-close"); // Add the class to the closing animation
  setTimeout(function() {
    trashOpen.style.display = 'none'; // Remove the element after the animation
    trashOpen.classList.remove("animated-close"); // Remove class after the animation
    
    imgForm.style.display = 'flex';   //Opens the image where are the code needed to one of the games
    
    trashOpen.classList.add("slideIn"); // Add the class to the opening animation
    setTimeout(function() {
      trashOpen.classList.remove("slideIn"); // Remove class after the animation
    }, 1000);  //Duration of the animation in ms
  }, 200); // Duration of the closing animation
});

closeBtnForms.addEventListener("click", function() {
  imgForm.classList.add("animated-close");  //Add the class to the closing animation
  setTimeout(function() {
    imgForm.style.display = 'none'; // Remove the element after the animation
    imgForm.classList.remove("animated-close"); // Remove class after the animation
  }, 150);//Duration of the animation in ms
  trashOpen.style.display = 'flex'; //Opens the trashOpen where the file was
});

fileA.addEventListener("click", function(){
  imgFileA.style.display = 'flex'; // Show the bin
  imgFileA.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileA.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms
})

closeBtnFileA.addEventListener("click",function(){
   imgFileA.classList.add("animated-close"); // Add the class to the closing animation
  setTimeout(function() {
    imgFileA.style.display = 'none'; // Remove the element after the animation
    imgFileA.classList.remove("animated-close"); // Remove class after the animation
  }, 200); //Duration of the animation in ms
})

fileB.addEventListener("click", function(){
  imgFileB.style.display = 'flex'; // Show the bin
  imgFileB.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileB.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms
})

closeBtnFileB.addEventListener("click",function(){
  imgFileB.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
   imgFileB.style.display = 'none'; // Remove the element after the animation
   imgFileB.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})
// Inicializa o plugin "Responsive Image Maps"
$('img[usemap]').rwdImageMaps();
