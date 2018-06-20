// CONTENT SLIDER
var slider = document.querySelector('.slider_menu');
var sliderItem = document.querySelectorAll('.slider_menu_item');
var arrowLeft = document.querySelector('#slider_menu_arrow_left');
var arrowRight = document.querySelector('#slider_menu_arrow_right');
var position = 0;
var cubic = document.querySelector('.cubic');

arrowRight.addEventListener('click', function () {
    position = position -1170;
    if (position < -2340){
        position = 0;
    }

    sliderItem.forEach(function (slide) {
        slide.classList.add('cubic');
        setTimeout(function () {
            slide.classList.remove('cubic');

        },100);

    });

    slider.style.marginLeft = position + 'px';
});

arrowLeft.addEventListener('click', function () {
    position = position + 1170;
    if (position < -1170) {
        position = 0;
    } else if(position > 0){
        position = -2340;
    }

    sliderItem.forEach(function (slide) {
        slide.classList.toggle('cubic');
        setTimeout(function () {
            slide.classList.remove('cubic');

        },100);
    });

    slider.style.marginLeft = position + 'px';
});
