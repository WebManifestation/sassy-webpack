
var $ = require("jquery"),
	body = $('body'),
	nav = $('nav'),
	menuIcon = $('#menu-icon');

menuIcon.click(function() {
	if (nav.hasClass('open')) {
		nav.addClass('close');
		nav.removeClass('open');
	} else {
		nav.addClass('open');
		nav.removeClass('close');
	}
});