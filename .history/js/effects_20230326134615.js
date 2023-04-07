const EFFECTS = [
  {
    name:'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name:'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name:'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name:'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name:'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name:'heat',
    style: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const effectsButton = document.querySelector('.effects__radio');
const rangeSlider = document.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview');

const resetEffects = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderRange)

// const showSlider = () => {};
export {resetEffects};
