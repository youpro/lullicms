function initCarousel() {

	if( $("carousel-container") ) 
	{
		hCarousel = new UI.Carousel("carousel-container").
							observe('scroll:ended', function(event) {
	        					location.hash = Math.floor( hCarousel.currentIndex() );
	        				});		
	        				
		if(location.hash) {
			hCarousel.scrollTo(location.hash.substr(1));
		}
	}	
}

Event.observe(window, "load", initCarousel);