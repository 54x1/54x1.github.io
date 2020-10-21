$(document).ready(function(){
// alert("here");
//variables
var nav = $('nav');
var my = $(".hero .home-hero-img, .hero-banner .home-hero-img");
var  myHome = $('.home-hero>.home-hero-img');
var myHero = $('.home-hero > .home-hero-img, .hero-banner>.home-hero-img');
var home = $('.home-hero-img');
var bottom = nav.position().top - nav.height();
var bot2 = myHome.height();
if (bottom >= bot2){
var replace =	bottom + bot2 - nav.outerHeight() - bottom;
}
else{
	replace = bottom;
}
//start nav bug need to fix when mobile refreshes page
// if ($(window).width() < 768){
// 	nav.addClass('after-hero');
//
// 	$('#nav-icon3 span').css({"background-color":"#193052"});
// }

$('.content').each(function(){
	$(this).find(".home-hero-img").css({"-webkit-filter": "grayscale(100%)", "-moz-filter": "grayscale(100%)", "filter": "grayscale(100%)"});
	$(this).hover(function() {
		 $(this).find(".home-hero-img").css({"-webkit-filter": "grayscale(0%)", "-moz-filter": "grayscale(0%)", "filter": "grayscale(0%)"});
	}, function(){
		$(this).find(".home-hero-img").css({"-webkit-filter": "grayscale(100%)", "-moz-filter": "grayscale(100%)", "filter": "grayscale(100%)"});

	  });
})

	$(".searchicon").click(function(e){
				$('.content-search').toggleClass('open');
					$('.search>.btn').toggleClass('close');
	});

$("#nav-icon3").hover(function(){
		// alert("here");
	$('#nav-shape').css({"transition": "0.70s"," -webkit-transition":  "0.70s","-moz-transition": "0.70s", "-ms-transition": "0.70s", "-o-transition": "0.70s", "-webkit-transform": "rotate(180deg)","-moz-transform": "rotate(180deg)", "-o-transform": "rotate(180deg)",
"-ms-transform": "rotate(180deg)",
"transform": "rotate(180deg)" })}, function(){
	// alert("here2");
    $("#nav-shape").css({"transition": "0.70s"," -webkit-transition":  "0.70s","-moz-transition": "0.70s", "-ms-transition": "0.70s", "-o-transition": "0.70s", "-webkit-transform": "rotate(90deg)","-moz-transform": "rotate(90deg)", "-o-transform": "rotate(90deg)",
	"-ms-transform": "rotate(90deg)",
	"transform": "rotate(90deg)" });
});


	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');

	$('#nav-shape').css({"transition": "0.70s"," -webkit-transition":  "0.70s","-moz-transition": "0.70s", "-ms-transition": "0.70s", "-o-transition": "0.70s", "-webkit-transform": "rotate(180deg)","-moz-transform": "rotate(180deg)", "-o-transform": "rotate(180deg)",
"-ms-transform": "rotate(180deg)",
"transform": "rotate(180deg)"});

			$("nav .menu-item").hide(0);
			if ($("#nav-icon3").hasClass('open') && $("#nav-icon3").hasClass('none')){
				$("nav .menu-menu-container").addClass("menu-open");
				$(".sticky-top, .fixed-top").css({"opacity":"1"});
				$("nav .menu-open").slideDown(400);
				$("nav .menu-item").each(function(i) {
			    $(this).delay(200 * i + 200).fadeIn(0);
					console.log(i);
				});
							//change nav-icon span colour based on position
				if ($(window).scrollTop() >= replace) {
										$('#nav-icon3 span').css({"background-color":"#2b4975"});
				}
				else{
					$('#nav-icon3 span').css({"background-color":"#2b4975"});
				}

					$('body').css({'overflow':'hidden'});
			}


			else if ($("#nav-icon3").hasClass('none')){

				//change nav-icon span colour based on position
				  if ($(window).scrollTop() <= bot2 - nav.outerHeight()) {
							$('#nav-icon3 span').css({"background-color":"rgb(0 0 0 / 0.45)"});
					}else{
				$('#nav-icon3 span').css({"background-color":"rgb(10 39 73)"});

					}
					$("nav .menu-menu-container").css({"visibility":"visibile"});
					   $("nav .menu-menu-container").delay(250).slideUp(250);
$('body').css({'overflow-y':'scroll'});
	$("#nav-shape").css({"transition": "0.70s"," -webkit-transition":  "0.70s","-moz-transition": "0.70s", "-ms-transition": "0.70s", "-o-transition": "0.70s", "-webkit-transform": "rotate(90deg)","-moz-transform": "rotate(90deg)", "-o-transform": "rotate(90deg)",
"-ms-transform": "rotate(90deg)",
"transform": "rotate(90deg)" });
			}
	});
my.hover(function() {
	$(this).css({"-webkit-filter": "grayscale(0%)", "-moz-filter": "grayscale(0%)", "filter": "grayscale(0%)"});
}, function(){
	$(this).css({"-webkit-filter": "grayscale(100%)", "-moz-filter": "grayscale(100%)", "filter": "grayscale(100%)"});

  });


	 myHome.hover(function() {
				$(this).css({"-webkit-filter": "grayscale(0%)", "-moz-filter": "grayscale(0%)", "filter": "grayscale(0%)"});

	}, function(){
	$(this).css({"-webkit-filter": "grayscale(100%)", "-moz-filter": "grayscale(100%)", "filter": "grayscale(100%)"});
	  });

		myHero.hover(function() {
 			 	$(this).css({"-webkit-filter": "grayscale(100%)", "-moz-filter": "grayscale(100%)", "filter": "grayscale(100%)"});
 	}, function(){
	$(this).css({"-webkit-filter": "grayscale(0%)", "-moz-filter": "grayscale(0%)", "filter": "grayscale(0%)"});

 	  });


  $(window).on('scroll resize load', function () {
		//image scroll effect if below 1024px
		if ($(window).width() > 99990){
			$('.grid-1>.shape-content').css({ "transform": "translate(-" +($(window).scrollTop() / 0.8 - 800) + "px, -" + ($(window).scrollTop() / 150) + "px)" });
				$('.grid-2>.shape-content').css({ "transform": "translate(-" +($(window).scrollTop() / 150) + "px, -" + ($(window).scrollTop() / 0.522 - 1800) + "px)" });
								$('.grid-3>.shape-content').css({ "transform": "translate(" +($(window).scrollTop() / 0.502 - 3200) + "px, -" + ($(window).scrollTop() / 1.5 - 800) + "px)" });
		}
		else{
			$('.shape-content').css({ "transform": "translate(0, 0)"});
		}
		// if ($(window).width() < 1024){
		// 	$('.shape-content').css({ "transform": "translate(-" +($(window).scrollTop() / 1.5 - 400) + "px, -" + ($(window).scrollTop() / 1.5 - 400) + "px)" });
		// }
		//paralax effect
	                 $('.hero-text').css({ "transform": "translate(0," + -$(this).scrollTop() / 15 + "px)" });
									      $('.hero-banner .home-hero-img, .home-hero .home-hero-img, .content-translate, .down-pointer, footer').css({ "transform": "translate(0," + -$(this).scrollTop() / 5 + "px)" });

		//nav bk

								if ($(window).scrollTop() >= $('.hero-banner .home-hero-img').height() -  170 || $(window).scrollTop() >= $('.home-hero .home-hero-img').height() -  245) {
									// alert("here");
								nav.addClass('after-hero');

								$('#nav-icon3 span').css({"background-color":"#193052"});
							}
							else {
									// $('.shape-content').css({ "transform": "translate(0px, 0px"});
		$('#nav-icon3 span').css({"background-color":"rgb(0 0 0 / 0.45)"});
									nav.removeClass('after-hero');
	}


});


//check ios
		if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
		             $(".home-hero-img, .shape-content").css({"background-attachment" : "scroll"});
								 $('.shape-content').css({"position": "relative", "background-position" : "center"});
								 //fix searchicon on apple devices
									 $(".search-section>.searchicon").css({"position":"relative"});
									  $('.home-hero .home-hero-img, .home-hero-img').css({"top":"-36px"});
			} else {
		                $("home-hero>.home-hero-img, .hero-banner>.home-hero-img").css({"background-attachment" : "fixed"});
		        }



//url id scroll
$('.down-pointer').on('click', function(e){
  e.preventDefault();
  var get_section = $(this).attr('href'),
    section_offset = $('#start').offset().top;
  jQuery('body,html').animate({
    scrollTop: section_offset
  }, 1000);
});
//end of document
});
