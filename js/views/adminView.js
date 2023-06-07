import * as User from "../models/UserModel.js";


let arrow = document.querySelector("#adminHome");
let lupa = document.getElementById("lupa");


arrow.addEventListener("click", function() {
    User.logout()
    setTimeout(() => {
        location.href = "../index.html";
    }, 1000);
})

lupa.addEventListener("click",function(){
    alert("teste")
})






// Displays a message of the given type (e.g. success or error) with the given text
function showMessage(type, message) {
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
};

