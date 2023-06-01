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
const closeBtnServer=document.querySelector("#closeBtnServer");
const serverImg=document.querySelector("#serverImg");
const fileC=document.querySelector("#fileC");
const imgFileC=document.querySelector("#imgFileC");
const closeBtnFileC=document.querySelector("#closeBtnFileC");
const try1=document.querySelector("#Try1");
const try2=document.querySelector("#Try2");
const try3=document.querySelector("#Try3");
const try4=document.querySelector("#Try4");
const CorrectFileC=document.querySelector("#CorrectFileC");
const imgFileCEx=document.querySelector("#imgFileCEx");
const closeBtnFileCEx=document.querySelector("#closeBtnFileCEx");

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
// Inicializa o plugin "Responsive Image Maps"
$('img[usemap]').rwdImageMaps();
