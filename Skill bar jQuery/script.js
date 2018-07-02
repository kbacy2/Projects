$('.skill_bar').each(function () {
    $(this).find('.skill_bar__bar').animate({
        width:$(this).attr('data-percent')
    }, 2000)
    
});