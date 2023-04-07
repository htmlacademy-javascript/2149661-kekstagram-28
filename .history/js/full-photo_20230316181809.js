import './thumbnails.js';
import {picturesData} from './main.js';


const fullPhotoContainer = document.querySelector('.big-picture__preview');
const fullPhoto = fullPhotoContainer.querySelector('.big-picture__img > img');
const likesCount = fullPhotoContainer.querySelector('.likes-count');
const photoDescription = fullPhotoContainer.querySelector('.social__caption');
const commentsCount = fullPhotoContainer.querySelector('.comments-count');
const commentsArea = fullPhotoContainer.querySelector('.social__comments');

const renderComments = (commentItem) => {
  const commentsFrament = document.createDocumentFragment();
  const commentus = commentItem.comments;
  console.log(commentus);
  // const commentsFrament = document.createDocumentFragment();
  // const comment
  // comment.forEach((comment) => {
  //   const thumbmil = createThumbnail(picture);
  //   picturesFrament.append(thumbmil);
  // });
  //commentsArea.append(picturesFrament);
};
//
// const renderThumbnails = (pictures) => {
//   const picturesFrament = document.createDocumentFragment();
//   pictures.forEach((picture) => {
//     const thumbmil = createThumbnail(picture);
//     picturesFrament.append(thumbmil);
//   });
//   pictureContainer.append(picturesFrament);
// };

const createFullPhoto = (element) => {
  const [data] = picturesData.filter((picture) => picture.url === element.getAttribute('src'));
  fullPhoto.setAttribute('src', data.url);
  photoDescription.textContent = data.description;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  commentsArea.innerHTML = '';
  renderComments(picturesData);
};



{/* <li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li> */}

export {createFullPhoto};
