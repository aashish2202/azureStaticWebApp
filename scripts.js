document.querySelectorAll('.view-more-btn').forEach(button => {
	button.addEventListener('click', (e) => {
		const cardInner= e.target.closest('.card-inner');
		cardInner.style.transform = 'rotateY(180deg)';
	});
});