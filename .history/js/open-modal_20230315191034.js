import './thumbnails.js';
import {isEscapeKey} from './utils.js';
// import {createFullPhoto} from './full-photo.js';

const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('#picture-cancel');
const userModalOpenElement = document.querySelector('.pictures');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal (evt) {
  if (evt.target.matches('.picture__img')) {
    userModalElement.classList.remove('hidden');
    document.addEventListener('keydown', onModalEscKeydown);
    // createFullPhoto();
  }
}

function closeModal () {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscKeydown);
  document.removeEventListener('keydown', onModalEscKeydown);
}

function enableModal(value) {
  if (value) {
    userModalOpenElement.addEventListener('click', openModal);
    userModalCloseElement.addEventListener('click', closeModal);
  }
}

export {enableModal};
