$(function() {
	if ($('#single-page').length) {
		$('.header').addClass("header-cutted");
	}

	if (!$('#home-page').length) {
		return false;
	}

	//adding header-cutted class to the header on scrolling
	$(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('.header').addClass("header-cutted");
        }
        else{
            $('.header').removeClass("header-cutted");
        }
    });

	//scrolling on clicking links on header
	$('.header .left-navs > a, .header .right-navs > a').on("click", function(event) {
        event.preventDefault();

        // set selector
        var $selector = $(this).attr('href');

        var scrollTo = $($selector).offset().top - 130;

        
        $("html, body").animate({
            scrollTop: scrollTo
        }, 500);
    });
})