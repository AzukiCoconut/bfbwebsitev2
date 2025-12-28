const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('is-active');
		navLinks.classList.toggle('w-full');
	});
