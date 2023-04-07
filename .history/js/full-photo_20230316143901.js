import './thumbnails.js';


const fullPhotoContainer = document.querySelector('.big-picture__preview');
const fullPhoto = fullPhotoContainer.querySelector('.big-picture__img');


const createFullPhoto = (element) => {
  const test = element.cloneNode(true);
  fullPhoto.src = test.querySelector('img').src;
  console.log('1' + element);

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

// const createFullPhoto = (({url, comments, likes}) => {
//   fullPhoto.querySelector('.picture__img').src = url;
//   fullPhoto.querySelector('.picture__comments').textContent = comments.length;
//   fullPhoto.querySelector('.picture__likes').textContent = likes;
//   return fullPhoto;
// });

export {createFullPhoto};
