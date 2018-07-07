
$(document).ready(function () {
    $('body').fadeIn(1000);

    var oncedone1 = false;
    var oncedone2 = false;
    var oncedone3 = false;
    var oncedone4 = false;



    $(window).scroll(function () {
    var bottom = $(window).scrollTop() + $(window).height() > $(document).height() - 1;
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 1 && oncedone1 == false) {
            $(".breakpoint-1").fadeIn(2500).css({ "display": "grid" });
            $("#home-page-best-anime, .home-page-best-anime, #home-page-season-anime, .home-page-season-anime").hide();
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 1 && oncedone2 == false) {
                $("#home-page-best-anime, .home-page-best-anime").fadeIn(2500).css({ "display": "grid" });
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 1 && oncedone3 == false) {
                    $("#home-page-season-anime, .home-page-season-anime").fadeIn(2500).css({ "display": "grid" });
                    oncedone1 = true;
                    oncedone2 = true;
                    oncedone3 = true;
                    /*if (bottom && oncedone4 == false) {

                    }*/
                }
            }
        }
    });
    
  
       
});