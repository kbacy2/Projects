var myNodelist = document.querySelectorAll('li');
myNodelist.forEach(function (elem) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    elem.appendChild(span);

    elem.addEventListener('click', function (event) {
        if (event.target.className === 'close') elem.style.display = "none";
    })

});

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }

}, false);







var addBtn = document.querySelector('.button');
function newElem() {
    var li = document.createElement("li");
    var inputValue = document.querySelector('.my_input').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert("Поле не может быть пустым")
    }else{
        document.querySelector('.my_ul').appendChild(li);
    }

    document.querySelector('.my_input').value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

      li.addEventListener('click', function (event) {
        if (event.target.className === 'close') li.style.display = "none";
      });
};

addBtn.addEventListener('click', newElem);

var myInput = document.querySelector('.my_input');

myInput.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.querySelector('.button').click();
    };
});




