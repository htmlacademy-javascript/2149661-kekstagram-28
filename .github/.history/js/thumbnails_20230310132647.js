import {photoArchive} from './data.js';

const pictures = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content;

const similarPhotos = photoArchive(25);

const similarPhoto = document.createDocumentFragment();

similarPhotos.forEach(({photo}) => {
  const photoElement = photosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__comments').innerHTML = photo.comments;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  pictures.append(photoElement);
});


// const similarListElement = pictures.querySelector('.setup-similar-list');
// const similarWizardTemplate = document.querySelector('#similar-wizard-template')
//   .content
//   .querySelector('.setup-similar-item');

//

// const similarListFragment = document.createDocumentFragment();

// randomPhotos.forEach(({name, coatColor, eyesColor}) => {
//   const wizardElement = similarWizardTemplate.cloneNode(true);
//   wizardElement.querySelector('.setup-similar-label').textContent = name;
//   wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
//   wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
//   similarListFragment.appendChild(wizardElement);
// });

// similarListElement.appendChild(similarListFragment);
