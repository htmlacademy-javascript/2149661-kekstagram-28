const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;

const scaleUpButton = document.querySelector('.scale__control--smaller');
const scaleDownButton = document.querySelector('.scale__control--bigger');
const scaleValueInpit = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

const scaleImage = () => {};
const resetScale = () => {
  scaleImage(DEFAULT_SCALE);
  console.log('is resetScale');
};

export {resetScale};