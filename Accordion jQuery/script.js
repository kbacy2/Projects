var accord = function () {
    var data = $(".accord").attr("data-accord");
    $(".accord_header").on('click', function () {
        if(data === "close"){
            $(".accord_body").slideUp();
            if($(this).hasClass("active")){
                $(this).toggleClass("active");
            }
            else{
                $(".accord_header").removeClass("active");
                $(this).toggleClass("active");
            }
        }
        else{
            $(this).toggleClass("active");
        }
        $(this).next(".accord_body").not(":animated").slideToggle();
    });
}

accord();