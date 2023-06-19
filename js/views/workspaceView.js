import { getUserLogged, updateUserTime,updateUserInventory,updateUserStatus } from "../models/UserModel.js";
import { displaySamMessage } from "../views/sam.js";
import { Challenge } from "../models/ChallengeModel.js";
import { generateCenteredDivNewWord } from "../views/newWordView.js"


// Retrieve the logged-in user
const loggedUser = getUserLogged();
// Set the countdown time (in seconds)

const countdownTime = loggedUser.time; // start on the loggedUser time remaining


if(loggedUser.time==3600)
{
  const beginningImg=document.querySelector("#beginningImg")
  let beginningClose=document.querySelector("#beginningClose")
  beginningImg.style.display="flex"

  beginningClose.addEventListener("click",function(){

    beginningImg.classList.add("animated-close"); // Add the class to the closing animation
    setTimeout(function() {
    beginningImg.style.display = 'none'; // Remove the element after the animation
    beginningImg.classList.remove("animated-close"); // Remove class after the animation
    }, 200); //Duration of the animation in ms

    displaySamMessage('../assets/images/samMad.png',"So you're the inferior human being they hired to "+'"help"'+" me clean the virus that I'm already working on cleaning. This company doesn't trust me for anything, I'm almost at the point of resigning.")
    let arrowSam=document.querySelector("#arrowSam");
    arrowSam.addEventListener("click",function(){
      setTimeout(()=>{
        displaySamMessage('../assets/images/samMad.png',"These are corrupted folders that I'm STILL working on cleaning. But since you're here, make yourself useful and try to clean them, but don't come crying to me when you can't do it. You can choose one, and I'll work on cleaning the other.")
      },1000)
    })

  })
  
}

  




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

function renderTableInventory() // RENDER USER INVENTORY
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



function updateRewards() // UPDATE REWARDS
{
  //REWARD ICONS

  const chrome=document.querySelector("#chrome");
  const spotify=document.querySelector("#spotify");
  const steam=document.querySelector("#steam");
  
  if(loggedUser.inventory.length==1)
  {
    setTimeout(function() {
      chrome.style.display= 'flex';
    }, 5000); //Duration of the animation in ms
  }
  if(loggedUser.inventory.length==2)
  {
    chrome.style.display= 'flex';
    setTimeout(function() {
      spotify.style.display= 'flex';
    }, 2500); //Duration of the animation in ms
  }
  if(loggedUser.inventory.length==3)
  {
    chrome.style.display= 'flex';
    spotify.style.display= 'flex';
    setTimeout(function() {
      steam.style.display= 'flex';
    }, 2500); //Duration of the animation in ms
  }
  if(loggedUser.inventory.length==4)
  {
    chrome.style.display= 'flex';
    spotify.style.display= 'flex';
    steam.style.display= 'flex';
    setTimeout(function() {
      document.body.style.backgroundImage="url('../assets/images/backgroundRestored.jpg')";
    }, 2500); //Duration of the animation in ms
  }
  if(loggedUser.inventory.length==5)
  {
    chrome.style.display= 'flex';
    spotify.style.display= 'flex';
    steam.style.display= 'flex';
    document.body.style.backgroundImage="url('../assets/images/backgroundRestored.jpg')";
  }

  
  
}

updateRewards()

const chrome=document.querySelector("#chrome");
const spotify=document.querySelector("#spotify");
const steam=document.querySelector("#steam");

chrome.addEventListener("click",function(){
  displaySamMessage('../assets/images/samNormal.png',"Hmm, I think you better go back to what you were doing... I haven't finished clearing the history yet.")

});
spotify.addEventListener("click",function(){
  displaySamMessage('../assets/images/samNormal.png',"Better not... The company didn't want to make a deal with Spotify... A bit of disregard for the worker, I'd say...")

});
steam.addEventListener("click",function(){
  displaySamMessage('../assets/images/samMad.png',"Now is not the time for that, we're almost there! FOCUS!")

});



const pause = document.querySelector("#pause");
pause.addEventListener("click", function(event) {
  event.preventDefault(); // takes to the pauseScreen when clicked the windows button
  window.location.href = "../html/pauseScreen.html";
});


//ICONS THAT AREN'T GAMES

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
const challengeF=document.querySelector("#fileImgF");
//File where are the expositive/exercise part of the game
const imgFileFEx=document.querySelector("#imgFileFEx");
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
const imgFileGEx=document.querySelector("#imgFileGEx");
//Close button to the file above
const closeBtnFileGEx=document.querySelector("#closeBtnFileGEx");
//Expositive part of the game 6
const expositiveFileG=document.querySelector("#expositiveFileG");








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

expositiveFileC.addEventListener("click", () => {
  window.open("../assets/videos/if-elseif-else.mp4", "_blank");
});

try1.addEventListener("click", function(){
  playAudio("../assets/audios/investigation.mp3")
  displaySamMessage("../assets/images/samNormal.png", "Wrong folder. Ask chatGPT for a little help as humans can't live without my cousin right now.")
})

try2.addEventListener("click", function(){
  playAudio("../assets/audios/DUN.mp3")
  displaySamMessage("../assets/images/samMad.png", "ARE ALL THE FOLDERS EMPTY?????")
})

try3.addEventListener("click", function(){
  playAudio("../assets/audios/crickets.mp3")
  displaySamMessage("../assets/images/samMad.png", "*Sighs*")
})

try4.addEventListener("click", function(){
  playAudio("../assets/audios/Censor.mp3")
  displaySamMessage("../assets/images/samMad.png", "Okay, I'm done, it's the third folder.")
})

CorrectFileC.addEventListener("click", function() {
  imgFileC.classList.add("animated-close"); // Add the class to the closing animation
  setTimeout(function() {
    imgFileC.style.display = 'none'; // Remove the element after the animation
    imgFileC.classList.remove("animated-close"); // Remove class after the animation
    playAudio("../assets/audios/angels.mp3")
    displaySamMessage("../assets/images/samNormal.png", "Finally, it's about time, you even woke up the angels")
    
    imgFileCEx.style.display = 'flex';   //Opens the image where are the code needed to one of the games
    
    imgFileC.classList.add("slideIn"); // Add the class to the opening animation
    setTimeout(function() {
      imgFileC.classList.remove("slideIn"); // Remove class after the animation
    }, 1000);  //Duration of the animation in ms
  }, 200); // Duration of the closing animation
});

closeBtnFileCEx.addEventListener("click",function(){
  imgFileCEx.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileCEx.style.display = 'none'; // Remove the element after the animation
   imgFileCEx.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

const fileDopen=function(){
  imgFileD.style.display = 'flex'; // Show the bin
  imgFileD.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileD.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms

}

fileD.addEventListener("click", fileDopen)

closeBtnFileD.addEventListener("click",function(){
  imgFileD.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileD.style.display = 'none'; // Remove the element after the animation
   imgFileD.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

const fileEopen=function(){
  imgFileE.style.display = 'flex'; // Show the bin
  imgFileE.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileE.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms

}

fileE.addEventListener("click", fileEopen)

closeBtnFileE.addEventListener("click",function(){
  imgFileE.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileE.style.display = 'none'; // Remove the element after the animation
   imgFileE.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

const fileFopen=function(){
  imgFileF.style.display = 'flex'; // Show the bin
  imgFileF.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileF.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms

}

fileF.addEventListener("click", fileFopen)

closeBtnFileF.addEventListener("click",function(){
  imgFileF.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileF.style.display = 'none'; // Remove the element after the animation
   imgFileF.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

const fileGopen=function(){
  imgFileG.style.display = 'flex'; // Show the bin
  imgFileG.classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    imgFileG.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms

}

fileG.addEventListener("click", fileGopen)
closeBtnFileG.addEventListener("click",function(){
  imgFileG.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileG.style.display = 'none'; // Remove the element after the animation
   imgFileG.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})


// MINIGAME FOR FOLDER D //
// Get the buttons and inputs
const increaseButtonsCodeArrow = document.querySelectorAll('.input-container-codeArrow .up-arrow');
const decreaseButtonsCodeArrow = document.querySelectorAll('.input-container-codeArrow .down-arrow');
const inputsCodeArrow = document.querySelectorAll('.input-container-codeArrow .input-codeArrow');

// Attach event listeners to the buttons
increaseButtonsCodeArrow.forEach((button, index) => {
  button.addEventListener('click', () => {
    increaseValueCodeArrow(index);
  });
});

/**
 * Increases the value of the input element at the specified index.
 *
 * @param {number} index - The index of the input element to be updated.
 */
function increaseValueCodeArrow(index) {
  // Get the input element at the specified index
  const inputCodeArrow = inputsCodeArrow[index];

  // Extract the current value of the input element and convert it to an integer
  let currentValueCodeArrow = parseInt(inputCodeArrow.value);

  // Increment the current value by 1 and wrap around from 9 to 0 using modulo operator
  currentValueCodeArrow = (currentValueCodeArrow + 1) % 10;

  // Update the value of the input element with the new value
  inputCodeArrow.value = currentValueCodeArrow;
}

// Attach event listeners to the buttons
decreaseButtonsCodeArrow.forEach((button, index) => {
  button.addEventListener('click', () => {
    decreaseValueCodeArrow(index);
  });
});

/**
 * Decreases the value of the input element at the specified index.
 *
 * @param {number} index - The index of the input element to be updated.
 */
function decreaseValueCodeArrow(index) {
  // Get the input element at the specified index
  const inputCodeArrow = inputsCodeArrow[index];

  // Get the current value of the input element
  let currentValueCodeArrow = parseInt(inputCodeArrow.value);

  // Calculate the new value by decrementing and handling wrapping around from 0 to 9
  currentValueCodeArrow = (currentValueCodeArrow - 1 + 10) % 10;

  // Update the value of the input element with the new value
  inputCodeArrow.value = currentValueCodeArrow;
}

/**
 * Resets the code input by clearing the input values.
 */
function resetCodeArrow() {
  // Clear the input values
  inputsCodeArrow.forEach((input) => {
    input.value = 0;  // Set the input value to 0, effectively resetting it
  });

  // Reset the container's border color
  const containerCodeArrow = document.querySelector('.centered-div-codeArrow');
  containerCodeArrow.style.borderColor = 'white';
}
/**
 * Handles the submission of the entered code and performs necessary actions based on correctness.
 */
function submitCodeArrow() {
  // Get all input elements within the input containers
  const codeInputsCodeArrow = document.querySelectorAll('.input-container-codeArrow .input-codeArrow');

  // Initialize an empty string to store the entered code
  let enteredCodeArrow = '';

  // Get the entered code by concatenating the values of each input
  codeInputsCodeArrow.forEach((input) => {
    enteredCodeArrow += input.value;
  });

  const targetCodeArrow = '1131'; // Correct code

  // Check if the entered code matches the target code
  if (enteredCodeArrow === targetCodeArrow) {
    // Code is correct
    const containerCodeArrow = document.querySelector('.centered-div-codeArrow');

    // Set the container's border color to green
    containerCodeArrow.style.borderColor = 'green';

    // Play the audio for correct answer
    playAudio("../assets/audios/correctAnswer.mp3")

    setTimeout(() => {
      containerCodeArrow.style.display = "none";
      imgFileDEx.style.display = "flex";  // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
    }, 2500);
    

  } else {
    // Code is incorrect
    const containerCodeArrow = document.querySelector('.centered-div-codeArrow');

    // Set the container's border color to red
    containerCodeArrow.style.borderColor = 'red';

    // Play the audio for incorrect answer
    playAudio("../assets/audios/wrongAnswer.mp3")

    // Shake effect
    const centeredDivCodeArrow = document.querySelector('.centered-div-codeArrow');

    // Add the 'shake' class to initiate shaking effect
    centeredDivCodeArrow.classList.add('shake');
    setTimeout(() => {
      resetCodeArrow()
      centeredDivCodeArrow.classList.remove('shake');  // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
    }, 2500);
  }
}

// Attach a click event listener to the element with ID "close"
document.querySelector("#close-codeArrow").addEventListener("click", function() {
  document.querySelector(".centered-div-codeArrow").classList.add("animated-close"); // Add the class to the closing animation
  setTimeout(function() {
  document.querySelector(".centered-div-codeArrow").style.display = 'none'; // Remove the element after the animation
   document.querySelector(".centered-div-codeArrow").classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
  // When clicked, find the element with class "centered-div" and set its display property to "none"
});

// Attach event listener to the submit button
const submitButtonCodeArrow = document.querySelector('.submitBtn-codeArrow');
submitButtonCodeArrow.addEventListener('click', () => {
  submitCodeArrow();
});

challengeD.addEventListener("click", function(){
  imgFileD.style.display = "none";
  document.querySelector(".centered-div-codeArrow").style.display = "flex"; // Show the bin
  document.querySelector(".centered-div-codeArrow").classList.add("slideIn"); // Add the class to the opening animation
  setTimeout(function() {
    document.querySelector(".centered-div-codeArrow").classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms
})

closeBtnFileDEx.addEventListener("click",function(){
  imgFileDEx.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileDEx.style.display = 'none'; // Remove the element after the animation
   imgFileDEx.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

expositiveFileD.addEventListener("click", () => {
  window.open("../assets/videos/for loop.mp4", "_blank");
});

// MINIGAME FOR FOLDER E //
// Select the element with class "map-container-ImageKey" and assign it to the variable "serverMapImageMap"
let serverMapImageMap = document.querySelector(".map-container-ImageKey");

// Select the <img> element within the element with class "map-container-ImageKey" and assign it to the variable "mapImageImageMap"
let mapImageImageMap = document.querySelector("#serverImg");

// Select the element with ID "closeMap-ImageKey" and assign it to the variable "closeMapImageMap"
let closeMapImageMap = document.querySelector("#closeMap-ImageKey");

// Initialize the variable "hasKeyImageMap" to false
let hasKeyImageMap = false; 

// Attach a click event listener to the "blueBox" element
fileServerImg.addEventListener("click", function(){
    imgFileE.style.display = "none";
    // Set the "display" style property of "serverMapImageMap" to "flex"
    mapImageImageMap.style.display = "flex";
////////////////////////////////////////////////////////////////////////////////
    // Call the function "addKeyImageMap()"
    addKeyImageMap();
});

// Attach a click event listener to the "redBox" element
challengeE.addEventListener("click", function(){
    imgFileE.style.display = "none";
    // Call the function "createCenteredDivWithImageMap()" with the argument "doorClose.png"
    createCenteredDivWithImageMap("../assets/images/doorClose.png")

    // Set the "display" style property of the element with class "centered-div-ImageKey" to "block"
    document.querySelector(".centered-div-ImageKey").style.display = "block";
});

// Attach a click event listener to the element with ID "close"
document.querySelector("#closeImageKey").addEventListener("click", function() {
  document.querySelector(".centered-div-ImageKey").classList.add("animated-close");
  setTimeout(() => {
    document.querySelector(".centered-div-ImageKey").style.display = 'none'; // Remove the element after the animation
    document.querySelector(".centered-div-ImageKey").classList.remove("animated-close"); // Remove class after the animation
  }, 200); //Duration of the animation in ms
});

// Attach a click event listener to the "closeMapImageMap" element
closeMapImageMap.addEventListener("click", function(){
    // Set the "display" style property of "serverMapImageMap" to "none"
    mapImageImageMap.style.display = "none";

    // Call the function "removeKeyImageMap()"
    removeKeyImageMap();
});


function addKeyImageMap() {
  // Select the server image within the map container
  let serverImageMap = document.querySelector(".map-container-ImageKey img");

  // Create the key image element
  let keyImageMap = document.createElement('img');
  keyImageMap.src = "../assets/images/key.png";
  keyImageMap.classList.add('key-image'); // Add CSS class for styling

  // Generate random coordinates within the boundaries of the server image
  let serverRect = serverImageMap.getBoundingClientRect();
  let serverWidth = serverRect.width;
  let serverHeight = serverRect.height;
  let randomX, randomY;

  if (window.innerWidth <= 1000) {
    // Adjust the key size for mobile devices
    keyImageMap.style.width = '3%';
    keyImageMap.style.height = 'auto';

    // Calculate random coordinates within the adjusted boundaries
    randomX = Math.floor(Math.random() * (serverWidth - keyImageMap.offsetWidth));
    randomY = Math.floor(Math.random() * (serverHeight - keyImageMap.offsetHeight));
  } else {
    // Default key size for other devices
    keyImageMap.style.width = '2%';
    keyImageMap.style.height = 'auto';

    // Calculate random coordinates within the default boundaries
    randomX = Math.floor(Math.random() * (serverWidth - keyImageMap.width));
    randomY = Math.floor(Math.random() * (serverHeight - keyImageMap.height));
  }

  // Set the position and z-index of the key image
  keyImageMap.style.position = 'absolute';
  keyImageMap.style.left = serverRect.left + randomX + 'px';
  keyImageMap.style.top = serverRect.top + randomY + 'px';
  keyImageMap.style.zIndex = '9999'; // Adjust the value as needed

  // Append the key image to the map container
  serverImageMap.parentNode.parentNode.appendChild(keyImageMap);

  // Initialize the jQuery-rwdImageMaps library on the server image
  $(serverImageMap).rwdImageMaps();

  // Initialize the jQuery-rwdImageMaps library on the key image
  $(keyImageMap).rwdImageMaps();

  // Add click event listener to the key image
  keyImageMap.addEventListener('click', collectKeyImageMap);

  // Function to handle key collection
  function collectKeyImageMap() {
    // Remove the key image from the DOM
    keyImageMap.parentNode.removeChild(keyImageMap);
    playAudio("../assets/audios/pickUp.mp3");
    // Set the flag to indicate that the user has collected the key
    hasKeyImageMap = true;
  }
}

// Function to remove the key image from the server image map
function removeKeyImageMap() {
  // Select the key image element
  let keyImageMap = document.querySelector(".key-image");

  // Check if the key image exists
  if (keyImageMap) {
    // If the key image exists, remove it from the DOM by removing its parent node
    keyImageMap.parentNode.removeChild(keyImageMap);
  }
}

/**
 *  Function to create a centered div element with an image for the image map
 * @param {string} imageUrl - The path or URL of the image to be displayed
 */
function createCenteredDivWithImageMap(imageUrl) {
    // Get the existing centered div element
    let centeredDivImageMap = document.querySelector('.centered-div-ImageKey');
  
    // Create the image element
    let imageMap = document.querySelector(".centered-image-ImageKey")
    imageMap.src = imageUrl;
    imageMap.classList.add('centered-image-ImageKey'); // Add CSS class for styling
  
    // Append the image to the centered div
    centeredDivImageMap.appendChild(imageMap);

    // Attach click event listener to the door image
    imageMap.addEventListener('click', openDoorImageMap);
}
  



/**
 *  Function to change the door image in the image map

 * @param {string} imageUrl - The path or URL of the image to be displayed
 */
function changeDoorImageMap(imageUrl) {
    // Select the door image element
    let doorImageMap = document.querySelector(".centered-image-ImageKey");

    // Check if the door image element exists
    if (doorImageMap) {
      // If the door image element exists, set its source to the provided imageUrl
      doorImageMap.src = imageUrl;
    }
}

// Function to handle opening the door in the image map
function openDoorImageMap() {
    if (hasKeyImageMap) {
      // User has the key, perform actions to open the door
      playAudio("../assets/audios/lockerOpening.mp3"); // Play audio for opening the door
      changeDoorImageMap("../assets/images/doorOpen.png"); // Change the door image to open state
      document.querySelector(".centered-div-ImageKey").classList.add("animated-close");
      setTimeout(() => {
        document.querySelector(".centered-div-ImageKey").style.display = "none";
        document.querySelector(".centered-div-ImageKey").classList.remove("animated-close");
        imgFileEEx.style.display = "flex";
        imgFileEEx.classList.add("slideIn"); // Add the class to the opening animation´
        setTimeout(function() {
          imgFileEEx.classList.remove("slideIn"); // Remove class after the animation
        }, 200); // Duration of the animation in ms
      }, 2000);
    } else {
      // User does not have the key, show error alert
      displaySamMessage('../assets/images/samNormal.png',"I would say you needed a key to open the door... Search better!")

    }
}

closeBtnFileEEx.addEventListener("click",function(){
  imgFileEEx.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileEEx.style.display = 'none'; // Remove the element after the animation
   imgFileEEx.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

expositiveFileE.addEventListener("click", () => {
  window.open("../assets/videos/array.mp4", "_blank");
});

// MINIGAME FOR FOLDER F //
const sequence = [];  // Array to store the sequence of box indexes
const userSequence = [];  // Array to store the user's sequence of box indexes
const boxesSequence = document.querySelectorAll('.boxSequence');  // NodeList of box elements
let isSequenceShowing = false; // Flag to track if the sequence is being shown

// Add event listeners to each box
boxesSequence.forEach((box, index) => {
  box.addEventListener('click', () => {
    if (!isSequenceShowing) { // Allow clicks only when the sequence is not being shown
      userSequence.push(index); // Add clicked box index to user's sequence
      checkUserSequence();  // Check if the user's sequence matches the sequence
      changeBoxOpacity(box);  // Change the opacity of the clicked box
    }
  });
});

/**
 * Generates a random sequence of box indexes.
 * The length of the sequence is fixed at 6.
 */
function generateSequence() {
  for (let i = 0; i < 6; i++) {
    const randomIndexSequence = Math.floor(Math.random() * boxesSequence.length); // Generate a random index within the available box indexes
    sequence.push(randomIndexSequence); // Add the random index to the sequence
  }
}

/**
 * Changes the opacity of the clicked box.
 * @param {Element} box - The clicked box element.
 */
function changeBoxOpacity(box) {
    box.style.opacity = '1';  // Set the opacity to 1 (fully opaque)
    setTimeout(() => {
      box.style.opacity = '0.1';  // Set the opacity back to 0.1 (partially transparent)
    }, 500);
}

/**
 * Shows the sequence by blinking the boxes in order.
 */
function showSequence() {
  isSequenceShowing = true; // Set the flag to true during sequence display
  let iSequence = 0;
  const intervalSequence = setInterval(() => {
    const boxIndex = sequence[iSequence]; // Get the current box index from the sequence
    blinkBox(boxIndex); // Blink the box with the current index

    iSequence++;
    if (iSequence >= sequence.length) { 
      clearInterval(intervalSequence);  // Stop the interval when the entire sequence has been shown
      // Add a delay before displaying "Your turn!" message and resetting the flag
      setTimeout(() => {
        updateMessageSequence('Your turn!', 'message-display'); // Display "Your turn" message
        setTimeout(() => {
          isSequenceShowing = false; // Reset the flag after the delay
          updateMessageSequence('', ''); // Clear the message
        }, 1000); // delay time 1s
      }, 1000); // delay time 1s
    }
  }, 1000); // Interval between blinking each box 1s
}

/**
 * Blinks a specific box by changing its opacity.
 * @param {number} boxIndex - The index of the box to blink.
 */
function blinkBox(boxIndex) {
    const box = boxesSequence[boxIndex];  // Get the box element with the provided index
    box.style.opacity = '1';  // Set the opacity to 1 (fully opaque)
    setTimeout(() => {
      box.style.opacity = '0.1';  // Set the opacity back to 0.1 (partially transparent)
    }, 500);
}

/**
 * Checks if the user sequence matches the sequence.
 */
function checkUserSequence() {
  if (userSequence.length === sequence.length) {
    if (userSequence.join('') === sequence.join('')) {
      // Code is correct
      const containerSequence = document.querySelector('.centered-div-sequence');

      // Set the container's border color to green
      containerSequence.style.borderColor = 'green';
      playAudio("../assets/audios/correctAnswer.mp3")  // Play a sound for correct answer
      updateMessageSequence('Correct! Keep it up!', 'message-correct'); // Update message container with a success message
      document.querySelector(".centered-div-sequence").classList.add("animated-close");
      setTimeout(() => {
        document.querySelector(".centered-div-sequence").style.display = "none";
        document.querySelector(".centered-div-sequence").classList.remove("animated-close");
        imgFileFEx.style.display = "flex";
        imgFileFEx.classList.add("slideIn"); // Add the class to the opening animation´
        setTimeout(function() {
          imgFileFEx.classList.remove("slideIn"); // Remove class after the animation
        }, 200); // Duration of the animation in ms
      }, 2000);

    } else {
      // Code is incorrect
      const containerSequence = document.querySelector('.centered-div-sequence');

      // Set the container's border color to green
      containerSequence.style.borderColor = 'red';
      playAudio("../assets/audios/wrongAnswer.mp3")  // Play a sound for wrong answer
      updateMessageSequence('Game over! You made a mistake. Try again.', 'message-incorrect');  // Update message container with a incorrect message
      setTimeout(() => {
        gameOverSequence(); // Reset the game after a delay
      }, 1000);    // delay time 1s
    }
  }
}

/**
 * Updates the message container with the provided text and CSS class.
 * @param {string} text - The text to be displayed in the message container.
 * @param {string} className - The CSS class to be applied to the message container.
 */
function updateMessageSequence(text,className) {
  const messageContainer = document.getElementById('message-container-sequence');
  messageContainer.textContent = text;
  messageContainer.className = className;
}

/**
 * Handles the game over state by resetting the game after a delay.
 */
function gameOverSequence() {
   // Delay the reset of the game by 1 second (1000 milliseconds)
   setTimeout(() => {
    // Reset the message container
    updateMessageSequence('', '');

    // Reset the container's border color
    const containerSequence = document.querySelector('.centered-div-sequence');
    containerSequence.style.borderColor = '';

    // Clear the sequences and generate a new one
    sequence.length = 0;
    userSequence.length = 0;
    generateSequence();

    // Show the sequence
    showSequence();
  }, 2000);
}

// Attach a click event listener to the element with ID "close"
document.querySelector("#closeSequence").addEventListener("click", function() {
  // When clicked, find the element with class "centered-div" and set its display property to "none"
  document.querySelector(".centered-div-sequence").style.display = "none";
});

// Attach a click event listener to the "redBox" element
challengeF.addEventListener("click", function(){
  imgFileF.style.display = "none";
  // Set the "display" style property of the element with class "centered-div-ImageKey" to "block"
  document.querySelector(".centered-div-sequence").style.display = "flex";
  // Start the game
  generateSequence();
  showSequence();
});

closeBtnFileFEx.addEventListener("click",function(){
  imgFileFEx.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileFEx.style.display = 'none'; // Remove the element after the animation
   imgFileFEx.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

expositiveFileF.addEventListener("click", () => {
  window.open("../assets/pdf/arrayMethods.pdf", "_blank");
});

// Minigame for folder G 
const audioElementsCodeTime = {}; // Object to store audio elements
let countdownIntervalCodeTime; // Declare the countdown interval variable outside the event listener

// Get the countdown element
const countdownElementCodeTime = document.getElementById('countdown-codeTime');

// Get the inputs
const inputsCodeTime = document.querySelectorAll('.input-codeTime');

/**
 * Resets the code input by clearing the input values.
 */
function resetCodeCodeTime() {
  // Clear the input values
  inputsCodeTime.forEach((input) => {
    input.value = 0; // Set the input value to 0, effectively resetting it
  });

  // Reset the container's border color
  const containerCodeTime = document.querySelector('.centered-div-codeTime');
  containerCodeTime.style.borderColor = 'white';
}

/**
 * Plays an audio file.
 * @param {string} audioFile - The path or URL of the audio file to be played.
 * @param {string} audioId - Unique identifier for the audio element.
 */
function playAudioCodeTime(audioFile, audioId) {
  const audio = new Audio(audioFile); // Create a new Audio object
  audio.play(); // Play the audio file
  audioElementsCodeTime[audioId] = audio; // Store the audio object with the corresponding audioId
}

/**
 * Stops the specified audio.
 * @param {string} audioId - Unique identifier for the audio element.
 */
function stopAudioCodeTime(audioId) {
  const audio = audioElementsCodeTime[audioId];
  if (audio) {
    audio.pause(); // Pause the audio
    audio.currentTime = 0; // Reset the audio to the beginning
  }
}

/**
 * Handles the submission of the entered code and performs necessary actions based on correctness.
 */
function submitCodeTime() {
  // Get all input elements within the input containers
  const codeInputsCodeTime = document.querySelectorAll('.input-codeTime');

  // Initialize an empty string to store the entered code
  let enteredCodeTime = '';

  // Get the entered code by concatenating the values of each input
  codeInputsCodeTime.forEach((input) => {
    enteredCodeTime += input.value;
  });

  const targetCodeTime = '3044'; // Correct code

  // Check if the entered code matches the target code
  if (enteredCodeTime === targetCodeTime) {
    // Code is correct
    clearInterval(countdownIntervalCodeTime);
    stopAudioCodeTime('dramatic'); // Stop the dramatic music using the audioId "dramatic"
    countdownElementCodeTime.style.color = 'green';
    const containerCodeTime = document.querySelector('.centered-div-codeTime');

    // Set the container's border color to green
    containerCodeTime.style.borderColor = 'green';

    // Play the audio for correct answer
    playAudioCodeTime('../assets/audios/correctAnswer.mp3', 'correctAnswer');
    document.querySelector(".centered-div-codeTime").classList.add("animated-close");
      setTimeout(() => {
        document.querySelector(".centered-div-codeTime").style.display = "none";
        document.querySelector(".centered-div-codeTime").classList.remove("animated-close");
        imgFileGEx.style.display = "flex";
        imgFileGEx.classList.add("slideIn"); // Add the class to the opening animation´
        setTimeout(function() {
          imgFileGEx.classList.remove("slideIn"); // Remove class after the animation
        }, 200); // Duration of the animation in ms
      }, 2000);
  } else {
    // Code is incorrect
    const containerCodeTime = document.querySelector('.centered-div-codeTime');

    // Set the container's border color to red
    containerCodeTime.style.borderColor = 'red';

    // Play the audio for incorrect answer
    playAudioCodeTime('../assets/audios/wrongAnswer.mp3', 'incorrectAnswer');

    // Shake effect
    const centeredDivCodeTime = document.querySelector('.centered-div-codeTime');

    // Add the 'shake' class to initiate shaking effect
    centeredDivCodeTime.classList.add('shake');
    setTimeout(() => {
      resetCodeCodeTime();
      centeredDivCodeTime.classList.remove('shake'); // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
    }, 2500);
  }
}

// Attach a click event listener to the element with ID "close"
document.querySelector('#close-codeTime').addEventListener('click', function () {
  // When clicked, find the element with class "centered-div-codeTime" and set its display property to "none"
  document.querySelector('.centered-div-codeTime').style.display = 'none';
});

// Attach event listener to the submit button
const submitButtonCodeTime = document.querySelector('.submitBtn-codeTime');
submitButtonCodeTime.addEventListener('click', () => {
  submitCodeTime();
});

// Attach a click event listener to the "redBox" element
challengeG.addEventListener('click', function () {
  imgFileG.style.display = 'none';
  // Set the "display" style property of the element with class "centered-div-ImageKey" to "block"
  document.querySelector('.centered-div-codeTime').style.display = 'flex';

  // Set the initial time in seconds
  let timeInSecondsCodeTime = 60;

  // Set the flag variable to track if audio has been played
  let audioPlayedCodeTime = false;

  // Update the countdown timer every second
  countdownIntervalCodeTime = setInterval(() => {
    // Decrease the time by one second
    timeInSecondsCodeTime--;

    // Format the time into minutes and seconds
    const minutesCodeTime = Math.floor(timeInSecondsCodeTime / 60);
    const secondsCodeTime = timeInSecondsCodeTime % 60;
    const formattedTimeCodeTime = `${padZeroCodeTime(minutesCodeTime)}:${padZeroCodeTime(secondsCodeTime)}`;

    // Update the countdown element with the formatted time
    countdownElementCodeTime.textContent = formattedTimeCodeTime;

    // Check if the counter is below a certain time
    if (timeInSecondsCodeTime <= 10 && !audioPlayedCodeTime) {
      // Play the audio
      playAudioCodeTime('../assets/audios/dramaticMusic.mp3', 'dramatic'); // Play the dramatic music with the audioId "dramatic"
      countdownElementCodeTime.style.color = 'red';

      // Set the flag to true to indicate that audio has been played
      audioPlayedCodeTime = true;
    }

    // Check if the countdown has reached 0
    if (timeInSecondsCodeTime <= 0) {
      // Stop the countdown
      clearInterval(countdownIntervalCodeTime);
    }
  }, 1000);

  // Function to pad a number with leading zeros
  function padZeroCodeTime(number) {
    return number.toString().padStart(2, '0');
  }
});


closeBtnFileGEx.addEventListener("click",function(){
  imgFileGEx.classList.add("animated-close"); // Add the class to the closing animation
 setTimeout(function() {
  imgFileGEx.style.display = 'none'; // Remove the element after the animation
   imgFileGEx.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

expositiveFileG.addEventListener("click", () => {
  window.open("../assets/pdf/functions.pdf", "_blank");
});





// Ending riddle and cutscene

const endingFile=document.querySelector("#endingFile");
const endingOpen=document.querySelector("#centered-div");
const endingCloseBtn=document.querySelector("#close-end");


//EXERCISES
    const exerciseA=document.querySelector("#exerciseA");
    const exerciseB=document.querySelector("#exerciseB");
    const exerciseC=document.querySelector("#exerciseC");
    const exerciseD=document.querySelector("#exerciseD");
    const exerciseE=document.querySelector("#exerciseE");
    const exerciseF=document.querySelector("#exerciseF");
    const exerciseG=document.querySelector("#exerciseG");
    
    const exerciseADiv=document.querySelector("#exerciseADiv")
    const exerciseBDiv=document.querySelector("#exerciseBDiv")
    const exerciseCDiv=document.querySelector("#exerciseCDiv")
    const exerciseDDiv=document.querySelector("#exerciseDDiv")
    const exerciseEDiv=document.querySelector("#exerciseEDiv")
    const exerciseFDiv=document.querySelector("#exerciseFDiv")
    const exerciseGDiv=document.querySelector("#exerciseGDiv")

    const closeExerciseA=document.querySelector("#closeExerciseA")
    const closeExerciseB=document.querySelector("#closeExerciseB")
    const closeExerciseC=document.querySelector("#closeExerciseC")
    const closeExerciseD=document.querySelector("#closeExerciseD")
    const closeExerciseE=document.querySelector("#closeExerciseE")
    const closeExerciseF=document.querySelector("#closeExerciseF")
    const closeExerciseG=document.querySelector("#closeExerciseG")

    //EXERCISE A - MULTIPLE CHOICE

    exerciseA.addEventListener("click",function(){
      exerciseADiv.style.display = 'flex'; // Show the ending challenge
      exerciseADiv.classList.add("slideIn"); // Add the class to the opening animation´
      setTimeout(function() {
        exerciseADiv.classList.remove("slideIn"); // Remove class after the animation
      }, 200); // Duration of the animation in ms

    });
    closeExerciseA.addEventListener("click",function(){
      exerciseADiv.classList.add("animated-close"); // Add the class to the closing animation
      setTimeout(function() {
      exerciseADiv.style.display = 'none'; // Remove the element after the animation
      exerciseADiv.classList.remove("animated-close"); // Remove class after the animation
    }, 200); //Duration of the animation in ms
    })
    const challengeA = new Challenge(
      1,
      "Which of the following is not a JavaScript data type?",
      ["Boolean", "String", "Float", "Null"],
      2,
      "",
      [],
      "",
      ""
    );
    
    const exerciseAQuestion = exerciseADiv.querySelector("#exerciseAQuestion");
    const exerciseAAnswers = exerciseADiv.querySelectorAll("input[name='exerciseAAnswers']");
    
    exerciseAQuestion.textContent = challengeA.multipleChoiceQuestion;
    
    exerciseAAnswers.forEach((input, index) => {
      input.id = "exerciseAOption" + index; // Set the id attribute for each radio input
      input.nextElementSibling.setAttribute("for", "exerciseAOption" + index); // Set the "for" attribute for each label
      input.value = index;
      input.nextElementSibling.textContent = challengeA.multipleChoiceAnswers[index];
    });

    const exerciseSubmitA = document.querySelector("#exerciseSubmitA");

    exerciseSubmitA.addEventListener("click", function() {
      const selectedAnswerA = document.querySelector("input[name='exerciseAAnswers']:checked");
      
      if (selectedAnswerA && selectedAnswerA.value == challengeA.multipleChoiceCorrectAnswer) {
        // Correct answer
        exerciseADiv.style.borderColor = 'green';
        playAudio("../assets/audios/correctAnswer.mp3", "correctAnswer")
        setTimeout(() => {
          exerciseADiv.style.display = "none";
          imgFileA.style.display = "none";
        }, 2500);
        fileA.style.display="none";
        fileB.style.display="none";
        fileC.style.display="flex";
      } else {
        // Incorrect answer or no answer selected
        exerciseADiv.style.borderColor = 'red';

        // Play the audio for incorrect answer
        playAudio("../assets/audios/wrongAnswer.mp3")

        // Shake effect

        // Add the 'shake' class to initiate shaking effect
        exerciseADiv.classList.add('shake');
        setTimeout(() => {
          resetCode()
          exerciseADiv.style.borderColor = 'white';
          exerciseADiv.classList.remove('shake');  // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
        }, 2500);
      }
    });



    //EXERCISE B - FILL IN THE BLANKS

    exerciseB.addEventListener("click",function(){
      exerciseBDiv.style.display = 'flex'; // Show the ending challenge
      exerciseBDiv.classList.add("slideIn"); // Add the class to the opening animation´
      setTimeout(function() {
        exerciseBDiv.classList.remove("slideIn"); // Remove class after the animation
      }, 200); // Duration of the animation in ms

    });
    closeExerciseB.addEventListener("click",function(){
      exerciseBDiv.classList.add("animated-close"); // Add the class to the closing animation
      setTimeout(function() {
      exerciseBDiv.style.display = 'none'; // Remove the element after the animation
      exerciseBDiv.classList.remove("animated-close"); // Remove class after the animation
    }, 200); //Duration of the animation in ms
    })


    const challengeB = new Challenge(
      2,
      "",
      [],
      0,
      "The value of a variable can be assigned using the <<input1>> operator.\nThe <<input2>> operator is used to concatenate two strings in JavaScript.",
      ["=","+"],
      "",
      ""
    );
    
    const exerciseBQuestion = exerciseBDiv.querySelector("#exerciseBQuestion");
    exerciseBQuestion.innerHTML = challengeB.fillText.replace(/<<input(\d+)>>/g, (_, index) => {
      const inputId = `exerciseBInput${index}`;
      const placeholder = `Input ${index + 1}`;
      return `<input type="text" id="${inputId}" maxlength="1" size="1">`;
    });
    
    const exerciseSubmitB = document.querySelector("#exerciseSubmitB");
    
    exerciseSubmitB.addEventListener("click", function() {
      const input1B=document.querySelector("#exerciseBInput1").value;
      const input2B=document.querySelector("#exerciseBInput2").value;

      if(input1B===challengeB.fillCorrectAnswers[0] && input2B===challengeB.fillCorrectAnswers[1])
      {

        exerciseBDiv.style.borderColor = 'green';
        playAudio("../assets/audios/correctAnswer.mp3", "correctAnswer")
        setTimeout(() => {
          exerciseBDiv.style.display = "none";
          imgFileB.style.display = "none";
        }, 2500);
        fileA.style.display="none";
        fileB.style.display="none";
        setTimeout(() => {
          fileC.style.display="flex";
        }, 2500);
        
      } else {
        // Incorrect answer or no answer selected
        exerciseBDiv.style.borderColor = 'red';

        // Play the audio for incorrect answer
        playAudio("../assets/audios/wrongAnswer.mp3")

        // Shake effect

        // Add the 'shake' class to initiate shaking effect
        exerciseBDiv.classList.add('shake');
        setTimeout(() => {
          resetCode()
          exerciseBDiv.style.borderColor = 'white';
          exerciseBDiv.classList.remove('shake');  // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
        }, 2500);
      }
    });



    //EXERCISE C - MULTIPLE CHOICE

    exerciseC.addEventListener("click",function(){
      exerciseCDiv.style.display = 'flex'; // Show the ending challenge
      exerciseCDiv.classList.add("slideIn"); // Add the class to the opening animation´
      setTimeout(function() {
        exerciseCDiv.classList.remove("slideIn"); // Remove class after the animation
      }, 200); // Duration of the animation in ms

    });
    closeExerciseC.addEventListener("click",function(){
      exerciseCDiv.classList.add("animated-close"); // Add the class to the closing animation
      setTimeout(function() {
      exerciseCDiv.style.display = 'none'; // Remove the element after the animation
      exerciseCDiv.classList.remove("animated-close"); // Remove class after the animation
    }, 200); //Duration of the animation in ms
    })
    const challengeC = new Challenge(
      3,
      "Which keyword is used to declare a block of code that should be executed if a certain condition is true?",
      ["if", "else", "switch", "case"],
      0,
      "",
      [],
      "",
      ""
    );
    
    const exerciseCQuestion = exerciseCDiv.querySelector("#exerciseCQuestion");
    const exerciseCAnswers = exerciseCDiv.querySelectorAll("input[name='exerciseCAnswers']");
    
    exerciseCQuestion.textContent = challengeC.multipleChoiceQuestion;
    
    exerciseCAnswers.forEach((input, index) => {
      input.id = "exerciseCOption" + index; // Set the id attribute for each radio input
      input.nextElementSibling.setAttribute("for", "exerciseCOption" + index); // Set the "for" attribute for each label
      input.value = index;
      input.nextElementSibling.textContent = challengeC.multipleChoiceAnswers[index];
    });

    const exerciseSubmitC = document.querySelector("#exerciseSubmitC");

    exerciseSubmitC.addEventListener("click", function() {
      const selectedAnswerC = document.querySelector("input[name='exerciseCAnswers']:checked");
      
      if (selectedAnswerC && selectedAnswerC.value == challengeC.multipleChoiceCorrectAnswer) {
        // Correct answer
        exerciseCDiv.style.borderColor = 'green';
        playAudio("../assets/audios/correctAnswer.mp3", "correctAnswer")
        setTimeout(() => {
          exerciseCDiv.style.display = "none";
          imgFileCEx.style.display = "none";
        }, 2500);
        setTimeout(() => {
        generateCenteredDivNewWord('"starts"')
        }, 2500);
        fileC.style.display="none";
        setTimeout(() => {
          fileD.style.display="flex";
        }, 1000);
        setTimeout(() => {
          fileE.style.display="flex";
        }, 2000);
        setTimeout(() => {
          fileF.style.display="flex";
        }, 3000);
        setTimeout(() => {
          fileG.style.display="flex";
        }, 4000);
        loggedUser.inventory.push('"starts"')
        updateRewards()
        updateUserInventory(loggedUser.username, loggedUser.inventory)
      } else {
        // Incorrect answer or no answer selected
        exerciseCDiv.style.borderColor = 'red';

        // Play the audio for incorrect answer
        playAudio("../assets/audios/wrongAnswer.mp3")

        // Shake effect

        // Add the 'shake' class to initiate shaking effect
        exerciseCDiv.classList.add('shake');
        setTimeout(() => {
          resetCode()
          exerciseCDiv.style.borderColor = 'white';
          exerciseCDiv.classList.remove('shake');  // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
        }, 2500);
      }
    });


     //EXERCISE D - SHORT ANSWER

     exerciseD.addEventListener("click",function(){
      exerciseDDiv.style.display = 'flex'; // Show the ending challenge
      exerciseDDiv.classList.add("slideIn"); // Add the class to the opening animation´
      setTimeout(function() {
        exerciseDDiv.classList.remove("slideIn"); // Remove class after the animation
      }, 200); // Duration of the animation in ms

    });
    closeExerciseD.addEventListener("click",function(){
      exerciseDDiv.classList.add("animated-close"); // Add the class to the closing animation
      setTimeout(function() {
      exerciseDDiv.style.display = 'none'; // Remove the element after the animation
      exerciseDDiv.classList.remove("animated-close"); // Remove class after the animation
    }, 200); //Duration of the animation in ms
    })


    const EchallengeD = new Challenge(
      4,
      "",
      [],
      0,
      "",
      [],
      "What will be the output of the code snippet?<br><br>\
let sum = 0;<br>\
for (let i = 1; i <= 10; i++) {<br>\
  if (i % 2 === 0) {<br>\
    sum += i;<br>\
  }<br>\
}<br>\
console.log(sum);<br>\
",
      "30"
    );
    
    const exerciseDQuestion = exerciseDDiv.querySelector("#exerciseDQuestion");
    exerciseDQuestion.innerHTML = EchallengeD.shortQuestion;
    
    
    const exerciseSubmitD = document.querySelector("#exerciseSubmitD");
    
    exerciseSubmitD.addEventListener("click", function() {
      const inputShortD=document.querySelector("#exerciseDInput").value;
      

      if(inputShortD==EchallengeD.shortCorrectAnswer)
      {

        exerciseDDiv.style.borderColor = 'green';
        playAudio("../assets/audios/correctAnswer.mp3", "correctAnswer")
        setTimeout(() => {
          exerciseDDiv.style.display = "none";
          imgFileDEx.style.display = "none";
        }, 2500);
        setTimeout(() => {
          generateCenteredDivNewWord('"game"')
          }, 2500);
          fileD.src="../assets/images/fileDdisable.png"
          fileD.removeEventListener("click",fileDopen)
          loggedUser.inventory.push('"game"')
          updateRewards()
          updateUserInventory(loggedUser.username, loggedUser.inventory)
      } else {
        // Incorrect answer or no answer selected
        exerciseDDiv.style.borderColor = 'red';

        // Play the audio for incorrect answer
        playAudio("../assets/audios/wrongAnswer.mp3")

        // Shake effect

        // Add the 'shake' class to initiate shaking effect
        exerciseDDiv.classList.add('shake');
        setTimeout(() => {
          resetCode()
          exerciseDDiv.style.borderColor = 'white';
          exerciseDDiv.classList.remove('shake');  // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
        }, 2500);
      }
    });


         //EXERCISE E - SHORT

         exerciseE.addEventListener("click",function(){
          exerciseEDiv.style.display = 'flex'; // Show the ending challenge
          exerciseEDiv.classList.add("slideIn"); // Add the class to the opening animation´
          setTimeout(function() {
            exerciseEDiv.classList.remove("slideIn"); // Remove class after the animation
          }, 200); // Duration of the animation in ms
    
        });
        closeExerciseE.addEventListener("click",function(){
          exerciseEDiv.classList.add("animated-close"); // Add the class to the closing animation
          setTimeout(function() {
          exerciseEDiv.style.display = 'none'; // Remove the element after the animation
          exerciseEDiv.classList.remove("animated-close"); // Remove class after the animation
        }, 200); //Duration of the animation in ms
        })
    
    
        const EchallengeE = new Challenge(
          5,
          "",
          [],
          0,
          "",
          [],
          'What is going to be shown on the console?<br>let brands = ["BMW", "Mercedes", "Audi", "Porsche", "Renault", "Bugatti"]<br>console.log(brands.indexOf("Mercedes",2));',
          "-1"
        );
        
        const exerciseEQuestion = exerciseEDiv.querySelector("#exerciseEQuestion");
        exerciseEQuestion.innerHTML = EchallengeE.shortQuestion;
        
        
        const exerciseSubmitE = document.querySelector("#exerciseSubmitE");
        
        exerciseSubmitE.addEventListener("click", function() {
        const inputShortE=document.querySelector("#exerciseEInput").value;
          
    
          if(inputShortE==EchallengeE.shortCorrectAnswer)
          {
    
            exerciseEDiv.style.borderColor = 'green';
            playAudio("../assets/audios/correctAnswer.mp3", "correctAnswer")
            setTimeout(() => {
              exerciseEDiv.style.display = "none";
              imgFileEEx.style.display = "none";
            }, 2500);
            setTimeout(() => {
              generateCenteredDivNewWord('"The"')
              }, 2500);
              fileE.src="../assets/images/fileEdisable.png"
              fileE.removeEventListener("click",fileEopen)
              loggedUser.inventory.push('"The"')
              updateRewards()
              updateUserInventory(loggedUser.username, loggedUser.inventory)
          } else {
            // Incorrect answer or no answer selected
          exerciseEDiv.style.borderColor = 'red';

          // Play the audio for incorrect answer
          playAudio("../assets/audios/wrongAnswer.mp3")

          // Shake effect

          // Add the 'shake' class to initiate shaking effect
          exerciseEDiv.classList.add('shake');
          setTimeout(() => {
            resetCode()
            exerciseEDiv.style.borderColor = 'white';
            exerciseEDiv.classList.remove('shake');  // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
          }, 2500);
          }
        });



        //EXERCISE F - MULTIPLE CHOICE

    exerciseF.addEventListener("click",function(){
      exerciseFDiv.style.display = 'flex'; // Show the ending challenge
      exerciseFDiv.classList.add("slideIn"); // Add the class to the opening animation´
      setTimeout(function() {
        exerciseFDiv.classList.remove("slideIn"); // Remove class after the animation
      }, 200); // Duration of the animation in ms

    });
    closeExerciseF.addEventListener("click",function(){
      exerciseFDiv.classList.add("animated-close"); // Add the class to the closing animation
      setTimeout(function() {
      exerciseFDiv.style.display = 'none'; // Remove the element after the animation
      exerciseFDiv.classList.remove("animated-close"); // Remove class after the animation
    }, 200); //Duration of the animation in ms
    })
    const EchallengeF = new Challenge(
      6,
      "What is the result of the expression: [1, 2, 3, 4].filter(x => x > 2)?",
      ["[1, 2]", "[2, 3]", "[3, 4]", "[1, 3, 4]"],
      2,
      "",
      [],
      "",
      ""
    );
    
    const exerciseFQuestion = exerciseFDiv.querySelector("#exerciseFQuestion");
    const exerciseFAnswers = exerciseFDiv.querySelectorAll("input[name='exerciseFAnswers']");
    
    exerciseFQuestion.textContent = EchallengeF.multipleChoiceQuestion;
    
    exerciseFAnswers.forEach((input, index) => {
      input.id = "exerciseFOption" + index; // Set the id attribute for each radio input
      input.nextElementSibling.setAttribute("for", "exerciseFOption" + index); // Set the "for" attribute for each label
      input.value = index;
      input.nextElementSibling.textContent = EchallengeF.multipleChoiceAnswers[index];
    });

    const exerciseSubmitF = document.querySelector("#exerciseSubmitF");

    exerciseSubmitF.addEventListener("click", function() {
      const selectedAnswerF = document.querySelector("input[name='exerciseFAnswers']:checked");
      
      if (selectedAnswerF && selectedAnswerF.value == EchallengeF.multipleChoiceCorrectAnswer) {
        // Correct answer
        exerciseFDiv.style.borderColor = 'green';
        playAudio("../assets/audios/correctAnswer.mp3", "correctAnswer")
        setTimeout(() => {
          exerciseFDiv.style.display = "none";
          imgFileFEx.style.display = "none";
        }, 2500);
        setTimeout(() => {
          generateCenteredDivNewWord('"real"')
          }, 2500);
          fileF.src="../assets/images/fileFdisable.png"
          fileF.removeEventListener("click",fileFopen)
          loggedUser.inventory.push('"real"')
          updateRewards()
          updateUserInventory(loggedUser.username, loggedUser.inventory)
      } else {
        // Incorrect answer or no answer selected
        exerciseFDiv.style.borderColor = 'red';

        // Play the audio for incorrect answer
        playAudio("../assets/audios/wrongAnswer.mp3")

        // Shake effect

        // Add the 'shake' class to initiate shaking effect
        exerciseFDiv.classList.add('shake');
        setTimeout(() => {
          resetCode()
          exerciseFDiv.style.borderColor = 'white';
          exerciseFDiv.classList.remove('shake');  // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
        }, 2500);
      }
    });



    //EXERCISE G - FILL IN THE BLANKS

    exerciseG.addEventListener("click",function(){
      exerciseGDiv.style.display = 'flex'; // Show the ending challenge
      exerciseGDiv.classList.add("slideIn"); // Add the class to the opening animation´
      setTimeout(function() {
        exerciseGDiv.classList.remove("slideIn"); // Remove class after the animation
      }, 200); // Duration of the animation in ms

    });
    closeExerciseG.addEventListener("click",function(){
      exerciseGDiv.classList.add("animated-close"); // Add the class to the closing animation
      setTimeout(function() {
      exerciseGDiv.style.display = 'none'; // Remove the element after the animation
      exerciseGDiv.classList.remove("animated-close"); // Remove class after the animation
    }, 200); //Duration of the animation in ms
    })


    const EchallengeG = new Challenge(
      7,
      "",
      [],
      0,
      "A JavaScript function is defined using the <<input1>> keyword.<br>The <<input2>> statement in a function is used to return a value from the function.The <<input3>> parameter in a function definition allows the function to accept any number of arguments",
      ["function","return","rest"],
      "",
      ""
    );
    
    const exerciseGQuestion = exerciseGDiv.querySelector("#exerciseGQuestion");
    exerciseGQuestion.innerHTML = EchallengeG.fillText.replace(/<<input(\d+)>>/g, (_, index) => {
      const inputId = `exerciseGInput${index}`;
      const placeholder = `Input ${index + 1}`;
      return `<input type="text" id="${inputId}" maxlength="8" size="8">`;
    });
    
    const exerciseSubmitG = document.querySelector("#exerciseSubmitG");
    
    exerciseSubmitG.addEventListener("click", function() {
      const input1G=document.querySelector("#exerciseGInput1").value;
      const input2G=document.querySelector("#exerciseGInput2").value;
      const input3G=document.querySelector("#exerciseGInput3").value;
      if(input1G===EchallengeG.fillCorrectAnswers[0] && input2G===EchallengeG.fillCorrectAnswers[1] && input3G===EchallengeG.fillCorrectAnswers[2])
      {

        exerciseGDiv.style.borderColor = 'green';
        playAudio("../assets/audios/correctAnswer.mp3", "correctAnswer")
        setTimeout(() => {
          exerciseGDiv.style.display = "none";
          imgFileGEx.style.display = "none";
        }, 2500);
        setTimeout(() => {
          generateCenteredDivNewWord('"now"')
          }, 2500);
        fileG.src="../assets/images/fileGdisable.png"
        fileG.removeEventListener("click",fileGopen)
        loggedUser.inventory.push('"now"')
        updateRewards()
        updateUserInventory(loggedUser.username, loggedUser.inventory)
      } else {
        // Incorrect answer or no answer selected
        exerciseGDiv.style.borderColor = 'red';

        // Play the audio for incorrect answer
        playAudio("../assets/audios/wrongAnswer.mp3")

        // Shake effect

        // Add the 'shake' class to initiate shaking effect
        exerciseGDiv.classList.add('shake');
        setTimeout(() => {
          resetCode()
          exerciseGDiv.style.borderColor = 'white';
          exerciseGDiv.classList.remove('shake');  // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
        }, 2500);
      }
    });

endingFile.addEventListener("click", function(){
  endingOpen.style.display = 'flex'; // Show the ending challenge
  endingOpen.classList.add("slideIn"); // Add the class to the opening animation´
  setTimeout(function() {
    endingOpen.classList.remove("slideIn"); // Remove class after the animation
  }, 200); // Duration of the animation in ms
})

endingCloseBtn.addEventListener("click",function(){
  endingOpen.classList.add("animated-close"); // Add the class to the closing animation
  
 setTimeout(function() {
  endingOpen.style.display = 'none'; // Remove the element after the animation
  endingOpen.classList.remove("animated-close"); // Remove class after the animation
  formEnding.style.display = 'none'; // Remove the element after the animation
  formEnding.classList.remove("animated-close"); // Remove class after the animation
 }, 200); //Duration of the animation in ms
})

// Get the inputs
const inputs = document.querySelectorAll('input');

/**
 * Resets the code input by clearing the input values.
 */
function resetCode() {
    // Clear the input values
    inputs.forEach((input) => {
      input.value = "";  // Set the input value to empty, effectively resetting it
    });
  
    // Reset the container's border color
    const container = document.querySelector('.centered-div');
    container.style.borderColor = 'white';
  }
  
/**
 * Plays an audio file.
 * @param {string} audioFile - The path or URL of the audio file to be played.
 */
function playAudio(audioFile) {
    const audio = new Audio(audioFile); // Create a new Audio object with the provided audio file
    audio.play(); // Play the audio file
}
  
/**
 * Handles the submission of the entered code and performs necessary actions based on correctness.
 */
function submitCode() {
  // Retrieve the values of the input fields with specific IDs
  const word1 = document.querySelector("#word1").value;
  const word2 = document.querySelector("#word2").value;
  const word3 = document.querySelector("#word3").value;
  const word4 = document.querySelector("#word4").value;
  const word5 = document.querySelector("#word5").value;


  // Check if the entered code matches the target code
  if (word1 == "The" && word2 == "real" && word3 == "game" && word4 == "starts" && word5 == "now" ) {
    const container = document.querySelector('#centered-div');

    // Code matches the target code
    // Set the container's border color to green
    container.style.borderColor = 'green';

    // Play the audio for correct answer
    playAudio("../assets/audios/correctAnswer.mp3", "correctAnswer")
    updateUserStatus(loggedUser.username)

    loggedUser.hasFinished=true

    // Waits 2.5 seconds and redirects to the end page
    setTimeout(() => {
      window.location.href = "../html/fim.html"
    }, 2500);
    

  } else {
    // Code is incorrect
    const container = document.querySelector('.centered-div');

    // Set the container's border color to red
    container.style.borderColor = 'red';

    // Play the audio for incorrect answer
    playAudio("../assets/audios/wrongAnswer.mp3", "incorrectAnswer")

    // Shake effect
    const centeredDiv = document.querySelector('.centered-div');

    // Add the 'shake' class to initiate shaking effect
    centeredDiv.classList.add('shake');
    setTimeout(() => {
      resetCode()
      centeredDiv.classList.remove('shake');  // Remove the 'shake' class after a delay of 2500 milliseconds (2.5 seconds)
    }, 2500);
  }
}


// Attach event listener to the submit button
const submitButton = document.querySelector('.submitBtn');
submitButton.addEventListener('click', () => {
  submitCode();
});


if(loggedUser.inventory.includes('"starts"'))
  {
    fileA.style.display="none"
    fileB.style.display="none"
    fileC.style.display="none"
    fileD.style.display="flex"
    fileE.style.display="flex"
    fileF.style.display="flex"
    fileG.style.display="flex"

  }
  if(loggedUser.inventory.includes('"game"'))
  {
    fileD.src="../assets/images/fileDdisable.png"
    fileD.removeEventListener("click",fileDopen)
  }
  if(loggedUser.inventory.includes('"The"'))
  {
    fileE.src="../assets/images/fileEdisable.png"
    fileE.removeEventListener("click",fileEopen)
  }
  if(loggedUser.inventory.includes('"real"'))
  {
    fileF.src="../assets/images/fileFdisable.png"
    fileF.removeEventListener("click",fileFopen)
  }
  if(loggedUser.inventory.includes('"now"'))
  {
    fileG.src="../assets/images/fileGdisable.png"
    fileG.removeEventListener("click",fileGopen)
  }
  if(loggedUser.inventory.length==5)
  {
    endingFile.style.display="flex"
  }
    

  

    



// Inicializa o plugin "Responsive Image Maps"
$('img[usemap]').rwdImageMaps();
