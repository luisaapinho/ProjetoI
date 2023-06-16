/**
 * Function to generate a centered div for a new word.
 * @param {string} word - The word to be displayed.
 */
export function generateCenteredDivNewWord(word) {
    // Create the main container div
    let centeredDivNewWord = document.createElement("div");
    centeredDivNewWord.classList.add("centered-div-newWord");
  
    // Create the close icon image
    let closeIconNewWord = document.createElement("img");
    closeIconNewWord.id = "close-newWord";
    closeIconNewWord.src = "../assets/images/close.png";
    closeIconNewWord.classList.add("close-icon-newWord");
    centeredDivNewWord.appendChild(closeIconNewWord);
  
    // Create the h1 element
    let h1NewWord = document.createElement("h1");
    h1NewWord.classList.add("h1-newWord")
    h1NewWord.textContent = "NEW ITEM!";
    centeredDivNewWord.appendChild(h1NewWord);
  
    // Create the h2 element for the word
    let h2NewWord = document.createElement("h2");
    h2NewWord.id = "h2-newWord";
    h2NewWord.textContent = word;
    centeredDivNewWord.appendChild(h2NewWord);
  
    
    document.body.appendChild(centeredDivNewWord);

     // Attach a click event listener to the close icon element
    closeIconNewWord.addEventListener("click", function () {
        // Find the parent element (centeredDivNewWord) and remove it from the DOM
        centeredDivNewWord.remove();
    });
}

//generateCenteredDivNewWord("Teste")


  

