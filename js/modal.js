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

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeModal();
  }
});

const openModalListeners = () => {
  userModalOpenElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      evt.preventDefault();
      openModal(evt);
    }
  });
  userModalOpenElement.addEventListener('click', (evt) => {
    openModal(evt);
  });
};

function openModal (evt) {
  const element = evt.target.closest('.picture__img');
  if (!element) {
    return;
  }
  createFullPhoto(element);
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onModalEscKeydown);
  userModalCloseElement.addEventListener('click', closeModal);
  document.body.classList.add('modal-open');
}

function closeModal () {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscKeydown);
  userModalCloseElement.removeEventListener('click', closeModal);
  document.body.classList.remove('modal-open');
}

export {openModalListeners};
