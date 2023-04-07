const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;

const scaleUp = document.querySelector('.scale__control--smaller');
const scaleDown = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');


const resetScale = () => {
  console.log('is resetScale');
};

export {resetScale};
