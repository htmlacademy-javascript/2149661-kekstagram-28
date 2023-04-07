const bigPicture = document.querySelector('.big-picture');
const likes = document.querySelector('.likes-count');
const comments = document.querySelector('.comments-count');
const commentBox = document.querySelector('.social__comments');
const description = document.querySelector('.social__caption');
const pictureContainer = document.querySelector('.picture');

function openPopup(evt) {
  if (evt.target.matches(pictureContainer)) {
    bigPicture.classList.remove('hidden');
    console.log('+');
  }
}
document.addEventListener('ckick', openPopup);
