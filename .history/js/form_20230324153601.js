import {isEscapeKey, isEnterKey} from './utils.js';

const fileField = document.querySelector('#upload-file');
const photoEditContainer = document.querySelector('.img-upload__overlay');
const canselButton = document.querySelector('#upload-cancel');

// const onModalEscKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeModal();
//   }
// };

const closeForm = () => {
  photoEditContainer.classList.remove('hidden');
  canselButton.removeEventListener('click', closeForm);
};

const openForm = () => {
  photoEditContainer.classList.remove('hidden');
  canselButton.addEventListener('click', closeForm);
};

// fileField.addEventListener('change', () => {
//   photoEditContainer.classList.remove('hidden');
// });

// canselButton.addEventListener ('click', () => {
//   photoEditContainer.classList.add('hidden');
// });

fileField.addEventListener('change', openForm);
