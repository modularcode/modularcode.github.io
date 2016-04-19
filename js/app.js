$(function() {
	if ($('#single-page').length) {
		$('.header').addClass("header-fixed");
	}

	if (!$('#home-page').length) {
		return false;
	}

	//adding header-fixed class to the header on scrolling
	$(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('.header').addClass("header-fixed");
        }
        else{
            $('.header').removeClass("header-fixed");
        }
    });

	//scrolling on clicking links on header
	$('.header a:not(.navigation-logo a)').on("click", function(event) {
        event.preventDefault();

        // set scroll selector from data attribute
        var $selector = '#' + $(this).data('scrollto');

        // scrolling to the selected sectiondocument.title,
        scrollTo($selector)
    });

    window.onload = function() {
        // set section selector from location
        var $selector = window.location.hash;

        // scrolling to the selected sectiondocument.title,
        scrollTo($selector);

        //replacing hash from url
        history.pushState("", document.title, window.location.pathname);
    };

    function scrollTo(selector){

        selector = $(selector);

        if (selector.length) {
            var scrollTo = selector.offset().top - 130;
            
            $("html, body").animate({
                scrollTop: scrollTo
            }, 500);
        }
    }

    var $contactForm = $('#contact-form');

    var contactValidationSettings = {
        errorClass:'has-error',
        validClass:'success',
        errorElement:"span",

        // add error class
        highlight: function(element, errorClass, validClass) {
            $(element).parents("div.form-group")
            .addClass(errorClass)
            .removeClass(validClass); 
        }, 

        // add error class
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".has-error")
            .removeClass(errorClass)
            .addClass(validClass); 
        },
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Please enter your name!",
            },
            email:  {
                required: "Please enter your email!",
                email: "Please enter correct email!"
            },
            message: {
                required: 'Please enter your message!',
            }
        }
    };

    // validating contact form
    $contactForm.validate(contactValidationSettings); 

});

