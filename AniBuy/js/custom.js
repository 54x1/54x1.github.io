
$(document).ready(function () {
    $('body').fadeIn(1000);

    var oncedone1 = false;
    var oncedone2 = false;
    var oncedone3 = false;

    $(window).scroll(function () {
        var scrollpos = $(document).scrollTop();
        if (scrollpos > 2800 && oncedone1 == false) {
                $(".breakpoint-1").fadeIn(2500).css({ "display": "grid"});
                $("#home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime").hide();
                oncedone1 = true;
            }
        if (scrollpos > 4200 && oncedone2 == false) {
                $("#home-page-best-anime, .home-page-best-anime").fadeIn(2500).css({ "display": "grid"});
                oncedone2 = true;
            }
        if (scrollpos > 5280 && oncedone3 == false) {
                $("#home-page-season-anime, .home-page-season-anime").fadeIn(2500).css({ "display": "grid"});
                oncedone3 = true;
            }
            
            
        });
        

       
});