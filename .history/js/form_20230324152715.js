const fileField = document.querySelector('#upload-file');
const photoEditContainer = document.querySelector('.img-upload__overlay');
const canselButton = document.querySelector('upload-cancel');

fileField.addEventListener('change', () => {
  photoEditContainer.classList.remove('hidden');
});

