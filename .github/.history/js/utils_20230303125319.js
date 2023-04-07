const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId ++;
    return lastGeneratedId;
  };
};

// function createIdGenerator(min, max) {
//   const arr = [];
//   if (min > max) {
//     arr [min, max] = [max, min];
//   }
//   while (arr.length < max - min) {
//     const id = getRandomInteger(min, max);
//     if(arr.some((object) => object.id === id)) {
//       continue;
//     }
//     const obj = {
//       id,
//       text: `some ${id}`
//     };
//     arr.push(obj);
//   }
//   return arr;
// }

// const mock = createIdGenerator(1, 30);

/*
function getRandomNumer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 */
// console.log(mock);

export {getRandomInteger, createIdGenerator};
