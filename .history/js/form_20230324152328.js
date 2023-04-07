const fileField = document.querySelector('#upload-file');
const photoEditContainer = document.querySelector('.img-upload__overlay');

fileField.addEventListener('click', () => {
  photoEditContainer.classList.remove('hidden');
});
