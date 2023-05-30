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

trashCan.addEventListener("click", function() {
  trashOpen.style.display = 'flex'; // Exibe o elemento
  trashOpen.classList.add("slideIn"); // Adiciona a classe para a animação de abertura
  setTimeout(function() {
    trashOpen.classList.remove("slideIn"); // Remove a classe da animação após a conclusão
  }, 200); // Duração da animação em ms
});
closeBtn.addEventListener("click", function() {
  trashOpen.classList.add("animated-close"); // Adiciona a classe para a animação de fechamento
  setTimeout(function() {
    trashOpen.style.display = 'none'; // Remove o elemento após a animação
    trashOpen.classList.remove("animated-close"); // Remove a classe para a animação de fechamento
  }, 200); // Tempo da animação em ms
});

fileImage.addEventListener("click", function() {
  trashOpen.classList.add("animated-close"); // Adiciona a classe para a animação de fechamento
  setTimeout(function() {
    trashOpen.style.display = 'none'; // Remove o elemento após a animação
    trashOpen.classList.remove("animated-close"); // Remove a classe para a animação de fechamento
    
    imgForm.style.display = 'flex';   // Abre a imagem onde estão os formulários necessários para o código de um jogo
    
    trashOpen.classList.add("slideIn"); // Adiciona a classe para a animação de abertura
    setTimeout(function() {
      trashOpen.classList.remove("slideIn"); // Remove a classe da animação após a conclusão
    }, 1000); // Duração da animação em ms
  }, 200); // Tempo da animação de fechamento em ms
});

closeBtnForms.addEventListener("click", function() {
  imgForm.classList.add("animated-close"); // Adiciona a classe para a animação de fechamento
  setTimeout(function() {
    imgForm.style.display = 'none'; // Remove o elemento após a animação
    imgForm.classList.remove("animated-close"); // Remove a classe para a animação de fechamento
  }, 150); // Tempo da animação em ms
  trashOpen.style.display = 'flex'; // Abre o trashOpen onde o arquivo estava
});

// Inicializa o plugin "Responsive Image Maps"
$('img[usemap]').rwdImageMaps();
