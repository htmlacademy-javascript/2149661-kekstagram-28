const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('#picture-cancel');
const userModalOpenElement = document.querySelector('#test');

userModalOpenElement.addEventListener('click', () => {
  userModalElement.classList.remove('hidden');
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});

