import './thumbnails.js';
import {picturesDataList} from './data.js';


const fullPhotoContainer = document.querySelector('.big-picture__preview');
const fullPhoto = fullPhotoContainer.querySelector('.big-picture__img > img');
const likesCount = fullPhotoContainer.querySelector('.likes-count');
const photoDescription = fullPhotoContainer.querySelector('.social__caption');
const commentsCount = fullPhotoContainer.querySelector('.comments-count');
const commentsArea = fullPhotoContainer.querySelector('.social__comments');
const commentsCountSohown = document.querySelector('.social__comment-count');
const loadMoreComment = document.querySelector('.comments-loader');
const ADD_COMMENTS_COUNT = 5;

let commentsShown = 0;

const commentContent = document.createDocumentFragment();

const renderComments = (comments) => {
  commentsShown += ADD_COMMENTS_COUNT;
  if (commentsShown >= comments.length) {
    commentsShown = comments.length;
    console.log('if ',comments.length);
    loadMoreComment.classList.add('hidden');
  } else {
    console.log('else ',comments.length);
    loadMoreComment.classList.remove('hidden');
    loadMoreComment.addEventListener('click', renderComments(comments));
  }
  console.log('itog ',commentsShown);
  for (let i = 0; i < commentsShown; i++) {
    const comment = comments[i];
    const commentItem = document.createElement('li');
    const commentItemImage = document.createElement('img');
    const commentItemDescription = document.createElement('p');
    commentItem.classList.add('social__comment');
    commentItemImage.classList.add('social__picture');
    commentItemImage.setAttribute('src', comment.avatar);
    commentItemImage.setAttribute('alt', comment.name);
    commentItemImage.setAttribute('width', 35);
    commentItemImage.setAttribute('height', 35);
    commentItem.append(commentItemImage);
    commentItemDescription.classList.add('social__text');
    commentItemDescription.textContent = comment.comment;
    commentItem.append(commentItemDescription);
    commentContent.append(commentItem);
  }
  // return commentContent;
};

// const renderOneComment = (comments) => {
//   commentsArea.innerHTML = '';
//   const comments = data.comments;
//   commentsArea.append(renderComments(comments));
// }


// const showComments = (comments) => {


//   if (commentsShown >= comments.length) {
//     commentsShown = comments.length;
//   } else {
//     loadMoreComment.classList.remove('hidden');
//     loadMoreComment.addEventListener('click', renderComments(comments));
//   }
// };

const createFullPhoto = (element) => {
  const [data] = picturesDataList.filter((picture) => picture.url === element.getAttribute('src'));
  fullPhoto.setAttribute('src', data.url);
  photoDescription.textContent = data.description;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  commentsArea.innerHTML = '';
  const comments = data.comments;
  commentsArea.append(renderComments(comments));
};

export {createFullPhoto};
