$(document).ready(function () {
    $('body').fadeIn(1000);
    $(document).ready(onresize);
    $(window).ready(onresize);


    var my = $("#myCarousel, .carousel-inner, .carousel-control, div.item, div.item img");
    if (my.height($(window).height() - 82) > 500 && $(window).width() > 768) {
        my.height($(window).height() - 82);
    }
    if (my.height($(window).height() - 82) < 500 && $(window).width() < 768) {
        my.height($(window).height() - 82);
    }

    var nav = $('.nav-wrapper');
    var NavTp = $('.nav-wrapper').offset().top;
    $(document).scroll(function () {
        var vscroll = $(this).scrollTop();
        if ($(window).width() > 992) {
            $('.slider-buy').css({ "transform": "translate(" + vscroll / 1.5 + "px, -" + vscroll / 20 + "px)" });
            $('.slider-read').css({ "transform": "translate(-" + vscroll / 3 + "px, -" + vscroll / 5 + "px)" });
        }
        var scroll = $(window).scrollTop();
        if (scroll <= NavTp) {  
            nav.css({ "position": "static"});
            nav.removeClass('addfix');
        }
        else {
            nav.addClass('addfix');
        }
           
    });
   
    $(window).on('scroll resize', function (i) {

        
        $('.bpshow').each(function () {
            if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100 && $(window).width() > 768) {
                $(this).fadeIn(2500).css({ "display": "grid" });
            }
            if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100 && $(window).width() < 768) {
                $(this).fadeIn(1500).css({ "display": "grid" });
            }

        });
    });
});