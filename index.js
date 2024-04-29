const serviceButtons = document.querySelectorAll('#servBtn');
const serviceModal = document.getElementById("serviceModal");
const modalImg = document.getElementById("service-img");
const modalDescription = document.getElementById("service-description");
const modalVideo = document.getElementById("service-video");
const calModal = document.getElementById("calcModal");
const calcBtn = document.querySelector(".calcBtn");

serviceButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        serviceModal.style.display = "block";
        let card = button.closest('.card');
        let serviceName = card.querySelector('.card-title').textContent;
        modalImg.src = card.querySelector('.card-img-top').src;
        switch (index) {
            case 0:
                modalDescription.textContent = "Химчистка матрасов позволяет не только освежить матрас, но и устранить пыль, микробы и аллергены, что способствует созданию здоровой атмосферы для сна.";
                modalVideo.src = "https://www.youtube.com/embed/njX2bu-_Vw4?si=1Cx4YtC9KifDMB4Q";
                break;
            case 1:
                modalDescription.textContent = "Химчистка матрасов позволяет не только освежить матрас, но и устранить пыль, микробы и аллергены, что способствует созданию здоровой атмосферы для сна.";
                modalVideo.src = "https://www.youtube.com/embed/njX2bu-_Vw4?si=1Cx4YtC9KifDMB4Q";
                break;
            case 2:
                modalDescription.textContent = "Химчистка матрасов позволяет не только освежить матрас, но и устранить пыль, микробы и аллергены, что способствует созданию здоровой атмосферы для сна.";
                modalVideo.src = "https://www.youtube.com/embed/njX2bu-_Vw4?si=1Cx4YtC9KifDMB4Q";
                break;
            case 3:
                modalDescription.textContent = "Химчистка матрасов позволяет не только освежить матрас, но и устранить пыль, микробы и аллергены, что способствует созданию здоровой атмосферы для сна.";
                modalVideo.src = "https://www.youtube.com/embed/njX2bu-_Vw4?si=1Cx4YtC9KifDMB4Q";
                break;
            case 4:
                modalDescription.textContent = "Химчистка матрасов позволяет не только освежить матрас, но и устранить пыль, микробы и аллергены, что способствует созданию здоровой атмосферы для сна.";
                modalVideo.src = "https://www.youtube.com/embed/njX2bu-_Vw4?si=1Cx4YtC9KifDMB4Q";
                break;
            case 5:
                modalDescription.textContent = "Химчистка матрасов позволяет не только освежить матрас, но и устранить пыль, микробы и аллергены, что способствует созданию здоровой атмосферы для сна.";
                modalVideo.src = "https://www.youtube.com/embed/njX2bu-_Vw4?si=1Cx4YtC9KifDMB4Q";
                break;

            default:
                modalDescription.textContent = "Описание услуги недоступно";
                modalVideo.src = "";
                break;
        }
    });
});

calcBtn.onclick = function () {
    calModal.style.display = "block"
}

let closeButton = document.getElementsByClassName("close-serv")[0];

closeButton.onclick = function () {
    serviceModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == serviceModal || event.target == calModal) {
        serviceModal.style.display = "none";
        calModal.style.display = "none";

    }
}

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const valueSpan = document.querySelector('.value');

    slider.addEventListener('input', function () {
        valueSpan.textContent = this.value;
    });
});
