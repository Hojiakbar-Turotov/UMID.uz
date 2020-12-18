function openLogIn() {
    setTimeout(function() {
        const OPENLOGIN = document.getElementById("openLogIn");
        const CLOSELOGIN = document.getElementById("closeLogIn");
        const OPENNING = document.querySelectorAll("#openning");

        const LOGIN = document.getElementById("loginid").value;
        const PASSWORD = document.getElementById("passwordid").value;


        if ((LOGIN === "hturotov") && (PASSWORD == 998933057927)) {
            OPENLOGIN.classList.add("d-none");
            OPENNING.classList.remove("d-none")
        } else {

            OPENLOGIN.classList.add("d-none");
            CLOSELOGIN.classList.remove("d-none")
        }
    }, 5000)
}
// 