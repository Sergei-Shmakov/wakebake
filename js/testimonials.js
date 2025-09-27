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

	//slider-feedback

	new Swiper('.testimonials__slider', {
		spaceBetween: 0,
		slidesPerView: 1,
		centeredSlides: true,

		navigation: {
			nextEl: '.testimonials__next',
			prevEl: '.testimonials__prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		breakpoints: {
			// 601: {
			// 	slidesPerView: 3,
			// },
			901: {
				slidesPerView: 1.5,
			},
			1201: {
				slidesPerView: 2.05,
			},
		},
	})

	//mask

	const telInputs = document.querySelectorAll('input[type="tel"]')
	const im = new Inputmask('+7 (999) 999-99-99')
	im.mask(telInputs)
})()
