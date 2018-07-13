
$(document).ready(function () {
    $('body').fadeIn(1000);

        $(window).on('scroll resize', function (i) {
            $('.bpshow').each(function () {
                if ($(window).scrollTop() + $(window).height() == $(document).height() && $(window).width() > 768) {
                    $(this).fadeIn(1500).css({ "display": "grid" });
                }
            });
        });
    });