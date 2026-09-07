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
	const downloadName = selectedDownload.dataset.download;
	const readme = `Xerox 0.0.1\nDownload: ${downloadName}\nPlatform: Windows x64\n\nVisit the Xerox project page for the latest release.`;
	const file = new Blob([readme], { type: 'text/plain' });
	const url = URL.createObjectURL(file);
	const link = document.createElement('a');
	link.href = url;
	link.download = selectedDownload.dataset.file;
	link.click();
	URL.revokeObjectURL(url);
});
