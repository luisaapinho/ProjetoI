import { getUserLogged, logout, updateUserStatus } from "../models/UserModel.js";

let closedLetterImg = document.querySelector("#closedLetter");
let message = document.querySelector(".message");
let container = document.querySelector(".container");
let video = document.querySelector("video");

const userLogged = getUserLogged()
/**
 * Plays an audio file.
 * @param {string} audioFile - The path or URL of the audio file to be played.
 */
function playAudio(audioFile) {
    const audio = new Audio(audioFile); // Create a new Audio object with the provided audio file
    audio.play(); // Play the audio file
  }
  


closedLetterImg.addEventListener("click", function(){
    if(closedLetterImg.src.includes("closedLetter.png")) {
        closedLetterImg.src = "../assets/images/openLetter.png"
    } else if (closedLetterImg.src.includes("openLetter.png")) {
        closedLetterImg.src = "../assets/images/contract.png";
    } else if (closedLetterImg.src.includes("contract.png")) {
        // Show the message
        message.style.display = "block";
        playAudio("../assets/audios/pen.mp3");

        
        // Set the random name as the content of the message div
        message.textContent = userLogged.username;

        setTimeout(function() {
            message.style.animationPlayState = "paused"; // Pause the animation
            message.style.display = "none";
            container.style.display = "none";
            video.style.display = "block"; // Display the video
        
            setTimeout(function() {
                video.play(); // Play the video after a delay
        
                video.onended = function() {
                    // Video has ended, wait for an additional delay before redirecting
                    setTimeout(function() {
                        updateUserStatus(userLogged.username)
                        logout()
                        window.location.href = "../index.html"; // Redirect to another page
                    }, 2500); // Delay time in milliseconds before redirecting
                };
            }, 10); // Delay time in milliseconds before playing the video
        }, 5000); // Delay time in milliseconds before starting the process
    }
}) 

// Pause the video initially
video.pause();