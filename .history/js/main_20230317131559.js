import {picturesDataList} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import './open-modal.js';
// import './full-photo.js';

const thumbnailsCount = 25;
renderThumbnails(picturesDataList);


// const picturesData = getPictures(25);
// renderThumbnails(picturesData);

export {thumbnailsCount};

// console.log(getPictures(25));
