var typed = new Typed('#typed-text', {
    strings: ["Hi, I am a Fullstack Developer","Hi, I am a Fullstack Developer",  "Hi, I am a Multimedia Designer", "Let's connect."],
    typeSpeed: 40,
    backSpeed: 10,
    // loop: true
});

$(document).ready(function () {
    $('.progress .progress-bar').css("width",
        function () {
            return $(this).attr("aria-valuenow") + "%";
        }
    )
});



// JS for projects
var images = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}