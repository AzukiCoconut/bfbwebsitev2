
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.menuLink');
const service = document.querySelector('.services');
const servicesList = document.querySelector('.services-list');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active');
	navLinks.classList.toggle('w-full');
});

for (var i = 0; i < menuLinks.length; i++) {
	menuLinks[i].addEventListener('click', () => {
		if (hamburger.classList.contains('is-active') && navLinks.classList.contains('w-full')) {
			hamburger.classList.remove('is-active');
			navLinks.classList.remove('w-full');
		}
	}
	)
};

service.addEventListener('click', () => {
	servicesList.classList.toggle('openMenu');
});

