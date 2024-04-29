const cardsB = document.querySelectorAll('.contactPage .container .details .detailsCards .ContactB');
const cardsW = document.querySelectorAll('.contactPage .container .details .detailsCards .ContectW');

function showNextContactB() {
    cardsB.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 50);
    });
}

function showNextContactW(){
    cardsW.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 50);
    });
}

showNextContactB();
showNextContactW();

