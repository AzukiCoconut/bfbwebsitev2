
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.menuLink');
const service = document.querySelector('.services');
const servicesList = document.querySelector('.services-list');
const name= document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const sendForm = document.getElementById('sendForm');

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

document.getElementById('contact-form').addEventListener('submit', function (event) {
	event.preventDefault();

	sendForm.innerText = 'Sending...';

	const serviceID = 'service_9l7h8qj';
	const templateID = 'template_9l7h8qj';

	emailjs.sendForm(serviceID, templateID, this).then(() => {
		sendForm.innerText = 'Send';
		alert('Message sent successfully!');
		name.value = '';
		email.value = '';
		phone.value = '';
		message.value = '';
	}, (err) => {
		sendForm.innerText = 'Send';
		alert(JSON.stringify(err));

	});
});

