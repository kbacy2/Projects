// CONTENT SLIDER
// var slider = document.querySelector('.slider_menu');
// var sliderItems = document.querySelectorAll('.slider_menu_item');
// var arrowLeft = document.querySelector('#slider_menu_arrow_left');
// var arrowRight = document.querySelector('#slider_menu_arrow_right');
// var cubic = document.querySelector('.cubic');
// var VIEWPORT_WIDTH = slider.offsetWidth + 20;

// arrowRight.addEventListener('click', function () {
//     position = position - VIEWPORT_WIDTH;
//     if (position < -VIEWPORT_WIDTH*2){
//         position = 0;
//     }
//     slider.style.marginLeft = position + 'px';
// });
//
// arrowLeft.addEventListener('click', function () {
//     position = position + VIEWPORT_WIDTH;
//     if (position < -VIEWPORT_WIDTH) {
//         position = 0;
//     } else if(position > 0){
//         position = -VIEWPORT_WIDTH*2;
//     }
//
//     slider.style.marginLeft = position + 'px';
// });

(function(){
    var slider = document.querySelector('.slider_menu');
    var sliderItems = document.querySelectorAll('.slider_menu_item');
    var arrowLeft = document.querySelector('#slider_menu_arrow_left');
    var arrowRight = document.querySelector('#slider_menu_arrow_right');
    var offset = 0;
    var slideWidth = sliderItems[0].offsetWidth + 20;
    var overallSlidesWidth = slideWidth * sliderItems.length;
    var maxSlidesToChange = Math.round(slider.offsetWidth / slideWidth);

    arrowRight.addEventListener('click', nextSlide);

    arrowLeft.addEventListener('click', prevSlide);

    function nextSlide() {
        var rest = overallSlidesWidth - (offset + maxSlidesToChange * slideWidth) - maxSlidesToChange * slideWidth;
        if (rest === -(maxSlidesToChange * slideWidth)) offset = 0;
        else if (rest >= 0) offset += maxSlidesToChange * slideWidth;
        else offset += Math.round((maxSlidesToChange * slideWidth + rest) / slideWidth) * slideWidth;
        slider.style.marginLeft = -offset + 'px';
    }

    function prevSlide() {
        var rest = overallSlidesWidth - (offset - maxSlidesToChange * slideWidth) - maxSlidesToChange * slideWidth;
        if (rest === overallSlidesWidth) offset = overallSlidesWidth - maxSlidesToChange * slideWidth;
        else if (overallSlidesWidth - maxSlidesToChange * slideWidth - rest + slideWidth * maxSlidesToChange < maxSlidesToChange * slideWidth) offset -= overallSlidesWidth - maxSlidesToChange * slideWidth - rest + slideWidth * maxSlidesToChange;
        else offset -= maxSlidesToChange * slideWidth;
        slider.style.marginLeft = -offset + 'px';
    }
})();


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
        document.body.removeEventListener('wheel', preventScroll);
    });
});

zoomClickOne.addEventListener('click', function () {
    document.body.addEventListener('wheel', preventScroll);
    modalChiefOne.style.display = 'block';
    modalChiefImg.src;
    //captionText.innerHTML = this.alt;

});

zoomClickTwo.addEventListener('click', function () {
    document.body.addEventListener('wheel', preventScroll);
    modalChiefTwo.style.display = 'block';
    modalChiefImg.src;
    //captionText.innerHTML = this.alt;

});

zoomClickThree.addEventListener('click', function () {
    document.body.addEventListener('wheel', preventScroll);
    modalChiefThree.style.display = 'block';
    modalChiefImg.src;
    //captionText.innerHTML = this.alt;

});

function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
}

//SLIDER-LIST FOOD MENU

var allMainMenu = document.querySelector('.all_main__menu');
var breakfastMainMenu = document.querySelector('.breakfast_main__menu');
var lunchMainMenu = document.querySelector('.lunch_main__menu');
var dinnerMainMenu = document.querySelector('.dinner_main__menu');
var desertMainMenu = document.querySelector('.desert_main__menu');
var kidsMainMenu = document.querySelector('.kids_main__menu');
var mainMenu = document.querySelector('.main_dish_menu');

var openAll = document.querySelector('.dish_item_all');
var openBreakfast = document.querySelector('.dish_item_breakfast');
var openLunch = document.querySelector('.dish_item_lunch');
var openDinner = document.querySelector('.dish_item_dinner');
var openDesert = document.querySelector('.dish_item_desert');
var openKids = document.querySelector('.dish_item_kids');``


//Как сделать по уму при наведении мыши
openAll.addEventListener('click', function () {
    allMainMenu.style.display = 'flex';
    breakfastMainMenu.style.display = 'none';
    lunchMainMenu.style.display = 'none';
    dinnerMainMenu.style.display = 'none';
    desertMainMenu.style.display = 'none';
    kidsMainMenu.style.display = 'none';
});

openBreakfast.addEventListener('click', function () {
    allMainMenu.style.display = 'none';
    breakfastMainMenu.style.display = 'flex';
    lunchMainMenu.style.display = 'none';
    dinnerMainMenu.style.display = 'none';
    desertMainMenu.style.display = 'none';
    kidsMainMenu.style.display = 'none';
});

openLunch.addEventListener('click', function () {
    allMainMenu.style.display = 'none';
    breakfastMainMenu.style.display = 'none';
    lunchMainMenu.style.display = 'flex';
    dinnerMainMenu.style.display = 'none';
    desertMainMenu.style.display = 'none';
    kidsMainMenu.style.display = 'none';
});

openDinner.addEventListener('click', function () {
    allMainMenu.style.display = 'none';
    breakfastMainMenu.style.display = 'none';
    lunchMainMenu.style.display = 'none';
    dinnerMainMenu.style.display = 'flex';
    desertMainMenu.style.display = 'none';
    kidsMainMenu.style.display = 'none';
});

openDesert.addEventListener('click', function () {
    allMainMenu.style.display = 'none';
    breakfastMainMenu.style.display = 'none';
    lunchMainMenu.style.display = 'none';
    dinnerMainMenu.style.display = 'none';
    desertMainMenu.style.display = 'flex';
    kidsMainMenu.style.display = 'none';
});

openKids.addEventListener('click', function () {
    allMainMenu.style.display = 'none';
    breakfastMainMenu.style.display = 'none';
    lunchMainMenu.style.display = 'none';
    dinnerMainMenu.style.display = 'none';
    desertMainMenu.style.display = 'none';
    kidsMainMenu.style.display = 'flex';
});
