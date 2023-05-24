document.addEventListener("DOMContentLoaded", function() {
    const pause = document.querySelector("#pause");
    pause.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "../html/pauseScreen.html";
    });
  
    const trashCan = document.querySelector("#trashCan");
    const trashOpen = document.querySelector("#imgTrashOpen");
    const closeBtn = document.querySelector("#closeBtn");
    const fileImage=document.querySelector("#fileImage")
  
    trashCan.addEventListener("click", function() {
        trashOpen.style.display = 'flex';
    });
  
    closeBtn.addEventListener("click", function() {
        alert("oi")
        trashOpen.style.display = 'none';
    });

   
  });
  