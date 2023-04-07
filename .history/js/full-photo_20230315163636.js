const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('#test');
const userModalCloseElement = userModalElement.querySelector('#picture-cancel');

userModalOpenElement.addEventListener('click', () => {
  userModalElement.classList.remove('hidden');
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});



// picturesContainer.addEventListener('ckick', onClickPitueresList);
