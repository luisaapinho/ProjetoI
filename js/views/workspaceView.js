import { getUserLogged, updateUserTime } from "../models/UserModel.js";

const pause=document.querySelector("#pause").addEventListener("click",function(event){
    event.preventDefault()
    window.location.href = "../html/pauseScreen.html";
})

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

  if(remainingTime<=10)
  {
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