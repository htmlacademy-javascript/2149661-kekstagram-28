import {getRandomInteger} from './utils.js';

const PICTURES_COUNT = 10;

const Sort = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISSCUSSED: 'filter-discussed',
};

const sortBar = document.querySelector('.img-filters');
let currentSortType = Sort.DEFAULT;
let pictures = [];

const sortByRandom = () => /* Math.random() - 0.5; */ {
  getRandomInteger(0, pictures.length);
};

const sortByDiscussed = (pictureOne, pictureTwo) => pictureTwo.comments.length - pictureOne.comments.length;

const getSortedPictures = () => {

  switch (currentSortType) {
    case Sort.RANDOM:
      return [...pictures].sort(sortByRandom).slice(0, PICTURES_COUNT);
    case Sort.DISSCUSSED:
      return [...pictures].sort(sortByDiscussed);
    default:
      return [...pictures];
  }
};

const onFilterClick = (callback) => {
  sortBar.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const chosenSort = evt.target;
    if (chosenSort.id === currentSortType) {
      return;
    }
    sortBar.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    chosenSort.classList.add('img-filters__button--active');
    currentSortType = chosenSort.id;
    callback(getSortedPictures());
  });

};

const sortInit = (data, callback) => {
  sortBar.classList.remove('img-filters--inactive');
  pictures = [...data];
  onFilterClick(callback);
};

export {sortInit, getSortedPictures};
