var accord = document.querySelectorAll('.accord');

accord.forEach(function (acc) {
    acc.addEventListener('click', function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");

    });
    
});
