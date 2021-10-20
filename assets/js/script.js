import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

// Swiper
const swiperHero = new Swiper('.hero__slider', {
	direction: 'horizontal',
	loop: true,
	draggable: true,

	pagination: {
		el: '.slick-dots',
		type: 'bullets',
		clickable: true,
	},

	navigation: {
		nextEl: '.slick-next',
		prevEl: '.slick-prev',
	}
})

const swiperLicense = new Swiper('.license__slider2', {
	direction: 'horizontal',
	loop: true,
	draggable: true,

	navigation: {
		nextEl: '.slick-next',
		prevEl: '.slick-prev',
	}
})

const swiperInfo = new Swiper('.mobile-info', {
	direction: 'horizontal',
	loop: true,
	draggable: true,

	navigation: {
		nextEl: '.slick-next',
		prevEl: '.slick-prev',
	}
})

const swiperAdvantages = new Swiper('.advantages-product-swiper', {
	direction: 'horizontal',
	loop: true,
	draggable: true,

	pagination: {
		el: '.slick-dots',
		type: 'bullets',
		clickable: true,
	},

	navigation: {
		nextEl: '.slick-next',
		prevEl: '.slick-prev',
	}
})

const swiperBenefits = new Swiper('.benefits-second-mobile', {
	direction: 'horizontal',
	loop: true,
	draggable: true,

	pagination: {
		el: '.slick-dots',
		type: 'bullets',
		clickable: true,
	},

	navigation: {
		nextEl: '.slick-next',
		prevEl: '.slick-prev',
	}
})

// calculator

let processors = document.querySelector('#processors')
let processorsCount = document.querySelector('#processorsCount')
let ram = document.querySelector('#ram')
let ramCount = document.querySelector('#ramCount')
let sas = document.querySelector('#sas')
let sasCount = document.querySelector('#sasCount')
let ssd = document.querySelector('#ssd')
let ssdCount = document.querySelector('#ssdCount')
let disk = document.querySelector('#disk')
let diskCount = document.querySelector('#diskCount')
let vm = document.querySelector('#vm')
let vmCount = document.querySelector('#vmCount')

function inputRange(max, step, input, count) {
	input.max = max
	input.step = step
	input.addEventListener('input', () => {
		if (input.value <= 2500)
			count.innerText = input.value / 250
		else if (input.value > 2500 && input.value <= 5000)
			count.innerText = (input.value / 250 - 9) * 10 - 10
		else if (input.value > 5000 && input.value <= 7500)
			count.innerText = (input.value / 250 - 18) * 100 - 200
		else if (input.value >= 7500 && input.value <= 10000)
			count.innerText = (input.value / 250 - 27) * 1000 - 3000
	})
}
function ramRange(max, step, input, count) {
	input.max = max
	input.step = step
	input.addEventListener('input', () => {
		if (input.value <= 256)
			count.innerText = input.value / step * 8
		else if (input.value > 256 && input.value <= 512)
			count.innerText = input.value / step * 8
		else if (input.value > 512 && input.value <= 768)
			count.innerText = (input.value / step - 8) * 32
		else if (input.value > 768 && input.value <= 1024)
			count.innerText = (input.value / step - 16) * 64

	})
}
function sasRange(max, step, input, count) {
	input.max = max
	input.step = step
	input.addEventListener('input', () => {
		if (input.value <= 256)
			count.innerText = input.value / step * 16
		else if (input.value > 256 && input.value <= 512)
			count.innerText = input.value / step * 16
		else if (input.value > 512 && input.value <= 768)
			count.innerText = (input.value / step - 8) * 32
		else if (input.value > 768 && input.value <= 1024)
			count.innerText = (input.value / step - 16) * 64
	})
}
function diskRange(max, input, count) {
	input.max = max
	input.step = 25
	input.addEventListener('input', () => {
		if (input.value <= 25) {
			count.innerText = input.value / input.step * 2
		}
		else if (input.value > 25 && input.value <= 50) {
			count.innerText = input.value / input.step * 2
		}
		else if (input.value > 50 && input.value <= 75) {
			count.innerText = input.value / input.step / 3 * 10
		}
		else if (input.value > 75 && input.value <= 100) {
			count.innerText = input.value
		}
	})
}
function vmRange(max, input, count) {
	input.max = max
	input.addEventListener('input', () => {
		if (input.value <= 250) {
			input.step = 25
			count.innerText = input.value / input.step
		}
		else if (input.value > 250 && input.value < 500) {
			input.step = 50
			count.innerText = (input.value / input.step - 5) * 10
		}
		else if (input.value >= 500 && input.value <= 750) {
			input.step = 250
			count.innerText = (input.value / input.step - 1) * 50
		}
		else if (input.value > 750 && input.value <= 1000) {
			input.step = 25
			count.innerText = input.value / input.step % 30 * 100
		}
	})
}
inputRange(10000, 250, processors, processorsCount)
ramRange(1024, 32, ram, ramCount)
sasRange(1024, 32, sas, sasCount)
sasRange(1024, 32, ssd, ssdCount)
diskRange(100, disk, diskCount)
vmRange(1000, vm, vmCount)