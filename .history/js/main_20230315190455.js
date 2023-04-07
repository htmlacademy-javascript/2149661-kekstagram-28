import {getPictures} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {openModal, closeModal} from './open-modal.js';

renderThumbnails(getPictures(25));
