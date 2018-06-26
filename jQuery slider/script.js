$(document).ready(function () {

    $('.next').click(function () {
        var currentImg = $('.img.curry');
        var currentImgIndex = $('.img.curry').index();
        var nextImgIndex = currentImgIndex + 1;
        var nextImg = $('.img').eq(nextImgIndex);
        currentImg.fadeOut(1000);
        currentImg.removeClass('curry');


        if (nextImgIndex == ($('.img:last').index() + 1)) {
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');

        } else {
            nextImg.fadeIn(1000);
            nextImg.addClass('curry');
        }


    });


    $('.prev').click(function () {
        var currentImg = $('.img.curry');
        var currentImgIndex = $('.img.curry').index();
        var prevImgIndex = currentImgIndex - 1;
        var prevImg = $('.img').eq(prevImgIndex);


        currentImg.fadeOut(1000);
        currentImg.removeClass('curry');
        prevImg.fadeIn(1000);
        prevImg.addClass('curry');


    });

});