const userModalElement = document.querySelector('.big-picture');
// const likes = document.querySelector('.likes-count');
// const comments = document.querySelector('.comments-count');
// const commentBox = document.querySelector('.social__comments');
// const description = document.querySelector('.social__caption');
// const pictureContainer = document.querySelector('.picture');
// const picturesContainer = document.querySelector('.pictures');
const userModalCloseElement = document.querySelector('#picture-cancel');
const userModalOpenElement = document.querySelector('#test');

userModalOpenElement.addEventListener('click', () => {
  userModalElement.classList.remove('hidden');
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});

//

// const userModalElement = document.querySelector('.big-picture');
// const userModalOpenElement = document.querySelector('#test');
// const userModalCloseElement = userModalElement.querySelector('#picture-cancel');

// userModalOpenElement.addEventListener('click', () => {
//   userModalElement.classList.remove('hidden');
// });

// userModalCloseElement.addEventListener('click', () => {
//   userModalElement.classList.add('hidden');
// });



// picturesContainer.addEventListener('ckick', onClickPitueresList);

// userModalOpenElement.addEventListener('click', () => {
//   userModalElement.classList.remove('hidden');
// });
// userModalCloseElement.addEventListener('click', () => {
//   userModalElement.classList.add('hidden');
// });
