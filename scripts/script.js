const nameTitle = document.querySelector(".lead__title");
const descriptionTitle = document.querySelector(".lead__subtitle");
const changeDescriptionBtn = document.querySelector(".lead__pencil");
const addCardBtn = document.querySelector(".lead__button");
const closePopupBtn = document.querySelector(".popup__close");
const formDescription = document.querySelector(".popup__inputs");
const inputNameTitle = formDescription.nameTitle;
const inputDescriptionTitle = formDescription.descriptionTitle;
const popupDescription = document.querySelector(".popup");

function openPopup() {
  inputNameTitle.value = nameTitle.textContent;
  inputDescriptionTitle.value = descriptionTitle.textContent;
  popupDescription.classList.add("popup_opened");
}

function closePopup(){
popupDescription.classList.remove("popup_opened");
formDescription.reset();
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameTitle.textContent = inputNameTitle.value;
  descriptionTitle.textContent = inputDescriptionTitle.value;
  closePopup();
}



changeDescriptionBtn.addEventListener("click", openPopup);
closePopupBtn.addEventListener("click", closePopup);
formDescription.addEventListener("submit", handleFormSubmit);
