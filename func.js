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

	$('#heroCarousel').slick({
		dots: true,
		arrows: false,
		infinite: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		fade: true,
		cssEase: 'linear'
	});

	$('.fade').slick({
		dots: false,
		infinite: true,
		adaptiveHeight: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	$('#photos').slick({
		dots: false,
		infinite: true,
		adaptiveHeight: true,
		speed: 500,
		rows: 2,
		slidesPerRow: 5,
		appendArrows: $('#appendArrows')
	});
});