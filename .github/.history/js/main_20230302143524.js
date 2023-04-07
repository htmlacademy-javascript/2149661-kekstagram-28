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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const createComment = () => ({
  id: getRandomInteger(1,25),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomInteger(0, COMMENTS.length - 1),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const createPhoto = () => ({
  id:  createIdGenerator(),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes:getRandomInteger (15, 200),
  comments:Array.from({length: getRandomInteger(0, COMMENTS.length - 1)}, createComment)
});

const photoArchive = Array.from({length: 25}, createPhoto);

console.log(photoArchive);
