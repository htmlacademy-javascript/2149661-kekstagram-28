import {isEscapeKey} from './utils.js';
import {resetScale, initScaleControls} from './scale.js';
import {resetEffects} from './effects.js';

const ERROR_HASHTAG_TEXT = {
  errorDefault: 'GOT ERROR',
  errorCount:'Ошибка количества ХэшТегов. Максимальное число ХэшТегов должно быть не больше 5',
  errorUniqueness: 'Ошибка уникальности ХэшТегов. Каждый #ХэшТег должен быть уникален',
  errorValidSymbols: 'Хештег должен начинаться с \'#\', не иметь пробелов и иметь хотябы один символ после \'#\' ',
};
const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const sucessFormTemplate = document.querySelector('#success').content;
const errorFormTemplate = document.querySelector('#error').content;
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const formModalContainer = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const submitButton = document.querySelector('#upload-submit');
const form = document.querySelector('#upload-select-image');
const fileChooser = document.querySelector('.img-upload__start input[type=file]');
const preview = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});

const addBodyFixedClass = () => {
  document.body.classList.add('modal-open');
};

const deleteBodyFixedClass = () => {
  document.body.classList.remove('modal-open');
};

const disableSendButton = () => {
  submitButton.setAttribute('disabled', true);
};

const enableSendButton = () => {
  submitButton.removeAttribute('disabled', true);
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
  errorTextClass: 'img-upload__field-wrapper--error',
});

const closeMessage = () => {
  const successMessage = document.querySelector('.success');
  const errorMessage = document.querySelector('.error');
  if (successMessage) {
    successMessage.remove();
    deleteBodyFixedClass();
  }
  if (errorMessage) {
    errorMessage.remove();
  }
};

const onClickEmptyAreaMessage = (evt) => {
  if (!evt.target.closest('.success__inner') || !evt.target.closest('error__inner')){
    closeMessage();
    document.body.removeEventListener('click', onClickEmptyAreaMessage);
  }
};

const modalMessageHandlers = () => {
  document.body.addEventListener('click', onClickEmptyAreaMessage);
  addBodyFixedClass();
};

const showSuccessMessage = () => {
  const messageTemplate = sucessFormTemplate.cloneNode(true);
  document.body.append(messageTemplate);
  const sucessButton = document.querySelector('.success__button');
  sucessButton.addEventListener('click', closeMessage);
  modalMessageHandlers();
};


const showErrorMesaage = () => {
  const messageTemplate = errorFormTemplate.cloneNode(true);
  document.body.append(messageTemplate);
  document.body.addEventListener('click', onClickEmptyAreaMessage);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closeMessage);
  modalMessageHandlers();
};

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      disableSendButton();
      await cb(new FormData(form));
      enableSendButton();
    }
  });
};

const closeForm = () => {
  formModalContainer.classList.add('hidden');
  form.reset();
  resetScale();
  initScaleControls(false);
  resetEffects();
  cancelButton.removeEventListener('click', closeForm);
  deleteBodyFixedClass();
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
    closeMessage();
    document.removeEventListener('keydown', onModalEscKeydown);
    deleteBodyFixedClass();
  }
};

const openForm = () => {
  formModalContainer.classList.remove('hidden');
  cancelButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', onModalEscKeydown);
  cancelEscFunction(hashtagField);
  cancelEscFunction(commentField);
  initScaleControls(true);
  addBodyFixedClass();
};

const parseHashTag = (value) => value.trim().split(' ').filter((hashTag) => hashTag.trim().length);

const hasValidCount = (hashTags) => hashTags.length <= MAX_HASHTAG_COUNT;

const isValidHashTag = (hashTag) => VALID_SYMBOLS.test(hashTag);

const hasUnicueHashTags = (hashTags) => {
  const toLowerCaseHashTags = hashTags.map((hashTag) => hashTag.toLowerCase());
  return toLowerCaseHashTags.length === new Set(toLowerCaseHashTags).size;
};

const validateErrorCount = (value) => {
  const hashTags = parseHashTag(value);
  switch (false) {
    case hasValidCount(hashTags):
      return false;
    default:
      return true;
  }
};

const validateSymbols = (value) => {
  const hashTags = parseHashTag(value);
  switch (false) {
    case hashTags.every(isValidHashTag):
      return false;
    default:
      return true;
  }
};

const validateUnicue = (value) => {
  const hashTags = parseHashTag(value);
  switch (false) {
    case hasUnicueHashTags(hashTags):
      return false;
    default:
      return true;
  }
};

pristine.addValidator(
  hashtagField,
  validateErrorCount,
  ERROR_HASHTAG_TEXT.errorCount,
);

pristine.addValidator(
  hashtagField,
  validateSymbols,
  ERROR_HASHTAG_TEXT.errorValidSymbols
);

pristine.addValidator(
  hashtagField,
  validateUnicue,
  ERROR_HASHTAG_TEXT.errorUniqueness,
);

export {fileField, openForm, closeForm, setOnFormSubmit, showErrorMesaage, showSuccessMessage};
