// CONTENT SLIDER
var slider = document.querySelector('.slider_menu');
var arrowLeft = document.querySelector('#slider_menu_arrow_left');
var arrowRight = document.querySelector('#slider_menu_arrow_right');
var position = 0;

arrowRight.addEventListener('click', function () {
    position = position -1170;
    if (position < -2340){
        position = 0;
    }

    slider.style.marginLeft = position + 'px';
});

arrowLeft.addEventListener('click', function () {
    position = position + 1170;
    if (position < -1170) {
        position = 0;
    } else if(position > 0){
        position = -2340;
    }

    slider.style.marginLeft = position + 'px';
});
