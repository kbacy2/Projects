/**
 * Created by collex on 11.06.2018.
 */
var elem = document.querySelector('.my_bar');
var button = document.querySelector('.click');
var hik = document.querySelector('.hik');
var progressBar = document.querySelector('.my_progress');
var gifka = document.querySelector('.gifka');
var audio = document.querySelector('.sistema');

audio.addEventListener('durationchange', function () {

  button.addEventListener('click', function () {
    move();
    audio.play();
  });

  function move() {
    var width = 1;
    var id = setInterval(frame, audio.duration * 1000 / 100); // 1000 = 1s
    function frame () {
      if(width>=100) {
        clearInterval(id);
        hik.style.display = 'block';
        gifka.style.display = 'block';
        progressBar.style.display = 'none';
        button.style.display = 'none';
        document.querySelector('.text').innerHTML = 'Пидарас найден!' + '               &#8594';
      }
      else{
        width++;
        elem.style.backgroundColor = '#4CAF50';
        elem.style.width = width + '%';
        document.querySelector('.label').innerHTML = width + '% Идет поиск... ';

      }



    }

  }
});


