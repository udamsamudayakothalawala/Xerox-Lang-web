const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const platformButtons = document.querySelectorAll('.platform');
const downloadButton = document.querySelector('#download-button');

menuToggle.addEventListener('click', () => {
	const isOpen = siteNav.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
	menuToggle.textContent = isOpen ? 'Close' : 'Menu';
});

document.querySelectorAll('.site-nav a').forEach((link) => {
	link.addEventListener('click', () => {
		siteNav.classList.remove('open');
		menuToggle.setAttribute('aria-expanded', 'false');
		menuToggle.textContent = 'Menu';
	});
});

platformButtons.forEach((button) => {
	button.addEventListener('click', () => {
		platformButtons.forEach((item) => item.classList.remove('active'));
		button.classList.add('active');
		downloadButton.innerHTML = `Download ${button.dataset.download} <span aria-hidden="true">&#8595;</span>`;
	});
});

downloadButton.addEventListener('click', () => {
	const selectedDownload = document.querySelector('.platform.active');
	window.open(selectedDownload.dataset.url, '_blank', 'noopener,noreferrer');
});
