import './thumbnails.js';
import {isEscapeKey} from './utils.js';

const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('#picture-cancel');
const userModalOpenElement = document.querySelector('.pictures');

function isThumbnailClicked (evt) {
  if (evt.target.matches('.picture__img')) {
    openModal();
  }
}
function openModal (){
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userModalElement.classList.add('hidden');
    }
  });
}

function closeModal () {
  userModalCloseElement.addEventListener('click', () => {
    userModalElement.classList.add('hidden');
  });
}


userModalOpenElement.addEventListener('click', isThumbnailClicked);
userModalCloseElement.addEventListener('click', closeModal);


