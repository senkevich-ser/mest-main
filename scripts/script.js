const nameTitle = document.querySelector(".lead__title");
const descriptionTitle = document.querySelector(".lead__subtitle");
const changeDescriptionBtn = document.querySelector(".lead__pencil");
const addCardBtn = document.querySelector(".lead__button");
const closePopupBtn = document.querySelector(".popup__close-cross");
const form1 = document.forms.form1;
const inputNameTitle = form1.elements.nameTitle;
const inputDescriptionTitle = form1.elements.descriptionTitle;
const popupDescription = document.querySelector(".popup");
const popupName = popupDescription.querySelector(".popup__title");
import { initialCards } from "./initialCards.js";
const cardContainer = document.querySelector(".foto-grid");
const cardTemplate = document.querySelector(".foto-grid__template").content;
const fotoOpenPopup = document.querySelector(".foto-open");


cardContainer.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("foto-grid__urn"))
    evt.target.parentElement.remove();
});
cardContainer.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("foto-grid__name-heart"))
    evt.target.classList.toggle("foto-grid__name-heart_black");
});


initialCards.forEach((el) => {
  cardContainer.append(addCard(el));
});

function addCard(dataCard) {
  const card = cardTemplate.querySelector(".foto-grid__card").cloneNode(true);
  card.querySelector(".foto-grid__item").src = dataCard.link;
  card.querySelector(".foto-grid__name-title").textContent = dataCard.name;
  const cardImage = card.querySelector(".foto-grid__item");
  cardImage.addEventListener("click", () => {
    openfotoOpenPopup(dataCard);
  });

  return card;
}

function openProfilePopup() {
  inputNameTitle.placeholder = nameTitle.textContent;
  inputNameTitle.type ='text';
  inputNameTitle.minlength=2;
  inputNameTitle.maxlength=40;
  inputDescriptionTitle.placeholder = descriptionTitle.textContent;
  inputDescriptionTitle.type ='text';
  inputDescriptionTitle.minlength="2"
  inputDescriptionTitle.maxlength="200"
  popupDescription.classList.add("popup_opened");
  popupName.textContent = "Редактировать профиль";
}

function openAddCardPopup() {
  inputNameTitle.placeholder = "Название";
  inputNameTitle.type ='text';
  inputNameTitle.minlength='2';
  inputNameTitle.maxlength='30';
  inputDescriptionTitle.placeholder = "Ссылка на картинку";
  inputDescriptionTitle.type ='url';
  popupDescription.classList.add("popup_opened");
  popupName.textContent = "Новое место";
}

function openfotoOpenPopup(cardData) {
  fotoOpenPopup.querySelector(".foto-open__image").src = cardData.link;
  fotoOpenPopup.querySelector(".foto-open__name").textContent = cardData.name;
  fotoOpenPopup.classList.add("popup_opened");
}

function closePopup() {
  popupDescription.classList.remove("popup_opened");
  form1.reset();
}

function closeFotoPopup() {
  fotoOpenPopup.classList.remove("popup_opened");
}

function handleFormProfileSubmit(evt) {
  nameTitle.textContent = inputNameTitle.value;
  descriptionTitle.textContent = inputDescriptionTitle.value;
  closePopup();
}

function handleFormAddCardSubmit(evt) {
  const newCardData = {
    name: inputNameTitle.value,
    link: inputDescriptionTitle.value,
  };
  cardContainer.append(addCard(newCardData));
  closePopup();
}

changeDescriptionBtn.addEventListener("click", openProfilePopup);
addCardBtn.addEventListener("click", openAddCardPopup);
closePopupBtn.addEventListener("click", closePopup);
fotoOpenPopup
  .querySelector(".foto-open__cross")
  .addEventListener("click", closeFotoPopup);
form1.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (evt.target.previousElementSibling.textContent === "Новое место") {
    handleFormAddCardSubmit();
  } else {
    handleFormProfileSubmit();
  }
});
