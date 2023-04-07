import './thumbnails.js';


const fullPhotoContainer = document.querySelector('.big-picture__preview');
const fullPhoto = fullPhotoContainer.querySelector('.big-picture__img img');
// const thumbnail = ;
let likes = fullPhotoContainer.querySelector('.likes-count');



const createFullPhoto = (element) => {
  const photoElement = similarWizardTemplate.cloneNode(true);
  likes = element.querySelector('.picture__likes').textContent;
  fullPhoto.src = element.querySelector('.picture__img').src;
  // likesCount;
  // photoDescription.querySelector('.likes-count').textContent = element.querySelector('.picture__likes').textContent;
  // fullPhoto.src = element.src;

  // console.log('element ' + element);
  // console.log('element likesS ' + likes);
  // console.log('result container ' + fullPhotoContainer);
  // console.log(fullPhotoContainer);
  console.log('result likes ' + likes);
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

/* const createThumbnail = (({url, comments, likes}) => {
  fullPhoto.src = url;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  return photoElement;
});

<img class="picture__img" src="photos/1.jpg" width="182" height="182" alt="Случайная фотография"></img> */
