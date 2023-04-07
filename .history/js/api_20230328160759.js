const getData = () => fetch(
  'https://28.javascript.pages.academy/code-and-magick/data')
  .then((response) => response.json());

const sendData = (body) => {};

export {getData, sendData};
