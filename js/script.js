// достаем из html документа класс header__burger при помощи DOM и создаем переменную
let buttonBlock = document.querySelector('.header__burger')

// достаем из html документа класс body и создаем переменную
let bodyBlock = document.querySelector('.body')

// достаем из wrapper документа класс body и создаем переменную

let htmlBlock = document.querySelector('html')

// ? Прописываем функию блкировки 
function blockBodyFunck() {
	// вешаем событие click на кнопку
	buttonBlock.addEventListener('click', function (e) {
		// при клике на кнопку присваиваем акктивный класс для body
		htmlBlock.classList.toggle('lock')
		// при клике на кнопку присваиваем акктивный класс для wrapper

	})
}
blockBodyFunck()


// бургер
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
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


