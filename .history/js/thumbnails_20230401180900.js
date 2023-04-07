const pictureContainer = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content;
const picturesContainer = pictureContainer.querySelectorAll('.picture');

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
  // picturesContainer.forEach((element) => element.remove());
  console.log(picturesContainer);
  const picturesFrament = document.createDocumentFragment();
  pictures.slice().forEach((picture) => {
    const thumbmil = createThumbnail(picture);
    picturesFrament.append(thumbmil);
    commentsData = pictures;
  });
  pictureContainer.append(picturesFrament);
};

export {renderThumbnails, commentsData};

