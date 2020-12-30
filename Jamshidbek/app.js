// document.getElementById('show').onclick = function show() {
//     var type = document.getElementById("password").getAttribute("type");

//     if (type === "password") {
//         document.getElementById("password").setAttribute("type", "text");
//         document.getElementById("eye").classList.remove("fa-eye-slash");
//         document.getElementById("eye").classList.add("fa-eye");
//     } else {
//         document.getElementById("password").setAttribute("type", "password");
//         document.getElementById("eye").classList.add("fa-eye-slash");
//         document.getElementById("eye").classList.remove("fa-eye");
//     }
// }

// document.getElementById('password').onkeyup = function() {
//     if (this.value.length <= 8) {
//         document.getElementById('alert').innerText = "belgilar soni 8 tadan kam bo'lmasligi kerak";
//     } else {
//         document.getElementById('alert').innerText = "";
//         document.getElementById('alert').style.color = '#fff'
//     }
// }

const EMAIL = document.getElementById('elabel');
const PASSWORD = document.getElementById('password');
const ICONKA = document.getElementById('eye');
const OGOHLANTIRISH = document.getElementById('alert');

let tekshiruv = true;

function show() {
    if (tekshiruv) {
        ICONKA.classList.remove('fa-eye-slash');
        ICONKA.classList.add('fa-eye');
        PASSWORD.setAttribute("type", "text");
        tekshiruv = false
    } else {
        ICONKA.classList.add('fa-eye-slash');
        ICONKA.classList.remove('fa-eye');
        PASSWORD.setAttribute("type", "password");
        tekshiruv = true
    }
}
document.getElementById('password').onkeyup = function() {
    if (this.value.length <= 8) {
        OGOHLANTIRISH.innerText = "Belgilar soni 8 tadan kam bo'lmasligi kerak";
        OGOHLANTIRISH.style.color = '#fff';
    } else {
        OGOHLANTIRISH.innerText = '';
    }
}