const TABLE = document.getElementById("table");

const MINUS = document.getElementById("minus");


let isBoolean = true;

// Ulashev Mashhura
// 1-masala
const UM1masala = document.getElementById("U_M_1");
// 2-masala
// 3-masala
const UM3masala = document.getElementById("U_M_3");
// 4-masala
const UM4masala = document.getElementById("U_M_4");
// 5-masala
const UM5masala = document.getElementById("U_M_5");
// 6-masala
const UM6masala = document.getElementById("U_M_6");
// 7-masala
const UM7masala = document.getElementById("U_M_7");
// 8-masala
// 9-masala
// 10-masala


// Usmonov Azimjon
// 1-masala
const UA1masala = document.getElementById("U_A_1");
// 2-masala
// 3-masala
// 4-masala
// 5-masala
// 6-masala
// 7-masala
// 8-masala
// 9-masala
// 10-masala


// Yangiboyev Kamol
// 1-masala
const YK1masala = document.getElementById("Y_K_1");
// 2-masala
// 3-masala
// 4-masala
// 5-masala
// 6-masala
// 7-masala
// 8-masala
// 9-masala
// 10-masala


// Samatova Gulmira
// 1-masala
const SG1masala = document.getElementById("S_G_1");
// 2-masala
// 3-masala
// 4-masala
// 5-masala
// 6-masala
// 7-masala
// 8-masala
// 9-masala
// 10-masala


// Mamatqulov Fathulla
// 1-masala
const MF1masala = document.getElementById("M_F_1");
// 2-masala
// 3-masala
// 4-masala
// 5-masala
// 6-masala
// 7-masala
// 8-masala
// 9-masala
// 10-masala


function all() {
    TABLE.classList.add("d-none");
}

function more() {
    TABLE.classList.remove("d-none");
}

function minus() {
    if (isBoolean) {
        all();
        MINUS.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        MINUS.classList.add("d-none");
        isBoolean = true;

    }
}


// Ulashev Mashhura

// 1-masala
function UMmasala1() {
    if (isBoolean) {
        all();
        UM1masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM1masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 2-masala

// 3-masala
function UMmasala3() {
    if (isBoolean) {
        all();
        UM3masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM3masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 4-masala
function UMmasala4() {
    if (isBoolean) {
        all();
        UM4masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM4masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 5-masala
function UMmasala5() {
    if (isBoolean) {
        all();
        UM5masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM5masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 6-masala
function UMmasala6() {
    if (isBoolean) {
        all();
        UM6masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM6masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 7-masala
function UMmasala7() {
    if (isBoolean) {
        all();
        UM7masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM7masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 8-masala

// 9-masala

// 10-masala


// Ulashev Mashhura

// 1-masala
function UAmasala1() {
    if (isBoolean) {
        all();
        UA1masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UA1masala.classList.add("d-none");
        isBoolean = true;
    }
}


// Yangiboyev Kamol

// 1-masala
function YKmasala1() {
    if (isBoolean) {
        all();
        YK1masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        YK1masala.classList.add("d-none");
        isBoolean = true;
    }
}


// Ulashev Mashhura

// 1-masala
function SGmasala1() {
    if (isBoolean) {
        all();
        SG1masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        SG1masala.classList.add("d-none");
        isBoolean = true;
    }
}


// Ulashev Mashhura

// 1-masala
function MFmasala1() {
    if (isBoolean) {
        all();
        MF1masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        MF1masala.classList.add("d-none");
        isBoolean = true;
    }
}