function initCarousel() {
	if( $("carousel-container") ) hCarousel = new UI.Carousel("carousel-container");
}

Event.observe(window, "load", initCarousel);