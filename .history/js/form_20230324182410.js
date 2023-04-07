import {isEscapeKey} from './utils.js';

const fileField = document.querySelector('#upload-file');
const photoEditForm = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');

const closeForm = () => {
  photoEditForm.classList.add('hidden');
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
  photoEditForm.classList.remove('hidden');
  cancelButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', onModalEscKeydown);
};




export {fileField, openForm};
