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


//MODAL CHIEFS WINDOW

var modalChiefOne = document.querySelector('.modal_chief__1');
var modalChiefTwo = document.querySelector('.modal_chief__2');
var modalChiefThree = document.querySelector('.modal_chief__3');
var zoomClickOne = document.querySelector('.our_stuff__zoom_click-1');
var zoomClickTwo = document.querySelector('.our_stuff__zoom_click-2');
var zoomClickThree = document.querySelector('.our_stuff__zoom_click-3');
var modalChiefImg = document.querySelector('.img_chief');
//var captionChiefText = document.querySelectorAll('.caption_chiefs');
var closeModalChiefs = document.querySelectorAll('.close_modal__chiefs');

closeModalChiefs.forEach(function (close) {
    close.addEventListener('click', function () {
        modalChiefThree.style.display = 'none';
        modalChiefTwo.style.display = 'none';
        modalChiefOne.style.display = 'none';

    });
});

zoomClickOne.addEventListener('click', function () {
    modalChiefOne.style.display = 'block';
    modalChiefImg.src;
    //captionText.innerHTML = this.alt;

});

zoomClickTwo.addEventListener('click', function () {
    modalChiefTwo.style.display = 'block';
    modalChiefImg.src;
    //captionText.innerHTML = this.alt;

});

zoomClickThree.addEventListener('click', function () {
    modalChiefThree.style.display = 'block';
    modalChiefImg.src;
    //captionText.innerHTML = this.alt;

});