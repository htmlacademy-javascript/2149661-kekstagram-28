import {getPictures} from './data.js';

const pictureContainer = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content;

const createThumbnail = getPictures();



createThumbnail.forEach(({url, comments, likes}) => {
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
    const thumbmil = createThumbnail(picture);
    picturesFrament.append(thumbmil);
  });
  pictureContainer.append(picturesFrament);
};

export {renderThumbnails};
