const pictureContainer = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content;


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
  const picturesContainer = pictureContainer.querySelectorAll('.picture');
  picturesContainer.forEach((element) => element.remove());
  const picturesFrament = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    picturesFrament.append(thumbnail);
  });
  commentsData = pictures;
  pictureContainer.append(picturesFrament);
};

export {renderThumbnails, commentsData};

