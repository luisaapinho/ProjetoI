import { getUserLogged, updateUserTime } from "../models/UserModel.js";

// Retrieve the logged-in user
const loggedUser = getUserLogged();
// Set the countdown time (in seconds)

const countdownTime = loggedUser.time; // start on the loggedUser time remaining



// Calculate the end time
const endTime = new Date();
endTime.setSeconds(endTime.getSeconds() + countdownTime);

// Update the countdown timer every second
const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  const now = new Date();
  const remainingTime = Math.floor((endTime - now) / 1000); // Remaining time in seconds

  if(remainingTime<=300)
  {
    document.getElementById('timer').style.color="red"
    const audio = document.getElementById("timeTicking");
    audio.play();
  }
  if (remainingTime <= 0) {
    // Timer has reached zero
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = '00:00';
    window.location.href = "../html/gameOver.html";
    if (loggedUser) {
      loggedUser.time = 0;
      updateUserTime(loggedUser.username, loggedUser.time);
    }
  } else {
    // Format the remaining time as mm:ss
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedTime = `${padZero(minutes)}:${padZero(seconds)}`;

    document.getElementById('timer').textContent = formattedTime;

    // Update the logged-in user's time in the userModule.js module
    
    if (loggedUser) {
      loggedUser.time = remainingTime;
      updateUserTime(loggedUser.username, loggedUser.time);
    }
    
    
  }
}

function padZero(num) {
  return (num < 10) ? `0${num}` : num;
}

function renderTableInventory()
{
  let content="";
  for(let i=0;i<loggedUser.inventory.length;i++)
  {
    content+= `
      <tr>
       <td>${loggedUser.inventory[i]}</td>
      </tr>

    `
  }
  tableInventory.innerHTML=content
}



const pause = document.querySelector("#pause");
pause.addEventListener("click", function(event) {
  event.preventDefault(); // takes to the pauseScreen when clicked the windows button
  window.location.href = "../html/pauseScreen.html";
});

//ICONS THAT DONT ARE GAMES

//Trash bin icon
const trashCan = document.querySelector("#trashCan");
//Image of the trash open 
const trashOpen = document.querySelector("#imgTrashOpen");
//the button that closes the trash open
const closeBtn = document.querySelector("#closeBtn");
//the file that u need to click to open the photo where it has the code to game 4
const fileImage = document.querySelector("#fileImageTrash");
//Image where that is the code to game 4(Geometric forms)
const imgForm = document.querySelector("#imgCodeForms");
//The button to close the image where there are the geometric forms
const closeBtnForms = document.querySelector("#closeBtnForms");

//GAME 1/2

//The icon of the file A, one option for the first game
const fileA=document.querySelector("#fileA");
//Image that shows when u click the file that takes u to the expositive part and the exercise part
const imgFileA=document.querySelector("#imgFileA");
//Close button of the image above
const closeBtnFileA=document.querySelector("#closeBtnFileA");
//The expositive part of the game 4
const expositiveFileA=document.querySelector("#expositiveFileA");
//Icon of the file B other option of the game 1
const fileB=document.querySelector("#fileB")
//The image that shows up when u click the file that takes u to the expositive part and the exercise part
const imgFileB=document.querySelector("#imgFileB");
//Close button of the file above
const closeBtnFileB=document.querySelector("#closeBtnFileB");
//The expositive part of the game 1B
const expositiveFileB=document.querySelector("#expositiveFileB");

//GAME 3

//Icon of the file C, that opens the third game
const fileC=document.querySelector("#fileC");
//The image that shows up when u click the file c, here it takes u to the challenge that u
//need to make before entering the part where there are the expostive part and the exercise part
const imgFileC=document.querySelector("#imgFileC");
//Close button to the image above
const closeBtnFileC=document.querySelector("#closeBtnFileC");
//These are the files that are in the imgFileC, that u need to click to find
//the one where are placed the expositive/exercise part
const try1=document.querySelector("#Try1");
const try2=document.querySelector("#Try2");
const try3=document.querySelector("#Try3");
const try4=document.querySelector("#Try4");
//This is the correct file that leads u to the expositive/exercise part
const CorrectFileC=document.querySelector("#CorrectFileC");
//This is the image that opens when u open the correct file, is where the expostive/exercise part is 
//to the third game
const imgFileCEx=document.querySelector("#imgFileCEx");
//this is the close button to the imgFileCEX
const closeBtnFileCEx=document.querySelector("#closeBtnFileCEx");

const inventoryIcon=document.querySelector("#inventoryIcon");
const inventoryOpen=document.querySelector("#imgInventoryOpen");
const inventoryCloseBtn=document.querySelector("#inventoryCloseBtn");
const tableInventory=document.querySelector("#tableInventory")

//The expositive part of the game 3
const expositiveFileC=document.querySelector("#expositiveFileC");

//GAME 4

//Icon of the file D, that opens the forth game
const fileD=document.querySelector("#fileD");
//Image where there is the dare that u need to go tru to get to the expositive/exercise part
const imgFileD=document.querySelector("#imgFileD");
//Close button of the file above
const closeBtnFileD=document.querySelector("#closeBtnFileD");
//The dare that u need to make before entering the expositive/exercise part
const challengeD=document.querySelector("#fileImgD");
//the file where there are the expositive/exercise that opens after u completed the challengeD
const imgFileDEx=document.querySelector("#imgFileDEx");
//Close button of the file above
const closeBtnFileDEx=document.querySelector("#closeBtnFileDEx");
//The expositive part of the game 4
const expositiveFileD=document.querySelector("#expositiveFileD");

//GAME 5

//Icon of the file E, which opens the fifth game
const fileE=document.querySelector("#fileE");
//The file that opens when u click the icon fileE
const imgFileE=document.querySelector("#imgFileE");
//Close button of the file above
const closeBtnFileE=document.querySelector("#closeBtnFileE");
//File where there is the key that u need to find to open the door to go to the expositive/exercise part
const fileServerImg=document.querySelector("#fileServerImg");
//File where there is the door that u need to key to open
const challengeE=document.querySelector("#fileImgE");
//The file where there are the expositive/exercise part after u completed the challengeE
const imgFileEEx=document.querySelector("#imgFileEEx")
//Close button to the file above
const closeBtnFileEEx=document.querySelector("#closeBtnFileEEx");
//The expositive part of the game 5
const expositiveFileE=document.querySelector("#expositiveFileE");

//GAME 6

//Icon of the file F that opens the sixth game
const fileF=document.querySelector("#fileF");
//Image that opens when u click the file F
const imgFileF=document.querySelector("#imgFileF");
//Close button to the img above
const closeBtnFileF=document.querySelector("#closeBtnFileF");
//File that opens the challenge u need to do before it to go to the expositive/exercise part
const challengeF=document.querySelector("fileImgE");
//File where are the expositive/exercise part of the game
const imgFileFEx=document.querySelector("imgFileFEx");
//Close button to the file above
const closeBtnFileFEx=document.querySelector("#closeBtnFileFEx");
//Expositive part of the game 6
const expositiveFileF=document.querySelector("#expositiveFileF");

//GAME 7
//Icon of the file g that opens the last game
const fileG=document.querySelector("#fileG");
//Image that opens when u click the fileG
const imgFileG=document.querySelector("#imgFileG");
//Close button to the file above
const closeBtnFileG=document.querySelector("#closeBtnFileG");
//File that opens the challenge that u need to do before the expositive/exercise part SIMAO É AQ QUE DEVE APARECER OS JOGOS
const challengeG=document.querySelector("#fileImgG");
//File where there are the expositive/exercise part of the game AQUI É ONDE DEVE SER GERADO O JOGO
const imgFileGEx=document.querySelector("#fileImgGEx");
//Close button to the file above
const closeBtnFileGEx=document.querySelector("#closeBtnFileGEx");
//Expositive part of the game 6
const expositiveFileG=document.querySelector("#expositiveFileg");





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
inventoryIcon.addEventListener("click", function() {
  inventoryOpen.style.display = 'flex'; // Show the inventory
  tableInventory.style.display = 'flex'; // Show the inventory table
  inventoryOpen.classList.add("slideIn"); // Add the class to the opening animation
  tableInventory.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    inventoryOpen.classList.remove("slideIn"); // Remove class after the animation
    tableInventory.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms

  renderTableInventory();
});
inventoryCloseBtn.addEventListener("click", function() {
  inventoryOpen.classList.add("animated-close"); // Add the class to the closing animation
  tableInventory.classList.add("animated-close"); // Add the class to the closing animation
  setTimeout(function() {
    inventoryOpen.style.display = 'none'; // Remove the element after the animation
    tableInventory.style.display = 'none'; // Remove the element after the animation
    inventoryOpen.classList.remove("animated-close"); // Remove class after the animation
    tableInventory.classList.remove("animated-close"); // Remove class after the animation
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

expositiveFileA.addEventListener("click", () => {
  window.open("../assets/pdf/variables.pdf", "_blank");
});

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

expositiveFileB.addEventListener("click", () => {
  window.open("../assets/pdf/variables.pdf", "_blank");
});

fileC.addEventListener("click", function(){
  imgFileC.style.display = 'flex'; // Show the bin
  imgFileC.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileC.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms
})

closeBtnFileC.addEventListener("click",function(){
  imgFileC.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileC.style.display = 'none'; // Remove the element after the animation
   imgFileC.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

CorrectFileC.addEventListener("click", function() {
  imgFileC.classList.add("animated-close"); // Add the class to the closing animation
  setTimeout(function() {
    imgFileC.style.display = 'none'; // Remove the element after the animation
    imgFileC.classList.remove("animated-close"); // Remove class after the animation
    
    imgFileCEx.style.display = 'flex';   //Opens the image where are the code needed to one of the games
    
    imgFileC.classList.add("slideIn"); // Add the class to the opening animation
    setTimeout(function() {
      imgFileC.classList.remove("slideIn"); // Remove class after the animation
    }, 1000);  //Duration of the animation in ms
  }, 200); // Duration of the closing animation
});


fileD.addEventListener("click", function(){
  imgFileD.style.display = 'flex'; // Show the bin
  imgFileD.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileD.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms
})

closeBtnFileD.addEventListener("click",function(){
  imgFileD.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileD.style.display = 'none'; // Remove the element after the animation
   imgFileD.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

fileE.addEventListener("click", function(){
  imgFileE.style.display = 'flex'; // Show the bin
  imgFileE.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileE.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms
})

closeBtnFileE.addEventListener("click",function(){
  imgFileE.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileE.style.display = 'none'; // Remove the element after the animation
   imgFileE.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

fileF.addEventListener("click", function(){
  imgFileF.style.display = 'flex'; // Show the bin
  imgFileF.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileF.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms
})
closeBtnFileF.addEventListener("click",function(){
  imgFileF.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileF.style.display = 'none'; // Remove the element after the animation
   imgFileF.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})
fileG.addEventListener("click", function(){
  imgFileG.style.display = 'flex'; // Show the bin
  imgFileG.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileG.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms
})
closeBtnFileG.addEventListener("click",function(){
  imgFileG.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileG.style.display = 'none'; // Remove the element after the animation
   imgFileG.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

// Inicializa o plugin "Responsive Image Maps"
$('img[usemap]').rwdImageMaps();
