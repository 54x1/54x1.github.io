
$(document).ready(function () {
    $('body').fadeIn(1000);

    var oncedone1 = false;
    var oncedone2 = false;
    var oncedone3 = false;
    var oncedone1v1 = false;
    var oncedone2v1 = false;
    var oncedone3v1 = false;
    var oncedone4 = false;


    $(document).ready(function(){
        $(window).scroll(function () {
            var bottom = $(window).scrollTop() + $(window).height() > $(document).height() - 100;
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 && oncedone1v1 == false && $(window).width() < 768) {
                $(".breakpoint-1").fadeIn(2500).css({ "display": "grid" });
                $("#home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime").hide();
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 && oncedone2v1 == false) {
                    $("#home-page-best-anime, .home-page-best-anime").fadeIn(2500).css({ "display": "grid" });
                    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 && oncedone3v1 == false) {
                        $("#home-page-season-anime, .home-page-season-anime").fadeIn(2500).css({ "display": "grid" });
                        oncedone1v1 = true;
                        oncedone2v1 = true;
                        oncedone3v1 = true;
                        /*if (bottom && oncedone4 == false) {
    
                        }*/
                    }
                }
            }
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 && oncedone1 == false && $(window).width() > 768) {
                $(".breakpoint-1").fadeIn(2500).css({ "display": "grid" });
                $("#home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime").hide();
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 && oncedone2 == false) {
                    $("#home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime").fadeIn(2500).css({ "display": "grid" });
                    oncedone1 = true;
                    oncedone2 = true;
                    oncedone3 = true;
                    /*if (bottom && oncedone4 == false) {
        
                    }*/

                }
            }
        });
    });
    
    
});
    