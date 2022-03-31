$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.about__items').slick({
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 4000,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 1024,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 735,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 554,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.team__workers-slider').slick({
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 830,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});
	$('.wps__items').slick({
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 4000,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 1024,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 735,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 554,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.wts__items').slick({
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 4000,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 1024,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 735,
				settings: {
					slidesToShow: 1
				}
			}, {
				breakpoint: 554,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});
