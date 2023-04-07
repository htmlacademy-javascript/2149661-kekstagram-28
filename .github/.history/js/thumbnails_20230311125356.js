import {getPctures} from './data.js';

const pictureContainer = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content;

const createPhoto = getPctures();



createPhoto.forEach(({url, comments, likes}) => {
  const photoElement = photosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').innerHTML = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  return photoElement;
});

//pictures.append(picturesFrament);

const renderThumbnails = (pictures) => {
  const picturesFrament = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbmil = createPhoto(picture);
    picturesFrament.append(thumbmil);
  });
};

export {renderThumbnails};
