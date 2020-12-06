function openLogIn() {
    setTimeout(function() {
        const OPENLOGIN = document.getElementById("openLogIn");
        const CLOSELOGIN = document.getElementById("closeLogIn");
        const OPENNING = document.querySelectorAll("#openning");

        const LOGIN = document.querySelectorAll(".login").value;
        const PASSWORD = document.querySelectorAll(".password").value;
        OPENLOGIN.classList.add("d-none");

        if ((LOGIN === "hturotov") && (PASSWORD === 998933057927)) {
            OPENNING.classList.remove("d-none")
        } else {
            CLOSELOGIN.classList.remove("d-none")
        }
    }, 3000)


}