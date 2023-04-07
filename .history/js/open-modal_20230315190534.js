import './thumbnails.js';
import {isEscapeKey} from './utils.js';
import {createFullPhoto} from './full-photo';

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
    createFullPhoto();
  }
}

function closeModal () {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscKeydown);
  document.removeEventListener('keydown', onModalEscKeydown);
}

export {openModal, closeModal};
