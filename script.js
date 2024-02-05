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