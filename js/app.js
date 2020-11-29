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
    const openSection = document.querySelector("#open");
    const passwordCode = document.getElementById("passwordCode").value;
    if (passwordCode === 998933057927) {
        openSection.innerHTML = '';
    }
    // switch (passwordCode) {
    //     case '998933057927':
    //     case 'h998933057927':
    //         openSection.innerHTML = '';
    // }
}
// const passwordCode = passwordEl.value;

// function logIn() {
//     switch (passwordCose) {
//         case '998933057927':
//         case 'h998933057927'
//         openSection.classList.remove("z-101");
//         openSection.classList.add("z-i101");
//         openSection.innerHTML = '';
//         break;
//         default:
//             ;
//     }
// }