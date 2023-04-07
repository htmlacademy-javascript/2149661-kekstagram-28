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
    openModal();
  }
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeModal(evt);
  }
});


function openModal (evt) {
  // if (evt.target.matches('.picture__img')) {
  //   userModalElement.classList.remove('hidden');
  //   document.addEventListener('keydown', onModalEscKeydown);
  //   createFullPhoto(evt.target.closest('.picture'));
  // }
  console.log(evt.target);
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
