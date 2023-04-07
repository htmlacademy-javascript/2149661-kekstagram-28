const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// const createIdGenerator = () => {
//   let lastGeneratedId = 0;

//   return () => {
//     lastGeneratedId ++;
//     return lastGeneratedId;
//   };
// };

function createIdGenerator(min, max) {
  const arr = [];
  // if (min > max) {
  //   arr [min, max] = [max, min];
  // }
  return () => {
    // if (arr.length >= (max - min + 1)) {
    //   console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    //   return null;
    // }
    let currentValue = getRandomInteger(min, max);
    while (arr.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    arr.push(currentValue);
    return arr;
  };
}

// function createRandomIdFromRangeGenerator (min, max) {
//   const previousValues = [];

//   return function () {
//     let currentValue = getRandomInteger(min, max);
//     if (previousValues.length >= (max - min + 1)) {
//       console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
//       return null;
//     }
//     while (previousValues.includes(currentValue)) {
//       currentValue = getRandomInteger(min, max);
//     }
//     previousValues.push(currentValue);
//     return currentValue;
//   };
// }

// const mock = createIdGenerator(1, 30);

/*
function getRandomNumer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 */
// console.log(mock);

export {getRandomInteger, createIdGenerator};
