
$(document).ready(function () {
    $('body').fadeIn(1000);

    var oncedone1 = false;
    var oncedone2 = false;
    var oncedone1v1 = false;
    var oncedone2v1 = false;
    var oncedone3v1 = false;
    var oncedone4v1 = false;
    var oncedone1v2 = false;
    var oncedone2v2 = false;
    var oncedone3v2 = false;
    var oncedone4v2 = false;

    $(document).ready(function(){
        
        $(window).on('scroll resize', function (e) {
           
            /*desktop > 768px*/
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 1 && oncedone1 == false && $(window).width() > 768) {
                $(".breakpoint-1").fadeIn(2500).css({ "display": "grid"});
                $("#home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime").hide();
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 1 && oncedone2 == false) {
                    $("#home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime").fadeIn(2500).css({ "display": "grid" });
                    oncedone1 = true;
                    oncedone2 = true;
                }
            }
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 1 && oncedone1v1 == false && $(window).width() > 768) {
                $(".breakpoint-2").fadeIn(2500).css({ "display": "grid"});
                //$("").hide();
            }
            /*mobile / < 768px*/
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 10  && oncedone1v2 == false && $(window).width() < 768) {
            $(".breakpoint-1").fadeIn(1500).css({ "display": "grid" });
            $("#home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime, #home-page-genre-anime, #home-page-action-anime, .home-page-action-anime").hide();
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 10 && oncedone2v2 == false) {
                  $("#home-page-best-anime, .home-page-best-anime").fadeIn(1500).css({ "display": "grid" });
                        if ($(window).scrollTop() + $(window).height() > $(document).height() - 10 && oncedone3v2 == false) {
                          $("#home-page-season-anime, .home-page-season-anime").fadeIn(1500).css({ "display": "grid" });
                            if ($(window).scrollTop() + $(window).height() > $(document).height() - 10 && oncedone4v2 == false) {
                            oncedone1v2 = true;
                            oncedone2v2 = true;
                            oncedone3v2 = true;
                            oncedone4v2 = true;
                            $("#home-page-genre-anime, #home-page-action-anime, .home-page-action-anime").fadeIn(1500).css({ "display": "grid" });
                            
                            }
                        }
                     }
                }
        });

    });
    
    
});
    /*backup loader in case it takes a long time to load
setTimeout(function () {
    jquery('body').fadeIn();
}, 1000)
setTimeout(function () {
    jquery('.breakpoint-2, .breakpoint-1, #anime-n-movies, #featured-anime, #home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime, #home-page-genre-anime, #home-page-action-anime, .home-page-action-anime').fadeIn();
}, 2500)
*/