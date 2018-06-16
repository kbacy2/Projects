/**
 * Created by collex on 12.06.2018.
 */

var popup = document.querySelector('.popup');

popup.addEventListener('click', function click() {
    var myPop = document.querySelector('.mypop');
    myPop.classList.toggle('show');
    // if (myPop.classList.contains('show')) myPop.classList.remove('show');
    // else myPop.classList.add('show');

});
