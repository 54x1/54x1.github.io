// var elem = document.documentElement;
// openFullscreen()
// function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.mozRequestFullScreen) { /* Firefox */
//     elem.mozRequestFullScreen();
//   } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE/Edge */
//     elem = window.top.document.body; //To break out of frame in IE
//     elem.msRequestFullscreen();
//   }
// }
//
// // console


function checkfull() {
	return (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null);
}

function mainfunction(){
if (checkfull() == null){
   document.getElementById("main-section").style.display = "none";
	       document.getElementById("go-home").style.display = "grid";
}
if (checkfull() == true){
	document.getElementById("main-section").style.display = "grid";
				document.getElementById("go-home").style.display = "none";
}
}



var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
		document.getElementById("main-section").style.display = "grid";
					document.getElementById("go-home").style.display = "none";
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
		document.getElementById("main-section").style.display = "grid";
					document.getElementById("go-home").style.display = "none";
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
		document.getElementById("main-section").style.display = "grid";
					document.getElementById("go-home").style.display = "none";
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem = window.top.document.body; //To break out of frame in IE
    elem.msRequestFullscreen();
		document.getElementById("main-section").style.display = "grid";
					document.getElementById("go-home").style.display = "none";
  }
}


if (document.addEventListener)
{
 document.addEventListener('fullscreenchange', exitHandler, false);
 document.addEventListener('mozfullscreenchange', exitHandler, false);
 document.addEventListener('MSFullscreenChange', exitHandler, false);
 document.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler()
{
 if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenchange === false)
 {
	 document.getElementById("main-section").style.display = "none";
	       document.getElementById("go-home").style.display = "grid";
 }
}
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
});
