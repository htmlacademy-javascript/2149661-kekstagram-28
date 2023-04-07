import {isEscapeKey} from './utils.js';

const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const formModalContainer = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('#upload-select-image');
const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const ERROR_HASHTAG_TEXT = {
  errorDefault: 'GOT ERROR',
  errorCount:'Ошибка количества ХэшТегов. Максимальное число ХэшТегов должно быть не больше 5',
  errorUniqueness: 'Ошибка уникальности тегов',
  errorValidSymbols: 'Невалидный символ',
};

let errorMessage = ERROR_HASHTAG_TEXT.errorDefault;
/* errorMessage = ERROR_HASHTAG_TEXT.errorCount;
errorMessage = ERROR_HASHTAG_TEXT.errorUniqueness;
errorMessage = ERROR_HASHTAG_TEXT.errorValidSymbols; */
// const generateErrorMessage = (message) => {
//   switch (false) {
//     case message === 'errorCount':
//       return ERROR_HASHTAG_TEXT.errorCount;
//     case message === 'errorUniqueness':
//       return ERROR_HASHTAG_TEXT.errorUniqueness;
//     case message === 'errorValidSymbols':
//       return ERROR_HASHTAG_TEXT.errorValidSymbols;
//     default:
//       return false;
//   }
// };

const cancelEscFunction = (element) => {
  if (isEscapeKey) {
    element.addEventListener('keydown', (evt) => {
      evt.stopPropagation();
    });
  }
};

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
  }
};

const openForm = () => {
  formModalContainer.classList.remove('hidden');
  cancelButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', onModalEscKeydown);
  cancelEscFunction(hashtagField);
  cancelEscFunction(commentField);
};


const hasValidCount = (hashTags) => hashTags.length <= MAX_HASHTAG_COUNT;
  // if (hashTags.length <= MAX_HASHTAG_COUNT) {
  //   return true;
  // }


const isValidHashTag = (hashTag) => VALID_SYMBOLS.test(hashTag);


const hasUnicueHashTags = (hashTags) => {
  const toLowerCaseHashTags = hashTags.map((hashTag) => hashTag.toLowerCase());
  return toLowerCaseHashTags.length === new Set(toLowerCaseHashTags).size;
  // const temp = [];
  // toLowerCaseHashTags.every((tag) => {
  //   if (temp[tag]) {
  //     console.log('false');
  //     return false;
  //   }
  //   temp[tag] = tag;
  //   console.log('true');
  //   return true;
  // });
};

const hashTagValidate = (value) => {
  const hashTags = value.trim().split(' ').filter((hashTag) => hashTag.trim().length);
  switch (false) {
    case hasValidCount(hashTags):
      errorMessage = errorMessage.errorCount;
      break;
    case hashTags.every(isValidHashTag):
      errorMessage = errorMessage.errorUniqueness;
      break;
    case hasUnicueHashTags(hashTags):
      errorMessage = errorMessage.errorValidSymbols;
      break;
    default:
      return hasValidCount(hashTags) && hashTags.every(isValidHashTag) && hasUnicueHashTags(hashTags);
  }
};

pristine.addValidator(
  hashtagField,
  hashTagValidate,
  errorMessage,
);

export {fileField, openForm};
