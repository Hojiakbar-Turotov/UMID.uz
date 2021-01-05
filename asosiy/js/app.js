///input kodi

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});
// // Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Configure Slider carousel
$('.carousel').carousel({
    interval: 6000,
    pause: 'hover'
});
///ilmiy
$('.ilmiy').ilmiy({
    interval: 10000,
    pause: 'hover'
});
///myHaridorgir
$('.haridorgir').haridorgir({
    interval: 11000,
    pause: 'hover'
});
////barchasi
$('.ommabop').ommabop({
    interval: 10000,
    pause: 'hover'
});
///Gallery
$('.gallery').gallery({
    interval: 10000,
    pause: 'hover'
});
///myTeacher
$('.teacher').teacher({
    interval: 1000000,
    pause: 'hover'
});