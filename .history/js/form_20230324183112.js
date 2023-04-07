import {isEscapeKey} from './utils.js';

const fileField = document.querySelector('#upload-file');
const formModalContainer = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');

const closeForm = () => {
  formModalContainer.classList.add('hidden');
  cancelButton.removeEventListener('click', closeForm);
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
    document.removeEventListener('keydown', onModalEscKeydown);
  }
};

const openForm = () => {
  formModalContainer.classList.remove('hidden');
  cancelButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', onModalEscKeydown);
};




export {fileField, openForm};
