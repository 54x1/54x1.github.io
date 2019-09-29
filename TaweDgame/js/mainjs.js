$(document).ready(function () {
    $(window).on('scroll resize load', function () {
        if ($(window).width() <= 768) {
            if (screen.height < screen.width) {
            }
        }

        $(window).on('orientationchange', function(event) {
            console.log(orientation);
        });

        if($(window).height() == screen.height) {
            $('.main-section').css({"display": "grid"});
            $(".go-home").css({"display": "none"});
            console.log('1');
        }
        else{
            $('.main-section').css({"display": "none"});
            $(".go-home").css({"display": "grid"});
            console.log('500');
        }

        mainh = ($('.main-home').height() - ($('.go-home').height() - $('.rules').height()));
        winh = $(this).height() - mainh;


        $('.main-section').css({"grid-template-rows": "" + (winh) + "px 1fr"});
        $('.main-section').css({"min-height":"400px"});
        if ($(this).width() <= 1024) {
            var hscroll = $(this).scrollTop();
            if ($(window).width() > 768) {
                $('.logoT').css({"transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"});
                $('.logoD').css({"transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"});
            }
            if ($(window).width() < 768) {
                $('.logoT, .logoD').css({"transform": "translate(0,0)"});
                $('.logoOR').css({"transform": "scale(0)"});
                $('.main-rules').css({"transform": "translateY(0)"});
            }
            if ($(window).width() > 768) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({"transform": "scale(0)"});
                    $('.main-rules').css({"transform": "translate(0,0)"});
                } else {
                    $('.logoOR').css({"transform": "scale(" + (hscroll / 80) + ")"});
                    $('.main-rules').css({"transform": "translateY(-" + (hscroll + 10) + "px)"});
                }
            }
        }

        if ($(this).width() <= 1200) {
            var hscroll = $(this).scrollTop();
            if ($(window).width() > 1024) {
                $('.logoT').css({"transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"});
                $('.logoD').css({"transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"});
            }
            if ($(window).width() < 1024) {
                $('.logoT, .logoD').css({"transform": "translate(0,0)"});
                $('.logoOR').css({"transform": "scale(0)"});
                $('.main-rules').css({"transform": "translateY(0)"});
            }
            if ($(window).width() > 1024) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({"transform": "scale(0)"});
                    $('.main-rules').css({"transform": "translate(0,0)"});
                } else {
                    $('.logoOR').css({"transform": "scale(" + (hscroll / 80) + ")"});
                    $('.main-rules').css({"transform": "translateY(-" + (hscroll + 10) + "px)"});
                }
            }
        }

            if ($(this).width() <= 1366) {
            var hscroll = $(this).scrollTop();
            if ($(window).width() > 1200) {
                $('.logoT').css({"transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"});
                $('.logoD').css({"transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"});
            }
            if ($(window).width() < 1200) {
                $('.logoT, .logoD').css({"transform": "translate(0,0)"});
                $('.logoOR').css({"transform": "scale(0)"});
                $('.main-rules').css({"transform": "translateY(0)"});
            }
            if ($(window).width() > 1200) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({"transform": "scale(0)"});
                    $('.main-rules').css({"transform": "translate(0,0)"});
                } else {
                    $('.logoOR').css({"transform": "scale(" + (hscroll / 100) + ")"});
                    $('.main-rules').css({"transform": "translateY(-" + (hscroll + 10) + "px)"});
                }
            }
        }
    });
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



function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
}

// screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
//
// if (screen.lockOrientationUniversal("landscape-primary")) {
//
// } else {
//     // Orientation lock failed
// }

function fullScreen() {
  // Kind of painful, but this is how it works for now
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

function smolScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function lock(orientation) {
  fullScreen();
  screen.orientation.lock(orientation);
}
