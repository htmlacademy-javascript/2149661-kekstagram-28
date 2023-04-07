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
  const previousValues = [];
  // if (min > max) {
  //   arr [min, max] = [max, min];
  // }
  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('STOPed');
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return previousValues;
  };
}


const rara = createIdGenerator();

console.log(rara(1, 25));

// function CreateMock(min, max) {
//   const arr = [];
//   while (arr.length < max - min + 1) {
//     const id = getRandomInteger(min, max);
//     if(arr.some((obj) => obj.id === id)) {
//       continue;
//     }
//     const obj = {
//       id,
//       text: `some ${id}`
//     }
//     arr.push(obj);
//   }
//   return arr
// }


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
