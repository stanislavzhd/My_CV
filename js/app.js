 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $(".cv-nav-menu__burger").click(function(){
       $(".cv-nav-menu__list").slideToggle(500);
    });
    $(window).resize(function(){
        if ($(window).width() > 768) {
            $(".cv-nav-menu__list").removeAttr("style")
        };
    });
});