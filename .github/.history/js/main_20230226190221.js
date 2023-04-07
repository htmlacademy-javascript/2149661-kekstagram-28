/*
Создать массив из 25 сгенерированных объектов.Каждый объект массива — описание фотографии, опубликованной пользователем.

*/

/*Структура каждого объекта должна быть следующей:
- id – число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
- url – строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
- description – строка — описание фотографии. Описание придумайте самостоятельно.
- likes – число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
- comments – массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом.
*/
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

const randomId = getRandomInteger(1, 25);
const randomPhotoNumber = getRandomInteger(1, 25);
const randomDescriptionNumber = getRandomInteger (0, 25);
const randomLikesCount = getRandomInteger (15, 200);
const randomCommentNumber = getRandomInteger (0, COMMENTS.length - 1);
//const randomComments = Array.from({length: getRandomInteger(1, 6)}, createPhoto.comments);

// const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
//const commentsArray = Array.from({length: getRandomInteger(1, 6)}, COMMENTS[randomCommentNumber]);

const createComment = () => ({
  id: randomId,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: COMMENTS[randomCommentNumber],
});

const commentsArray = Array.from({length: getRandomInteger(1, 6)},createComment);

const createPhoto = () => ({
  id: randomId,
  url: `photos/${randomPhotoNumber}.jpg`,
  description: DESCRIPTION[randomDescriptionNumber],
  likes:randomLikesCount,
  comments:commentsArray
});

console.log(
  createPhoto()
);
console.log(
  commentsArray()
);

/*Структура каждого коммента
- id — любое число. Идентификаторы не должны повторяться.
- avatar – это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.
Аватарки подготовлены в директории img.
- message – Для формирования текста комментария

Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!


- name – Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами.

*/


/* const comments = []; */

/*
const resultArray = []; */
