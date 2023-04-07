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

const commentsCreator = (comments) => {
  const commentContent = document.createDocumentFragment();
  for (let i = 0; i < comments.length; i++) {
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
  return commentContent;
};

const getMoreComments = (fullComments, sliced, count) => {
  if(sliced.length > fullComments.length) {
    return fullComments;
  }
  return fullComments.slice(sliced.length, sliced.length + count);
};

const checkButtonVisiabilty = (slicedComments, comments) => {
  switch (true) {
    case slicedComments.length === comments.length:
      loadMoreComment.classList.add('hidden');
      break;
    default:
      loadMoreComment.classList.remove('hidden');
  }
};

const renderComments = (comments) => {
  let slicedComments = [...getMoreComments(comments, [], ADD_COMMENTS_COUNT)];
  const firstComments = commentsCreator(slicedComments);
  commentsArea.replaceChildren(firstComments);
  checkButtonVisiabilty(slicedComments, comments);
  if(loadMoreComment) {
    loadMoreComment.addEventListener('click', () => {
      slicedComments = [...slicedComments, ...getMoreComments(comments, slicedComments, ADD_COMMENTS_COUNT)];
      const additionalComments = commentsCreator(slicedComments);
      commentsArea.replaceChildren(additionalComments);
      commentsCountSohown.innerHTML = `${slicedComments.length} из <span class="comments-count">${comments.length}</span> комментариев`;
      checkButtonVisiabilty(slicedComments, comments);
    });
  }
};


const createFullPhoto = (element) => {
  const [data] = picturesDataList.filter((picture) => picture.id === +element.dataset.thunailId);
  fullPhoto.setAttribute('src', data.url);
  photoDescription.textContent = data.description;
  likesCount.textContent = data.likes;
  commentsArea.innerHTML = '';
  // commentsCount.textContent = data.comments.length;
  const comments = data.comments;
  renderComments(comments);
  commentsCountSohown.innerHTML = `${data.comments.length} из <span class="comments-count">${data.comments.length}</span> комментариев`;
};

export {createFullPhoto};
