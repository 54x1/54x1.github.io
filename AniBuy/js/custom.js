
$(document).ready(function () {
    $('body').fadeIn(1000);

    var oncedone1 = false;
    var oncedone2 = false;
    var oncedone3 = false;

        $(document).scroll(function () {
            if ($(document).scrollTop() > 2500 && oncedone1 == false) {
                $(".breakpoint-1").fadeIn(2500);
                $(".breakpoint-1").css({ "display": "grid" });
                $("#home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime").hide();
                oncedone1 = true;
            }
            if ($(document).scrollTop() > 4200 && oncedone2 == false) {
                oncedone1 = true;
                $("#home-page-best-anime, .home-page-best-anime").fadeIn(2500);
                $("#home-page-best-anime, .home-page-best-anime").css({ "display": "grid" });
                oncedone2 = true;
            }
            if ($(document).scrollTop() > 5285 && oncedone3 == false) {
                $("#home-page-season-anime, .home-page-season-anime").fadeIn(2500);
                $("#home-page-season-anime, .home-page-season-anime").css({ "display": "grid", });
                oncedone3 = true;
            }
            
            
        });
        

       
});