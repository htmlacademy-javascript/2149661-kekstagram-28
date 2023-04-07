import {isEscapeKey} from './utils.js';

const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const formModalContainer = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('#upload-select-image');


// hashtagField.addEventListener('keydown', (evt) => {
//   if (isEscapeKey) {
//     evt.stopPropagation();
//   }
// });

// commentField.addEventListener('keydown', (evt) => {
//     evt.stopPropagation();
// });

const test = (evt) => {
  if (isEscapeKey) {
    hashtagField.addEventListener('keydown', () => {
      evt.stopPropagation();
    });
    commentField.addEventListener('keydown', () => {
      evt.stopPropagation();
    });
  }
};

// const pristine = new Pristine(form);
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  erroTextClass: 'img-upload__field-wrapper--error',
});



form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Can send');
  } else {
    console.log('Can\'t send');
  }
});
// new Pristine(form);
// console.log(Pristine);

const closeForm = () => {
  formModalContainer.classList.add('hidden');
  form.reset();
  cancelButton.removeEventListener('click', closeForm);
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
    document.removeEventListener('keydown', onModalEscKeydown);
    test(evt);
  }
};

const openForm = () => {
  formModalContainer.classList.remove('hidden');
  cancelButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', onModalEscKeydown);

};




export {fileField, openForm};
