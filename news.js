const cards = document.querySelectorAll('.newsPage .container .row .card');

function showNextNews() {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 50);
    });
}
showNextNews();


