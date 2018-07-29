

$(document).ready(function () {
    $('body').fadeIn(1000);

    $(document).ready(onresize);
    $(window).ready(onresize);

    //side navbar functions
    $('.navbar-toggle').on('click load', function (e) {
        $('.nav-expand').show(0,function () {
            $("body").css({ "overflow": "hidden", "width": "100%", "margin-left": "250px" });
            $('.header-sidebar-overlay').addClass('header-sidebar-opened');
            $('.header-sidebar-overlay').addClass('mobile-scrn');
            $('.header-sidebar-overlay').css({ "overflow-x": "hidden", "overflow": "hidden" })
            $('#myCarousel', 'body','.navbar').css({ "overflow": "hidden" });
            $('.addfix').css({ "margin-left": "250px" });
        });
        $('.header-sidebar-overlay').click(function () {
            $(".nav-expand").width(0).css({ "display": "none" });
            $('.header-sidebar-overlay').removeClass('header-sidebar-opened');
            $('.header-sidebar-overlay').removeClass('mobile-scrn');
            $("body").css({ "margin-left": "0px" });
            $('.addfix, .nav-wrapper').css({ "margin-left": "0px" });
        });
        $('.closebtn').click(function () {
            $(".nav-expand").width(0).css({ "display": "none" });
            $("body").css({ "margin-left": "0px" });
            $('.addfix, .nav-wrapper').css({ "margin-left": "0px" });
            $('.header-sidebar-overlay').removeClass('header-sidebar-opened', 'mobile-scrn');
            $('.header-sidebar-overlay').addClass('show')
        });
    });

    function onresize() {
        $(window).on('load resize', function (a) {

            //resizing on load for sideshow heights and widths
            var my = $("#myCarousel, .carousel-inner, .carousel-control, div.item, div.item img");
            if (my.height($(window).height() - 74) > 600 && $(window).width() > 768) {
                my.height($(window).height() - 74);
            }
            if (my.height($(window).height() - 74) > 1 && $(window).width() < 460) {
                my.height(425);

            }


            //mobile sceen widths for containers
            if ($(window).width() < 375) {
                $('.container-fluid, #myCarousel, .navbar').css({ "width": "100vw", "padding-right": "0", "padding-left": "0" })
            }
            if ($(window).width() < 1200) {
                $('.buy-now.buy').css({ "bottom-margin": "45px", "height": "fit-content" });
                $('.read-more').css({ "height": "fit-content" });
                $('.buy').css({ "height": "fit-content" });
            }
            if ($(window).width() < 460) {
                $('.buy-now.buy').css({ "bottom-margin": "0px", "height": "30px" });
            }

        });
    }

    $(window).on('load resize', function (o) {
    
            //resizing for mobile for grid-row-3
            var vheight = $('.grid-row-3').height();
            var vheight2 =$('.grid-row-4').height();
            var gdr3 = $('.grid-row-3');
            var gdr4 = $('.grid-row-4');
            var gdr5 = $('.grid-row-5');
            var gdr9 = $('.grid-row-9');
            var gdr10 = $('.grid-row-10');
            var winw = window.innerWidth;
            if(winw < 768 | winw < 768 && vheight > vheight2){
                gdr3.height(gdr4.height() + gdr5.height());
                gdr9.height(gdr4.height() + gdr5.height());
                gdr10.height(gdr4.height() + gdr5.height());
            }

            else if (winw>768){
                gdr3.css({ "height": "100%" });
                gdr9.css({ "height": "100%" });
                gdr10.css({ "height": "100%" });
            }
        });

    
        //nav sticky/fixed effect
        var nav = $('.nav-wrapper');
        var NavTp = $('.nav-wrapper').offset().top;
        $(document).scroll(function () {
            var my = $("#myCarousel, .carousel-inner, .carousel-control, div.item, div.item img");
            var bottom = nav.position().top - nav.height();
            var bot2 = my.position().top + my.height();
            if ($(window).scrollTop() >= bottom) {
                nav.css({ "position": "static"});
                nav.addClass('addfix');
            }
            if ($(window).scrollTop() <= bot2) {
                nav.removeClass('addfix');
            }

        });
   
        $(window).on('scroll resize load', function (i) {

            if ($('.nav-wrapper').width() == 250){
                $('.nav-wrapper').css({"margin-left":"250px"});
            }
            //buy-now+read-more moving effect
            var vscroll = $(this).scrollTop();
            if ($(window).width() > 1200) {
                $('.slider-buy').css({ "transform": "translate(" + vscroll / 1.5 + "px, -" + vscroll / 20 + "px)" });
                $('.slider-read').css({ "transform": "translate(-" + vscroll / 2.5 + "px, -" + vscroll / 3.5 + "px)" });
            }
            if ($(window).width() < 1200) {
                $('.slider-buy, .slider-read').css({ "transform": "translate(0,0)" });
            }

            //fade in effect
            $('.bpshow').each(function () {
                var vscroll = $(this).scrollTop();
                if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100 && $(window).width() > 768) {
                    $(this).fadeIn(2500).css({ "display": "grid" });
                }
                if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100 && $(window).width() < 768) {
                    $(this).fadeIn(1500).css({ "display": "grid" });
                }

            });

        });

});


