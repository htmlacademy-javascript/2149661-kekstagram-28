import {picturesDataList} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {fileField, openForm} from './form.js';
import './open-modal.js';

renderThumbnails(picturesDataList);

fileField.addEventListener('change', openForm);

