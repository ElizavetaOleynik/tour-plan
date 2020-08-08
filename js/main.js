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

	AOS.init();

	var map = $(".map");
	map.on('click', openMap);

	function openMap(event) {
		map.append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248879.07505605282!2d100.8439191143121!3d12.924711050103266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310296059bd3779b%3A0x37191e723a1a258!2sHilton%20Pattaya!5e0!3m2!1sru!2sua!4v1596906365663!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>')
	}


});