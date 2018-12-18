$(document).ready(function() {
	var navHeight = $('.banner').css('height');

	$(window).scroll(function() {
		// sticky navbar
		var scrollPosition = $(document).scrollTop();

		if (scrollPosition >= parseInt(navHeight)) {
			$('#nav').css('position', 'fixed');
		}
		else {
			$('#nav').css('position', 'absolute');
		}
	});
});