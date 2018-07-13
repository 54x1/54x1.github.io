
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

    $(document).ready(function () {
        $(window).on('scroll resize', function (i) {
            $('.bpshow').each(function () {
                if ($(window).scrollTop() + $(window).height() == $(document).height() && $(window).width() > 768) {
                    $(this).fadeIn(1500).css({ "display": "grid" });
                }
            });
        });


 
            });
        });