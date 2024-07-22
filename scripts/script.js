const nameTitle = document.querySelector(".lead__title");
const descriptionTitle = document.querySelector(".lead__subtitle");
const changeDescriptionBtn = document.querySelector(".lead__pencil");
const addCardBtn = document.querySelector(".lead__button");
const closePopupBtn = document.querySelector(".popup__close");
const formDescription = document.querySelector(".popup__inputs");
const inputNameTitle = formDescription.nameTitle;
const inputDescriptionTitle = formDescription.descriptionTitle;
const popupDescription = document.querySelector(".popup");
const popupName = popupDescription.querySelector(".popup__title");


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
  evt.preventDefault();
  nameTitle.textContent = inputNameTitle.value;
  descriptionTitle.textContent = inputDescriptionTitle.value;
  closePopup();
}



changeDescriptionBtn.addEventListener("click", openProfilePopup);
addCardBtn.addEventListener("click", openAddCardPopup);
closePopupBtn.addEventListener("click", closePopup);
formDescription.addEventListener("submit", handleFormProfileSubmit);
