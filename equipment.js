const cards = document.querySelectorAll('.EquipmentCard');
const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const modalInfo = document.getElementById("modal-info");

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    modal.style.display = "block";
    modalTitle.textContent = card.querySelector('.card-text span').textContent;
    modalImg.src = card.querySelector('img').src;
    modalText.textContent = card.querySelector('.card-text').textContent;
    modalInfo.innerHTML = "Ссылка на производителя: <a href='#'>ссылка на производителя</a><br>Как работает оборудование или средство: <a href='#'>Видео</a>";
  });
});

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
