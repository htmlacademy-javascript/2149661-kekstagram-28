import {openModal} from './modal.js';

const pictureContainer = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content;

const createThumbnail = (({id, url, comments, likes}) => {
  const photoElement = photosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').dataset.thunailId = id;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  return photoElement;
});

const renderThumbnails = (pictures) => {
  const picturesFrament = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbmil = createThumbnail(picture);
    picturesFrament.append(thumbmil);
  });
  pictureContainer.append(picturesFrament);
  openModal(pictures);
};

export {renderThumbnails};
