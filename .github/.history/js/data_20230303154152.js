import {getRandomInteger, createRandomIdFromRangeGenerator} from './utils.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Баранкин',
  'Плюшкин',
  'Магомед',
  'Пьеро',
  'Герасим',
  'Пабло',
  'Антонио',
  'Людвик',
  'Фёдор',
  'Гиви',
  'Лолита',
  'Бенедикт',
  'Кшиштоф',
  'Всевлад',
  'Сафрон',
  'Ыгорь',
  'Казамбек',
];

const DESCRIPTION = [
  'Радость',
  'Гадость',
  'Собственно я',
  'Фоточка такая',
  'Фоточка сякая',
  'Дело было вечером',
  'Скучно',
  'Весело',
  'Просто',
  'Просто так',
  'Ну и вот что',
  'Занят',
  'Ищу',
  'На прогулке',
  'В поездке',
  'За домом',
  'В парке',
  'У друзей',
  'Думы',
  'Смотрите что тут',
  'Просто воссторг',
  'Это можно есть?',
  'Сегодня утром',
  'Сегодня днем',
  'Оставлю на завтра',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getPhotoId = createRandomIdFromRangeGenerator(1, 25);
const getCommentId = createRandomIdFromRangeGenerator(0, (COMMENTS.length - 1) * 25);

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const createPhoto = () => ({
  id: getPhotoId(),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes:getRandomInteger (15, 200),
  comments:Array.from({length: getRandomInteger(0, COMMENTS.length - 1)}, createComment)
});

const photoArchive = Array.from({length: 25}, createPhoto);
