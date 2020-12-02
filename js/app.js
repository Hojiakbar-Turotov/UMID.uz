// 
const openLogIn = document.getElementById("open");
const closeLogIn = document.getElementById("close");
const openning = document.querySelectorAll("#openning");

// 
const passwordEl = document.querySelector(".password");
const eyeButton = document.querySelector(".fa");
let isPass = true;

function togglePass() {
    if (isPass) {
        passwordEl.setAttribute("type", "text");
        eyeButton.classList.remove("fa-eye-slash");
        eyeButton.classList.add("fa-eye");
        isPass = false
    } else {
        passwordEl.setAttribute("type", "password");
        eyeButton.classList.remove("fa-eye");
        eyeButton.classList.add("fa-eye-slash");
        isPass = true
    }
}
//
function logIn() {
    const LOGIN = document.querySelectorAll(".login").value;
    const PASSWORD = passwordEl.value;

    if ((LOGIN = hturotov) && (PASSWORD === 998933057927)) {
        openLogIn.classList.add("d-none");
        openning.classList.remove("d-none");
    } else {
        openLogIn.classList.add("d-none");
        closeLogIn.classList.remove("d-none")
    }
}