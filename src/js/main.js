const burgerBtn = document.querySelector('.burger__img')
const nav = document.querySelector('.nav-items')
const footerYear = document.querySelector('.footer__year')

const navSlide = () => {
	nav.classList.toggle('active')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

burgerBtn.addEventListener('click', navSlide)
