const ADD_COMMENTS_COUNT = 5;
const fullPhotoContainer = document.querySelector('.big-picture__preview');
const commentsArea = fullPhotoContainer.querySelector('.social__comments');
const commentsCountSohown = document.querySelector('.social__comment-count');
const loadMoreComment = document.querySelector('.comments-loader');

const createComments = (comments) => {
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
    commentItemDescription.textContent = comment.message;
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
  const firstComments = createComments(slicedComments);
  commentsArea.replaceChildren(firstComments);
  checkButtonVisiabilty(slicedComments, comments);
  if(loadMoreComment) {
    loadMoreComment.addEventListener('click', () => {
      slicedComments = [...slicedComments, ...getMoreComments(comments, slicedComments, ADD_COMMENTS_COUNT)];
      const additionalComments = createComments(slicedComments);
      commentsArea.replaceChildren(additionalComments);
      commentsCountSohown.innerHTML = `${slicedComments.length} из <span class="comments-count">${comments.length}</span> комментариев`;
      checkButtonVisiabilty(slicedComments, comments);
    });
  }
};

export {renderComments, ADD_COMMENTS_COUNT};

