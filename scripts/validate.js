
const form = document.querySelector('.popup__inputs');


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}_type_error`);
    inputElement.classList.add('popup__input-text_type_error');
    errorElement.textContent = errorMessage;
    // errorElement.classList.add('form__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}_type_error`);
    inputElement.classList.remove('popup__input-text_type_error');
    // errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  }; 

  const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement,inputElement,inputElement.validationMessage);
    } else {
      hideInputError(formElement,inputElement);
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input-text'));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        console.log(inputElement.maxlength)
        isValid(formElement, inputElement)
      });
    });
  }; 

  setEventListeners(form);