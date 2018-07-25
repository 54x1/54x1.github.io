$(document).ready(function () {
    $('body').fadeIn(1000);
    $(document).ready(onresize);
    $(window).ready(onresize);

  //side navbar functions
    $('.navbar-toggle').on('click load', function (e) {
        $('.nav-expand').show(0,function () {
            $("body").css({ "overflow-x": "hidden", "width": "100%", "margin-left": "250px" });
            $('.header-sidebar-overlay').addClass('header-sidebar-opened');
        });
        $('.header-sidebar-overlay').click(function () {
            $(".nav-expand").width(0).css({ "display": "none" });
            $("body").css({ "margin-left": "0px" });
            $('.header-sidebar-overlay').removeClass('header-sidebar-opened');
        });
        $('.closebtn').click(function () {
            $(".nav-expand").width(0).css({ "display": "none" });
            $("body").css({ "margin-left": "0px" });
            $('.header-sidebar-overlay').removeClass('header-sidebar-opened');
        });
    });

    $(window).on('load resize', function (i) {
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


        //resizing on load for sideshow heights and widths
        var my = $("#myCarousel, .carousel-inner, .carousel-control, div.item, div.item img");
        if (my.height($(window).height() - 74) > 500 && $(window).width() > 768) {
            my.height($(window).height() - 74);
        }
        if (my.height($(window).height() - 74) < 500 && $(window).width() < 768) {
            my.height($(window).height() - 74);
        }
    });
    
    //nav sticky/fixed effect
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

    //mobile sceen widths for containers
    $(document).resize(function () {
      if ($(window).width() < 375) {
          $('.grid-container, .container-fluid, #myCarousel, .navbar,.home-page-onsale,.home-page-grid,.home-page-new-rel,.home-page-pop-manga,.breakpoint-1,.breakpoint-2').css({ "width": "93vw", "padding-left": "0", "padding-right": "0" })
      }
      if ($(window).width() < 1200) {
          $('.buy-now.buy').css({"bottom-margin":"45px"})
      }
    });
   
    $(window).on('scroll resize', function (i) {
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



