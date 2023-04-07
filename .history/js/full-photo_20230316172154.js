import './thumbnails.js';
import {picturesData} from './main.js';


const fullPhotoContainer = document.querySelector('.big-picture__preview');
const fullPhoto = fullPhotoContainer.querySelector('.big-picture__img > img');
const likesCount = fullPhotoContainer.querySelector('.likes-count');
const commentsCount = fullPhotoContainer.querySelector('.comments-count');

const createFullPhoto = (element) => {
  const [picture] = picturesData.filter((pic) => pic.url === element.getAttribute('src'));
  fullPhoto.setAttribute('src', picture.url);
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  // const test = element.cloneNode(true);
  // fullPhoto.src = test.querySelector('img').src;
  // console.log(element.getAttribute('src'));
  console.log(picture);
  // console.log(picturesData);
  // likes = element.querySelector('.picture__likes').textContent;
  // fullPhoto.src = element.querySelector('.picture__img').src;
  // likesCount;
  // photoDescription.querySelector('.likes-count').textContent = element.querySelector('.picture__likes').textContent;
  // fullPhoto.src = element.src;

  // console.log('element likesS ' + likes);
  // console.log('result container ' + fullPhotoContainer);
  // console.log(fullPhotoContainer);
  // console.log('result likes ' + likes);
  // console.log('result img ' + fullPhoto);
  // console.log(fullPhoto);
};


export {createFullPhoto};
