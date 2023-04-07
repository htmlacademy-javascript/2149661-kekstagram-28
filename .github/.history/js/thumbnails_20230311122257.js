import {photoArchive} from './data.js';

const pictures = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content;

const similarPhotos = photoArchive(count);

const picturesFrament = document.createDocumentFragment(count);

similarPhotos.forEach(({url, comments, likes}) => {
  const photoElement = photosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').innerHTML = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  picturesFrament.append(photoElement);
});

pictures.append(picturesFrament);
