const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueInpit = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

const scaleImage = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleValueInpit.value = `${value}%`;
};

const osScaleSmallerButton = () => {
  const currentValue = parseInt(scaleValueInpit.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

scaleSmallerButton.addEventListener('click', osScaleSmallerButton);

const resetScale = () => {
  scaleImage(DEFAULT_SCALE);
  console.log('is resetScale');
};

export {resetScale};