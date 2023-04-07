import './thumbnails.js';
import {openModal, closeModal} from './open-modal';

const fullPhotoContainer = document.querySelector('.big-picture__preview');
const fullPhoto = fullPhotoContainer.querySelector('.big-picture__img img');
const thumbnail =
let likes = fullPhotoContainer.querySelector('.likes-count');


function openModal (evt) {
  if (evt.target.closest('.picture')) {
    userModalElement.classList.remove('hidden');
    document.addEventListener('keydown', onModalEscKeydown);
    userModalCloseElement.addEventListener('click', closeModal);
    createFullPhoto(evt.target.closest('.picture'));
  }
}


const createFullPhoto = (element) => {
  const photoElement = similarWizardTemplate.cloneNode(true);
  likes = element.querySelector('.picture__likes').textContent;
  fullPhoto.src = element.querySelector('.picture__img').src;
  // likesCount;
  // photoDescription.querySelector('.likes-count').textContent = element.querySelector('.picture__likes').textContent;
  // fullPhoto.src = element.src;

  // console.log('element ' + element);
  // console.log('element likesS ' + likes);
  // console.log('result container ' + fullPhotoContainer);
  // console.log(fullPhotoContainer);
  console.log('result likes ' + likes);
  // console.log('result img ' + fullPhoto);
  // console.log(fullPhoto);
};

// const createFullPhoto = (({url, comments, likes}) => {
//   fullPhoto.querySelector('.picture__img').src = url;
//   fullPhoto.querySelector('.picture__comments').textContent = comments.length;
//   fullPhoto.querySelector('.picture__likes').textContent = likes;
//   return fullPhoto;
// });

export {createFullPhoto};