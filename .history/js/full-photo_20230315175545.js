import './thumbnails.js';

const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('#picture-cancel');
const userModalOpenElement = document.querySelector('.pictures');

function onClickPitueresList (evt) {
  if (evt.target.matches('.picture__img')) {
    userModalElement.classList.remove('hidden');
  }
}

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});

userModalOpenElement.addEventListener('click', onClickPitueresList);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    userModalElement.classList.add('hidden');
  }
});
