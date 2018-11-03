var menu = document.querySelector('.b-header .nav');
var toggle = document.querySelector('.b-header .toggle');

toggle.onclick = function() {
    menu.classList.toggle('-opened');
}

$('#mainSlider').carousel();