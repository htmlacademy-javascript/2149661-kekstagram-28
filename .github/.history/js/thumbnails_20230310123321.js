import {photoArchive} from './data.js';

const pictures = document.querySelector('.pictures');
pictures.querySelector('.setup-similar').classList.remove('hidden');
const picturesTemplate = document.querySelector('#picture');
console.log(pictures);
// const similarListElement = pictures.querySelector('.setup-similar-list');
// const similarWizardTemplate = document.querySelector('#similar-wizard-template')
//   .content
//   .querySelector('.setup-similar-item');

// const randomPhotos = createPhoto();

// const similarListFragment = document.createDocumentFragment();

// randomPhotos.forEach(({name, coatColor, eyesColor}) => {
//   const wizardElement = similarWizardTemplate.cloneNode(true);
//   wizardElement.querySelector('.setup-similar-label').textContent = name;
//   wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
//   wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
//   similarListFragment.appendChild(wizardElement);
// });

// similarListElement.appendChild(similarListFragment);
