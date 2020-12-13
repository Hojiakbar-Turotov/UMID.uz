let isnav = true;

const NAV1 = document.getElementById("navA");
const PAGE = document.getElementById("navB");
const NAVHEAD = document.getElementById("navHead");
const NAVBODY = document.getElementById("navBody");



function navA() {
    if (isnav) {
        isnav = false;
        NAV1.classList.add("holatA");
        PAGE.classList.remove("d-none");
        NAVHEAD.classList.add("wFz-100");
        NAVBODY.classList.add("bottom-40")
    } else {
        isnav = true;
        NAV1.classList.remove("holatA");
        PAGE.classList.add("d-none");
        NAVHEAD.classList.remove("wFz-100");
        NAVBODY.classList.remove("bottom-40")
    }
}