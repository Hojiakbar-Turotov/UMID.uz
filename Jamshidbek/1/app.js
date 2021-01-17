const OGOHLANTIRISH = document.getElementById('alert');


document.getElementById('password').onkeyup = function() {
    if (this.value == 8888) {
        OGOHLANTIRISH.innerText = 'Topdiz';
    } else {
        OGOHLANTIRISH.innerText = "Hato";
    }
}