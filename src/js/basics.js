var $ = require("jquery"),
	body = $('body'),
	container = $('.container'),
	windowHeight = $(window).height();

container.height(windowHeight - 48);	

$(window).resize(function() {
	container.height($(window).height() - 48)
});

container.click(function() {
	if ($('nav').hasClass('open')) {
		$('nav').addClass('close');
		$('nav').removeClass('open');
	} 
});