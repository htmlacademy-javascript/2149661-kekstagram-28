import './thumbnails.js';

const fullPhoto = document.querySelector('.big-picture__img > img');
const thumbnail = document.querySelector('#picture').content.querySelector('.picture__img').getAttribute('src');

const createFullPhoto = () => {
  const photoElement = thumbnail.cloneNode(true);
console.log(fullPhoto.src);
console.log(photoElement);
  //fullPhoto.src = thumbnail.src;
};

// const createFullPhoto = (({url, comments, likes}) => {
//   fullPhoto.querySelector('.picture__img').src = url;
//   fullPhoto.querySelector('.picture__comments').textContent = comments.length;
//   fullPhoto.querySelector('.picture__likes').textContent = likes;
//   return fullPhoto;
// });

export {createFullPhoto};

/* const createThumbnail = (({url, comments, likes}) => {
  fullPhoto.src = url;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  return photoElement;
});

<img class="picture__img" src="photos/1.jpg" width="182" height="182" alt="Случайная фотография"></img> */
