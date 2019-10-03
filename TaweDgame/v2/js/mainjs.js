$(document).ready(function () {
    //
    // $(window).bind('orientationchange', function(event){
    //   console.log(orientation);
    //   if (orientation == 90){
    //     rotate(window.orientation, -90);
    //   }
    // });
    //
    //   $(window).on('scroll resize load', function () {
    //       if ($(window).width() <= 768) {
    //           if (screen.height < screen.width) {
    //           }
    //       }
    //       if ($(window).width() < 120) {
    //       if($(window).height() == screen.height) {
    //           $('.main-section').css({"display": "grid"});
    //           $(".go-home").css({"display": "none"});
    //           console.log('1');
    //       }
    //       else{
    //           $('.main-section').css({"display": "none"});
    //           $(".go-home").css({"display": "grid"});
    //           console.log('500');
    //       }
    //     }
    // var main = $('.main-section').height();
    //   var mhome = $('.main-home').height();
    // var mheader = $('.main-header').height();
    // var mrules = $('.main-rules').height();
    // var srules = $('.section-rules').height();
    // var rheading = $('.rules-heading').height();
    //   var rules = $('.rules').height();
    //     var rulesp = $('.rules>p').height();
    // var winh = $(window).width() - (main - mhome) - (mrules + srules + rheading +  rules + rulesp);


    // console.log('.main-section: ' + main);
    //   console.log('.main-home: ' + mhome);
    // console.log('.main-header: ' + mheader);
    // console.log('.main-rules: ' + mrules);
    //   console.log('.section-rules: ' + srules);
    // console.log('.rules-heading: ' + rheading);
    // console.log('.rules: ' + rules);
    //   console.log('doch: ' + $(document).height());
    //     console.log('windowh: ' + $(window).width());
    //
    // $('.main-section').css({"grid-template-rows": "" + (winh) + "px 1fr"});
    //

    $(window).on('scroll resize load', function () {
        var hscroll = $(this).scrollTop();

        if ($(this).width() <= 2560) {
            console.log("2560");
            if ($(window).width() > 1980) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1980) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1980) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.main-rules, .mobile-header').css({
                        "transform": "translate(0,0)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px, 0)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 180) + ")"
                    });
                    $('.main-rules, .arrows-1, .mobile-header').css({
                        "transform": "translateY(-" + (hscroll + 10) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll + 10)) + "px)"
                    });
                }
            }
        }


        if ($(this).width() <= 1980) {
            console.log("1980");
            if ($(window).width() > 1600) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1600) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1600) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.main-rules, .mobile-header').css({
                        "transform": "translate(0,0)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px, 0)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 140) + ")"
                    });
                    $('.main-rules, .arrows-1, .mobile-header').css({
                        "transform": "translateY(-" + (hscroll + 10) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll + 10)) + "px)"
                    });
                }
            }
        }


        if ($(this).width() <= 1600) {
            console.log("1600");
            if ($(window).width() > 1440) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1440) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1440) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.main-rules, .mobile-header').css({
                        "transform": "translate(0,0)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px, 0)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 125) + ")"
                    });
                    $('.main-rules, .arrows-1, .mobile-header').css({
                        "transform": "translateY(-" + (hscroll + 10) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll + 10)) + "px)"
                    });
                }
            }
        }

        if ($(this).width() <= 1440) {
            console.log("1440");
            if ($(window).width() > 1366) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1366) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1366) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.main-rules, .mobile-header').css({
                        "transform": "translate(0,0)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px, 0)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 105) + ")"
                    });
                    $('.main-rules, .arrows-1, .mobile-header').css({
                        "transform": "translateY(-" + (hscroll + 10) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll + 10)) + "px)"
                    });
                }
            }
        }

        if ($(this).width() <= 1366) {
            console.log("1366");
            if ($(window).width() > 1200) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1200) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1200) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.main-rules, .mobile-header').css({
                        "transform": "translate(0,0)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px, 0)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 100) + ")"
                    });
                    $('.main-rules, .arrows-1, .mobile-header').css({
                        "transform": "translateY(-" + (hscroll + 10) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll + 10)) + "px)"
                    });
                }
            }
        }


        if ($(this).width() <= 1200) {
            console.log("1200");
            if ($(window).width() > 1024) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1024) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1024) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.main-rules, .mobile-header').css({
                        "transform": "translate(0,0)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px, 0)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 90) + ")"
                    });
                    $('.main-rules, .arrows-1, .mobile-header').css({
                        "transform": "translateY(-" + (hscroll + 10) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll + 10)) + "px)"
                    });
                }
            }
        }

        if ($(this).width() <= 1024) {
            console.log("1024");
            if ($(window).width() > 992) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 992) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 992) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.main-rules, .mobile-header').css({
                        "transform": "translate(0,0)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px, 0)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 80) + ")"
                    });
                    $('.main-rules, .mobile-header').css({
                        "transform": "translateY(-" + (hscroll + 10) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll + 15)) + "px)"

                    });
                }
            }
        }

        if ($(this).width() <= 992) {
            console.log("992");
            if ($(window).width() > 768) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 768) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 768) {

                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.main-rules, .mobile-header').css({
                        "transform": "translate(0,0)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px, 0)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 72) + ")"
                    });
                    $('.main-rules, .mobile-header').css({
                        "transform": "translateY(-" + (hscroll + 10) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll + 15)) + "px)"

                    });
                }
            }
        }


        $(window).scroll(function () {
            var BotOfWin1 = $(window).scrollTop() - $(window).height();
            var BotOfObj1 = $('.gofullscreen').offset().top - $('.gofullscreen').outerHeight();
            if (BotOfWin1 > BotOfObj1) {
                $('.gofullscreen').css({
                    "overflow-x": "visible"
                });
                var pos = 0;
                $(window).bind('mousewheel DOMMouseScroll', function (event) {
                    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                        if (pos > 1) {
                            pos = pos - 50;
                        }
                    } else {
                        pos = pos + 50;
                    }
                    $('.gofullscreen').scrollLeft(pos)
                });
            }
            else{
                $('.gofullscreen').css({
                    "overflow-x": "hidden"
                });
            }
            $('.rules>p').each(function (i) {
                var BotOfObj = $(this).offset().top + $(this).outerHeight();
                var BotOfWin = $(window).scrollTop() + $(window).height();
                if (BotOfWin > BotOfObj) {
                    $(this).animate({
                        'opacity': '1'
                    }, 800);
                }
            });
        });
    });
});

// screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
//
// if (screen.lockOrientationUniversal("landscape-primary")) {
//
// } else {
//     // Orientation lock failed
// }
