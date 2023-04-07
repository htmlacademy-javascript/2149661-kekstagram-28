// import {isEscapeKey, isEnterKey} from './utils.js';

const fileField = document.querySelector('#upload-file');
const photoEditContainer = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');

// const onModalEscKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeModal();
//   }
// };

const closeForm = () => {
  photoEditContainer.classList.add('hidden');
  // cancelButton.removeEventListener('click', closeForm);
};

const openForm = () => {
  photoEditContainer.classList.remove('hidden');
  cancelButton.addEventListener('click', closeForm);
};

// fileField.addEventListener('change', () => {
//   photoEditContainer.classList.remove('hidden');
// });

// canselButton.addEventListener ('click', () => {
//   photoEditContainer.classList.add('hidden');
// });

fileField.addEventListener('change', openForm);
