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



const pause = document.querySelector("#pause");
pause.addEventListener("click", function(event) {
  event.preventDefault(); // takes to the pauseScreen when clicked the windows button
  window.location.href = "../html/pauseScreen.html";
});
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
//The icon of the file A, one option for the first game
const fileA=document.querySelector("#fileA");
//Image that shows when u click the file that takes u to the expositive part and the exercise part
const imgFileA=document.querySelector("#imgFileA");
//Close button of the image above
const closeBtnFileA=document.querySelector("#closeBtnFileA");
//Icon of the file B other option of the game 1
const fileB=document.querySelector("#fileB")
//The image that shows up when u click the file that takes u to the expositive part and the exercise part
const imgFileB=document.querySelector("#imgFileB");
//Close button of the file above
const closeBtnFileB=document.querySelector("#closeBtnFileB");
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
//Icon of the file D, that opens the forth game
const fileD=document.querySelector("#fileD");
//Image where there is the dare that u need to go tru to get to the expositive/exercise part
const imgFileD=document.querySelector("#imgFileD");
//Close button of the file above
const closeBtnFileD=document.querySelector("#closeBtnFileD");
//The dare that u need to make before entering the expositive/exercise part
const challengeD=document.querySelector("#fileImgD");



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
// Inicializa o plugin "Responsive Image Maps"
$('img[usemap]').rwdImageMaps();
