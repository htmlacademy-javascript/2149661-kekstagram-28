const pictureModalOpenElement = document.querySelector('.big-picture');
// const likes = document.querySelector('.likes-count');
// const comments = document.querySelector('.comments-count');
// const commentBox = document.querySelector('.social__comments');
// const description = document.querySelector('.social__caption');
// const pictureContainer = document.querySelector('.picture');
const picturesContainer = document.querySelector('.picture');
const close = document.querySelector('.cancel');


picturesContainer.addEventListener('ckick', onClickPitueresList);

function onClickPitueresList (evt) {
  if (evt.target.matches('.picture')) {
    console.log('+');
    // bigPicture.classList.remove('hidden');
  }
}



