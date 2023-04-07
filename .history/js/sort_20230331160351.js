const PICTURES_COUNT = 10;

const Sort = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISSCUSSED: 'filter-discussed',
};

const sortBar = document.querySelector('.img-filters');
let currentSortType = Sort.DEFAULT;
let pictures = [];

const onFilterClick = () => {

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