const fileField = document.querySelector('#upload-file');
const photoEditContainer = document.querySelector('.img-upload__overlay');

const openPhotoEditor = () => {
  photoEditContainer.classList.remove('hidden');
};

fileField.addEventListener('click', openPhotoEditor());
