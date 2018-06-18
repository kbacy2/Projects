// CONTENT SLIDER

// let arrowLeft = document.querySelector('#slider_menu_arrow_left');
// let arrowRight = document.querySelector('#slider_menu_arrow_right');
// let slideIndex = 1;
// showSlides(slideIndex);
//
// arrowLeft.addEventListener('click', minusSlides);
// arrowRight.addEventListener('click', plusSlides);
//
// function plusSlides (numberIndex){
//     numberIndex = 1;
//     showSlides(slideIndex += numberIndex);
// }
//
// function minusSlides (numberIndex){
//     numberIndex = 1;
//     showSlides(slideIndex -= numberIndex);
// }
//
// function currentSlide (n){
//     showSlides(slideIndex = n);
// }
//
// function showSlides (n){
//     var i;
//     var slides = document.querySelectorAll ('.slider_menu_item');
//
//     if(n > slides.length){
//         slideIndex = 1;
//     }
//     if(n < 1){
//         slideIndex = slides.length;
//     }
//
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//
//
//     slides[slideIndex-1].style.display = 'block';
// }


var sliderItems = document.querySelectorAll('.slider_menu_item');
var slider = document.querySelector('.slider_menu');
var width = 270; // ширина изображения
var count = 6; // количество изображений
var position = 0; // текущий сдвиг влево
var arrowLeft = document.querySelector('#slider_menu_arrow_left');
var arrowRight = document.querySelector('#slider_menu_arrow_right');

arrowLeft.addEventListener("click", function () {
    position = Math.min(position + width * count, 0)
    slider.style.marginLeft = position + 'px';

});

arrowRight.addEventListener("click", function () {
    position = Math.max(position - width * count, -width * (sliderItems.length - count));
    slider.style.marginLeft = position + 'px';

});
