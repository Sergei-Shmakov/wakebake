;(function () {
	//burger
	document.addEventListener('click', burgerInit)
	function burgerInit(e) {
		const target = e.target
		const burgerIcon = target.closest('.burger-icon')
		const burgerNavLink = target.closest('.nav__link')
		if (!burgerIcon && !burgerNavLink) return
		if (document.documentElement.clientWidth > 900) return
		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else {
			document.body.classList.remove('body--opened-menu')
		}
	}

	//slider-gallery
	new Swiper('.gallery__slider', {
		spaceBetween: 15,
		slidesPerView: 1.5,
		pagination: {
			el: '.gallery__pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.gallery__next',
			prevEl: '.gallery__prev',
		},
		breakpoints: {
			601: {
				slidesPerView: 3,
			},
			801: {
				spaceBetween: 32,
			},
			1101: {
				slidesPerView: 4,
			},
		},
	})

	//mask

	const telInputs = document.querySelectorAll('input[type="tel"]')
	const im = new Inputmask('+7 (999) 999-99-99')
	im.mask(telInputs)
})()
