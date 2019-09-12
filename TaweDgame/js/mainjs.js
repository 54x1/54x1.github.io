$(document).ready(function () {
    $(window).on('scroll resize load', function () {
        mainh = ($('.main-home').height() - ($('.rules').height()) - 35);
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
    var el = document.documentElement,
        rfs = el.requestFullscreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    rfs.call(el);
});


let orn = getOrientation();
let out = document.getElementsByClassName('main-section');
out.textContent = orn;

function getOrientation() {
    let _orn = screen.msOrientation ||
        (screen.orientation || screen.mozOrientation).type;

    switch(_orn){
        case 'portrait-primary':
        case 'portrait-secondary':

            break;
        case 'landscape-primary':
            console.log('This is the laptop/desktop version')
            break;
        case 'landscape-secondary':
            break;
        case undefined:
            //not supported
            break;
        default:
        //something unknown
    }
    return _orn;
}


window.addEventListener('orientationchange', (ev)=>{
    orn = getOrientation();
    out.textContent = orn;
    console.dir(ev)
})


