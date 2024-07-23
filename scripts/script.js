const nameTitle = document.querySelector(".lead__title");
const descriptionTitle = document.querySelector(".lead__subtitle");
const changeDescriptionBtn = document.querySelector(".lead__pencil");
const addCardBtn = document.querySelector(".lead__button");
const closePopupBtn = document.querySelector(".popup__close-cross");
const formDescription = document.querySelector(".popup__inputs");
const inputNameTitle = formDescription.nameTitle;
const inputDescriptionTitle = formDescription.descriptionTitle;
const popupDescription = document.querySelector(".popup");
const popupName = popupDescription.querySelector(".popup__title");
import { initialCards } from './initialCards.js';
const cardContainer = document.querySelector(".foto-grid");
const cardTemplate = document.querySelector(".foto-grid__template").content;


initialCards.forEach(el => { 
cardContainer.append(addCard(el)); 
});


function addCard(dataCard){
  const card = cardTemplate.querySelector('.foto-grid__card').cloneNode(true);
  const cardLink = card.querySelector(".foto-grid__item");
  cardLink.src=dataCard.link
  const cardName = card.querySelector(".foto-grid__name-title");
  cardName.textContent=dataCard.name;
  return card;
}

function openProfilePopup() {
  inputNameTitle.value = nameTitle.textContent;
  inputDescriptionTitle.value = descriptionTitle.textContent;
  popupDescription.classList.add("popup_opened");
  popupName.textContent='Редактировать профиль'
}

function openAddCardPopup() {
  inputNameTitle.value = "Название";
  inputDescriptionTitle.value = "Ссылка на картинку";
  popupDescription.classList.add("popup_opened");
  popupName.textContent='Новое место'
}

function closePopup(){
popupDescription.classList.remove("popup_opened");
formDescription.reset();
}

function handleFormProfileSubmit(evt) {
  nameTitle.textContent = inputNameTitle.value;
  descriptionTitle.textContent = inputDescriptionTitle.value;
  closePopup();
}

function handleFormAddCardSubmit(evt) {
  const newCardData = {
    name:inputNameTitle.value,
    link:inputDescriptionTitle.value
  }
  cardContainer.append(addCard(newCardData));
  closePopup();
}



changeDescriptionBtn.addEventListener("click", openProfilePopup);
addCardBtn.addEventListener("click", openAddCardPopup);
closePopupBtn.addEventListener("click", closePopup);
formDescription.addEventListener("submit", (evt)=>{
  evt.preventDefault();
if(evt.target.previousElementSibling.textContent==='Новое место'){
  handleFormAddCardSubmit()
} else{
  handleFormProfileSubmit()
}
});
