/*$(document).ready(function () {
    // grab the initial top offset of the navigation 
    var stickyNavTop = $('.nav-wrapper').offset().top;
    var scrollTop = $(window).scrollTop();
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function () {
         // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $('.nav-wrapper').addClass('addfix');
        } else {
            $('.nav-wrapper').removeClass('addfix');
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function () {
        stickyNav();
    });
});
*/

$(document).ready(function () {
    $('body').fadeIn(1000);
    // $('div.item img').height($(window).height() - 82)
    $(document).ready(onresize);
    $(window).ready(onresize);


    var my = $("#myCarousel, .carousel-inner, .carousel-indicators, .carousel-control, div.item, div.item img")
    if (my.height($(window).height() - 82) > 500 && $(window).width() > 768) {
        my.height($(window).height() - 82);
    }
    if (my.height($(window).height() - 82) < 500 && $(window).width() < 768) {
        my.height($(window).height() - 82);
    }
    /*if ($("#myCarousel, .carousel-inner, .carousel-indicators, .carousel-control").height($(window).height() - 82) < 593 && $(window).width() > 768) {
        $("#myCarousel, .carousel-inner, .carousel-indicators, .carousel-control").height(593)
    }
   else {
        $("#myCarousel, .carousel-inner, .carousel-indicators").height($(window).height() - 82);
    }   */

    var nav = $('.nav-wrapper');
    var NavTp = $('.nav-wrapper').offset().top;
    

   $(document).scroll(function () {
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