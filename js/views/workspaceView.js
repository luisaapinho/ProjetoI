document.addEventListener("DOMContentLoaded", function() {
    const pause = document.querySelector("#pause");
    pause.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "../html/pauseScreen.html";
    });
  
    const trashCan = document.querySelector("#trashCan");
    const trashOpen = document.querySelector("#trashOpen img");
    const closeBtn = document.querySelector("#closeBtn");
  
    trashCan.addEventListener("click", function() {
      trashOpen.style.display = 'flex';
    });
  
    closeBtn.addEventListener("click", function() {
        alert("oooi")
      trashOpen.style.display = 'none';
    });
  
    // Funciton that makes the imageMap responsive
    function makeImageMapResponsive() {
        const imgWidth = trashOpen.clientWidth;
        const imgHeight = trashOpen.clientHeight;
        const areas = document.querySelectorAll("#imgTrashOpen area");
      
        areas.forEach(function(area) {
          const coords = area.getAttribute("coords").split(",");
          const newCoords = [];
      
          for (let i = 0; i < coords.length; i++) {
            if (i % 2 === 0) {
              newCoords.push((coords[i] / imgWidth) * 100); // Calculates the new cordanate of X
            } else {
              newCoords.push((coords[i] / imgHeight) * 100); // Calculates the new cordanate of y
            }
          }
      
          area.setAttribute("coords", newCoords.join(","));
        });
      
        // Adjust the new coords of the area of the closeBtn
        const closeBtnCoords = document.querySelector("#closeBtn").getAttribute("coords").split(",");
        const newCloseBtnCoords = [];
        
        for (let i = 0; i < closeBtnCoords.length; i++) {
          if (i % 2 === 0) {
            newCloseBtnCoords.push((closeBtnCoords[i] / imgWidth) * 100); // Calculates the new cordanate of X
          } else {
            newCloseBtnCoords.push((closeBtnCoords[i] / imgHeight) * 100); // Calculates the new cordanate of y
          }
        }
        
        document.querySelector("#closeBtn").setAttribute("coords", newCloseBtnCoords.join(","));
      }
      
  
    makeImageMapResponsive(); // Calls the function when the page is loaded
  
    window.addEventListener("resize", makeImageMapResponsive); // Calls the function when the image is resized
  
  

  });
  