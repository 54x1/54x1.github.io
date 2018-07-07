
$(document).ready(function () {
    $('body').fadeIn(1000);

    var oncedone1 = false;
    var oncedone2 = false;
    var oncedone3 = false;

    $(window).scroll(function () {
        if ($(document).scrollTop() > 2300 && oncedone1 == false) {
                $(".breakpoint-1").fadeIn(2500).css({ "display": "grid"});
                $("#home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime").hide();
                oncedone1 = true;
            }
        if ($(document).scrollTop() > 4200 && oncedone2 == false) {
                $("#home-page-best-anime, .home-page-best-anime").fadeIn(2500).css({ "display": "grid"});
                oncedone2 = true;
            }
        if ($(document).scrollTop() > 5280 && oncedone3 == false) {
                $("#home-page-season-anime, .home-page-season-anime").fadeIn(2500).css({ "display": "grid"});
                oncedone3 = true;
            }
            
            
        });
        

       
});