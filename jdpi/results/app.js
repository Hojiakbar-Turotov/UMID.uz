const TABLE = document.getElementById("table");

const MINUS = document.getElementById("minus");

// Ulashev Mashhura
// 1-masala
const UM1masala = document.getElementById("U_M_1");
// 2-masala
// 3-masala

function all() {
    TABLE.classList.add("d-none");
}

function minus() {
    all();
    MINUS.classList.remove("d-none");
}
// Ulashev Mashhura
// 1-masala
function UMmasala1() {
    all();
    UM1masala.classList.remove("d-none");
}
// 2-masala
// 3-masala
function UMmasala3() {
    all();
    UM3masala.classList.remove("d-none");
}
// 4-masala
// 5-masala
// 6-masala
// 7-masala
// 8-masala
// 9-masala
// 10-masala