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
const sliderRange = document.querySelector('.effect-level__slider');
const imageEffect = document.querySelector('.img-upload__preview img');

const isDefailt = () => selectedEffect === DEFAULT_EFFECT;

const showSlider = () => {
  effectsSliderContainer.classList.remove('hidden');
};
const hideSlider = () => {
  effectsSliderContainer.classList.add('hidden');
};

const updateSlider = () => {
  effectsSlider.noUiSlider.updateOptions ({
    range: {
      min: selectedEffect.min,
      max: selectedEffect.max,
    },
    start: selectedEffect.max,
    step: selectedEffect.step,
  });
  if (isDefailt()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const resetEffects = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  selectedEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageEffect.className = `img-upload__preview--${selectedEffect.name}`;
  updateSlider();
};

const onSliderUpadte = () => {
  const sliderValue = sliderRange.noUiSlider.get();
};

noUiSlider.create(effectsSlider,
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


effectsBar.addEventListener('change', onEffectsChange);
sliderRange.noUiSlider.on('update', onSliderUpadte);
// const showSlider = () => {};
export {resetEffects};
