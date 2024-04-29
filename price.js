const stripOne = document.querySelectorAll('.pricePage .container .container .tab-content .tab-pane .stripOne');
const stripTwo = document.querySelectorAll('.pricePage .container .container .tab-content .tab-pane .stripTwo');

document.querySelectorAll('.nav-link').forEach(function (tab) {
    tab.addEventListener('ckick', function (event) {

        let tabText = event.target.innerText;
        document.getElementById('selectedTab').innerText = 'Выбрано: ' + tabText;
    });

});

function showNextStripOne() {
    stripOne.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 50);
    });
}

function showNextStripTwo() {
    stripTwo.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 50);
    });
}
showNextStripOne();
showNextStripTwo();