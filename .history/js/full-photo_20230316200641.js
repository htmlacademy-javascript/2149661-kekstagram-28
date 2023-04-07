import './thumbnails.js';
import {picturesData} from './main.js';


const fullPhotoContainer = document.querySelector('.big-picture__preview');
const fullPhoto = fullPhotoContainer.querySelector('.big-picture__img > img');
const likesCount = fullPhotoContainer.querySelector('.likes-count');
const photoDescription = fullPhotoContainer.querySelector('.social__caption');
const commentsCount = fullPhotoContainer.querySelector('.comments-count');
const commentsArea = fullPhotoContainer.querySelector('.social__comments');


const renderComments = (comments) => {
  const commentContent = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentItem = document.createElement('li');
    commentItem.classList.add('social__comment');
    const commentItemImage = document.createElement('img');
    commentItemImage.classList.add('social__picture');
    commentItemImage.setAttribute('src', comment.avatar);
    commentItemImage.setAttribute('alt', comment.name);
    commentItemImage.setAttribute('width', 35);
    commentItemImage.setAttribute('height', 35);
    commentItem.append(commentItemImage);
    console.log(commentItem);
    return comment;
    // const commentItemImageData = {
    //   class : 'social__picture',
    //   src : comment.avatar,
    //   alt : comment.name,
    //   width : '35',
    //   height : '35'
    // };

  });
};

// const renderThumbnails = (pictures) => {
//   const picturesFrament = document.createDocumentFragment();
//   pictures.forEach((picture) => {
//     const thumbnail = createThumbnail(picture);
//     picturesFrament.append(thumbnail);
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
  const comments = data.comments;
  renderComments(comments);

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
