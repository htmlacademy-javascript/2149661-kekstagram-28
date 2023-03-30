import {commentsData} from './thumbnails.js';
import {renderComments, ADD_COMMENTS_COUNT} from './comments.js';

const fullPhotoContainer = document.querySelector('.big-picture__preview');
const fullPhoto = fullPhotoContainer.querySelector('.big-picture__img > img');
const likesCount = fullPhotoContainer.querySelector('.likes-count');
const photoDescription = fullPhotoContainer.querySelector('.social__caption');
const commentsArea = fullPhotoContainer.querySelector('.social__comments');
const commentsCountSohown = document.querySelector('.social__comment-count');

const createFullPhoto = (element) => {
  const [data] = commentsData.filter((picture) => picture.id === +element.dataset.thumbnailId);
  fullPhoto.setAttribute('src', data.url);
  photoDescription.textContent = data.description;
  likesCount.textContent = data.likes;
  commentsArea.innerHTML = '';
  const comments = data.comments;
  renderComments(comments);
  if (comments.length > ADD_COMMENTS_COUNT) {
    commentsCountSohown.innerHTML = `${ADD_COMMENTS_COUNT} из <span class="comments-count">${comments.length}</span> комментариев`;
  } else {
    commentsCountSohown.innerHTML = `${comments.length} из <span class="comments-count">${comments.length}</span> комментариев`;
  }
};

export {createFullPhoto};

