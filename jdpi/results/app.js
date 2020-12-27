const TABLE = document.getElementById("table");

const MINUS = document.getElementById("minus");

const MAXBALL = document.getElementById("maxball");


let isBoolean = true;


function all() {
    TABLE.classList.add("d-none");
    MAXBALL.classList.remove("d-none")
}

function more() {
    TABLE.classList.remove("d-none");
    MAXBALL.classList.add("d-none")
}



// Abduqodirova Dilshoda
// 1-masala
const AD1masala = document.getElementById("A_D_1");
// 2-masala
const AD2masala = document.getElementById("A_D_2");
// 3-masala
// 4-masala
const AD4masala = document.getElementById("A_D_4");
// 5-masala
// 6-masala
// 7-masala
// 8-masala
// 9-masala
// 10-masala


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


// Abduqodirova Dilshoda

// 1-masala
function ADmasala1() {
    if (isBoolean) {
        all();
        AD1masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        AD1masala.classList.add("d-none");
        isBoolean = true;
    }
}


function ADmasala2() {
    if (isBoolean) {
        all();
        AD2masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        AD2masala.classList.add("d-none");
        isBoolean = true;
    }
}


function ADmasala4() {
    if (isBoolean) {
        all();
        AD4masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        AD4masala.classList.add("d-none");
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



/*




*/
// USER

// 1-masala
const USER1masala = document.getElementById("USER_1");
// 2-masala
const USER2masala = document.getElementById("USER_2");
// 3-masala
const USER3masala = document.getElementById("USER_3");
// 4-masala
const USER4masala = document.getElementById("USER_4");
// 5-masala
const USER5masala = document.getElementById("USER_5");
// 6-masala
const USER6masala = document.getElementById("USER_6");
// 7-masala
const USER7masala = document.getElementById("USER_7");
// 8-masala
// 9-masala
// 10-masala

function USERmasala1() {
    if (isBoolean) {
        all();
        USER1masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        USER1masala.classList.add("d-none");
        isBoolean = true;
    }
}

function USERmasala2() {
    if (isBoolean) {
        all();
        USER2masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        USER2masala.classList.add("d-none");
        isBoolean = true;
    }
}

function USERmasala3() {
    if (isBoolean) {
        all();
        USER3masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        USER3masala.classList.add("d-none");
        isBoolean = true;
    }
}

function USERmasala4() {
    if (isBoolean) {
        all();
        USER4masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        USER4masala.classList.add("d-none");
        isBoolean = true;
    }
}

function USERmasala5() {
    if (isBoolean) {
        all();
        USER5masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        USER5masala.classList.add("d-none");
        isBoolean = true;
    }
}

function USERmasala6() {
    if (isBoolean) {
        all();
        USER6masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        USER6masala.classList.add("d-none");
        isBoolean = true;
    }
}

function USERmasala7() {
    if (isBoolean) {
        all();
        USER7masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        USER7masala.classList.add("d-none");
        isBoolean = true;
    }
}