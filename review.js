const cards = document.querySelectorAll('.rewiewsPage .container .row');

function showNextNews() {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 50);
    });
}
showNextNews();


