// Make it rain!!!


$('.brunch-link').on('click', function() {
  $('.dinner, .drinks').addClass('hidden-element');
  $('.brunch').removeClass('hidden-element');
  $('.dinner-link, .drinks-link').removeClass('menu-active');
  $('.brunch-link').addClass('menu-active');
});

$('.dinner-link').on('click', function() {
  $('.brunch, .drinks').addClass('hidden-element');
  $('.dinner').removeClass('hidden-element');
  $('.brunch-link, .drinks-link').removeClass('menu-active');
  $('.dinner-link').addClass('menu-active');
});

$('.drinks-link').on('click', function() {
  $('.brunch, .dinner').addClass('hidden-element');
  $('.drinks').removeClass('hidden-element');
  $('.brunch-link, .dinner-link').removeClass('menu-active');
  $('.drinks-link').addClass('menu-active');
});

$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	// Step 2: Log distanceScrolled to the console to see what it holds!
	console.log(distanceScrolled);
	// if distanceScrolled is greater than or equal to 542
	if (distanceScrolled > 10) {

		// Add a class to the nav to make it fixed
		$('nav').addClass('scrolled');
	}
	// else
	// Remove the class from the nav to make it unfixed
	else {
		$('nav').removeClass('scrolled');
	}
});

$('.reservation button').on('click', function () {
  $('.modal, .reservation-box').removeClass('hidden-element');
});

$('.reservation-box button, .reservation-box i').on('click', function () {
  $('.modal, .reservation-box').addClass('hidden-element');
});

$('.fa-bars').on('click', function () {
  $('nav').toggleClass('transition');
});
/* ----------------------------------------
Slick Carousel
------------------------------------------- */
$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
