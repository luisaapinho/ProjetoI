const pause=document.querySelector("#pause").addEventListener("click",function(event){
    event.preventDefault()
    window.location.href = "../html/pauseScreen.html";
})

// Set the countdown time (in minutes)
const countdownTime = 1;

// Calculate the end time
const endTime = new Date();
endTime.setMinutes(endTime.getMinutes() + countdownTime);

// Update the countdown timer every second
const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  const now = new Date();
  const remainingTime = Math.floor((endTime - now) / 1000); // Remaining time in seconds

  if (remainingTime <= 0) {
    // Timer has reached zero
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = '00:00';
    alert("Acabou o tempo!Perdeu!")
  } else {
    // Format the remaining time as mm:ss
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedTime = `${padZero(minutes)}:${padZero(seconds)}`;

    document.getElementById('timer').textContent = formattedTime;
  }
}

function padZero(num) {
  return (num < 10) ? `0${num}` : num;
}