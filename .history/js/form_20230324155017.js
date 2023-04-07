import {isEscapeKey} from './utils.js';

const fileField = document.querySelector('#upload-file');
const photoEditContainer = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');

const closeForm = () => {
  photoEditContainer.classList.add('hidden');
  cancelButton.removeEventListener('click', closeForm);
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

const openForm = () => {
  photoEditContainer.classList.remove('hidden');
  cancelButton.addEventListener('click', closeForm);
  onModalEscKeydown();
};

// fileField.addEventListener('change', () => {
//   photoEditContainer.classList.remove('hidden');
// });

// canselButton.addEventListener ('click', () => {
//   photoEditContainer.classList.add('hidden');
// });

fileField.addEventListener('change', openForm);
