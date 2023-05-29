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
    trashOpen.style.opacity = 0; // Define a opacidade inicial como 0
    trashOpen.style.transform = "scale(0.2)"; // Define a escala inicial como 0.2
    
    trashOpen.style.display = 'flex'; // Exibe o imgTrashOpen
  
    // Aguarda um pequeno intervalo para garantir que a transição tenha efeito
    setTimeout(function() {
      trashOpen.style.opacity = 1; // Aumenta a opacidade gradualmente
      trashOpen.style.transform = "scale(1)"; // Aumenta a escala gradualmente
      trashOpen.style.transition = "opacity 0.2s, transform 0.2s"; // Adiciona a transição suave
    }, 10);
  });
  
closeBtn.addEventListener("click", function() {
    trashOpen.classList.add("animated-close"); // Adds to the class to animate
    setTimeout(function() {
      trashOpen.style.display = 'none'; // Remove the element after the animation
      trashOpen.classList.remove("animated-close"); // Remove the class to animate
    }, 200); // Time of the animation in ms
  });
fileImage.addEventListener("click", function() {
  trashOpen.style.display = 'none'; //Close the imgTrashOpen
  imgForm.style.display = 'flex';   //Opens the image where are the forms needed to the code of one game
});

closeBtnForms.addEventListener("click", function() {
  imgForm.classList.add("animated-close"); // Adds to the class to animate
  setTimeout(function() {
    imgForm.style.display = 'none';// Remove the element after the animation
     
    imgForm.classList.remove("animated-close"); // Remove the class to animate
  }, 150);// Time of the animation in ms
  trashOpen.style.display = 'flex';//Opens the trashOpen where the file we were
});

// Inicializa o plugin "Responsive Image Maps"
$('img[usemap]').rwdImageMaps();
