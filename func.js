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


	// post hover effect
	var posts = $('.postImg');

	posts.hover(function () {
		var animation = $(this).children()[2];
		$(animation).css('height', '256.3px').css('top', '0');
	}, function() {
		var animation = $(this).children()[2];
		$(animation).css('height', '0%').css('top', '50%');
	});

	// photo hover effect
	var photos = $('.photoHover');

	photos.hover(function () {
		var animation1 = $(this).children()[1];
		$(animation1).css('opacity', '0.5');
		var animation2 = $(this).children()[2];
		$(animation2).css('opacity', '1');
	}, function() {
		var animation1 = $(this).children()[1];
		$(animation1).css('opacity', '0');
		var animation2 = $(this).children()[2];
		$(animation2).css('opacity', '0');
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