const pictureContainer = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content;

const createThumbnail = (({url, comments, likes}) => {
  const photoElement = photosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  return photoElement;
});

//pictures.append(picturesFrament);

const renderThumbnails = (pictures) => {
  const picturesFrament = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    picturesFrament.append(thumbnail);
  });
  pictureContainer.append(picturesFrament);
};

export {renderThumbnails};
