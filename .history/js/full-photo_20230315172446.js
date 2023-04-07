import './thumbnails.js';

const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('#picture-cancel');
const userModalOpenElement = document.querySelector('.pictures');

// userModalOpenElement.addEventListener('click', () => {
//   userModalElement.classList.remove('hidden');
// });

userModalOpenElement.addEventListener('click', () => {
  console.log('+');
});
// userModalOpenElement.addEventListener('ckick', () => {
//   userModalElement.classList.remove('hidden');
//   console.log('+');
// });

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});


// function onClickPitueresList (evt) {
//   if (evt.target.matches('.picture')) {
//     console.log('+');
//     // bigPicture.classList.remove('hidden');
//   }
// }


