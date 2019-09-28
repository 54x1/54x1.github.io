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

var _LOCK_BUTTON = document.querySelector("#lock-landscape-button"),
    _UNLOCK_BUTTON = document.querySelector("#unlock-button"),
    _STATUS = document.querySelector("#orientation-status");

_STATUS.innerHTML = screen.orientation.type + ' mode';

// upon lock to landscape-primary mode
document.querySelector("#lock-landscape-button").addEventListener('click', function() {
    if(document.documentElement.requestFullscreen)
        document.querySelector("#container").requestFullscreen();
    else if(document.documentElement.webkitRequestFullScreen)
        document.querySelector("#container").webkitRequestFullScreen();

    screen.orientation.lock("landscape-primary")
        .then(function() {
            _LOCK_BUTTON.style.display = 'none';
            _UNLOCK_BUTTON.style.display = 'block';
        })
        .catch(function(error) {
            alert(error);
        });
});

// upon unlock
document.querySelector("#unlock-button").addEventListener('click', function() {
    screen.orientation.unlock();

    _LOCK_BUTTON.style.display = 'block';
    _UNLOCK_BUTTON.style.display = 'none';
});

// when screen orientation changes
screen.orientation.addEventListener("change", function() {
    _STATUS.innerHTML = screen.orientation.type + ' mode';
});

// on exiting full-screen lock is automatically released
document.addEventListener("fullscreenchange", function() {
    _LOCK_BUTTON.style.display = 'block';
    _UNLOCK_BUTTON.style.display = 'none';
});

// for Chrome & Safari
document.addEventListener("webkitfullscreenchange", function() {
    _LOCK_BUTTON.style.display = 'block';
    _UNLOCK_BUTTON.style.display = 'none';
});