import {getPictures} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {enableModal} from './open-modal.js';

renderThumbnails(getPictures(25));
enableModal(true);
