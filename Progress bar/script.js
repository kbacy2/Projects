/**
 * Created by collex on 11.06.2018.
 */
var button = document.querySelector('.click');
var hik = document.querySelector('.hik');

button.addEventListener('click', move);




function move() {
    var elem = document.querySelector('.my_bar');
    var width = 10;
    var id = setInterval(frame, 10);
    function frame () {
        if(width>=100) {
            clearInterval(id);
            hik.style.display = 'block';
        }
        else{
            width++;
            elem.style.width = width + '%';
            document.querySelector('.label').innerHTML = width*1 + '% ' + 'Система поиска пидарасов';

        }



    }

}

