$(document).ready(function() {
    const pause = document.querySelector("#pause");
    pause.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "../html/pauseScreen.html";
    });
  
    const trashCan = document.querySelector("#trashCan");
    const trashOpen = document.querySelector("#imgTrashOpen");
    const closeBtn = document.querySelector("#closeBtn");
  
    trashCan.addEventListener("click", function() {
      trashOpen.style.display = 'flex';
    });
  
    closeBtn.addEventListener("click", function() {
      trashOpen.style.display = 'none';
    });
  
    // Inicializa o plugin "Responsive Image Maps"
    $('img[usemap]').rwdImageMaps();
});