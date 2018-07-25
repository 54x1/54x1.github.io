$(document).ready(function () {
    $('body').fadeIn(1000);
    $(document).ready(onresize);
    $(window).ready(onresize);


   
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





    /*$(".nav-expand").width(500);
    $("body").css({ "overflow-x": "hidden", "width": "100%", "margin-left": "500px" });
    $('.main-nav > button.navbar-toggle').css({ "display": "none" })
    $(".nav-expand").width(0).css({ "display": "none" });
    $("body").css({ "margin-left": "0px" });*/


    $(window).on('load resize', function (i) {
        var vheight = $('.grid-row-3').height();
        var vheight2 =$('.grid-row-4').height();
        var gdr3 = $('.grid-row-3');
        var gdr4 = $('.grid-row-4');
        var gdr5 = $('.grid-row-5');
        var winw = window.innerWidth;

        if(winw < 768 | winw < 768 && vheight > vheight2){
            gdr3.height(gdr4.height()+gdr5.height());
        }
       else if (winw>768){
            gdr3.css({"height":"100%"});
       }






            




    });


    var my = $("#myCarousel, .carousel-inner, .carousel-control, div.item, div.item img");
    if (my.height($(window).height() - 74) > 500 && $(window).width() > 768) {
        my.height($(window).height() - 74);
    }
    if (my.height($(window).height() - 74) < 500 && $(window).width() < 768) {
        my.height($(window).height() - 74);
    }

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

    $(document).resize(function () {
      if ($(window).width() < 375) {
          $('.grid-container, .container-fluid, #myCarousel, .navbar,').css({ "width": "93vw", "padding-left": "0", "padding-right": "0" })
    }
    });
   
    $(window).on('scroll resize', function (i) {
        var vscroll = $(this).scrollTop();
        if ($(window).width() > 1200) {
            $('.slider-buy').css({ "transform": "translate(" + vscroll / 1.5 + "px, -" + vscroll / 20 + "px)" });
            $('.slider-read').css({ "transform": "translate(-" + vscroll / 2.5 + "px, -" + vscroll / 3.5 + "px)" });
        }
        if ($(window).width() < 1200) {
            $('.slider-buy, .slider-read').css({ "transform": "translate(0,0)" });
        }
        
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



