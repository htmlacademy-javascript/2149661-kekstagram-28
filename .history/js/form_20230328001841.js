import {isEscapeKey} from './utils.js';
import {resetScale, initScaleControls} from './scale.js';
import {resetEffects} from './effects.js';

const fileField = document.querySelector('#upload-file');
// const hashtagField = document.querySelector('.text__hashtags');
// const commentField = document.querySelector('.text__description');
// const formModalContainer = document.querySelector('.img-upload__overlay');
// const cancelButton = document.querySelector('#upload-cancel');
// const submitButton = document.querySelector('#upload-submit');
// const form = document.querySelector('#upload-select-image');
// const MAX_HASHTAG_COUNT = 5;
// const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

// const ERROR_HASHTAG_TEXT = {
//   errorDefault: 'GOT ERROR',
//   errorCount:'Ошибка количества ХэшТегов. Максимальное число ХэшТегов должно быть не больше 5',
//   errorUniqueness: 'Ошибка уникальности ХэшТегов',
//   errorValidSymbols: 'Хештег должен начинаться с \'#\' и иметь хотябы один символ после \'#\' ',
// };

// const cancelEscFunction = (element) => {
//   if (isEscapeKey) {
//     element.addEventListener('keydown', (evt) => {
//       evt.stopPropagation();
//     });
//   }
// };

// const pristine = new Pristine(form, {
//   classTo: 'img-upload__field-wrapper',
//   errorTextParent: 'img-upload__field-wrapper',
//   errorTextClass: 'img-upload__field-wrapper--error',
// });


// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const isValid = pristine.validate();
//   if (isValid) {
//     form.submit();
//     submitButton.setAttribute('disabled', true);
//   }
// });

// const closeForm = () => {
//   formModalContainer.classList.add('hidden');
//   form.reset();
//   resetScale();
//   initScaleControls(false);
//   resetEffects();
//   cancelButton.removeEventListener('click', closeForm);
// };

// const onModalEscKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeForm();
//     document.removeEventListener('keydown', onModalEscKeydown);
//   }
// };

// const openForm = () => {
//   formModalContainer.classList.remove('hidden');
//   cancelButton.addEventListener('click', closeForm);
//   document.addEventListener('keydown', onModalEscKeydown);
//   cancelEscFunction(hashtagField);
//   cancelEscFunction(commentField);
//   initScaleControls(true);
// };

// const parseHashTag = (value) => value.trim().split(' ').filter((hashTag) => hashTag.trim().length);

// const hasValidCount = (hashTags) => hashTags.length <= MAX_HASHTAG_COUNT;

// const isValidHashTag = (hashTag) => VALID_SYMBOLS.test(hashTag);

// const hasUnicueHashTags = (hashTags) => {
//   const toLowerCaseHashTags = hashTags.map((hashTag) => hashTag.toLowerCase());
//   return toLowerCaseHashTags.length === new Set(toLowerCaseHashTags).size;
// };

// const validateErrorCount = (value) => {
//   const hashTags = parseHashTag(value);
//   switch (false) {
//     case hasValidCount(hashTags):
//       return false;
//     default:
//       return true;
//   }
// };

// const validateSymbols = (value) => {
//   const hashTags = parseHashTag(value);
//   switch (false) {
//     case hashTags.every(isValidHashTag):
//       return false;
//     default:
//       return true;
//   }
// };

// const validateUnicue = (value) => {
//   const hashTags = parseHashTag(value);
//   switch (false) {
//     case hasUnicueHashTags(hashTags):
//       return false;
//     default:
//       return true;
//   }
// };

// pristine.addValidator(
//   hashtagField,
//   validateErrorCount,
//   ERROR_HASHTAG_TEXT.errorCount,
// );

// pristine.addValidator(
//   hashtagField,
//   validateSymbols,
//   ERROR_HASHTAG_TEXT.errorValidSymbols
// );

// pristine.addValidator(
//   hashtagField,
//   validateUnicue,
//   ERROR_HASHTAG_TEXT.errorUniqueness,
// );

export {fileField, openForm};
