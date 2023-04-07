import {getPictures} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import './full-photo.js';

renderThumbnails(getPictures(25));
