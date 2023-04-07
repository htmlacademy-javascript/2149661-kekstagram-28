import './thumbnails.js';
import {picturesData} from './main.js';


const fullPhotoContainer = document.querySelector('.big-picture__preview');
const fullPhoto = fullPhotoContainer.querySelector('.big-picture__img > img');
const likesCount = fullPhotoContainer.querySelector('.likes-count');
const photoDescription = fullPhotoContainer.querySelector('.social__caption');
const commentsCount = fullPhotoContainer.querySelector('.comments-count');
const comments = fullPhotoContainer.querySelector('.social__comments');


const createFullPhoto = (element) => {
  const [picture] = picturesData.filter((pic) => pic.url === element.getAttribute('src'));
  fullPhoto.setAttribute('src', picture.url);
  photoDescription.textContent = picture.description;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  comments.innerHTML = '';


  console.log(picture);
};


export {createFullPhoto};
