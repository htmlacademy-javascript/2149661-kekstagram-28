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
  errorTest: 'GET_ERROR',
  errorCount:'Ошибка количества ХэшТегов. Максимальное число ХэшТегов должно быть не больше 5',
  errorUniqueness: 'Ошибка уникальности тегов',
  errorValidSymbols: 'Невалидный символ',
};

const generateErrorMessage = (message) => {
  switch (true) {
    case message === 'errorCount':
      return ERROR_HASHTAG_TEXT.errorCount;
    case message === 'errorUniqueness':
      return ERROR_HASHTAG_TEXT.errorUniqueness;
    case message === 'errorValidSymbols':
      return ERROR_HASHTAG_TEXT.errorValidSymbols;
    default:
      return false;
  }
};

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


const hasValidCount = (hashTags) => {
  if (hashTags.length <= MAX_HASHTAG_COUNT) {
    return true;
  }
};



/* const hasUnicueHashTags = (hashTags) => {
  const toLowerCaseHashTags = () => hashTags.map((hashTag) => hashTag.toLowerCase());
  return toLowerCaseHashTags.length === new Set(toLowerCaseHashTags).size;
}; */

const isValidHashTag = (HashTag) => {
  hashTagValidate();
  VALID_SYMBOLS.test(HashTag);
};

// const hashTagValidate = (value) => {
//   const hashTags = value.trim().split(' ').filter((hashTag) => hashTag.trim().length);
//   // return hasValidCount(hashTags) && hasUnicueHashTags(hashTags) && hashTags.every(isValidHashTag);
//   return hashTags;
// };
const errorMessage = (message) => {
  switch (errorMessage) {
    case (!hasValidCount(message)):
      message = ERROR_HASHTAG_TEXT.errorCount;
      break;
    // case (!hasUnicueHashTags(hashTags)):
    //   errorMessage = ERROR_HASHTAG_TEXT.errorUniqueness;
    //   break;
    case (!isValidHashTag(message)):
      message = ERROR_HASHTAG_TEXT.errorValidSymbols;
      break;
    default:
      return true;
  }
  return message;
};


const hashTagValidate = (value) => {
  const hashTags = value.trim().split(' ').filter((hashTag) => hashTag.trim().length);
  // console.log(hashTags);
  // return hasValidCount(hashTags) && hasUnicueHashTags(hashTags) && hashTags.every(isValidHashTag);
  return hashTags;
};

pristine.addValidator(
  hashtagField,
  hashTagValidate,
  errorMessage,
);

/* pristine.addValidator(
  hashtagField,
  hasValidCount,
  ERROR_HASHTAG_TEXT.errorCount
); */

/* pristine.addValidator(
  hashtagField,
  hasUnicueHashTags,
  ERROR_HASHTAG_TEXT.errorUniqueness
);
 */

// pristine.addValidator(
//   hashtagField,
//   isValidHashTag,
//   ERROR_HASHTAG_TEXT.errorValidSymbols
// );

export {fileField, openForm};
