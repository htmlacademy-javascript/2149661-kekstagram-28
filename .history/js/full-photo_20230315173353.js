import './thumbnails.js';

const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('#picture-cancel');
const userModalOpenElement = document.querySelector('.pictures');

// userModalOpenElement.addEventListener('click', () => {
//   userModalElement.classList.remove('hidden');
// });

// userModalOpenElement.addEventListener('click', () => {
//   onClickPitueresList();
// });
// userModalOpenElement.addEventListener('ckick', () => {
//   userModalElement.classList.remove('hidden');
//   console.log('+');
// });

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});


function onClickPitueresList (evt) {
  console.log(evt.target.className);
  if (evt.target.matches('picture')) {
    console.log('+');
    // bigPicture.classList.remove('hidden');
  }
}

userModalOpenElement.addEventListener('click', onClickPitueresList);


