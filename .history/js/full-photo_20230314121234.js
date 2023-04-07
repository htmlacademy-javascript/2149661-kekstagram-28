const bigPicture = document.querySelector('.big-picture');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const commentBox = document.querySelector('.social__comments');
const description = document.querySelector('.social__caption');
const pictureContainer = document.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');


function openPopup(evt) {
  if (evt.target.nodeName === picturesContainer) {
    bigPicture.classList.remove('hidden');
    console.log('+');
  }
}
document.addEventListener('ckick', openPopup);
