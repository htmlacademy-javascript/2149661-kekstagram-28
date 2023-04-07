import './thumbnails.js';
import {isEscapeKey, isEnterKey} from './utils.js';
import {createFullPhoto} from './full-photo.js';


const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('#picture-cancel');
const userModalOpenElement = document.querySelector('.pictures');
const commentsCount = document.querySelector('.social__comment-count');
const loadMoreComments = document.querySelector('.comments-loader');
// const fixedBodyScroll = document.body.classList.add('modal-open');


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

userModalOpenElement.addEventListener('click', (evt) => {
  openModal(evt);
});

function openModal (evt) {
  const element = evt.target.closest('.picture__img');
  createFullPhoto(element);
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onModalEscKeydown);
  userModalCloseElement.addEventListener('click', closeModal);
  commentsCount.classList.add('hidden');
  loadMoreComments.classList.add('hidden');
  document.body.classList.add('modal-open');
}

function closeModal () {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscKeydown);
  document.removeEventListener('click', closeModal);
  document.body.classList.remove('modal-open');
}

const openMotal = (value) => {
  if (value) {
    openModal(evt);
    closeModal();
  }
};
