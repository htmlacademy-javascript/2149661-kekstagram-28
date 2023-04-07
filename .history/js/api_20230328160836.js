const getData = () => fetch(
  'https://28.javascript.pages.academy/code-and-magick/data')
  .then((response) => response.json());

const sendData = (body) => fetch(
  'https://28.javascript.pages.academy/code-and-magick',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  })
  .catch(() => {
    throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
  });

export {getData, sendData};
