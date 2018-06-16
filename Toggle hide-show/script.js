var click = document.querySelector('.click');

click.addEventListener('click', function myFunc() {
    var x = document.querySelector('.my_div');
    if (x.style.display == 'none'){
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }
});


var close = document.querySelectorAll('.close_btn');

close.forEach(function (elem) {
    elem.addEventListener('click', function () {
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function () {
            div.style.display = 'none';

        }, 600);


    });


});