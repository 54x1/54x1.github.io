$(document).ready(function () {
    $(window).on('scroll resize load', function () {

        var hscroll = $(this).scrollTop();
        var TopOfWin1 = $(window).scrollTop();
        var TopOfObj2 = $('.main-rules').position().top;

        function transfuc1() {
            $('.logoT').css({
                "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
            });
            $('.logoD').css({
                "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
            });
        }

        function transfuc2() {
            $('.logoT, .logoD').css({
                "transform": "translate(0,0)"
            });
            $('.logoOR').css({
                "transform": "scale(0)"
            });
            $('.main-rules, .mobile-header, .main-home').css({
                "transform": "translateY(0)"
            });
            $('.arrows-1').css({
                "transform": "translate(0px, 0)"
            });
        }


        if ($(this).width() <= 2560) {
            console.log("2560");
            if ($(window).width() > 1920) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1920) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header, .main-home').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1920) {
                if (TopOfWin1 > TopOfObj2) {
                    $('.main-header').css({
                        "display": "none"
                    });
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.logoT, .logoD').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"
                    });
                } else {
                    $('.main-header').css({
                        "display": "grid"
                    });
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 140) + ")"
                    });
                    $('.main-rules, .mobile-header, .main-home').css({
                        "transform": "translateY(-" + (hscroll / 0.85) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.75)) + "px)"
                    });


                }
            }
        }


        if ($(this).width() <= 1920) {
            console.log("1920");
            if ($(window).width() > 1600) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1600) {

                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header, .main-home').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1600) {
                if (TopOfWin1 > (TopOfObj2 + 50)) {
                    $('.main-header').css({
                        "display": "none"
                    });
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.logoT, .logoD').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"
                    });


                    $('.gofullscreen').css({
                        "overflow-x": "visible"
                    });


                } else {
                    $('.main-header').css({
                        "display": "grid"
                    });

                    $('.gofullscreen').css({
                        "overflow-x": "hidden"
                    });

                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 140) + ")"
                    });
                    $('.main-rules, .mobile-header, .main-home').css({
                        "transform": "translateY(-" + (hscroll / 0.85) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.75)) + "px)"
                    });

                }
            }
        }


        if ($(this).width() <= 1600) {
            console.log("1600");
            if ($(window).width() > 1440) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1440) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header, .main-home').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1440) {

                if (TopOfWin1 > TopOfObj2) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.logoT, .logoD').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 125) + ")"
                    });
                    $('.main-rules, .mobile-header, .main-home').css({
                        "transform": "translateY(-" + (hscroll / 0.85) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"

                    });
                }
            }
        }

        if ($(this).width() <= 1440) {
            console.log("1440");
            if ($(window).width() > 1366) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1366) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header, .main-home').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1366) {
                if (TopOfWin1 > TopOfObj2) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.logoT, .logoD').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 105) + ")"
                    });
                    $('.main-rules, .mobile-header, .main-home').css({
                        "transform": "translateY(-" + (hscroll / 0.85) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"
                    });
                }
            }
        }

        if ($(this).width() <= 1366) {
            console.log("1366");
            if ($(window).width() > 1200) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1200) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header, .main-home').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1200) {

                if (TopOfWin1 > TopOfObj2) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.logoT, .logoD').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"
                    });
                } else {
                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 100) + ")"
                    });
                    $('.main-rules, .mobile-header, .main-home').css({
                        "transform": "translateY(-" + (hscroll / 0.85) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"

                    });
                }
            }
        }


        if ($(this).width() <= 1200) {
            console.log("1200");
            if ($(window).width() > 1024) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 1024) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header, .main-home').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 1024) {

                if (TopOfWin1 > TopOfObj2) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.logoT, .logoD').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"
                    });
                } else {

                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 90) + ")"
                    });
                    $('.main-rules, .mobile-header, .main-home').css({
                        "transform": "translateY(-" + (hscroll / 0.85) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"

                    });
                }
            }
        }

        if ($(this).width() <= 1024) {
            console.log("1024");
            if ($(window).width() > 992) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 992) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header, .main-home').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 992) {
                if (TopOfWin1 > TopOfObj2) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.logoT, .logoD').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"
                    });
                } else {

                    $('.logoOR').css({
                        "transform": "scale(" + (hscroll / 80) + ")"
                    });
                    $('.main-rules, .mobile-header, .main-home').css({
                        "transform": "translateY(-" + (hscroll / 0.85) + "px)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"

                    });
                }
            }
        }

        if ($(this).width() <= 992) {
            console.log("992");
            if ($(window).width() > 768) {
                $('.logoT').css({
                    "transform": "translate(-" + hscroll / 0.5 + "px,-" + hscroll / 0.8 + "px)"
                });
                $('.logoD').css({
                    "transform": "translate(" + hscroll / 0.5 + "px, -" + hscroll / 0.8 + "px)"
                });
            }
            if ($(window).width() < 768) {
                $('.logoT, .logoD').css({
                    "transform": "translate(0,0)"
                });
                $('.logoOR').css({
                    "transform": "scale(0)"
                });
                $('.main-rules, .mobile-header, .main-home').css({
                    "transform": "translateY(0)"
                });
                $('.arrows-1').css({
                    "transform": "translate(0px, 0)"
                });
            }
            if ($(window).width() > 768) {
                if ((hscroll / 1.5) < 1) {
                    $('.logoOR').css({
                        "transform": "scale(0)"
                    });
                    $('.main-rules, .mobile-header, .main-home').css({
                        "transform": "translate(0,0)"
                    });
                    $('.arrows-1').css({
                        "transform": "translate(0px, 0)"
                    });
                } else {
                    if (TopOfWin1 > TopOfObj2) {
                        $('.logoOR').css({
                            "transform": "scale(0)"
                        });
                        $('.logoT, .logoD').css({
                            "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"
                        });
                    } else {

                        $('.logoOR').css({
                            "transform": "scale(" + (hscroll / 72) + ")"
                        });
                        $('.main-rules, .mobile-header, .main-home').css({
                            "transform": "translateY(-" + (hscroll / 0.85) + "px)"
                        });
                        $('.arrows-1').css({
                            "transform": "translate(0px,-" + ((hscroll / 0.35)) + "px)"

                        });
                    }
                }
            }
        }
        $('.rules>p').each(function (i) {
            var BotOfObj = $(this).offset().top + $(this).outerHeight();
            var BotOfWin = $(window).scrollTop() + $(window).height();
            if (BotOfWin > BotOfObj) {
                $(this).animate({
                    'opacity': '1'
                }, 800);
            }
        });
    });
});
