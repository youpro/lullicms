function initImageViewer() {

	$$('.more-views a').invoke('observe', 'click', imageEventBinder);

	bindZoomer($('imageZoomer'));

}

function imageEventBinder(e) {

	smallImg = this.readAttribute('href');
	
	img = this.down('.zoomer').readAttribute('src'); 	

	$('imageZoomer').writeAttribute('href', img);

	$$('.product-image img')[0].writeAttribute('src', smallImg);

	bindZoomer($('imageZoomer'));
			
	e.stop();
	
}

function bindZoomer(a) {

	new Zoomer(a, {
		 
		    afterZoomIn: function () {
		        a.addClassName('zoomedIn');
		    },
		    afterZoomOut: function () {
		        a.removeClassName('zoomedIn');
		    }
		    
	});

}

Event.observe(window, "load", initImageViewer);