const PICTURES_COUNT = 10;

const Sort = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISSCUSSED: 'filter-discussed',
};

const sortBar = document.querySelector('.img-filters');
let currentSortType = Sort.DEFAULT;
let pictures = [];

const onFilterClick = (cb) => {
  sortBar.addEventListener('click', (evt) => {
    if (!evt.target.closest('img-filters__button')) {
      return;
    }

    const chosenSort = evt.target;
    if (chosenSort.id === currentSortType) {
      return;
    }

    sortBar.querySelector('img-filters__button--active').classList.remove('img-filters__button--active');
    chosenSort.classList.add('img-filters__button--active');
    currentSortType = chosenSort.id;
    cb(getSortedPictures());
  });

};

const sortInit = (data, cb) => {
  sortBar.classList.remove('img-filters--inactive');
  pictures = [...data];
  onFilterClick(cb);
};

export {sortInit};
// сортировка
// По умолчанию — фотографии в изначальном порядке с сервера.
// Случайные — 10 случайных, не повторяющихся фотографий.
// Обсуждаемые — фотографии, отсортированные в порядке убывания количества комментариев.
