const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');
const imgBannerElement = document.querySelector('.banner-img');
const pBannerElement = document.querySelector('#banner p');
const dotsContainerElement = document.querySelector('.dots')

let index = 0;

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

slides.forEach((slide, i) => {
	const bullet = document.createElement('span')
	bullet.classList.add('dot')

	if (i === index) {
		bullet.classList.add('dot_selected')
	}

	bullet.addEventListener('click', () => {
		index = i;
		changeCarouselElement()
		changeCssBulletElement()
	})

	dotsContainerElement.appendChild(bullet)
})

const changeCarouselElement = () => {
	imgBannerElement.src = './assets/images/slideshow/' + slides[index].image;
	pBannerElement.innerHTML = slides[index].tagLine
}

const changeCssBulletElement = () => {
	const dots = document.querySelectorAll('.dot')

	dots.forEach((dot, i) => {
		console.log('dfvsdfbgdsg')
		dot.classList.remove('dot_selected')
		if (i === index) {
			dot.classList.add('dot_selected')
		}
	})
}

arrowLeftElement.addEventListener('click', () => {
	index--
	if (index < 0) {
		index = slides.length - 1
	}
	changeCarouselElement()
	changeCssBulletElement()
});

arrowRightElement.addEventListener('click', () => {
	console.log('test avant', index)
	index++
	if (index > slides.length - 1) {
		index = 0
	}
	changeCarouselElement()
	changeCssBulletElement()
});

  
  