import {getPictures} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import './open-modal.js';
// import './full-photo.js';

renderThumbnails(getPictures(25));
console.log(renderThumbnails);
