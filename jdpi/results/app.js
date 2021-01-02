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
const AD8masala = document.getElementById("A_D_8");
// 9-masala
const AD9masala = document.getElementById("A_D_9");
// 10-masala
const AD10masala = document.getElementById("A_D_10");
// 11-masala
const AD11masala = document.getElementById("A_D_11");
// 12-masala
const AD12masala = document.getElementById("A_D_12");


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
const UM8masala = document.getElementById("U_M_8");
// 9-masala
const UM9masala = document.getElementById("U_M_9");
// 10-masala
const UM10masala = document.getElementById("U_M_10");
// 11-masala
const UM11masala = document.getElementById("U_M_11");
// 12-masala
const UM12masala = document.getElementById("U_M_12");
// 13-masala
const UM13masala = document.getElementById("U_M_13");
// 14-masala
const UM14masala = document.getElementById("U_M_14");


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
const YK8masala = document.getElementById("Y_K_8");
// 9-masala
const YK9masala = document.getElementById("Y_K_9");
// 10-masala
const YK10masala = document.getElementById("Y_K_10");
// 11-masala
const YK11masala = document.getElementById("Y_K_11");
// 12-masala
const YK12masala = document.getElementById("Y_K_12");


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


// Baratov Abbos
// 1-masala
// 2-masala
// 3-masala
// 4-masala
// 5-masala
// 6-masala
// 7-masala
// 8-masala
const BA8masala = document.getElementById("B_A_8");
// 9-masala
const BA9masala = document.getElementById("B_A_9");
// 10-masala
const BA10masala = document.getElementById("B_A_10");
// 11-masala
const BA11masala = document.getElementById("B_A_11");
// 12-masala
const BA12masala = document.getElementById("B_A_12");
// 13-masala
const BA13masala = document.getElementById("B_A_13");
// 14-masala
const BA14masala = document.getElementById("B_A_14");


// Qo'chqorov Abulqosim
// 1-masala
// 2-masala
// 3-masala
// 4-masala
// 5-masala
// 6-masala
// 7-masala
// 8-masala
const QA8masala = document.getElementById("Q_A_8");
// 9-masala
const QA9masala = document.getElementById("Q_A_9");
// 10-masala
const QA10masala = document.getElementById("Q_A_10");
// 11-masala
const QA11masala = document.getElementById("Q_A_11");
// 12-masala
const QA12masala = document.getElementById("Q_A_12");
// 14-masala
const QA14masala = document.getElementById("Q_A_14");



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

function ADmasala8() {
    if (isBoolean) {
        all();
        AD8masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        AD8masala.classList.add("d-none");
        isBoolean = true;
    }
}

function ADmasala9() {
    if (isBoolean) {
        all();
        AD9masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        AD9masala.classList.add("d-none");
        isBoolean = true;
    }
}

function ADmasala10() {
    if (isBoolean) {
        all();
        AD10masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        AD10masala.classList.add("d-none");
        isBoolean = true;
    }
}

function ADmasala11() {
    if (isBoolean) {
        all();
        AD11masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        AD11masala.classList.add("d-none");
        isBoolean = true;
    }
}

function ADmasala12() {
    if (isBoolean) {
        all();
        AD12masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        AD12masala.classList.add("d-none");
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
function UMmasala8() {
    if (isBoolean) {
        all();
        UM8masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM8masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 9-masala
function UMmasala9() {
    if (isBoolean) {
        all();
        UM9masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM9masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 10-masala
function UMmasala10() {
    if (isBoolean) {
        all();
        UM10masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM10masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 11-masala
function UMmasala11() {
    if (isBoolean) {
        all();
        UM11masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM11masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 12-masala
function UMmasala12() {
    if (isBoolean) {
        all();
        UM12masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM12masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 13-masala
function UMmasala13() {
    if (isBoolean) {
        all();
        UM13masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM13masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 14-masala
function UMmasala14() {
    if (isBoolean) {
        all();
        UM14masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        UM14masala.classList.add("d-none");
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

// 8-masala
function YKmasala8() {
    if (isBoolean) {
        all();
        YK8masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        YK8masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 9-masala
function YKmasala9() {
    if (isBoolean) {
        all();
        YK9masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        YK9masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 10-masala
function YKmasala10() {
    if (isBoolean) {
        all();
        YK10masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        YK10masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 11-masala
function YKmasala11() {
    if (isBoolean) {
        all();
        YK11masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        YK11masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 12-masala
function YKmasala12() {
    if (isBoolean) {
        all();
        YK12masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        YK12masala.classList.add("d-none");
        isBoolean = true;
    }
}



// Baratov Abbos

// 8-masala
function BAmasala8() {
    if (isBoolean) {
        all();
        BA8masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        BA8masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 9-masala
function BAmasala9() {
    if (isBoolean) {
        all();
        BA9masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        BA9masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 10-masala
function BAmasala10() {
    if (isBoolean) {
        all();
        BA10masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        BA10masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 11-masala
function BAmasala11() {
    if (isBoolean) {
        all();
        BA11masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        BA11masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 12-masala
function BAmasala12() {
    if (isBoolean) {
        all();
        BA12masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        BA12masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 13-masala
function BAmasala13() {
    if (isBoolean) {
        all();
        BA13masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        BA13masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 14-masala
function BAmasala14() {
    if (isBoolean) {
        all();
        BA14masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        BA14masala.classList.add("d-none");
        isBoolean = true;
    }
}







// Baratov Abbos

// 8-masala
function QAmasala8() {
    if (isBoolean) {
        all();
        QA8masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        QA8masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 9-masala
function QAmasala9() {
    if (isBoolean) {
        all();
        QA9masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        QA9masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 10-masala
function QAmasala10() {
    if (isBoolean) {
        all();
        QA10masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        QA10masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 11-masala
function QAmasala11() {
    if (isBoolean) {
        all();
        QA11masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        QA11masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 12-masala
function QAmasala12() {
    if (isBoolean) {
        all();
        QA12masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        QA12masala.classList.add("d-none");
        isBoolean = true;
    }
}

// 14-masala
function QAmasala14() {
    if (isBoolean) {
        all();
        QA14masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        QA14masala.classList.add("d-none");
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
// 13-masala
const USER13masala = document.getElementById("USER_13");
// 14-masala
const USER14masala = document.getElementById("USER_14");

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

function USERmasala13() {
    if (isBoolean) {
        all();
        USER13masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        USER13masala.classList.add("d-none");
        isBoolean = true;
    }
}

function USERmasala14() {
    if (isBoolean) {
        all();
        USER14masala.classList.remove("d-none");
        isBoolean = false;
    } else {
        more();
        USER14masala.classList.add("d-none");
        isBoolean = true;
    }
}