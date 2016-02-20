var AnimateHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.header' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		scrollPage();
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'header-cutted' );
		}
		else {
			classie.remove( header, 'header-cutted' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();