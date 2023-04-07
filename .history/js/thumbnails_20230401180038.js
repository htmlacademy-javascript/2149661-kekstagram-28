const pictureContainer = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content;
const thumbnailContainer = pictureContainer.querySelector('.picture');

const createThumbnail = (({id, url, comments, likes}) => {
  const photoElement = photosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').dataset.thumbnailId = id;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  return photoElement;
});

let commentsData = [];

const renderThumbnails = (pictures) => {
  thumbnailContainer.forEach((element) => element.remove());
  const picturesFrament = document.createDocumentFragment();
  pictures.slice().forEach((picture) => {
    const thumbmil = createThumbnail(picture);
    picturesFrament.append(thumbmil);
    commentsData = pictures;
  });
  pictureContainer.append(picturesFrament);
};

export {renderThumbnails, commentsData};

