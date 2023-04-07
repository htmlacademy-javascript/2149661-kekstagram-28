import './thumbnails.js';
import {isEscapeKey, isEnterKey} from './utils.js';
import {createFullPhoto} from './full-photo.js';

const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('#picture-cancel');
const userModalOpenElement = document.querySelector('.pictures');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};


userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    openModal(evt);
  }
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeModal();
  }
});


function openModal () {
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onModalEscKeydown);
  userModalCloseElement.addEventListener('click', closeModal);
}

function closeModal () {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscKeydown);
  document.removeEventListener('click', closeModal);
}

function enableModal(value) {
  if (value) {
    userModalOpenElement.addEventListener('click', openModal);
  }
}

export {enableModal};
