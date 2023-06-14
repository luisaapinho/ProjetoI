

/**
 * Creates and appends a dialogue element to the body of the page.
 * @param {string} imageSrc - The source of the image to display.
 * @param {string} message - The text to display.
 */
function createDialogueElement(imageSrc,message) {
     // Create a new div element with the class 'dialogue'
    let dialogue = document.createElement('div');
    dialogue.className = 'dialogue slideIn'; // Add the 'slideIn' class here

    // Create a new img element and set its source to the imageSrc argument
    let img = document.createElement('img');
    img.src = imageSrc;

    // Create a new p element, set its id to 'text', and set its text content to the message argument
    let text = document.createElement('p');
    text.id = "text"
    text.textContent = message;

    // Create a new div element with the class 'arrow'
    let arrow = document.createElement('div');
    arrow.className = 'arrowSam';

    // Create a new img element, set its source to 'arrow.png', and set its alt text to 'Arrow'
    let arrowImg = document.createElement('img');
    arrowImg.src = '../assets/images/arrowSam.png';
    arrowImg.alt = 'Arrow';
    arrowImg.id="arrowSam";

    // Append the arrowImg element to the arrow element
    arrow.appendChild(arrowImg);

     // Append the img, text, and arrow elements to the dialogue element
    dialogue.appendChild(img);
    dialogue.appendChild(text);
    dialogue.appendChild(arrow);


    // Append the dialogue element to the body of the page
    document.body.appendChild(dialogue);
    hideSamMessage(dialogue);
}


/**
 * Hides the dialogue element when the arrow is clicked.
 */
function hideSamMessage(dialogue) {
    dialogue.querySelector('.arrowSam').addEventListener('click', function() {
        // Add the 'hidden' class to the dialogue element to fade it out
        dialogue.classList.add('fadeOut');
        // Wait for the fade-out animation to complete before hiding the dialogue element
        setTimeout(() => {
            dialogue.style.display = 'none';
        }, 500);
    });
}
/**
 * Sets the source of the image inside the dialogue element.
 * @param {string} imageSrc - The source of the image to display.
 */
function setImage(imageSrc) {
    document.querySelector('.dialogue img').src = imageSrc;
}

/**
 * Sets the text content of the text element inside the dialogue element.
 * @param {string} message - The text to display.
 */
function showSamMessage(message) {
    document.getElementById('text').textContent = message;
}

/**
 * Displays a message with an image in the dialogue element.
 * @param {string} imageSrc - The source of the image to display.
 * @param {string} message - The text to display.
 */
export function displaySamMessage(imageSrc, message) {
    // Call the createDialogueElement function to create and append the dialogue element to the body
    createDialogueElement(imageSrc,message);
    // Call the setImage function to set the source of the image inside the dialogue element
    setImage(imageSrc);
    // Call the showSamMessage function to set the text content of the text element inside the dialogue element
    showSamMessage(message);
    // Call the hideSamMessage function to add an event listener to hide the dialogue element when the arrow is clicked
    hideSamMessage(document.querySelector('.dialogue'));
}

// Call the displaySamMessage function to display a message in the dialogue element
//displaySamMessage("samNormal.png","So you're the inferior human being they hire to help me clean up the virus I'm alreadSo you're the inferior human being they hire to help me clean up the virus I'm alread")









