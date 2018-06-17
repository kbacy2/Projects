var accordBox = document.querySelectorAll('.accord-box');
var panels = document.querySelectorAll('.panel');

accordBox.forEach(function (box) {
    var header = box.querySelector('.accord');
    var panel = box.querySelector('.panel');
    header.addEventListener('click', function () {
        panels.forEach(function (panel) { // Hide all
            panel.classList.remove('show');
        });
        this.classList.toggle("active");
        panel.classList.toggle("show");
    });
});
