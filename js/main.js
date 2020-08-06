$(document).ready(function () {
	var hotelSlider = new Swiper('.hotel-slider', {
		// Optional parameters
		loop: true,


		// Navigation arrows
		navigation: {
			nextEl: '.hotel-slider__button--next',
			prevEl: '.hotel-slider__button--prev',
		},

	})

	var reviewsSlider = new Swiper('.reviews-slider', {
		// Optional parameters
		loop: true,


		// Navigation arrows
		navigation: {
			nextEl: '.reviews-slider__button--next',
			prevEl: '.reviews-slider__button--prev',
		},

	})

	var menuButton = document.querySelector('.menu-burger');
	menuButton.addEventListener('click', function () {
		console.log('Клик');
		document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
	});




	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	modalButton.on('click', openModal);
	closeModalButton.on('click', closeModal);


	function openModal() {
		var targetModal = $(this).attr('data-href');
		$(targetModal).find('.modal__overlay').addClass("modal__overlay--visible");
		$(targetModal).find('.modal__dialog').addClass("modal__dialog--visible");
	};

	function closeModal(event) {
		event.preventDefault();
		var modalOverlay = $('.modal__overlay');
		var modalDialog = $('.modal__dialog');
		modalOverlay.removeClass('modal__overlay--visible');
		modalDialog.removeClass('modal__dialog--visible');
	};


	$(window).keydown(function (e) {
		// ESCAPE key pressed
		if (e.keyCode == 27) {
			event.preventDefault();
			var modalOverlay = $('.modal__overlay');
			var modalDialog = $('.modal__dialog');
			modalOverlay.removeClass('modal__overlay--visible');
			modalDialog.removeClass('modal__dialog--visible');
		}
	});

	// обработка форм
	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				name: {
					required: "Put your name",
					minlength: "Your name must be at least two letters",
				},
				email: {
					required: "Put your email",
					email: "Your email address must be in the format of name@domain.com"
				},
				phone: {
					required: "Your phone is required"
				},
			}
		});
	});

	$(".subscribe").validate({
		errorClass: "subscribe__invalid",
		email: {
			required: "Put your email",
			email: "Your email address must be in the format of name@domain.com"
		}
	});

	$(document).ready(function () {
		$('.phone').mask('+7 (000) 000-00-00');
	});

});