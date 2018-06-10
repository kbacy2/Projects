/**
 * Created by collex on 10.06.2018.
 */


var modal = document.querySelector('.my_modal');
var img = document.querySelector('.my_img');
var modalImg = document.querySelector('.img1');
var captionText = document.querySelector('.caption');
var close = document.querySelector('.close');


close.addEventListener('click', function () {
    modal.style.display = 'none';
    
});

img.addEventListener('click', function () {
    modal.style.display = 'block';
    modalImg.src;
    captionText.innerHTML = this.alt;
    
});



