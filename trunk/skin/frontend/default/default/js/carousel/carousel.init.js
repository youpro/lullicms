function initCarousel() {

	if( $("carousel-container") ) 
	{
		hCarousel = new UI.Carousel("carousel-container").
							observe('scroll:ended', function(event) {
								var carouselIndex = Math.round( hCarousel.currentIndex() ) + 1;
	        					location.hash = carouselIndex;
	        					var carouselPage = Math.ceil((carouselIndex + 2)/3);
	        					var html = carouselPage+" of ";
	        					$("carousel-index").firstDescendant().update(html);
	        				});		
	        				
		if(location.hash) {
			hCarousel.scrollTo(location.hash.substr(1) - 1);
		}
	}	
}

Event.observe(window, "load", initCarousel);