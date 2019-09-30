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




  $(window).on('scroll resize load', function () {
    mainh = ($('.main-home').height() + $('.go-home').height() - $('.main-rules').height() - $('.section-rules').height() - $('.rules').height() + $('.rules-heading').height());
    winh = $(this).height() - mainh;
    $('.main-section').css({"grid-template-rows": "" + (winh/1100) + "fr 1fr"});

        var hscroll = $(this).scrollTop();
        console.log("first: " + hscroll / 300);
        if ($(this).width() <= 1024) {
            if ($(window).width() > 768) {
                $('.logoT').css({"transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"});
                $('.logoD').css({"transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"});
            }
            if ($(window).width() < 768) {
                $('.logoT, .logoD').css({"transform": "translate(0,0)"});
                $('.logoOR').css({"transform": "scale(0)"});
                $('.main-rules').css({"transform": "translateY(0)"});
                $('.arrows-1').css({"transform": "translateY(0)"});
            }
            if ($(window).width() > 768) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({"transform": "scale(0)"});
                    $('.main-rules').css({"transform": "translate(0,0)"});
                    $('.arrows-1').css({"transform": "translateY(0)"});
                } else {
                    $('.logoOR').css({"transform": "scale(" + (hscroll / 80) + ")"});
                    $('.main-rules').css({"transform": "translateY(-" + (hscroll + 10) + "px)"});
              $('.arrows-1').css({"transform": "translateY(-" + ((hscroll / 0.8)) + "px)"});
                }
            }
        }

        if ($(this).width() <= 1200) {
            if ($(window).width() > 1024) {
                $('.logoT').css({"transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"});
                $('.logoD').css({"transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"});
            }
            if ($(window).width() < 1024) {
                $('.logoT, .logoD').css({"transform": "translate(0,0)"});
                $('.logoOR').css({"transform": "scale(0)"});
                $('.main-rules').css({"transform": "translateY(0)"});
                  $('.arrows-1').css({"transform": "translateY(0)"});
            }
            if ($(window).width() > 1024) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({"transform": "scale(0)"});
                    $('.main-rules').css({"transform": "translate(0,0)"});
                      $('.arrows-1').css({"transform": "translateY(0)"});
                } else {
                    $('.logoOR').css({"transform": "scale(" + (hscroll / 80) + ")"});
                    $('.main-rules, .arrows-1').css({"transform": "translateY(-" + (hscroll + 10) + "px)"});
              $('.arrows-1').css({"transform": "translateY(-" + ((hscroll / 0.8)) + "px)"});
                }
            }
        }

            if ($(this).width() <= 1366) {
            if ($(window).width() > 1200) {
                $('.logoT').css({"transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"});
                $('.logoD').css({"transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"});
            }
            if ($(window).width() < 1200) {
                $('.logoT, .logoD').css({"transform": "translate(0,0)"});
                $('.logoOR').css({"transform": "scale(0)"});
                $('.main-rules').css({"transform": "translateY(0)"});
                  $('.arrows-1').css({"transform": "translateY(0)"});
            }
            if ($(window).width() > 1200) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({"transform": "scale(0)"});
                    $('.main-rules').css({"transform": "translate(0,0)"});
                      $('.arrows-1').css({"transform": "translateY(0)"});
                } else {
                    $('.logoOR').css({"transform": "scale(" + (hscroll / 100) + ")"});
                    $('.main-rules, .arrows-1').css({"transform": "translateY(-" + (hscroll + 10) + "px)"});
                $('.arrows-1').css({"transform": "translateY(-" + ((hscroll / 0.8)) + "px)"});
                }
            }
        }

        if ($(this).width() <= 1440) {
        if ($(window).width() > 1366) {
            $('.logoT').css({"transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"});
            $('.logoD').css({"transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"});
        }
        if ($(window).width() < 1366) {
            $('.logoT, .logoD').css({"transform": "translate(0,0)"});
            $('.logoOR').css({"transform": "scale(0)"});
            $('.main-rules').css({"transform": "translateY(0)"});
              $('.arrows-1').css({"transform": "translateY(0)"});
        }
        if ($(window).width() > 1366) {
            if ((hscroll / 1.5) < 1) {
                $('.logoOR').css({"transform": "scale(0)"});
                $('.main-rules').css({"transform": "translate(0,0)"});
                  $('.arrows-1').css({"transform": "translateY(0)"});
            } else {
                $('.logoOR').css({"transform": "scale(" + (hscroll / 100) + ")"});
                $('.main-rules, .arrows-1').css({"transform": "translateY(-" + (hscroll + 10) + "px)"});
                $('.arrows-1').css({"transform": "translateY(-" + ((hscroll / 0.8)) + "px)"});
            }
        }
    }


//     if ($(this).width() >= 1440) {
//     if ($(window).width() > 1366) {
//         $('.logoT').css({"transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"});
//         $('.logoD').css({"transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"});
//         $('.logoOR').css({"transform": "scale(" + (hscroll / 150) + ")"});
//         $('.main-rules').css({"transform": "translateY(-" + (hscroll + 10) + "px)"});
//     }
//
//     if ($(window).width() < 1366) {
//         $('.logoT, .logoD').css({"transform": "translate(0,0)"});
//         $('.logoOR').css({"transform": "scale(0)"});
//         $('.main-rules').css({"transform": "translateY(0)"});
//     }
//     if ($(window).width() > 1366) {
//         if ((hscroll / 1.5) < 1) {
//             $('.logoOR').css({"transform": "scale(0)"});
//             $('.main-rules').css({"transform": "translate(0,0)"});
//         } else {
//             $('.logoOR').css({"transform": "scale(" + (hscroll / 100) + ")"});
//             $('.main-rules').css({"transform": "translateY(-" + (hscroll + 10) + "px)"});
//         }
//     }
// }


    console.log(hscroll);
    $(window).scroll(function () {
        $('.rules>p').each(function (i) {

            var BotOfObj = $(this).offset().top + $(this).outerHeight();
            var BotOfWin = $(window).scrollTop() + $(window).height();
            if (BotOfWin > BotOfObj) {
                $(this).animate({'opacity': '1'}, 800);
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
