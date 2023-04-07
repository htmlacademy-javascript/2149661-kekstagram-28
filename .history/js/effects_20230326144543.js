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
const DEFAULT_EFFECT = EFFECTS[0];
let selectedEffect = DEFAULT_EFFECT;

const effectsBar = document.querySelector('.effects');
const effectsSliderContainer = document.querySelector('.img-upload__effect-level');
const effectsSlider = document.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview img');




const showSlider = () => {
  effectsSliderContainer.classList.remove('hidden');
};
const hideSlider = () => {
  effectsSliderContainer.classList.add('hidden');
};

const resetEffects = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(rangeSlider,
  {
    range: {
      min: DEFAULT_EFFECT.min,
      max: DEFAULT_EFFECT.max,
    },
    start: DEFAULT_EFFECT.max,
    step: DEFAULT_EFFECT.step,
    connect: 'lower',
  });
hideSlider();

// effectsButton.addEventListener('change', )

// const showSlider = () => {};
export {resetEffects};
