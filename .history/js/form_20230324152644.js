const fileField = document.querySelector('#upload-file');
const photoEditContainer = document.querySelector('.img-upload__overlay');

fileField.addEventListener('change', () => {
  photoEditContainer.classList.remove('hidden');
});
upload-cancel
